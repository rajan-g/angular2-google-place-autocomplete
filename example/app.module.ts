import { NgModule }  from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {GooglePlaceModule} from '../directives/index';

@NgModule({
  imports:      [ BrowserModule,FormsModule, GooglePlaceModule ],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ]
})
export class GooglePlaceExample { }