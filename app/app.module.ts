import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';

// components
import { AppComponent } from './app.component';
import { BugListComponent } from './bugs/component/bug.component';
import { NavbarComponent } from './navbar/navbar.component';

// modules 
import { BugModule } from './bugs/bug.module';
import { AppRouter } from './app-routes.module';
@NgModule({
    imports: [
        BrowserModule,
        BugModule,
        AppRouter,
        CoreModule.forRoot()
    ],
    declarations: [
        AppComponent,
        BugListComponent,
        NavbarComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }