import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy {
  showA: boolean = false;
  showB: boolean = false;
  showC: boolean = false;
  passValues: PassValues;
  subscription1: Subscription
  subscription2: Subscription
  constructor(private messageService: MessageService) { }

  ngOnInit() {
    //this.doSubscribeString();
    this.doSubscribePassValues();
  }

  ngOnDestroy() {
    this.subscription1.unsubscribe();
    //this.subscription2.unsubscribe();
  }
  closeAll(): void {

    this.showA = false;
    this.showB = false;
    this.showC = false;
  }

  doSubscribePassValues() {
    this.subscription2 =
      this.messageService
        .sharedClassMessage
        //.pipe(first())
        .subscribe(x => {
          console.log(x);
          if (x.Section === '1') {
            this.closeAll();
            this.showA = true;
            this.passValues = x;
          }

          if (x.Section === '2') {
            this.closeAll();
            this.showB = true;
            this.passValues = x;
          }
        })
  }

  doSubscribeString() {
    this.subscription1 = this.messageService.sharedMessage
    //.pipe(first())
    .subscribe(x => {
      if (x === 'button one clicked') {
        this.closeAll();
        this.showA = true;
      }

      if (x === 'button two clicked') {
        this.closeAll();
        this.showB = true;
      }
    });
    this.messageService.sharedClassMessage.subscribe(x => {
      //if (typeof x === typeof PassValues) {
      this.passValues = x;
      // let s = this.passValues.EventId;
      //}
    });
  }
}
