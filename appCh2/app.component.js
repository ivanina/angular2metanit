"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var child_component_1 = require("./child.component");
var AppComponent = (function () {
    function AppComponent() {
        this.name = "Tom";
        this.someName = "Ghost";
        this.nameLocal = "Ghost in the shield";
        this.age = 25;
        this.clicks = 0;
    }
    AppComponent.prototype.addClick = function ($event) {
        this.clicks++;
        console.log($event);
    };
    AppComponent.prototype.unClick = function ($event) {
        if (this.clicks > 0)
            this.clicks--;
        console.log($event);
    };
    AppComponent.prototype.onChange = function (flag) {
        if (flag) {
            this.clicks++;
        }
        else {
            this.clicks--;
        }
        console.log("click in parent: " + this.clicks);
    };
    AppComponent.prototype.ngOnChanges = function (changes) {
        console.log("[p] - ngOnChanges");
        for (var propName in changes) {
            var chng = changes[propName];
            var cur = JSON.stringify(chng.currentValue);
            var prev = JSON.stringify(chng.previousValue);
            this.log(propName + ": currentValue = " + cur + ", previousValue = " + prev);
        }
    };
    AppComponent.prototype.log = function (msg) {
        console.log("[p]" + msg);
    };
    AppComponent.prototype.increment = function () { this.counterComponent.counterIncrement(); };
    AppComponent.prototype.decrement = function () { this.counterComponent.counterDecrement(); };
    __decorate([
        core_1.ViewChild(child_component_1.ChildComponent), 
        __metadata('design:type', child_component_1.ChildComponent)
    ], AppComponent.prototype, "counterComponent", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            styles: [],
            styleUrls: ['appCh2/app.component.css'],
            //template: `<h1>Hello Angular 2</h1>`,
            templateUrl: 'appCh2/app.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map