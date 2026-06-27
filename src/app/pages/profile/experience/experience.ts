import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExperienceService, ExperienceItem } from '../../../services/experience';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience implements OnInit {
  experienceList: ExperienceItem[] = [];
  isLoading = true;
  showForm = false;
  isSaving = false;

  formData: ExperienceItem = {
    title: '',
    company: '',
    startDate: '',
    endDate: '',
    description: ''
  };

  editingId: string | null = null;

  constructor(
    private experienceService: ExperienceService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadExperience();
  }

  loadExperience() {
    this.isLoading = true;
    this.experienceService.getExperience().subscribe({
      next: (res: any) => {
        console.log('Experience:', res);
        this.experienceList = res?.data || res || [];
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error:', err);
        this.experienceList = [];
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  openAddForm() {
    this.editingId = null;
    this.formData = {
      title: '',
      company: '',
      startDate: '',
      endDate: '',
      description: ''
    };
    this.showForm = true;
  }

  openEditForm(item: ExperienceItem) {
    this.editingId = item.id || null;
    this.formData = { ...item };
    this.showForm = true;
  }

  onCancel() {
    this.showForm = false;
    this.editingId = null;
  }

  onSave() {
    if (!this.formData.title || !this.formData.company) return;
    this.isSaving = true;

    if (this.editingId) {
      this.experienceService.updateExperience(this.editingId, this.formData).subscribe({
        next: (res: any) => {
          console.log('Updated:', res);
          this.loadExperience();
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
      this.experienceService.addExperience(this.formData).subscribe({
        next: (res: any) => {
          console.log('Added:', res);
          this.loadExperience();
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

  deleteExperience(id: string) {
    this.experienceService.deleteExperience(id).subscribe({
      next: () => {
        this.experienceList = this.experienceList.filter(e => e.id !== id);
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Error:', err)
    });
  }
}