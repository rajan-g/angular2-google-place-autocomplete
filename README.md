Angular2
=========
##Sample output
![google-search](https://cloud.githubusercontent.com/assets/13415700/16227016/e4ea3010-37cb-11e6-94ea-0d39b4650290.png)

The sources for this package are in (https://github.com/rajan-g/angular2-google-place-autocomplete) repo. Please file issues and pull requests against that repo.

### Live Demo
[Live Demo Site](http://www.angular2modules.com/google "Live Demo Site For Google Place Auto Complete ")
OR
[Live Demo Site](http://www.angular2modules.com "Live Demo Site For Google Place Auto Complete ")
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
