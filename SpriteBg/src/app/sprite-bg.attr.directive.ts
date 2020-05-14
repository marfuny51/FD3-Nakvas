import { Directive, ElementRef } from "@angular/core"; 

@Directive({ 
  selector: "[sprite]", 
}) 
export class SpriteDirective { 

    url:string='http://fe.it-academy.by/Examples/smileys.png';
    width:number=23;
    height:number=23;
    offsetx:number=0;
    offsety:number=0;
  
    constructor(private element: ElementRef) {

    this.setSprite();

    setInterval( ()=>{ 
        this.setSprite() 
      },2000);

} 

  setSprite():void {
    this.offsetx += this.width;
    this.offsety -= this.height;
    this.element.nativeElement
      .style.backgroundImage = 'url(' + this.url + ')';
    this.element.nativeElement
      .style.width=this.width + "px";
    this.element.nativeElement
      .style.height=this.height + "px";
    this.element.nativeElement
      .style.backgroundPositionX=this.offsetx + "px";
    this.element.nativeElement
      .style.backgroundPositionY=this.offsety + "px";
  }

}
