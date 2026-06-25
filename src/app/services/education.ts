import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface EducationItem {
  id?: string;
  degree: string;
  institution: string;
  startYear: string;
  endYear: string;
}

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }

  getEducation(): Observable<EducationItem[]> {
    return this.http.get<EducationItem[]>(`${this.apiUrl}/profile/education`, {
      headers: this.getHeaders()
    });
  }

  addEducation(data: EducationItem): Observable<EducationItem> {
    return this.http.post<EducationItem>(`${this.apiUrl}/profile/education`, data, {
      headers: this.getHeaders()
    });
  }

  updateEducation(id: string, data: EducationItem): Observable<EducationItem> {
    return this.http.put<EducationItem>(`${this.apiUrl}/profile/education/${id}`, data, {
      headers: this.getHeaders()
    });
  }

  deleteEducation(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/profile/education/${id}`, {
      headers: this.getHeaders()
    });
  }
}