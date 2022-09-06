import { Pipe, PipeTransform } from '@angular/core';
import {SearchConsult} from "../models/searchConsult";
@Pipe({
  name: 'customerEmailFilter'
})
export class SearchPipe implements PipeTransform {

  transform(consults: SearchConsult[], searchText: string): any {
    if (!consults || !searchText) {
      return consults;
    }
    return consults.filter((val: any) => {
      return ((val.paciente.nombre + " " + val.paciente.apellido).toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
    })
  }

}
