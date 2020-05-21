import { Component } from '@angular/core';
import { Tickets } from './tickets.service';

@Component({
  moduleId: module.id,
  selector: 'hall',
  templateUrl: 'hall.component.html',
  styleUrls: ['hall.component.css']
})
export class HallComponent {

  private places2:Array<boolean>

  constructor(private data:Tickets) {
    data.getPlacesObservable().subscribe( res => {this.places2 = res})
  }

  getAll():number {
    return this.data.getAll();
  };

  getFree():number {
    return this.data.getFree();
  };

  getPlaces():Array<boolean> {
    return this.places2;
  }

}
