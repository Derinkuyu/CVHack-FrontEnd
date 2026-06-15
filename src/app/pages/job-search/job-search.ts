import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";

@Component({
  selector: 'app-job-search',
  imports: [Navbar],
  templateUrl: './job-search.html',
  styleUrl: './job-search.css',
})
export class JobSearch {}
