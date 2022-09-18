import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../services/users.service";
import {ConsultsService} from "../../services/consults.service";
import {PatientsService} from "../../services/patients.service";
import {Router} from "@angular/router";
import {AppComponent} from "../../app.component";
import {Consults} from "../../models/consults";

@Component({
  selector: 'app-consults',
  templateUrl: './consults.component.html',
  styleUrls: ['./consults.component.css']
})
export class ConsultsComponent implements OnInit {
  consultExist = false;
  user : any
  consultId: any
  consults: any
  groupArrays : any
  consultCount: number = 0
  searchText: string
  spinnerBoolean: boolean
  localTime!: Date

  constructor(private _consultsService: ConsultsService, private app: AppComponent, private _patientsService: PatientsService, private route: Router) {
    this.searchText = ''
    this.spinnerBoolean = false
  }

  ngOnInit(): void {
    this.validateConsults()
    this.localTime = new Date()
    this.spinnerBoolean = false
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
        if (res.data.length > 0) {
          this.consultExist = true;
          this.consults = res.data;
          let array = [] as any

          res.data.forEach((element: any) => {
            if(element.estadoConsulta.id == 3) {
              array.push(element)
            }
            const groups = array.reduce((groups:any, game:any) => {
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
          })

          const sortedDesc = this.groupArrays.sort(
            (objA:any, objB:any) => new Date(objA.date).getTime() - new Date(objB.date).getTime(),
          );

          this.consultCount = array.length;
          this.spinnerBoolean = true
        } else {
          this.consultExist = false;
          this.spinnerBoolean = true
        }
      })
  }

  navigateToCreateConsult() {
    this.route.navigate(['/create-consult'])
  }

  navigateToEditConsult(consult: any) {
    localStorage.setItem('consult', JSON.stringify(consult));
    this.route.navigate(['/edit-consult'])
  }

  update(consultEdit: any, changeConsult: number) {
    const consult: Consults = {
      id: consultEdit.id,
      fechaReserva: consultEdit.fechaReserva,
      descripcion: consultEdit.desc,
      usuarioId: consultEdit.usuarioId,
      estadoConsultaId: changeConsult,
      pacienteId: consultEdit.pacienteId,
      violencias: consultEdit.violencias,
      modalidadId: consultEdit.modalidadId,
    }
    this._consultsService.update(consult)
      .subscribe((res)=>{
        console.log(res)
        window.location.reload()
      })
  }

  delete(id: number) {
    this._consultsService.delete(id)
      .subscribe((res)=>{
        console.log(res)
        window.location.reload()
      })
  }

  storeId(id: number) {
    this.consultId = id;
  }

}
