import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MakesListComponent } from './makeslistcomponent';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ,FormsModule],
  declarations: [ AppComponent, MakesListComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
