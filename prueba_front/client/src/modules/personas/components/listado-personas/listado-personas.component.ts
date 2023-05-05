import { PersonaInterface } from './../../interfaces/persona.interface';
import { Component, OnInit } from '@angular/core';
import { HttpsService } from '../../services/https.service';
import { Observable, map, of } from 'rxjs';

@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css'],
})
export class ListadoPersonasComponent implements OnInit {
  public personasInfo: Observable<PersonaInterface[]>;
  public personasInfoCopy: Observable<PersonaInterface[]>;

  constructor(private httpService: HttpsService) {
    this.personasInfo = new Observable();
    this.personasInfoCopy = new Observable();
  }

  ngOnInit(): void {
    this.recargarPersonas();
  }

  public recargarPersonas(): void {
    this.personasInfo = this.httpService.getListadoPersonas();
    this.personasInfoCopy = this.httpService.getListadoPersonas();
  }
}
