import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileService } from '../../../services/profile';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './personal-info.html',
  styleUrl: './personal-info.css'
})
export class PersonalInfo implements OnInit {
  @Input() fullName: string = '';
  @Input() email: string = '';

  // بيانات من الـ API
  phone = '';
  location = '';
  headline = '';
  summary = '';
  linkedInUrl = '';
  gitHubUrl = '';
  portfolioUrl = '';

  isEditing = false;
  isSaving = false;
  successMessage = '';
  errorMessage = '';

  // نسخة مؤقتة للتعديل
  editData = {
    phone: '',
    city: '',
    headline: '',
    summary: '',
    linkedInUrl: '',
    gitHubUrl: '',
    portfolioUrl: ''
  };

  constructor(
    private profileService: ProfileService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    this.profileService.getProfile().subscribe({
      next: (res: any) => {
        const data = res?.data || res;
        this.phone = data?.phoneNumber || '';
        this.location = data?.city || '';
        this.headline = data?.headline || '';
        this.summary = data?.summary || '';
        this.linkedInUrl = data?.linkedInUrl || '';
        this.gitHubUrl = data?.gitHubUrl || '';
        this.portfolioUrl = data?.portfolioUrl || '';
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Error loading profile:', err)
    });
  }

  onEdit() {
    // نسخي البيانات الحالية للـ edit form
    this.editData = {
      phone: this.phone,
      city: this.location,
      headline: this.headline,
      summary: this.summary,
      linkedInUrl: this.linkedInUrl,
      gitHubUrl: this.gitHubUrl,
      portfolioUrl: this.portfolioUrl
    };
    this.isEditing = true;
    this.successMessage = '';
    this.errorMessage = '';
  }

  onCancel() {
    this.isEditing = false;
  }

  onSave() {
    this.isSaving = true;
    this.successMessage = '';
    this.errorMessage = '';

    this.profileService.updateProfile({
      phoneNumber: this.editData.phone,
      city: this.editData.city,
      headline: this.editData.headline,
      summary: this.editData.summary,
      linkedInUrl: this.editData.linkedInUrl,
      gitHubUrl: this.editData.gitHubUrl,
      portfolioUrl: this.editData.portfolioUrl
    } as any).subscribe({
      next: (res: any) => {
        console.log('Profile updated:', res);
        // حدّثي البيانات المعروضة
        this.phone = this.editData.phone;
        this.location = this.editData.city;
        this.headline = this.editData.headline;
        this.summary = this.editData.summary;
        this.linkedInUrl = this.editData.linkedInUrl;
        this.gitHubUrl = this.editData.gitHubUrl;
        this.portfolioUrl = this.editData.portfolioUrl;

        this.successMessage = 'Profile updated successfully!';
        this.isEditing = false;
        this.isSaving = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error updating profile:', err);
        this.errorMessage = 'Failed to update profile. Please try again.';
        this.isSaving = false;
        this.cdr.detectChanges();
      }
    });
  }
}