import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user!: any
  userId!: any
  userEdited!: any
  name!: string
  lastName!: string
  dni!: string
  email!: string
  userType!: number
  modalityId!: any

  constructor(public app: AppComponent,
              private router: Router,
              private route: ActivatedRoute,
              private userService: UserService) {
    let data: any = localStorage.getItem("adminData")
    this.user = JSON.parse(data)
    this.userId = Number(this.route.snapshot.paramMap.get('userId'))
    this.getUserById()
    this.userType = -1
    this.modalityId = -1
  }

  ngOnInit(): void {
    this.getUserById()
  }

  enabled(): any {
    if (this.userType == 0) {
      this.modalityId = 0
      return true
    }
    else if (this.userType == 1) {
      if (this.modalityId >= 1 && this.modalityId <=3) {
        return true
      }
      else {
        return false
      }
    } else {
      this.modalityId = 0
      return false
    }
  }

  changeType(e: Event) {
    this.userType = (e.target as any).value;
  }

  changeModalityId(e: Event) {
    this.modalityId = (e.target as any).value;
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

  getUserById(): void {
    this.userService.getUserById(this.userId)
    .subscribe((response: any) => {
      this.userEdited = response['data']
      this.name = this.userEdited.nombre
      this.lastName = this.userEdited.apellido
      this.dni = this.userEdited.dni
      this.email = this.userEdited.correo
      this.userType = Number(this.userEdited.tipo)
      if(this.userEdited.modalidadId == null) {
        this.modalityId = 0
      } else {
        this.modalityId = this.userEdited.modalidadId
      }
    })
  }

  save() {
    this.userEdited.nombre = this.name
    this.userEdited.apellido = this.lastName
    this.userEdited.dni = this.dni
    this.userEdited.correo = this.email
    this.userEdited.tipo = Boolean(this.userType)
    if (this.userType == 1) {
      this.userEdited.modalidadId = this.modalityId
    }
    else {
      this.userEdited.modalidadId = null
    }
    this.userService.updateUser(this.userEdited). subscribe((Response: any) => {
      if(this.userEdited.id == this.userId) {
        localStorage.setItem('userData', JSON.stringify(this.userEdited));
      }
      this.navigateToUsersList()
    })
  }

  navigateToUsersList(): void {
    this.router.navigate([`/users-list`]).then(() => null);
  }
}
