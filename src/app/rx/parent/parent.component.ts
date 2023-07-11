import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  passClass: PassValues = { ClientId: 0, EventId: 0, Section: "0", CustomerId: 0 };
  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.clickOne();
  }

  clickOne(): void {
    this.passClass = { ClientId: 1, EventId: 1, Section: "1", CustomerId: 1 };
    this.messageService.passClass(this.passClass);
    //this.messageService.nextMessage('button one clicked');
  }

  clickTwo(): void {
    this.passClass = { ClientId: 2, EventId: 2, Section: "2", CustomerId: 2 };
    this.messageService.passClass(this.passClass);
    //this.messageService.nextMessage('button two clicked');
  }
}
