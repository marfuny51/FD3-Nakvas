import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Tickets } from './tickets.service';
import { HallComponent } from './hall.component';
import { CashComponent } from './cash.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ HallComponent, CashComponent ],
  providers: [ Tickets ],
  bootstrap: [HallComponent]
})
export class AppModule { }
