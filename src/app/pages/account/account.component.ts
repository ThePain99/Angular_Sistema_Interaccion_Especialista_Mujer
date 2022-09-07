import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { UserService } from 'src/app/services/user.service';
import { UsersService } from "../../services/users.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  user!: any
  password!: string
  newPassword!: string
  newPasswordConfirmation!: string
  equal!: Boolean

  constructor(public app: AppComponent,
              private router: Router,
              private service: UserService,
              private userService: UserService) {
    let data: any = localStorage.getItem("userData")
    this.user = JSON.parse(data)
    this.equal = false
  }

  ngOnInit(): void { }

  changePassword(e: Event) {
    this.password = (e.target as any).value;
  }

  changeNewPassword(e: Event) {
    this.newPassword = (e.target as any).value;
    if (this.newPassword == this.newPasswordConfirmation) {
      this.equal = true
    } 
    else {
      this.equal = false
    }
  }

  changeNewPasswordConfirmation(e: Event) {
    this.newPasswordConfirmation = (e.target as any).value;
    if (this.newPassword == this.newPasswordConfirmation) {
      this.equal = true
    } 
    else {
      this.equal = false
    }
  }

  save() {
    this.service.login(this.user.correo, this.password)
      .subscribe(response =>{
        if (response.status == 'Success') {
          this.user.contrasena = this.newPassword
          this.userService.updateUser(this.user). subscribe((response: any) => {
            if (this.user.tipo == 0) {
              this.navigateToUsersList()
            } else {
              this.navigateToConsults()
            }
          })
        }},
        error => {
          alert('Su contraseña no coincide. Intentelo nuevamente.')
        }
      )
  }
  
  close() {
    if (this.user.tipo == 0) {
      this.navigateToUsersList()
    } else {
      this.navigateToConsults()
    }
  }

  navigateToUsersList(): void {
    this.router.navigate([`/users-list`]).then(() => null);
  }

  navigateToConsults(): void {
    this.router.navigate([`/consults`]).then(() => null);
  }
}
