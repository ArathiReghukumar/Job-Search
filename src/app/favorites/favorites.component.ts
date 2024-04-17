// import { Component, OnInit } from '@angular/core';
// import { Job } from '../job.model';
// import { JobService } from '../job.service';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-favorites',
//   standalone: true,
//   templateUrl: './favorites.component.html',
//   styleUrls: ['./favorites.component.css'],
//   imports:[CommonModule]
// })
// export class FavoritesComponent implements OnInit {
//   favoriteJobs: Job[] = [];

//   constructor(private jobService: JobService) { 
//     console.log('JobService injected into FavoritesComponent:', jobService);
//   }

//   // ngOnInit(): void {
//   //   this.getFavoriteJobs();
//   // }
//   ngOnInit(): void {
//     this.jobService.getFavoriteJobs().subscribe(
//       favoriteJobs => {
//         console.log('Favorite jobs received:', favoriteJobs);
//         this.favoriteJobs = favoriteJobs;
//       },
//       error => {
//         console.error('Error fetching favorite jobs:', error);
//       }
//     );
//   }

//   getFavoriteJobs(): void {
//     this.jobService.getFavoriteJobs().subscribe(jobs => {
//       this.favoriteJobs = jobs;
//       console.log(this.favoriteJobs);
//       console.log('Favorite jobs:', this.favoriteJobs); 
//     },
//     error => {
//       console.error('Error fetching favorite jobs:', error);
//     }
//   );
//   }
// }

import { Component, OnInit } from '@angular/core';
import { Job } from '../job.model';
import { JobService } from '../job.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  standalone: true,
  styleUrls: ['./favorites.component.css'],
  imports:[CommonModule]

})
export class FavoritesComponent implements OnInit {
  favoriteJobs$ = this.jobService.getFavoriteJobsFiltered();

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.favoriteJobs$.subscribe({
      next: (data: Job[]) => {
        console.log('Favorite jobs:', data);
      },
      error: (error: any) => {
        console.error('Error fetching favorite jobs:', error);
      }
    });
  }
}
