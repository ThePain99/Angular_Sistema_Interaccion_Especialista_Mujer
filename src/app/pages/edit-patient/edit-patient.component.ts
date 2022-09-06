import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {

  id!: number
  patientId!: any
  patient!: any
  name!: string
  lastName!: string
  dni!: string
  email!: string
  cellphone!: string

  constructor(public app: AppComponent,
              private router: Router,
              private route: ActivatedRoute,
              private patientService: PatientService) {
    this.app.navbarAdmin = false;
    this.id = Number(this.route.snapshot.paramMap.get('id'))
    this.patientId = Number(this.route.snapshot.paramMap.get('patientId'))
  }

  ngOnInit(): void {
    this.getPatientById(this.patientId)
  }

  changeName(e: Event) {
    this.name = (e.target as any).value;
  }

  changeLastName(e: Event) {
    this.lastName = (e.target as any).value;
  }

  changeDni(e: Event) {
    this.dni = (e.target as any).value;
  }

  changeEmail(e: Event) {
    this.email = (e.target as any).value;
  }

  changeCellphone(e: Event) {
    this.cellphone = (e.target as any).value;
  }

  getPatientById(patientId: number): void {
    this.patientService.getPatientById(this.patientId)
    .subscribe((response: any) => {
      this.patient = response['data']
      this.name = this.patient.nombre
      this.lastName = this.patient.apellido
      this.dni = this.patient.dni
      this.email = this.patient.correo
      this.cellphone = this.patient.numero
      })
  }

  save() {
    this.patient.nombre = this.name
    this.patient.apellido = this.lastName
    this.patient.dni = this.dni
    this.patient.correo = this.email
    this.patient.numero = this.cellphone
    this.patientService.updatePatient(this.patient). subscribe((Response: any) => {
      this.navigateToPatientsList()
    })
  }

  navigateToPatientsList(): void {
    this.router.navigate([`/user/${this.id}/patients-list`]).then(() => null);
  }

}
