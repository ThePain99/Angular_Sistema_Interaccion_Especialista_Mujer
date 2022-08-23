import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-new-specialist-user',
  templateUrl: './new-specialist-user.component.html',
  styleUrls: ['./new-specialist-user.component.css']
})
export class NewSpecialistUserComponent implements OnInit {

  constructor(private app: AppComponent) {
    this.app.navbarAdmin = true;
  }

  ngOnInit(): void {
  }

}
