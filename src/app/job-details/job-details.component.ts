import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from '../job.model';
import { JobService } from '../job.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-job-details',
  standalone: true,
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css'],
  imports:[CommonModule, RouterModule]
})
export class JobDetailsComponent implements OnInit {

  job: Job | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private jobService: JobService
  ) { }

  ngOnInit(): void {
    this.getJobDetails();
  }

  // getJobDetails(): void {
  //   const jobId = +this.route.snapshot.paramMap.get('jobId');
  //   this.jobService.getJobById(jobId).subscribe(job => {
  //     this.job = job;
  //   });
  // }
  getJobDetails(): void {
    const jobIdParam = this.route.snapshot.paramMap.get('jobId');
    const jobId = jobIdParam ? +jobIdParam : null;
    
    // Check if jobIdParam is not null
    if (jobIdParam !== null) {
      const jobId = +jobIdParam;
      this.jobService.getJobById(jobId).subscribe(job => {
        this.job = job;
      });
    } else {
      console.error("Job ID is null");
    }
  }
  
  goBack(): void {
    // Navigate back to the previous page
    window.history.back();
  }
}
