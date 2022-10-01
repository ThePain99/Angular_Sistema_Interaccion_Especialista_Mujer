import { Pipe, PipeTransform } from '@angular/core';
import { Patient } from '../models/patient';
@Pipe({
  name: 'patientNameFilter'
})
export class PatientSearchPipe implements PipeTransform {

  transform(patients: Patient[], searchText: string): any {
    if (!patients || !searchText) {
      return patients;
    }
    return patients.filter((val: any) => {
      return ((val.nombre + " " + val.apellido).toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
    })
  }

}
