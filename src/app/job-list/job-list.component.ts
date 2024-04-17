import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Job } from '../job.model';
import { JobService } from '../job.service';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-job-list',
  standalone: true,
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css'],
  imports: [CommonModule, RouterModule]
})

export class JobListComponent implements OnInit {

  jobs: Job[] = [];
  favoriteJobs: Job[] = [];

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.jobService.getJobs().subscribe(jobs => {
      this.jobs = jobs;
    });
    this.updateFavoriteJobs();
  }

  // toggleFavorite(job: Job): void {
  //   const index = this.favoriteJobs.findIndex(favoriteJob => favoriteJob.id === job.id);
  //   if (index === -1) {
  //     this.favoriteJobs.push(job);
  //   } else {
  //     this.favoriteJobs.splice(index, 1);
  //   }
  // }

  // isFavorite(job: Job): boolean {
  //   return this.favoriteJobs.some(favoriteJob => favoriteJob.id === job.id);
  // }
  toggleFavorite(job: Job): void {
    this.jobService.toggleFavorite(job.id);
    this.updateFavoriteJobs();
  }

  isFavorite(job: Job): boolean {
    return this.jobService.isFavorite(job.id);
  }
  private updateFavoriteJobs(): void {
    this.jobService.getFavoriteJobs().subscribe(jobs => {
      this.favoriteJobs = jobs;
    });
  }
}
