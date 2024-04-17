import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter,withComponentInputBinding } from '@angular/router';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { JobService } from './job.service';

export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom(HttpClientModule), 
  provideRouter(routes, withComponentInputBinding()), JobService],
};
