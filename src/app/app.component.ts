import { Component } from '@angular/core';

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

}
