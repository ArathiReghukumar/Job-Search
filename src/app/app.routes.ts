import { Routes } from '@angular/router';
import { JobListComponent } from './job-list/job-list.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { FavoritesComponent } from './favorites/favorites.component';

export const routes: Routes = [
  { path: '', redirectTo: '/jobs', pathMatch: 'full' },
  { path: 'jobs', component: JobListComponent },
  { path: 'jobs/:jobId', component: JobDetailsComponent },
  { path: 'favorites', component: FavoritesComponent },
];
