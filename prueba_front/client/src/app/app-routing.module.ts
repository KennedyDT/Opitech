import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'personas',
    loadChildren: () => import('./modules/personas/personas.module').then(m => m.PersonasModule)
  },
  {
    path: '',
    redirectTo: '/personas/listado',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
