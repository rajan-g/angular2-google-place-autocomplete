Angular2
=========

The sources for this package are in (https://github.com/rajan-g/angular2-google-place-autocomplete) repo. Please file issues and pull requests against that repo.

##Usage
    node install
      npm install angular2-google-map-auto-complete
    bower install
      bower install google-map-auto-complete
###1.In index.html page include following script 
      <script src="https://maps.googleapis.com/maps/api/js?libraries=places&sensor=false"></script>
###2.component file use like below
       import {Component} from 'angular2/core';
       import {GoogleplaceDirective} from '../directives/googleplace.directive';
       
       @Component({
           selector : 'my-app',
           directives: [GoogleplaceDirective],
           template:  `
               <input type="text" [(ngModel)] = "address"  (setAddress) = "getAddress($event)" googleplace/>
               `    
       })
       export class AppComponent {
           public address : Object;
           getAddress(place:Object) {       
               this.address = place['formatted_address'];
               var location = place['geometry']['location'];
               var lat =  location.lat();
               var lng = location.lng();
               console.log("Address Object", place);
           }
       }
