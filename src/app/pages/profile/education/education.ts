import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EducationService, EducationItem } from '../../../services/education';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './education.html',
  styleUrl: './education.css'
})
export class Education implements OnInit {
  educationList: EducationItem[] = [];
  isLoading = true;
  showForm = false;
  isSaving = false;

  formData: EducationItem = {
  university: '',
  degree: '',
  startYear: null,
  endYear: null,
  grade: null
};

  editingId: string | null = null;

  constructor(
    private educationService: EducationService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadEducation();
  }

  loadEducation() {
    this.isLoading = true;
    this.educationService.getEducation().subscribe({
      next: (res: any) => {
        console.log('Education:', res);
        this.educationList = res?.data || res || [];
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error:', err);
        this.educationList = [];
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  openAddForm() {
  this.editingId = null;
  this.formData = {
    university: '',
    degree: '',
    startYear: null,
    endYear: null,
    grade: null
  };
  this.showForm = true;
}

  openEditForm(item: EducationItem) {
    this.editingId = item.id || null;
    this.formData = { ...item };
    this.showForm = true;
  }

  onCancel() {
    this.showForm = false;
    this.editingId = null;
  }

  onSave() {
  if (!this.formData.degree || !this.formData.university) return;
  this.isSaving = true;

  if (this.editingId) {
    this.educationService.updateEducation(this.editingId, this.formData).subscribe({
      next: (res: any) => {
        this.loadEducation();
        this.showForm = false;
        this.isSaving = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error:', err);
        this.isSaving = false;
      }
    });
  } else {
    this.educationService.addEducation(this.formData).subscribe({
      next: (res: any) => {
        this.loadEducation();
        this.showForm = false;
        this.isSaving = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error:', err);
        this.isSaving = false;
      }
    });
  }
}
    

  deleteEducation(id: string) {
    this.educationService.deleteEducation(id).subscribe({
      next: () => {
        this.educationList = this.educationList.filter(e => e.id !== id);
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Error:', err)
    });
  }
}