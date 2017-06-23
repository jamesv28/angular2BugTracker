import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import {BugRouterModule} from './bug-routes.module';

@NgModule({
    imports: [
        SharedModule,
        BugRouterModule
        ],
    declarations: [],
    exports: []
})

export class BugModule { };