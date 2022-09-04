import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consults',
  templateUrl: './consults.component.html',
  styleUrls: ['./consults.component.css']
})
export class ConsultsComponent implements OnInit {
  consultExist = false;

  constructor() { }

  ngOnInit(): void {
  }

}
