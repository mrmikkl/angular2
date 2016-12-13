import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  /**
   * Default ist ViewEncapsulation.Emulated => Css von außen (globale Styles) gilt auch für Komponenten, Css von Komponenten nur für diese
   * ViewEncapsulation.Native => Komponenten blockieren Css von außen (also die globalen Styles)
   * ViewEncapsulation.None => von außen in Komponenten und von Komponenten nach außen
   */
  encapsulation: ViewEncapsulation.Native,
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

  @Input() message;

  @Output() update = new EventEmitter();

  isMousedown;

  constructor() { }

  onClick(event, value) {
    console.log(event);
    console.log(value);
  }

  ngOnInit() {
  }

}
