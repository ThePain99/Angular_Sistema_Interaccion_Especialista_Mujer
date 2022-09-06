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

  constructor(private fb: FormBuilder, private route: Router, private app: AppComponent, private _usersService: UsersService) {
    this.app.userLoggedIn = false;
    this.form = this.fb.group({
      id: 0,
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    if(localStorage.getItem("userData") != null)
    {
      this.route.navigate(['consults'])
    }
  }

  validateLogin() {
    const formValue = this.form.value;
    this._usersService.login(formValue.email, formValue.password)
      .subscribe((res)=>{
        console.log(res)
        if(res.length==0)
        {
          alert('Email or password are wrong')
        } else {
          console.log(res.password);
          if (res.status == 'Success') {
            this.route.navigate(['consults'])
            localStorage.setItem('userData', JSON.stringify(res.data));
            this.app.userLoggedIn = true;
          } else {
            alert('Email or password are wrong')
          }
        }
      })
  }
}
