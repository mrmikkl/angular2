import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

  @Input() message;

  constructor() { }

  onClick(event, value) {
    console.log(event);
    console.log(value);
  }

  ngOnInit() {
  }

}
