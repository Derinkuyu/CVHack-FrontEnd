import { Component } from '@angular/core';
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
export class Profile {
  fullName = 'Youssef Hassan';
  jobTitle = 'Senior Frontend Engineer';
  location = 'Cairo, Egypt';
  initials = 'YH';

  email = 'youssef.hassan@email.com';
  phone = '+20 10 1234 5678';

  activeTab = 'personal-info';

  onTabChange(tabId: string) {
    this.activeTab = tabId;
  }
}