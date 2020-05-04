import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sprite',
  templateUrl: 'sprite.component.html',
  styleUrls: ['sprite.component.css']
})
export class SpriteComponent {

  @Input("url")
  public url:string;

  @Input("width")
  public width:number;

  @Input("height")
  public height:number;

  @Input("offset-x")
  public offsetx:number;

  @Input("offset-y")
  public offsety:number;

  @Output("clickSprite")
  private clickSprite = new EventEmitter<number>();

  click():void {
    this.clickSprite.emit();
  }
}
