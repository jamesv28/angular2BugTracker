import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BugRouterModule } from './bug-routes.module';
import { BugDetailComponent } from './bug-detail/bug.detail.component';
import { BugListComponent } from './component/bug.component';
import { ReactiveFormsModule } from '@angular/forms';
// service
import { BugService } from './service/bugs.service';
@NgModule({
    imports: [
        SharedModule,
        BugRouterModule,
        ReactiveFormsModule
    ],
    declarations: [
        BugDetailComponent,
        BugListComponent
    ],
    exports: [],
    providers: [
        BugService
    ]
})

export class BugModule { };