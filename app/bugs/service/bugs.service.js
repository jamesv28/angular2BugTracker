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
var Observable_1 = require('rxjs/Observable');
var firebase_config_1 = require('../../core/services/firebase-config');
var BugService = (function () {
    function BugService(fire) {
        this.fire = fire;
        this.bugsDbRef = this.fire.database.ref().child('bugs');
    }
    BugService.prototype.getAddedBugs = function () {
        var _this = this;
        //  setup listener
        return Observable_1.Observable.create(function (obs) {
            _this.bugsDbRef.on("child_added", function (bug) {
                var newBug = bug.val();
                newBug.id = bug.key;
                obs.next(newBug);
            }, function (err) {
                obs.throw(err);
            });
        }); // end of observable
    };
    BugService.prototype.addBug = function (bug) {
        var newBugRef = this.bugsDbRef.push();
        newBugRef.set({
            title: bug.title,
            status: bug.status,
            severity: bug.severity,
            description: bug.description,
            createdBy: 'James',
            createdDate: Date.now()
        }).catch(function (err) {
            console.error("there was an error pushing a new bug");
        });
    };
    BugService.prototype.updateBug = function (bug) {
        var currentBugRef = this.bugsDbRef.child(bug.id);
        bug.id = null;
        bug.updatedBy = "Jon Snow";
        bug.updatedDate = Date.now();
        currentBugRef.update(bug);
    };
    BugService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [firebase_config_1.firebaseConfigService])
    ], BugService);
    return BugService;
}());
exports.BugService = BugService;
//# sourceMappingURL=bugs.service.js.map