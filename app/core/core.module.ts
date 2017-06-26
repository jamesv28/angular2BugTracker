import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { firebaseConfigService } from './services/firebase-config';
@NgModule({
    imports: [],
    declarations: [],
    exports: []
})

export class CoreModule {

    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error("Core module exists already");
        }
    }

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                firebaseConfigService
            ]
        };
    }
}; // end of class