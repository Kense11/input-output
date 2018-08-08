import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() PData: any;

  @Output() childEvent = new EventEmitter();

  constructor() {}

  onChange(value) {
    this.childEvent.emit(value);
  }
}
