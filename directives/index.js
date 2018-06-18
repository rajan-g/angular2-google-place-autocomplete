System.register(["@angular/core", "@angular/forms", "./googleplace.directive"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, forms_1, googleplace_directive_1, GooglePlaceModule, GooglePlaceModule_1;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (googleplace_directive_1_1) {
                googleplace_directive_1 = googleplace_directive_1_1;
            }
        ],
        execute: function () {
            GooglePlaceModule = GooglePlaceModule_1 = class GooglePlaceModule {
                static forRoot() { return { ngModule: GooglePlaceModule_1, providers: [] }; }
            };
            GooglePlaceModule = GooglePlaceModule_1 = __decorate([
                core_1.NgModule({
                    imports: [forms_1.FormsModule, forms_1.ReactiveFormsModule],
                    declarations: [googleplace_directive_1.GoogleplaceDirective],
                    exports: [googleplace_directive_1.GoogleplaceDirective],
                    providers: []
                })
            ], GooglePlaceModule);
            exports_1("GooglePlaceModule", GooglePlaceModule);
        }
    };
});
//# sourceMappingURL=index.js.map