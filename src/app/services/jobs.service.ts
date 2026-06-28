import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { firstValueFrom } from 'rxjs';

export interface Job {
  id: number;
  title: string;
  companyName: string;
  city: string;
  country: string;
  seniority: string;
  workType: string;
  workTime: string;
  description: string;
  briefDescription: string;
  salaryMin: number;
  salaryMax: number;
  postedAt: string;
  jobUrl: string;
  sourcePlatform: string;
}

@Injectable({ providedIn: 'root' })
export class JobsService {
  private http = inject(HttpClient);

  async getAll(): Promise<Job[]> {
    try {
      const res = await firstValueFrom(
        this.http.get<any>(`${environment.apiUrl}/jobs`)
      );
      return res.data ?? [];
    } catch {
      return [];
    }
  }

async getById(id: number): Promise<Job | null> {
  try {
    const res = await firstValueFrom(
      this.http.get<any>(`${environment.apiUrl}/jobs/${id}`)
    );
    console.log('API Response:', res); // شوف في الـ console إيه اللي بيطلع
    
    // جرب الثلاثة دول وشوف أيهم شغال
    return res.data ?? res.job ?? res ?? null;
    
  } catch (err) {
    console.error('Error:', err);
    return null;
  }
}

}