import { Component } from '@angular/core';
import {firebaseConfigService} from './core/services/firebase-config';
@Component({
    selector: 'my-app',
    template: `<navbar></navbar>
                <div class="container">
                    <router-outlet></router-outlet>
               </div>`
})
export class AppComponent {

    constructor(private service: firebaseConfigService) {

    }
 }