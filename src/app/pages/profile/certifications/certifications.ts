import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CertificationsService, CertificationItem } from '../../../services/certifications';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './certifications.html',
  styleUrl: './certifications.css'
})
export class Certifications implements OnInit {
  certificationsList: CertificationItem[] = [];
  isLoading = true;
  showForm = false;
  isSaving = false;

  formData: CertificationItem = {
    name: '',
    provider: null,
    credentialUrl: null,
    certifiedAt: null
  };

  editingId: string | null = null;

  constructor(
    private certificationsService: CertificationsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadCertifications();
  }

  loadCertifications() {
    this.isLoading = true;
    this.certificationsService.getCertifications().subscribe({
      next: (res: any) => {
        console.log('Certifications:', res);
        this.certificationsList = res?.data || res || [];
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error:', err);
        this.certificationsList = [];
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  openAddForm() {
    this.editingId = null;
    this.formData = { name: '', provider: null, credentialUrl: null, certifiedAt: null };
    this.showForm = true;
  }

  openEditForm(item: CertificationItem) {
    this.editingId = item.id || null;
    this.formData = { ...item };
    this.showForm = true;
  }

  onCancel() {
    this.showForm = false;
    this.editingId = null;
  }

  onSave() {
    if (!this.formData.name) return;
    this.isSaving = true;

    if (this.editingId) {
      this.certificationsService.updateCertification(this.editingId, this.formData).subscribe({
        next: () => {
          this.loadCertifications();
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
      this.certificationsService.addCertification(this.formData).subscribe({
        next: () => {
          this.loadCertifications();
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

  deleteCertification(id: string) {
    this.certificationsService.deleteCertification(id).subscribe({
      next: () => {
        this.certificationsList = this.certificationsList.filter(c => c.id !== id);
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Error:', err)
    });
  }
}