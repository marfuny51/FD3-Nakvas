import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SpriteComponent } from './sprite.component';
import { BoxComponent } from './box.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ SpriteComponent, BoxComponent ],
  providers: [],
  bootstrap: [BoxComponent]
})
export class AppModule { }
