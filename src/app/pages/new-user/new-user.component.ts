import { Component, OnInit, Type } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  
  type=0;
  constructor(public app: AppComponent, private router: Router) {
    this.app.navbarAdmin = true;
  }

  ngOnInit(): void {
    console.log();
  }

  changeType(e: Event) {
    this.type = (e.target as any).value;
  }

  navigateToUsersList(): void {
    this.router.navigate([`/users-list`]).then(() => null);
  }

}
