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
var UpdatePipe = (function () {
    function UpdatePipe() {
    }
    UpdatePipe.prototype.transform = function (status) {
        if (status == 1) {
            return 'logged';
        }
        else if (status == 2) {
            return 'recreated';
        }
        else if (status == 3) {
            return "in progress";
        }
        else if (status === 4) {
            return "fixed";
        }
        else {
            return 'declined';
        }
    };
    UpdatePipe = __decorate([
        core_1.Pipe({
            name: 'status'
        }), 
        __metadata('design:paramtypes', [])
    ], UpdatePipe);
    return UpdatePipe;
}());
exports.UpdatePipe = UpdatePipe;
//# sourceMappingURL=updateStatus.js.map