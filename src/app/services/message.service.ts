import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  passvalues: PassValues = { ClientId: 0, EventId: 0, Section: "0", CustomerId: 0 };
  private message = new BehaviorSubject('first');
  private passValues = new BehaviorSubject<PassValues>(this.passvalues);

  sharedMessage = this.message.asObservable();
  sharedClassMessage = this.passValues.asObservable();

  constructor() {
  }
  passClass(obj: PassValues) {
    this.passValues.next(obj);
  }

  nextMessage(message: string) {
    this.message.next(message);
  }
}
