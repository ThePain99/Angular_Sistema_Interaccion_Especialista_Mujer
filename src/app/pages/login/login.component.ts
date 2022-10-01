import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AppComponent} from "../../app.component";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  success: any

  constructor(private fb: FormBuilder, private route: Router, private app: AppComponent, private _usersService: UsersService) {
    this.app.userLoggedIn = false;
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
    if(localStorage.getItem("userData") != null)
    {
      this.route.navigate(['consults'])
    } else if(localStorage.getItem("adminData") != null) {
      this.route.navigate(['users-list'])
    }
  }

  navigateToRecover() {
    localStorage.setItem('recover', "recovered");
    this.route.navigate(['/recover'])
  }

  validateLogin() {
    let credentials = localStorage.getItem('Password');
    const formValue = this.form.value;
    this.success = credentials;
    console.log(this.success)
    this._usersService.login(formValue.email, formValue.password)
      .subscribe((res)=>{
          console.log(res)
          if(res.length==0)
          {
            this.success = false;
          } else {
            if (res.status == 'Success') {
              if (res.data.tipo == false) {
                this.route.navigate(['users-list'])
                localStorage.setItem('adminData', JSON.stringify(res.data));
                this.app.userLoggedIn = true;
                localStorage.removeItem('Password')
              }
              else {
                this.route.navigate(['consults'])
                localStorage.setItem('userData', JSON.stringify(res.data));
                this.app.userLoggedIn = true;
                localStorage.removeItem('Password')
              }

            } else {
              this.success = false;
            }
          }
        },
        (error)=>{
          this.success = "false";
        })

  }
}
