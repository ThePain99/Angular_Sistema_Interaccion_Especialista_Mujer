import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(public app: AppComponent, private router: Router) {
    this.app.navbarAdmin = true;
    this.app.empty = false;
  }

  ngOnInit(): void {
  }

  navigateToEditUser(): void {
    this.router.navigate([`/edit-user`]).then(() => null);
  }

  navigateToNewUser(): void {
    this.router.navigate([`/new-user`]).then(() => null);
  }

}
