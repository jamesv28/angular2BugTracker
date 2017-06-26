import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { FIREBASE_CONFIG } from '../constants/constants';
@Injectable()

export class firebaseConfigService {
    constructor() {
        this.configureApp();
    }

    configureApp() {
        var app = firebase.initializeApp(FIREBASE_CONFIG);
        console.log('app',app);
    }
}