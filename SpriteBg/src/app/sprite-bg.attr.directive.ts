import { Directive, Input, ElementRef, HostListener, Attribute, AfterViewInit } from "@angular/core"; 

@Directive({ 
  selector: "[sprite]", 
}) 
export class SpriteDirective implements AfterViewInit{ 

  @Input("url")
  private url:string;
  
  @Input("width")
  private width:number;
  
  @Input("height")
  private height:number;
  
  @Input("offsetx")
  private offsetx:number;
  
  @Input("offsety")
  private offsety:number;
  
  constructor(private element: ElementRef, 
    @Attribute("sprite-url") url: string, 
    @Attribute("sprite-width") width: number, 
    @Attribute("sprite-height") height: number, 
    @Attribute("sprite-offset-x") offsetx: number,
    @Attribute("sprite-offset-y") offsety: number)  {
    if (url != '' && width != null && height != null && offsetx != null && offsety != null) {
      this.url = url;
      this.width = width;
      this.height = height;
      this.offsetx = offsetx;
      this.offsety = offsety;
    }
    else {
      this.element.nativeElement.innerText = ':(';
    }
  } 

  ngAfterViewInit():void {
    this.setSprite();
  }

  @HostListener("click")
  setSprite():void {
    this.offsetx -= this.width;
    this.offsety -= this.height;
    this.element.nativeElement.style.backgroundImage = 'url(' + this.url + ')';
    this.element.nativeElement.style.width = this.width + 'px';
    this.element.nativeElement.style.height = this.height + 'px';
    this.element.nativeElement.style.backgroundPositionX = this.offsetx + 'px';
    this.element.nativeElement.style.backgroundPositionY = this.offsety + 'px';
  }

}
