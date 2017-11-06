import { NgModule, ModuleWithProviders }      from '@angular/core';
import { FormsModule, ReactiveFormsModule }          from '@angular/forms';
import {GoogleplaceDirective} from './googleplace.directive';

@NgModule({
  imports:      [FormsModule, ReactiveFormsModule],
  declarations: [GoogleplaceDirective],
  exports: [GoogleplaceDirective],
  providers:[]
})
export class GooglePlaceModule {
  static forRoot(): ModuleWithProviders { return {ngModule: GooglePlaceModule, providers: []}; }
}