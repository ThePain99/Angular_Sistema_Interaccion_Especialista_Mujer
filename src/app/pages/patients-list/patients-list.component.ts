import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css']
})
export class PatientsListComponent implements OnInit {

  user!: any
  allPatients!: Array<any>
  public page = 1
  public pageSize = 10
  deleteId!: number
  search!: any
  searchText!: string

  constructor(public app: AppComponent,
              private router: Router,
              private patientService: PatientService) {
    let data: any = localStorage.getItem("userData")
    this.user = JSON.parse(data)
  }

  ngOnInit(): void {
    this.getAllPatientsByUserId()
  }

  getAllPatientsByUserId(): void {
    this.patientService.getAllPatientsByUserId(this.user.id)
    .subscribe((response: any) => {
      if (!response) {
        return
      }
      this.allPatients = response['data']
    })
  }

  deletePatientById(): void {
    this.patientService.deletePatientByIdAndUserId(this.user.id, this.deleteId)
    .subscribe(() => {
      window.location.reload()
    })
  }

  deletePatient(patientId: number): void {
    this.deleteId = patientId
  }

  close(): void {
    this.deleteId = -1
  }
  
  navigateToEditPatient(userId: number): void {
    this.router.navigate([`/patients-list/${userId}/edit-patient`]).then(() => null);
  }

  navigateToNewPatient(): void {
    this.router.navigate([`/patients-list/new-patient`]).then(() => null);
  }

}
