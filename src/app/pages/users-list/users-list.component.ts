import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  user!: any
  allUsers!: any
  public page = 1
  public pageSize = 10
  deleteId!: number
  search!: any
  searchText!: string

  constructor(public app: AppComponent,
              private router: Router,
              private userService: UserService) {
    let data: any = localStorage.getItem("adminData")
    this.user = JSON.parse(data)
  }

  ngOnInit(): void {
    if(localStorage.getItem("adminData") != null) {
      this.app.userLoggedIn = true
    }
    this.getAllUsers()
  }

  getAllUsers(): void {
    this.userService.getAllUsers()
    .subscribe((response: any) => {
      if (!response) {
        return
      }
      this.allUsers = response['data']
    })
  }

  deleteUserById(): void {
    this.userService.deleteUserById(this.deleteId)
    .subscribe(() => {
      window.location.reload()
    })
  }

  deleteUser(userId: number): void {
    this.deleteId = userId
  }

  close(): void {
    this.deleteId = -1
  }

  navigateToEditUser(userId: number): void {
    this.router.navigate([`/users-list/${userId}/edit-user`]).then(() => null);
  }

  navigateToNewUser(): void {
    this.router.navigate([`/users-list/new-user`]).then(() => null);
  }

}
