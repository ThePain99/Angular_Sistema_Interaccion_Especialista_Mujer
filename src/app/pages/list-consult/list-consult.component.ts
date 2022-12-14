import { Component, OnInit } from '@angular/core';
import {ConsultsService} from "../../services/consults.service";
import {PatientsService} from "../../services/patients.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-consult',
  templateUrl: './list-consult.component.html',
  styleUrls: ['./list-consult.component.css']
})
export class ListConsultComponent implements OnInit {
  consultExist = false;
  searchText!: string;
  user : any
  consults: any
  consultCount: any
  consultId: any
  monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  constructor(private _consultsService: ConsultsService, private _patientsService: PatientsService, private route: Router) { }

  ngOnInit(): void {
    this.getConsults()
  }

  navigateToEditConsult(consult: any) {
    localStorage.setItem('consult', JSON.stringify(consult));
    this.route.navigate(['/edit-consult'])
  }

  getConsults() {
    let data: any = localStorage.getItem("userData")
    this.user = JSON.parse(data)
    this._consultsService.getConsultsByUserId(this.user.id)
      .subscribe((res)=>{
        console.log(res)
        if (res.data != null) {
          this.consultExist = true;
          this.consults = res.data;
          this.consultCount = res.data.length;
        } else {
          this.consultExist = false;
        }
      })
  }

  storeId(id: number) {
    this.consultId = id;
  }

  delete(id: number) {
    this._consultsService.delete(id)
      .subscribe((res)=>{
        console.log(res)
      })
    window.location.reload()
  }

  toStringComa(array: any) {
    return array.join(", ");
  }


}
