import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Patient } from 'src/app/models/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.css']
})
export class NewPatientComponent implements OnInit {

  user!: any
  userId!: number
  name!: string
  lastName!: string
  dni!: string
  email!: string
  cellphone!: string

  constructor(public app: AppComponent,
              private router: Router,
              private route: ActivatedRoute,
              private patientService: PatientService) {
    let data: any = localStorage.getItem("userData")
    this.user = JSON.parse(data)
    this.userId = Number(this.route.snapshot.paramMap.get('userId'))
  }

  ngOnInit(): void {
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

  save(): void {
    this.patientService.createPatient(
      new Patient(
        this.name, 
        this.lastName,
        this.dni,
        this.email, 
        this.cellphone))
        .subscribe((response: any) => {
      this.navigateToPatientsList()
    })
  }

  navigateToPatientsList(): void {
    this.router.navigate([`/patients-list`]).then(() => null);
  }
}
