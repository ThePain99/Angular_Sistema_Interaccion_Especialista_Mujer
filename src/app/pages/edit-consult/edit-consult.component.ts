import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {PatientsService} from "../../services/patients.service";
import {ConsultsService} from "../../services/consults.service";
import {Consults} from "../../models/consults";

@Component({
  selector: 'app-edit-consult',
  templateUrl: './edit-consult.component.html',
  styleUrls: ['./edit-consult.component.css']
})
export class EditConsultComponent implements OnInit {
  form: FormGroup;
  user : any
  patients: any
  violentList = ['Física','Psicológica', 'Emocional', 'Económica',
    'Sexual','Digital', 'Familiar', 'Pareja']
  violentButtonList: any[]
  patientId: any
  consultEdit: any

  constructor(private fb: FormBuilder, private route: Router,
              private _patientsService: PatientsService, private _consultsService: ConsultsService) {
    this.form = this.fb.group({
      patient: ['', Validators.required],
      violent: [''],
      modality: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
    })
    this.violentButtonList = []
  }

  ngOnInit(): void {
    this.retrievePatients()
    this.retrieveInformation()
    this.userNotLogged()
  }


  retrievePatients() {
    let data: any = localStorage.getItem("userData")
    this.user = JSON.parse(data)
    this._patientsService.getPatientsByUserId(this.user.id)
      .subscribe((res)=>{
        console.log(res)
        if (res.data != null) {
          this.patients = res.data;
        }
      })
  }

  retrieveInformation() {
    let consult: any = localStorage.getItem("consult")
    this.consultEdit = JSON.parse(consult)
    this.form.controls['description'].setValue(this.consultEdit.descripcion)
    this.form.controls['patient'].setValue(this.consultEdit.paciente.id)
    this.form.controls['modality'].setValue(this.consultEdit.modalidad.id)
    this.form.controls['violent'].setValue(this.consultEdit.violencias[0])
    this.violentButtonList = this.consultEdit.violencias;
    this.form.controls['date'].setValue(this.consultEdit.fechaReserva.substring(0,10))
    this.form.controls['time'].setValue(this.consultEdit.fechaReserva.substring(11,16))
  }

  addViolent(violent: string) {
    if(!this.violentButtonList.includes(violent)) {
      this.violentButtonList.push(violent)
    }
  }

  deleteViolent(violent: string) {
    this.violentButtonList.forEach( (item, index) => {
      if(item === violent) this.violentButtonList.splice(index,1);
    });
  }

  editConsult() {
    let date = new Date(this.form.value.date + "T" + this.form.value.time + ":00Z")
    let data: any = localStorage.getItem("userData")
    this.user = JSON.parse(data)
    const consult: Consults = {
      id: this.consultEdit.id,
      fechaReserva: date.toISOString(),
      descripcion: this.form.value.description,
      usuarioId: this.user.id,
      estadoConsultaId: this.consultEdit.estadoConsulta.id,
      pacienteId: this.form.value.patient,
      violencias: this.violentButtonList,
      modalidadId: Number(this.form.value.modality),
    }
    if(!this.form.invalid) {
      this._consultsService.update(consult)
        .subscribe((res)=>{
          console.log(res)
        })
      this.form.reset()
      this.route.navigate(['consults'])
    }

  }

  selectPatient(id: string) {
    this.patientId = Number(id);
  }

  navigateToConsults() {
    localStorage.setItem('consult', "");
    this.route.navigate(['consults'])
  }

  userNotLogged() {
    if(localStorage.getItem("userData") == null) {
      this.route.navigate(['login'])
    }
  }
}
