import { Component, EventEmitter, Output, signal, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterIcon } from '../../assets/filter-icon/filter-icon';
import { JobFilters } from '../../models/job-filters.model';

@Component({
  selector: 'app-sidebar',
  imports: [FormsModule, FilterIcon],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  workTypes = ['Remote', 'Hybrid', 'On-site'];
  seniorities = ['Junior', 'Mid-level', 'Senior', 'Lead'];
  dateOptions = ['Any time', 'Past 24h', 'Past week', 'Past month'];

  countries = ['Egypt', 'Saudi Arabia', 'UAE'];

  allCities: Record<string, string[]> = {
    Egypt: ['Cairo', 'Alexandria', 'Giza'],
    'Saudi Arabia': ['Riyadh', 'Jeddah', 'Dammam'],
    UAE: ['Dubai', 'Abu Dhabi', 'Sharjah'],
  };

  salarySliderMin = signal(10);
  salarySliderMax = signal(200);
  salarySliderStep = signal(5);

  filters = signal<JobFilters>({
    country: '',
    city: '',
    workType: [],
    seniority: [],
    employment: [],
    minSalary: 10,
    datePosted: 'Any time',
  });

  @Output() filtersChanged = new EventEmitter<JobFilters>();

  constructor() {
    effect(() => {
      this.filtersChanged.emit(this.filters());
    });
  }

  get cities() {
    return this.allCities[this.filters().country] ?? [];
  }

  onCountryChange(country: string) {
    this.filters.update(f => ({ ...f, country, city: '' }));
  }

  onCityChange(city: string) {
    this.filters.update(f => ({ ...f, city }));
  }

  onSalaryChange(minSalary: number) {
    this.filters.update(f => ({ ...f, minSalary }));
  }

  toggle(key: 'workType' | 'seniority' | 'employment', value: string) {
    this.filters.update(f => {
      const arr = f[key];
      const updated = arr.includes(value)
        ? arr.filter(v => v !== value)
        : [...arr, value];
      return { ...f, [key]: updated };
    });
  }

  isSelected(key: 'workType' | 'seniority' | 'employment', value: string) {
    return this.filters()[key].includes(value);
  }

  setDatePosted(opt: string) {
    this.filters.update(f => ({ ...f, datePosted: opt }));
  }

  clearAll() {
    this.filters.set({
      country: '', city: '',
      workType: [], seniority: [], employment: [],
      minSalary: 10, datePosted: 'Any time',
    });
  }
}