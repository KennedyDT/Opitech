import { Observable, map, of } from 'rxjs';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PersonaInterface } from '../../interfaces/persona.interface';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {

  @Input() personasInfo: Observable<PersonaInterface[]>
  @Input() personasInfoCopy: Observable<PersonaInterface[]>
  @Output() reloadEmmiter: EventEmitter<any>;


  @Input() public filterByNameActived: boolean = false;
  @Input() public filterBySubjectActived: boolean = false;
  @Input() public filterByPriorityActived: boolean = false;
  @Input() public filterByStatusActived: boolean = false;
  @Input() public filterBySatisfactionActived: boolean = false;

  public filterByNameValue: string = '';
  public filterBySubjectValue: string = '';
  public filterByPriorityValue: string = '';
  public filterByStatusValue: string = '';
  public filterBySatisfactionValue: string = '';

  constructor() {
    this.personasInfo = new Observable();
    this.personasInfoCopy = new Observable();
    this.reloadEmmiter = new EventEmitter();
  }

  public reloadTable(): void {
    this.reloadEmmiter.emit();
  }



  public filterPersonas(): void {
    const personasFiltradas: PersonaInterface[] = [];
    this.personasInfoCopy.pipe(
      map(
        (personas: PersonaInterface[]) => {
          for(let personaTo of personas){
            let shouldByIncluded = true;
            if(this.filterByNameActived && this.filterByNameValue !== null && this.filterByNameValue !== ''){
              if (!personaTo.name.toLocaleLowerCase().includes(this.filterByNameValue.toLocaleLowerCase())){
                shouldByIncluded = false;
              }
            }
            if(this.filterByPriorityActived && this.filterByPriorityValue !== null && this.filterByPriorityValue !== ''){
              if ((personaTo.priority !== Number(this.filterByPriorityValue))){
                shouldByIncluded = false;
              }
            }
            if(this.filterBySatisfactionActived && this.filterBySatisfactionValue !== null && this.filterBySatisfactionValue !== ''){
              if ((personaTo.satisfaction !== Number(this.filterBySatisfactionValue))){
                shouldByIncluded = false;
              }
            }
            if(this.filterByStatusActived && this.filterByStatusValue !== null&& this.filterByStatusValue !== ''){
              if (!personaTo.status.toLocaleLowerCase().includes(this.filterByStatusValue.toLocaleLowerCase())){
                shouldByIncluded = false;
              }
            }
            if(this.filterBySubjectActived && this.filterBySubjectValue !== null && this.filterBySubjectValue !== ''){
              if (!personaTo.subject.toLocaleLowerCase().includes(this.filterBySubjectValue.toLocaleLowerCase())){
                shouldByIncluded = false;
              }
            }

            if(shouldByIncluded){
              personasFiltradas.push(personaTo);
            }
          }
        }
      )
    ).subscribe();
    this.personasInfo = of(personasFiltradas);
  }

}
