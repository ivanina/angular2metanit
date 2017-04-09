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
var ChildComponent = (function () {
    function ChildComponent() {
        this.name = "John";
        this.childClicks = 0;
        this.onChange = new core_1.EventEmitter();
        this.someUserNameChange = new core_1.EventEmitter();
    }
    Object.defineProperty(ChildComponent.prototype, "userAge", {
        get: function () {
            return this._userAge;
        },
        set: function (age) {
            if (age < 0) {
                this._userAge = 0;
            }
            else {
                this._userAge = age;
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    ChildComponent.prototype.change = function (flag) {
        if (flag) {
            this.childClicks++;
        }
        else {
            this.childClicks--;
        }
        console.log("click in child: " + this.childClicks);
        this.onChange.emit(flag);
    };
    ChildComponent.prototype.onChangeName = function (name) {
        this.someUserName = name;
        this.someUserNameChange.emit(name);
    };
    ChildComponent.prototype.ngOnChanges = function (changes) {
        console.log("[ch] - ngOnChanges");
        for (var propName in changes) {
            var chng = changes[propName];
            var cur = JSON.stringify(chng.currentValue);
            var prev = JSON.stringify(chng.previousValue);
            this.log(propName + ": currentValue = " + cur + ", previousValue = " + prev);
        }
    };
    ChildComponent.prototype.log = function (msg) {
        console.log("[ch]" + msg);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ChildComponent.prototype, "userName", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], ChildComponent.prototype, "userAge", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ChildComponent.prototype, "onChange", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ChildComponent.prototype, "someUserName", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ChildComponent.prototype, "someUserNameChange", void 0);
    ChildComponent = __decorate([
        core_1.Component({
            selector: 'child-comp',
            //template: ``,
            templateUrl: 'appCh2/child.component.html',
            styles: ["h2, p {color:darkred;}"]
        }), 
        __metadata('design:paramtypes', [])
    ], ChildComponent);
    return ChildComponent;
}());
exports.ChildComponent = ChildComponent;
//# sourceMappingURL=child.component.js.map