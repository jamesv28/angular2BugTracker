import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BugRouterModule } from './bug-routes.module';

// service
import { BugService } from './service/bugs.service';
@NgModule({
    imports: [
        SharedModule,
        BugRouterModule
    ],
    declarations: [],
    exports: [],
    providers: [
        BugService
    ]
})

export class BugModule { };