import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoPersonasComponent } from './components/listado-personas/listado-personas.component';

const routes: Routes = [
  { path: 'listado',  component: ListadoPersonasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonasRoutingModule { }
