import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface CertificationItem {
  id?: string;
  name: string;
  issuer: string;
  year: string;
}

@Injectable({
  providedIn: 'root'
})
export class CertificationsService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }

  getCertifications(): Observable<CertificationItem[]> {
    return this.http.get<CertificationItem[]>(`${this.apiUrl}/profile/certifications`, {
      headers: this.getHeaders()
    });
  }

  addCertification(data: CertificationItem): Observable<CertificationItem> {
    return this.http.post<CertificationItem>(`${this.apiUrl}/profile/certifications`, data, {
      headers: this.getHeaders()
    });
  }

  updateCertification(id: string, data: CertificationItem): Observable<CertificationItem> {
    return this.http.put<CertificationItem>(`${this.apiUrl}/profile/certifications/${id}`, data, {
      headers: this.getHeaders()
    });
  }

  deleteCertification(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/profile/certifications/${id}`, {
      headers: this.getHeaders()
    });
  }
}