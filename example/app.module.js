import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GooglePlaceModule } from '../directives/index';
var GooglePlaceExample = (function () {
    function GooglePlaceExample() {
    }
    GooglePlaceExample.decorators = [
        { type: NgModule, args: [{
                    imports: [BrowserModule, FormsModule, GooglePlaceModule],
                    declarations: [AppComponent],
                    bootstrap: [AppComponent]
                },] },
    ];
    /** @nocollapse */
    GooglePlaceExample.ctorParameters = function () { return []; };
    return GooglePlaceExample;
}());
export { GooglePlaceExample };
//# sourceMappingURL=app.module.js.map