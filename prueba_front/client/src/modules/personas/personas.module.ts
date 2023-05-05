import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonasRoutingModule } from './personas-routing.module';
import { ListadoPersonasComponent } from './components/listado-personas/listado-personas.component';
import { HttpsService } from './services/https.service';
import { TablaComponent } from './components/tabla/tabla.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListadoPersonasComponent,
    TablaComponent
  ],
  imports: [
    CommonModule,
    PersonasRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    HttpsService
  ]
})
export class PersonasModule { }
