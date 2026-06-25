import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileHeader } from '../profile-header/profile-header';
import { ProfileTabs } from '../profile-tabs/profile-tabs';
import { PersonalInfo } from '../personal-info/personal-info';
import { Skills } from '../skills/skills';
import { Experience } from '../experience/experience';
import { Education } from '../education/education';
import { Certifications } from '../certifications/certifications';
import { Projects } from '../projects/projects';
import { Navbar } from '../../../components/navbar/navbar';
import { ProfileService, ProfileData } from '../../../services/profile';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule, Navbar,
    ProfileHeader, ProfileTabs, PersonalInfo,
    Skills, Experience, Education, Certifications, Projects
  ],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile implements OnInit {

  // بيانات اليوزر
  fullName = '';
  jobTitle = '';
  location = '';
  email = '';
  phone = '';
  initials = '';

  // حالة الـ loading والـ error
  isLoading = true;
  errorMessage = '';

  activeTab = 'personal-info';

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    this.isLoading = true;
    this.errorMessage = '';

    this.profileService.getProfile().subscribe({
      next: (data: ProfileData) => {
        this.fullName = data.fullName;
        this.jobTitle = data.jobTitle;
        this.location = data.location;
        this.email = data.email;
        this.phone = data.phone;
        this.initials = this.getInitials(data.fullName);
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error loading profile:', err);
        this.errorMessage = 'Failed to load profile. Please try again.';
        this.isLoading = false;
      }
    });
  }

  getInitials(name: string): string {
    return name
      .split(' ')
      .map(n => n[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  }

  onTabChange(tabId: string) {
    this.activeTab = tabId;
  }
}