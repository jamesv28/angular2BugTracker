import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BugListComponent } from './component/bug.component';
import {AboutComponent} from '../about/component/about.component';
@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', redirectTo: 'bugs', pathMatch: 'full' },
            { path: 'bugs', component: BugListComponent },
            { path: 'about',component: AboutComponent},
            { path: '**', redirectTo: 'bugs' }
        ])
    ],
    exports: []
})

export class BugRouterModule { }