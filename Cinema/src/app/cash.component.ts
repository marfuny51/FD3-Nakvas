import { Component } from '@angular/core';

import { Tickets } from './tickets.service';

@Component({
  moduleId: module.id,
  selector: 'cash',
  templateUrl: 'cash.component.html',
  styleUrls: ['cash.component.css']
})
export class CashComponent {

  constructor(private data:Tickets) {
  }

  getNumber(count:number):string {
    return this.data.getNumber(count);
  };

}
