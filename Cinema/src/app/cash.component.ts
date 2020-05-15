import { Component, Input } from '@angular/core';

import { Tickets } from './tickets.service';

@Component({
  moduleId: module.id,
  selector: 'cash',
  templateUrl: 'cash.component.html',
  styleUrls: ['cash.component.css']
})

export class CashComponent {

  public tickets:Array<number> = [];

  constructor(private data:Tickets) {
  }

  getCount(count:number):void {
    this.tickets = this.data.getNumber(count);
    if (this.tickets === null) {
      alert ("We don't have free places!");
    }
  }

}
