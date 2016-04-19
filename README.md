Angular2
=========

The sources for this package are in (https://github.com/rajan-g/angular2-google-place-autocomplete) repo. Please file issues and pull requests against that repo.

##Usage
1.In index.html page include following script  <script src="https://maps.googleapis.com/maps/api/js?libraries=places&sensor=false"></script>
2.component file use like below
 ```typescript

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
```typescript

1. The files located in the root folder can be consumed using CommonJS.
2. The files under `/es6` are es6 compatible files that can be transpiled to
   es5 using any transpiler. This contains:
    * `dev/`: a development version that includes runtime type assertions
    * `prod/`: a production version that does not include runtime type assertions
3. The files under `/ts` are the TypeScript source files.

License: Apache MIT 2.0
