import { Component, Input } from '@angular/core';

export interface SkillBreakdownItem {
  name: string;
  percent: number;
  status: 'good' | 'gap';
}

export interface AiMatchData {
  score: number;
  summary: string;
  skills: SkillBreakdownItem[];
  gapSkills: string[];
}

@Component({
  selector: 'app-ai-match-card',
  imports: [],
  templateUrl: './ai-match-card.html',
  styleUrl: './ai-match-card.css',
})
export class AiMatchCard {
  @Input() data!: AiMatchData;

  // Circle math for the score ring
  get circumference(): number {
    return 2 * Math.PI * 36;
  }

  get dashOffset(): number {
    return this.circumference * (1 - this.data.score / 100);
  }
}
