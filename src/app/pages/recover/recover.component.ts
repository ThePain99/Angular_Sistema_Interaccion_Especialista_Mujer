import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AppComponent} from "../../app.component";
import {UsersService} from "../../services/users.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.css']
})
export class RecoverComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private route: Router, private app: AppComponent ,private _usersService: UsersService) {
    this.app.userLoggedIn = false;
    this.form = this.fb.group({
      id: 0,
      email: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  recover() {
    const formValue = this.form.value;
    console.log(formValue.email)
    this._usersService.recover(formValue.email)
      .subscribe((res)=>{
        console.log(res)
        if(res.length==0)
        {
          alert('Email is wrong')
        } else {
          if (res.status == 'Success') {
            this.route.navigate(['consults'])
            localStorage.removeItem('recover');
            localStorage.setItem('userData', JSON.stringify(res.data));
            this.app.userLoggedIn = true;
          } else {
            alert('Email is wrong')
          }
        }
      })
  }

  cancel() {
    this.route.navigate(['/login'])
  }
}
