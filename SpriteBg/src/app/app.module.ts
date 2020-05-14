import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BoxComponent } from './box.component';
import { SpriteDirective } from './sprite-bg.attr.directive';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ BoxComponent, SpriteDirective
  ],
  providers: [ ],
  bootstrap: [BoxComponent]
})
export class AppModule { }
