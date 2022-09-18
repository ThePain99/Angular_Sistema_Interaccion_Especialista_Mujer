import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  template: `
    <main>
      <app-navbar *ngIf="userLoggedIn == true"></app-navbar>
      <router-outlet></router-outlet>
    </main>`
})
export class AppComponent {
  title = 'TDPANGULAR';
  userLoggedIn = true;
  userNotLogged: any

  constructor(private route: Router) {
    this.validate()
  }
  validate() {
    if(localStorage.getItem("userData") == null && localStorage.getItem("recover") == null)
    {
      this.route.navigate(['/login'])
    }
  }

}
