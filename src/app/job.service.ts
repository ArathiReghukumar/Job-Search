
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable, of , throwError} from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Job } from './job.model';

// const httpOptionsPlain = {
//   headers: new HttpHeaders({
//     'Accept': 'text/plain',
//     'Content-Type': 'text/plain'
//   }),
//   'responseType': 'text'
// };

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private apiUrl = '/jobs'; 
  private favoriteJobsUrl = '/jobs';
  private favoriteJobIds: number[] = [];

  constructor(private http: HttpClient) { }

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }
  getJobById(jobId: number): Observable<Job> {
    const url = `${this.apiUrl}/${jobId}`;
    return this.http.get<Job>(url)
      .pipe(
        catchError(this.handleError)
      );
  }
  
  getFavoriteJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.favoriteJobsUrl)
      .pipe(
        catchError(this.handleError)
      );
  }
  getFavoriteJobsFiltered(): Observable<Job[]> {
    return this.getFavoriteJobs().pipe(
      catchError(error => {
        console.error('Error fetching favorite jobs:', error);
        return throwError(error);
      }),
      map((jobs: Job[]) => jobs.filter(job => this.isFavorite(job.id)))
    );
  }
  toggleFavorite(jobId: number): void {
    const index = this.favoriteJobIds.indexOf(jobId);
    if (index === -1) {
      this.favoriteJobIds.push(jobId);
    } else {
      this.favoriteJobIds.splice(index, 1);
    }
  }

  isFavorite(jobId: number): boolean {
    return this.favoriteJobIds.includes(jobId);
  }
  private handleError(error: any): Observable<any> {
    console.error('An error occurred:', error);
    throw error;
  }
}

