import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// components
import { AppComponent } from './app.component';
import {BugListComponent} from './bugs/component/bug.component';

// modules 
import {BugModule} from './bugs/bug.module';
import {AppRouter} from './app-routes.module';
@NgModule({
    imports: [ 
        BrowserModule,
        BugModule,
        AppRouter
         ],
    declarations: [ 
        AppComponent,
        BugListComponent ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }