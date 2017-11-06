import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleplaceDirective } from './googleplace.directive';
var GooglePlaceModule = (function () {
    function GooglePlaceModule() {
    }
    GooglePlaceModule.forRoot = function () { return { ngModule: GooglePlaceModule, providers: [] }; };
    GooglePlaceModule.decorators = [
        { type: NgModule, args: [{
                    imports: [FormsModule, ReactiveFormsModule],
                    declarations: [GoogleplaceDirective],
                    exports: [GoogleplaceDirective],
                    providers: []
                },] },
    ];
    /** @nocollapse */
    GooglePlaceModule.ctorParameters = function () { return []; };
    return GooglePlaceModule;
}());
export { GooglePlaceModule };
//# sourceMappingURL=index.js.map