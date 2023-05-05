import { Injectable } from '@angular/core';
import { PersonaInterface } from '../interfaces/persona.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { ApiUrlEnum } from '../enums/api-urls.enum';

@Injectable({
  providedIn: 'root'
})
export class HttpsService {

  constructor(
    private http: HttpClient
  ) { }

  public getListadoPersonas(): Observable<PersonaInterface[]> {
    return this.http.get<PersonaInterface[]>(environment.apiUrl + ApiUrlEnum.obtenerPersonas);
  }

}
