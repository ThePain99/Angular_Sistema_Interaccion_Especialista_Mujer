import { Component, OnInit } from '@angular/core';
import {ConsultsService} from "../../services/consults.service";
import {PatientsService} from "../../services/patients.service";

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
  aa:boolean=false;
  monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  constructor(private _consultsService: ConsultsService, private _patientsService: PatientsService) { }

  ngOnInit(): void {
    this.getConsults()
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

  setIndex(ii: any){
    this.aa=ii;
    console.log
  }
}
