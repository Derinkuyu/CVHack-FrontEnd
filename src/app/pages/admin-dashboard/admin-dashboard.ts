import { Component } from '@angular/core';
import { AdminSidebar } from './components/admin-sidebar/admin-sidebar';
import { StatsCards, StatCard } from './components/stats-cards/stats-cards';
import { DailySearchesChart, DailyPoint } from './components/daily-searches-chart/daily-searches-chart';
import { JobsByCategoryChart, CategoryBar } from './components/jobs-by-category-chart/jobs-by-category-chart';
import { MatchScoreChart, ScoreBucket } from './components/match-score-chart/match-score-chart';

@Component({
  selector: 'app-admin-dashboard',
  imports: [AdminSidebar, StatsCards, DailySearchesChart, JobsByCategoryChart, MatchScoreChart],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css',
})
export class AdminDashboard {

  dateRange = 'Jun 8 – Jun 14, 2026';

  stats: StatCard[] = [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
      value: '4,820',
      label: 'Total users',
      change: '+12%',
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-4 0v2"/></svg>`,
      value: '1,294',
      label: 'Active jobs',
      change: '+5%',
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
      value: '8,640',
      label: 'Searches today',
      change: '+8%',
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"/><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"/><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"/><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"/></svg>`,
      value: '71%',
      label: 'Avg match score',
      change: '+3%',
    },
  ];

  dailySearches: DailyPoint[] = [
    { day: 'Mon', value: 980 },
    { day: 'Tue', value: 870 },
    { day: 'Wed', value: 1050 },
    { day: 'Thu', value: 1120 },
    { day: 'Fri', value: 1300 },
    { day: 'Sat', value: 1250 },
    { day: 'Sun', value: 1400 },
  ];

  jobsByCategory: CategoryBar[] = [
    { label: 'Engineering', value: 420 },
    { label: 'Design',      value: 280 },
    { label: 'Product',     value: 190 },
    { label: 'Data',        value: 160 },
    { label: 'Marketing',   value: 120 },
    { label: 'Sales',       value: 90  },
  ];

  matchScores: ScoreBucket[] = [
    { range: '0–20',   value: 60,  color: '#B24A3F' },
    { range: '20–40',  value: 120, color: '#B87333' },
    { range: '40–60',  value: 240, color: '#B87333' },
    { range: '60–80',  value: 360, color: '#2E7D5B' },
    { range: '80–100', value: 180, color: '#2E7D5B' },
  ];
}
