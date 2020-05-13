import { Component, Input } from '@angular/core';

import { Tickets } from './tickets.service';

@Component({
  moduleId: module.id,
  selector: 'cash',
  templateUrl: 'cash.component.html',
  styleUrls: ['cash.component.css']
})
export class CashComponent {

  @Input("count")
  private count:number;

  public getTickets:Array<number> = [];

  constructor(private data:Tickets) {
  }

  getCount(a:number):void {
    this.count = a;
    this.data.getNumber(this.count);
    this.getTickets = this.data.getTickets;
  }

}
