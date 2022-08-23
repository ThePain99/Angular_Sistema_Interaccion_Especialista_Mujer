import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-new-admin-user',
  templateUrl: './new-admin-user.component.html',
  styleUrls: ['./new-admin-user.component.css']
})
export class NewAdminUserComponent implements OnInit {

  constructor(private app: AppComponent) {
    this.app.navbarAdmin = true;
  }

  ngOnInit(): void {
  }

}
