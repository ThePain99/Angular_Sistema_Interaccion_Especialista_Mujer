import { Component, OnInit, Type } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  
  user!: any
  name!: string
  lastName!: string
  dni!: string
  email!: string
  userType!: number
  modalityId!: number

  constructor(public app: AppComponent,
              private router: Router,
              private userService: UserService) {
    let data: any = localStorage.getItem("userData")
    this.user = JSON.parse(data)
    this.userType = -1
    this.modalityId = -1
  }

  ngOnInit(): void {
  }

  save(): void {
    if (this.userType == 0) {
      this.modalityId = 1
    }
    console.log(this.userType)

    this.userService.createUser(
      new User(
        this.name, 
        this.lastName, 
        this.dni,
        this.email,
        'qwerty123',
        false,
        Boolean(this.userType),
        this.modalityId))
        .subscribe((response: any) => {
      this.navigateToUsersList()
    })
  }

  enabled(): any {
    if (this.userType == 0) {
      return true
    }
    else if (this.userType == 1) {
      if (this.modalityId >= 0 && this.modalityId <=3) {
        return true
      }
    } else {
      return false
    }
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

  changeType(e: Event) {
    this.userType = (e.target as any).value;
  }

  changeModalityId(e: Event) {
    this.modalityId = (e.target as any).value;
  }

  navigateToUsersList(): void {
    this.router.navigate([`/users-list`]).then(() => null);
  }

}
