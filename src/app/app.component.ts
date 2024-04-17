import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Routes } from '@angular/router';
import { JobListComponent } from './job-list/job-list.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { routes } from './app.routes';


// export const routes: Routes = [
//   { path: 'jobs', component: JobListComponent },
//   { path: 'favorites', component: FavoritesComponent },
//   { path: '', redirectTo: '/jobs', pathMatch: 'full' },
// ];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FavoritesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {
    this.router.resetConfig(routes);
    this.router.navigate(['/jobs']); //page loads in jobs page by default
  }
  title = 'Find your job';

  navigateToJobs(): void {
    this.router.navigate(['/jobs']);
  }

  navigateToFavorites(): void {
    this.router.navigate(['/favorites']);
  }
  isFavoritesPageActive(): boolean {
    return this.router.url === '/favorites';
  }
}

