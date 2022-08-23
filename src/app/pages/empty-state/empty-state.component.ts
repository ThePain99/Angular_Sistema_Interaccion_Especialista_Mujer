import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-empty-state',
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.css']
})
export class EmptyStateComponent implements OnInit {

  constructor(private app: AppComponent) {
    this.app.navbarAdmin = true;
  }

  ngOnInit(): void {
  }

}
