import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../services/users.service";
import {ConsultsService} from "../../services/consults.service";
import {PatientsService} from "../../services/patients.service";
import {Router} from "@angular/router";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-consults',
  templateUrl: './consults.component.html',
  styleUrls: ['./consults.component.css']
})
export class ConsultsComponent implements OnInit {
  consultExist = false;
  user : any
  consults: any
  groupArrays : any
  consultCount: any
  searchText: string;
  localTime!: Date

  constructor(private _consultsService: ConsultsService, private app: AppComponent, private _patientsService: PatientsService, private route: Router) {
    this.app.userLoggedIn = true
    this.validateConsults()
    this.searchText = ''
  }

  ngOnInit(): void {
    this.validateConsults()
    this.localTime = new Date()
  }


  toDate(string: string) {
    return new Date(string)
  }

  validateConsults() {
    let data: any = localStorage.getItem("userData")
    this.user = JSON.parse(data)
    this._consultsService.getConsultsByUserId(this.user.id)
      .subscribe((res)=>{
        console.log(res)
        if (res.data != null) {
          this.consultExist = true;
          this.consults = res.data;

          const groups = res.data.reduce((groups:any, game:any) => {
            const date = game.fechaReserva.split('T')[0];
            if (!groups[date]) {
              groups[date] = [];
            }
            groups[date].push(game);
            return groups;
          }, {});

          this.groupArrays = Object.keys(groups).map((date) => {
            return {
              date,
              games: groups[date]
            };
          });

          this.consultCount = res.data.length;

        } else {
          this.consultExist = false;
        }
      })
  }

  navigateToEditConsult(consult: any) {
    localStorage.setItem('consult', JSON.stringify(consult));
    this.route.navigate(['/edit-consult'])
  }

}
