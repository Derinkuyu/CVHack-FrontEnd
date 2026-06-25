import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Skill {
  id: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }

  searchSkills(query: string): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${this.apiUrl}/skills?search=${query}`);
  }

  getProfileSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${this.apiUrl}/profile/skills`, {
      headers: this.getHeaders()
    });
  }

  addSkill(skillId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/profile/skills/${skillId}`, {}, {
      headers: this.getHeaders()
    });
  }

  removeSkill(skillId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/profile/skills/${skillId}`, {
      headers: this.getHeaders()
    });
  }
}