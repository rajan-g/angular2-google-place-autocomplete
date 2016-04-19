/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

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
