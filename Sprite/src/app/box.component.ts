import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'box',
  templateUrl: 'box.component.html',
  styleUrls: ['box.component.css']
})
export class BoxComponent {

  private url:string='http://fe.it-academy.by/Examples/cards2.png';
  private width:number=143.5;
  private height:number=193.7;
  private offsetx:number=0;
  private offsety:number=0;

  getUrl():string {
    return this.url;
  }

  getWidth():number {
    return this.width;
  }

  getHeight():number {
    return this.height
  }
  
  getOffsetx():number {
    return this.offsetx
  }

  getOffsety():number {
    return this.offsety;
  }

  changeCard():void {
    this.offsetx += this.width;
    this.offsety -= this.height;
  }
}