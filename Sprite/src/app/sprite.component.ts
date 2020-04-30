import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sprite',
  templateUrl: 'sprite.component.html',
  styleUrls: ['sprite.component.css']
})
export class SpriteComponent {

  private photo:string="http://fe.it-academy.by/Examples/cards2.png";

  getPhoto():string {
    return this.photo;
  };

}
