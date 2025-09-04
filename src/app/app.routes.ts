import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'campaign/step-1' },
  { path: 'campaign/step-1', loadComponent: () => import('./campaign/step1/step1.component').then(m => m.Step1Component) },
  { path: 'campaign/step-2', loadComponent: () => import('./campaign/step2/step2.component').then(m => m.Step2Component) },
  { path: 'campaign/step-3', loadComponent: () => import('./campaign/step3/step3.component').then(m => m.Step3Component) },
  { path: 'campaign/step-4', loadComponent: () => import('./campaign/step4/step4.component').then(m => m.Step4Component) },
  { path: '**', redirectTo: 'campaign/step-1' }
];
