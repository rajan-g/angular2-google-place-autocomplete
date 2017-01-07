import { NgModule, ModuleWithProviders }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }          from '@angular/forms';
import {GoogleplaceDirective} from './googleplace.directive';

@NgModule({
  imports:      [ BrowserModule,  FormsModule, ReactiveFormsModule],
  declarations: [GoogleplaceDirective],
  exports: [GoogleplaceDirective],
  providers:[]
})
export class GooglePlaceModule {
  static forRoot(): ModuleWithProviders { return {ngModule: GooglePlaceModule, providers: []}; }
}