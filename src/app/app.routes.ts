import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    // canActivate: [privateGuard],
    loadChildren: () => import('./preguntas/preguntas.module').then((m) => m.PreguntasModule),
  }
];
