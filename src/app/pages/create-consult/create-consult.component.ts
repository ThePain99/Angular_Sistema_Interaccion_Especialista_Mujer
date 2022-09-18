import { Component, OnInit } from '@angular/core';
import {ConsultsService} from "../../services/consults.service";
import {PatientsService} from "../../services/patients.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Consults} from "../../models/consults";
import {ActivatedRoute, Router} from "@angular/router";
import {ConsultsComponent} from "../consults/consults.component";

@Component({
  selector: 'app-create-consult',
  templateUrl: './create-consult.component.html',
  styleUrls: ['./create-consult.component.css']
})
export class CreateConsultComponent implements OnInit {
  form: FormGroup;
  user : any
  patients: any
  violentList = ['Física','Psicológica', 'Emocional', 'Económica',
    'Sexual','Digital', 'Familiar', 'Pareja']
  violentButtonList: any[]
  patientId: any
  consultEdit: any
  editable: string

  constructor(private fb: FormBuilder, private route: Router,
              private _patientsService: PatientsService, private _consultsService: ConsultsService) {
    this.form = this.fb.group({
      patient: ['', Validators.required],
      violent: ['', Validators.required],
      modality: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
    })
    this.violentButtonList = []
    this.editable = "false"
  }

  ngOnInit(): void {
    this.retrievePatients()
    this.retrieveInformation()
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
    this.editable = localStorage.getItem("editable") || '{}'
    if(this.editable == "true") {
      let consult: any = localStorage.getItem("consult")
      this.consultEdit = JSON.parse(consult)
      this.form.controls['description'].setValue(this.consultEdit.descripcion)
      this.form.controls['patient'].setValue(this.consultEdit.paciente.id)
      this.form.controls['modality'].setValue(this.consultEdit.modalidad.id)
      this.violentButtonList = this.consultEdit.violencias;
      this.form.controls['date'].setValue(this.consultEdit.fechaReserva.substring(0,10))
      this.form.controls['time'].setValue(this.consultEdit.fechaReserva.substring(11,16))
    }
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

  createConsult() {
    let date = new Date(this.form.value.date + "T" + this.form.value.time + ":00Z")
    let data: any = localStorage.getItem("userData")
    this.user = JSON.parse(data)
    const consult: Consults = {
      id: this.form.value.id,
      fechaReserva: date.toISOString(),
      descripcion: this.form.value.description,
      usuarioId: this.user.id,
      estadoConsultaId: 3,
      pacienteId: this.form.value.patient,
      violencias: this.violentButtonList,
      modalidadId: Number(this.form.value.modality),
    }
    if(!this.form.invalid) {
      this._consultsService.create(consult)
        .subscribe((res)=>{
          console.log(res)
        })
      this.form.reset()
      this.route.navigate(['consults'])
        .then(() => {
          window.location.reload();
        });
    }

  }

  selectPatient(id: string) {
    this.patientId = Number(id);
  }

  navigateToConsults() {
    this.route.navigate(['consults'])
  }

}
