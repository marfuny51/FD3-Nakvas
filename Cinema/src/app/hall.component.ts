import { Component } from '@angular/core';

import { Tickets } from './tickets.service';

@Component({
  moduleId: module.id,
  selector: 'hall',
  templateUrl: 'hall.component.html',
  styleUrls: ['hall.component.css']
})
export class HallComponent {

  constructor(private data:Tickets) {
  }

  getAll():number {
    return this.data.getAll();
  };

  getFree():number {
    return this.data.getFree();
  };

  getTake():number {
    return this.data.getTake();
  };

}
