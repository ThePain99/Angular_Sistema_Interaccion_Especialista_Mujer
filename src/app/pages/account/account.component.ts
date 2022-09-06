import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  id!: number
  userId!: any
  user!: any
  name!: string
  lastName!: string
  dni!: string
  email!: string
  password!: string

  constructor(public app: AppComponent,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.getUserById(this.id)
  }

  getUserById(userId: number): void {
    this.userService.getUserById(this.userId)
    .subscribe((response: any) => {
      this.user = response['data']
    })
  }

}
