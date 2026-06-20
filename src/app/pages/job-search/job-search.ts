import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Sidebar } from '../../components/sidebar/sidebar';
import { JobCardsContainer } from '../../components/job-cards-container/job-cards-container';
import { JobFilters } from '../../models/job-filters.model';

@Component({
  selector: 'app-job-search',
  imports: [Navbar, Sidebar, JobCardsContainer],
  templateUrl: './job-search.html',
  styleUrl: './job-search.css',
})
export class JobSearch {
  currentFilters: JobFilters | null = null;

  onFiltersChanged(filters: JobFilters) {
    this.currentFilters = filters;
    console.log('Filters changed:', this.currentFilters);
  }

}
