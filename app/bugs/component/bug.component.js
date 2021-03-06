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
var bugs_service_1 = require('../service/bugs.service');
var BugListComponent = (function () {
    function BugListComponent(bugService) {
        this.bugService = bugService;
        this.bugs = [];
    }
    ;
    BugListComponent.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.getAddedBugs();
    };
    BugListComponent.prototype.getAddedBugs = function () {
        var _this = this;
        this.bugService.getAddedBugs()
            .subscribe(function (bug) {
            _this.bugs.push(bug);
            console.log('bug', _this.bugs); // TODO remove this line when finished
        }, function (err) {
            console.error("no added bug");
        });
    };
    BugListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'bug-list',
            templateUrl: 'bug.component.html',
            styleUrls: ['bug.component.css']
        }), 
        __metadata('design:paramtypes', [bugs_service_1.BugService])
    ], BugListComponent);
    return BugListComponent;
}());
exports.BugListComponent = BugListComponent;
//# sourceMappingURL=bug.component.js.map