import { provideZoneChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { ROUTES } from 'src/app/app.routes';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
    providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(ROUTES)],
}).catch(err => console.error(err));
