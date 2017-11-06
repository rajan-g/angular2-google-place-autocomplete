/*
 * @author RAJAN G
 */
import { Component } from '@angular/core';
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.getAddress = function (place) {
        this.address = place['formatted_address'];
        var location = place['geometry']['location'];
        var lat = location.lat();
        var lng = location.lng();
        console.log("Address Object", place);
    };
    AppComponent.decorators = [
        { type: Component, args: [{
                    selector: 'my-app',
                    template: "\n\tType Location :\n        <input type=\"text\" [(ngModel)] = \"address\"  (setAddress) = \"getAddress($event)\" googleplace/>\n        "
                },] },
    ];
    /** @nocollapse */
    AppComponent.ctorParameters = function () { return []; };
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map