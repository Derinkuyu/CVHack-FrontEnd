import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface ProfileData {
  fullName: string;
  jobTitle: string;
  location: string;
  email: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }

  getProfile(): Observable<ProfileData> {
    return this.http.get<ProfileData>(`${this.apiUrl}/profile`, {
      headers: this.getHeaders()
    });
  }

  updateProfile(data: Partial<ProfileData>): Observable<ProfileData> {
    return this.http.put<ProfileData>(`${this.apiUrl}/profile`, data, {
      headers: this.getHeaders()
    });
  }
}