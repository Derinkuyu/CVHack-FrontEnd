import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface ProjectItem {
  id?: string;
  name: string;
  description: string;
  tags: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }

  getProjects(): Observable<ProjectItem[]> {
    return this.http.get<ProjectItem[]>(`${this.apiUrl}/profile/projects`, {
      headers: this.getHeaders()
    });
  }

  addProject(data: ProjectItem): Observable<ProjectItem> {
    return this.http.post<ProjectItem>(`${this.apiUrl}/profile/projects`, data, {
      headers: this.getHeaders()
    });
  }

  updateProject(id: string, data: ProjectItem): Observable<ProjectItem> {
    return this.http.put<ProjectItem>(`${this.apiUrl}/profile/projects/${id}`, data, {
      headers: this.getHeaders()
    });
  }

  deleteProject(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/profile/projects/${id}`, {
      headers: this.getHeaders()
    });
  }
}