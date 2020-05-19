import { Injectable } from "@angular/core";

@Injectable()
export class Tickets {

  private places:Array<{number:number, free:boolean}>=[
    { number:1, free: true },
    { number:2, free: true },
    { number:3, free: true },
    { number:4, free: true },
    { number:5, free: true },
    { number:6, free: true },
    { number:7, free: true },
    { number:8, free: true },
    { number:9, free: true },
    { number:10, free: true },
    { number:11, free: true },
    { number:12, free: true },
    { number:13, free: true },
    { number:14, free: true },
    { number:15, free: true },
    { number:16, free: true },
    { number:17, free: true }
  ];
 
  getNumber(count:number):any {
    let places = [...this.places];
    let arrTickets:Array<number> = [];
    let num:number = 0;
    if (count <= this.getFree()) {
      for (let i:number=0; i < places.length; i++) {
        if (num < count) {
          if (places[i].free === true) {
            places[i].free = false;
            num += 1;
            arrTickets.push(places[i].number)
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
    let places = [...this.places];
    let freePlaces = places.filter(place => place.free===true).length;
    return freePlaces;
  };

  getTake():number {
    let places = [...this.places];
    let takePlaces = places.filter(place => place.free===false).length;
    return takePlaces;
  };

  getPlacesArray():Array<number> {
    let places = [...this.places];
    return new Array(places.length);
  };

  /*getFreeOrTake():any {
    let places = [...this.places];
    for (let i:number=0; i < this.getPlacesArray().length; i++) {
        if (this.getPlacesArray()[i].free === true) {
            ret
        }
    }
  }*/

}
