import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-child',
  templateUrl: './sub-child.component.html',
  styleUrls: ['./sub-child.component.css']
})
export class SubChildComponent implements OnInit {
  @Input() passedValue;
  //passedValueObj: PassValues;
  constructor() { }

  ngOnInit() {
   // this.passedValueObj = this.passedValue;
  }

}
