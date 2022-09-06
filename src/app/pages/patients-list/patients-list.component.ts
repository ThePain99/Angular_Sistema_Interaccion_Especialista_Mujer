import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { PatientService } from 'src/app/services/patient.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css']
})
export class PatientsListComponent implements OnInit {

  id!: number
  allPatients!: Array<any>
  public page = 1
  public pageSize = 10
  deleteId!: number
  search!: any
  searchText!: string

  constructor(public app: AppComponent,
              private router: Router,
              private patientService: PatientService,
              private userService: UserService,
              private route: ActivatedRoute) {
    this.app.navbarAdmin = false;
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.getAllPatientsByUserId()
  }

  getAllPatientsByUserId(): void {
    this.patientService.getAllPatientsByUserId(this.id)
    .subscribe((response: any) => {
      if (!response) {
        return
      }
      this.allPatients = response['data']
    })
  }

  deletePatientById(): void {
    this.patientService.deletePatientByIdAndUserId(this.id, this.deleteId)
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
    this.router.navigate([`/user/${this.id}/patients-list/${userId}/edit-patient`]).then(() => null);
  }

  navigateToNewPatient(): void {
    this.router.navigate([`/user/${this.id}/patients-list/new-patient`]).then(() => null);
  }

}
