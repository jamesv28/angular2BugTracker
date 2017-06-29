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
var shared_module_1 = require('../shared/shared.module');
var bug_routes_module_1 = require('./bug-routes.module');
var bug_detail_component_1 = require('./bug-detail/bug.detail.component');
var bug_component_1 = require('./component/bug.component');
var about_component_1 = require('../about/component/about.component');
var forms_1 = require('@angular/forms');
// service
var bugs_service_1 = require('./service/bugs.service');
var updateStatus_1 = require('./pipes/updateStatus');
var timeConversion_1 = require('./pipes/timeConversion');
//pipes
var update_severity_pipe_1 = require('./pipes/update-severity.pipe');
var BugModule = (function () {
    function BugModule() {
    }
    BugModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                bug_routes_module_1.BugRouterModule,
                forms_1.ReactiveFormsModule
            ],
            declarations: [
                bug_detail_component_1.BugDetailComponent,
                bug_component_1.BugListComponent,
                about_component_1.AboutComponent,
                update_severity_pipe_1.SeverityPipe,
                updateStatus_1.UpdatePipe,
                timeConversion_1.TimeConversion
            ],
            exports: [],
            providers: [
                bugs_service_1.BugService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], BugModule);
    return BugModule;
}());
exports.BugModule = BugModule;
;
//# sourceMappingURL=bug.module.js.map