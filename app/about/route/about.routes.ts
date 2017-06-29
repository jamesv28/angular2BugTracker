import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutComponent } from '../component/about.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'about', component: AboutComponent }
        ])
    ],
    exports: []
})

export class AboutRoutesModule {};