import { Component, OnInit } from '@angular/core';
// import { circle } from '../circle/circle.component';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  result = '0.0';
  radio = '';
  
  area() {
    // this.result = circle(this.radio)

    if (this.radio == '' || this.radio == null) {
      this.result = 'Error';
    }
  
    this.radio = ''
  }

}