import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(public app: AppComponent, private router: Router) {
    this.app.navbarAdmin = true;
  }

  ngOnInit(): void {
  }

  navigateToUsersList(): void {
    this.router.navigate([`/users-list`]).then(() => null);
  }

}
