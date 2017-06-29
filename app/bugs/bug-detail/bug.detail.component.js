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
var forms_1 = require('@angular/forms');
var bugs_service_1 = require('../service/bugs.service');
var forbidden_validation_strings_1 = require('../../shared/validations/forbidden-validation.strings');
var bug_model_1 = require('../model/bug.model');
var BugDetailComponent = (function () {
    function BugDetailComponent(formB, service) {
        this.formB = formB;
        this.service = service;
        this.modalId = "bugModal";
        this.currentBug = new bug_model_1.Bug(null, null, 1, 1, null, null, null, null);
    }
    BugDetailComponent.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.configureForm();
    };
    BugDetailComponent.prototype.configureForm = function (bug) {
        if (bug) {
            this.currentBug = bug;
        }
        this.bugForm = this.formB.group({
            title: [this.currentBug.title, [forms_1.Validators.required, forbidden_validation_strings_1.forbiddenStringValidator(/puppy/i)]],
            status: [this.currentBug.status, forms_1.Validators.required],
            severity: [this.currentBug.severity, forms_1.Validators.required],
            description: [this.currentBug.description, forms_1.Validators.required]
        });
    };
    BugDetailComponent.prototype.submitForm = function () {
        console.log(this.bugForm);
        this.addBug();
    };
    BugDetailComponent.prototype.addBug = function () {
        this.currentBug.title = this.bugForm.value['title'];
        this.currentBug.status = this.bugForm.value['status'];
        this.currentBug.severity = this.bugForm.value['severity'];
        this.currentBug.description = this.bugForm.value['description'];
        this.service.addBug(this.currentBug);
        this.refreshForm();
    };
    BugDetailComponent.prototype.refreshForm = function () {
        this.bugForm.reset({
            status: 1,
            severity: 1
        });
        this.cleanBug();
    };
    BugDetailComponent.prototype.cleanBug = function () {
        this.currentBug = new bug_model_1.Bug(null, null, 1, 1, null, null);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], BugDetailComponent.prototype, "currentBug", void 0);
    BugDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'bug-detaill',
            templateUrl: 'bug.detail.component.html',
            styleUrls: ['bug.detail.component.css']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, bugs_service_1.BugService])
    ], BugDetailComponent);
    return BugDetailComponent;
}());
exports.BugDetailComponent = BugDetailComponent;
;
//# sourceMappingURL=bug.detail.component.js.map