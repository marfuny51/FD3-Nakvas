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
    { number:10, free: true },
    { number:11, free: true },
    { number:12, free: true },
    { number:13, free: true },
    { number:14, free: true },
    { number:15, free: true },
    { number:16, free: true }
  ];

  getNumber(count:number):string {
    let places = this.places.filter(place => place.free===true);
    if (count===1) {
        let rand = Math.floor(Math.random() * places.length);
        return places[rand].number.toString();
    }
  };

  getFree():number {
    let freePlaces = this.places.filter(place => place.free===true).length;
    return freePlaces;
  };

  getTake():number {
    let takePlaces = this.places.filter(place => place.free===false).length;
    return takePlaces;
  };

}
