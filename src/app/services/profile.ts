import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface ApiResponse<T> {
  isSuccess: boolean;
  statusCode: number;
  message: string | null;
  data: T;
  errors: any[];
}

export interface ProfileData {
  id?: number;
  userId?: string;
  headline?: string;
  jobTitle?: string;
  city?: string;
  country?: string;
  phoneNumber?: string;
  summary?: string;
  gitHubUrl?: string;
  linkedInUrl?: string;
  portfolioUrl?: string;
  certifications?: any[];
  educations?: any[];
  experiences?: any[];
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

  getProfile(): Observable<ApiResponse<ProfileData>> {
  return this.http.get<ApiResponse<ProfileData>>(`${this.apiUrl}/profile`);
}

  updateProfile(data: Partial<ProfileData>): Observable<ProfileData> {
    return this.http.put<ProfileData>(`${this.apiUrl}/profile`, data, {
      headers: this.getHeaders()
    });
  }
}