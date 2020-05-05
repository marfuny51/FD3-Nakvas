import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NumwordComponent } from './numword.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [NumwordComponent],
  providers: [],
  bootstrap: [NumwordComponent]
})
export class AppModule { }
