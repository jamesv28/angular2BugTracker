import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BugRouterModule } from './bug-routes.module';
import { BugDetailComponent } from './bug-detail/bug.detail.component';
import { BugListComponent } from './component/bug.component';
import {AboutComponent} from '../about/component/about.component';
import { ReactiveFormsModule } from '@angular/forms';
// service
import { BugService } from './service/bugs.service';
import {UpdatePipe} from './pipes/updateStatus';
import { TimeConversion } from './pipes/timeConversion'; 
//pipes
import {SeverityPipe} from './pipes/update-severity.pipe';
@NgModule({
    imports: [
        SharedModule,
        BugRouterModule,
        ReactiveFormsModule
    ],
    declarations: [
        BugDetailComponent,
        BugListComponent,
        AboutComponent,
        SeverityPipe,
        UpdatePipe,
        TimeConversion
    ],
    exports: [],
    providers: [
        BugService
    ]
})

export class BugModule { };