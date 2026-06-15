import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterIcon } from '../../assets/filter-icon/filter-icon';


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
  countries = [
    { value: 'eg', label: 'Egypt' },
    { value: 'sa', label: 'Saudi Arabia' },
    { value: 'ae', label: 'UAE' },
  ];
  allCities: Record<string, { value: string; label: string }[]> = {
  eg: [
    { value: 'cairo', label: 'Cairo' },
    { value: 'alex', label: 'Alexandria' },
    { value: 'giza', label: 'Giza' },
  ],
  sa: [
    { value: 'riyadh', label: 'Riyadh' },
    { value: 'jeddah', label: 'Jeddah' },
    { value: 'dammam', label: 'Dammam' },
  ],
  ae: [
    { value: 'dubai', label: 'Dubai' },
    { value: 'abudhabi', label: 'Abu Dhabi' },
    { value: 'sharjah', label: 'Sharjah' },
  ],
};

get cities() {
  return this.allCities[this.filters.country] ?? [];
}
onCountryChange() {
  this.filters.city = '';
}

  salarySliderMin = signal(10);
  salarySliderMax = signal(200);
  salarySliderStep = signal(5);

  filters = {
    country: '',
    city: '',
    workType: [] as string[],
    seniority: [] as string[],
    employment: [] as string[],
    minSalary: 10,
    datePosted: 'Any time',
  };

  toggle(key: 'workType' | 'seniority' | 'employment', value: string) {
    const arr = this.filters[key];
    const idx = arr.indexOf(value);
    idx === -1 ? arr.push(value) : arr.splice(idx, 1);
  }

  isSelected(key: 'workType' | 'seniority' | 'employment', value: string) {
    return this.filters[key].includes(value);
  }

  clearAll() {
    this.filters = {
      country: '', city: '',
      workType: [], seniority: [], employment: [],
      minSalary: 10, datePosted: 'Any time',
    };
  }
}
