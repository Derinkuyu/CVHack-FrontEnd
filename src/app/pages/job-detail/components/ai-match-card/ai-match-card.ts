import { Component, Input } from '@angular/core';

export interface SkillBreakdownItem {
  name: string;
  percent: number;
  status: 'good' | 'gap';
}

export interface GapSkillDetail {
  name: string;
  whyItMatters: string;
  suggestedStep: string;
}

export interface AiMatchData {
  score: number;
  summary: string;
  skills: SkillBreakdownItem[];
  gapSkills: GapSkillDetail[];
}

@Component({
  selector: 'app-ai-match-card',
  imports: [],
  templateUrl: './ai-match-card.html',
  styleUrl: './ai-match-card.css',
})
export class AiMatchCard {
  @Input() data: AiMatchData | null = null;
  @Input() loading = false;
  @Input() error = '';

  get circumference(): number {
    return 2 * Math.PI * 36;
  }

  get dashOffset(): number {
    const score = this.data?.score ?? 0;
    return this.circumference * (1 - score / 100);
  }
}