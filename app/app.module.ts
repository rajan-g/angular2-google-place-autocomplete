import { NgModule }  from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {GoogleplaceDirective} from '../directives/googleplace.directive';

@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent,GoogleplaceDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }