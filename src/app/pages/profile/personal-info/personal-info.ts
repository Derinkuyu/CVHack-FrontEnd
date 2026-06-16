import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [],
  templateUrl: './personal-info.html',
  styleUrl: './personal-info.css'
})
export class PersonalInfo {
  @Input() fullName: string = '';
  @Input() email: string = '';
  @Input() phone: string = '';
  @Input() location: string = '';

  isEditing = false;

  onEdit() {
    this.isEditing = !this.isEditing;
    // TODO: تفعيل وضع التعديل أو فتح modal لاحقًا
  }
}