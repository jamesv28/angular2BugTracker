import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {BugListComponent} from './component/bug.component';

@NgModule({
    imports: [
        RouterModule.forChild([
           {path: 'bugs',component:BugListComponent} 
        ])
    ],
    exports: []
})

export class BugRouterModule { }