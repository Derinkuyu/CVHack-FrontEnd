import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Sidebar } from '../../components/sidebar/sidebar';
import { JobCardsContainer } from '../../components/job-cards-container/job-cards-container';

@Component({
  selector: 'app-job-search',
  imports: [Navbar,Sidebar,JobCardsContainer],
  templateUrl: './job-search.html',
  styleUrl: './job-search.css',
})
export class JobSearch {

}
