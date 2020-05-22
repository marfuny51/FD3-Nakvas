import { Injectable } from "@angular/core";
import {Observable} from 'rxjs';

@Injectable()
export class Tickets {

  private places:Array<boolean> = [true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true];
  private places$:Observable<Array<boolean>>;

  constructor() {
    this.places$ = new Observable<Array<boolean>>(event=> event.next(this.places))
  }

  getPlacesObservable():Observable<Array<boolean>> {
    return this.places$;
  }

  getNumber(count:number):any {
    let arrTickets:Array<number> = [];
    let num:number = 0;
    if (count <= this.getFree()) {
      for (let i:number=0; i < this.places.length; i++) {
        if (num < count) {
          if (this.places[i] === true) {
            this.places[i] = false;
            num += 1;
            arrTickets.push(i+1)
          }
        }
      }
    }
    else {arrTickets = null;}
    return arrTickets;
  };

  getAll():number {
    let places = [...this.places];
    let allPlaces = places.length;
    return allPlaces;
  };

  getFree():number {
    let freePlace:Array<boolean> = [];
    let places = [...this.places];
    places.forEach((place) => {
      if(place === true) {
        freePlace.push(place)
      }
    });
    return freePlace.length;
  };

}
