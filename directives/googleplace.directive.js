import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
var GoogleplaceDirective = (function () {
    function GoogleplaceDirective(el, model) {
        var _this = this;
        this.model = model;
        this.setAddress = new EventEmitter();
        this._el = el.nativeElement;
        this.modelValue = this.model;
        var input = this._el;
        this.autocomplete = new google.maps.places.Autocomplete(input, {});
        google.maps.event.addListener(this.autocomplete, 'place_changed', function () {
            var place = _this.autocomplete.getPlace();
            _this.invokeEvent(place);
        });
    }
    GoogleplaceDirective.prototype.invokeEvent = function (place) {
        this.setAddress.emit(place);
    };
    GoogleplaceDirective.prototype.onInputChange = function () {
    };
    GoogleplaceDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[googleplace]',
                    providers: [NgModel],
                    host: {
                        '(input)': 'onInputChange()'
                    }
                },] },
    ];
    /** @nocollapse */
    GoogleplaceDirective.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: NgModel, },
    ]; };
    GoogleplaceDirective.propDecorators = {
        "setAddress": [{ type: Output },],
    };
    return GoogleplaceDirective;
}());
export { GoogleplaceDirective };
//# sourceMappingURL=googleplace.directive.js.map