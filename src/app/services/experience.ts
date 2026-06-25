import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface ExperienceItem {
  id?: string;
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }

  getExperience(): Observable<ExperienceItem[]> {
    return this.http.get<ExperienceItem[]>(`${this.apiUrl}/profile/experience`, {
      headers: this.getHeaders()
    });
  }

  addExperience(data: ExperienceItem): Observable<ExperienceItem> {
    return this.http.post<ExperienceItem>(`${this.apiUrl}/profile/experience`, data, {
      headers: this.getHeaders()
    });
  }

  updateExperience(id: string, data: ExperienceItem): Observable<ExperienceItem> {
    return this.http.put<ExperienceItem>(`${this.apiUrl}/profile/experience/${id}`, data, {
      headers: this.getHeaders()
    });
  }

  deleteExperience(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/profile/experience/${id}`, {
      headers: this.getHeaders()
    });
  }
}