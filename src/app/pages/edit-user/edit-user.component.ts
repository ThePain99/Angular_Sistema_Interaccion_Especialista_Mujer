import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  id!: number
  userId!: any
  user!: any
  name!: string
  lastName!: string
  dni!: string
  email!: string
  userType!: number
  modalityId!: number
  enabled!: boolean

  constructor(public app: AppComponent, 
              private router: Router,
              private route: ActivatedRoute,
              private userService: UserService) {
    this.app.navbarAdmin = true;
    this.id = Number(this.route.snapshot.paramMap.get('id'))
    this.userId = Number(this.route.snapshot.paramMap.get('userId'))
    this.getUserById(this.userId)
    this.userType = -1
    this.modalityId = -1
  }

  ngOnInit(): void {
    this.getUserById(this.userId)
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

  getUserById(userId: number): void {
    this.userService.getUserById(this.userId)
    .subscribe((response: any) => {
      this.user = response['data']
      this.name = this.user.nombre
      this.lastName = this.user.apellido
      this.dni = this.user.dni
      this.email = this.user.correo
      this.userType = Number(this.user.tipo)
      if(this.user.modalidadId == null) {
        this.modalityId = this.user.modalidadId
      }
      else {
        this.modalityId = 1
      }
    })
  }

  save() {
    this.user.nombre = this.name
    this.user.apellido = this.lastName
    this.user.dni = this.dni
    this.user.correo = this.email
    this.user.tipo = Boolean(this.userType)
    if (this.userType == 1) {
      this.user.modalidadId = this.modalityId
    }
    this.userService.updateUser(this.user). subscribe((Response: any) => {
      this.navigateToUsersList()
    })
  }

  navigateToUsersList(): void {
    this.router.navigate([`/user/${this.id}/users-list`]).then(() => null);
  }
}
