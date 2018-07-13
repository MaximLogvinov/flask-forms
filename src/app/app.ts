// outsource
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// app
import { LayoutModule } from './states/layout.module';
import { RootLayoutComponent } from './states/root-layout.component';
import { CRFService } from './services/CRF.service';

import {RootModule, UIRouterModule, UIView} from '@uirouter/angular';

/**
 * Root application module
 *
 *
 */
@NgModule({
    bootstrap: [ RootLayoutComponent ], // UIView
    declarations: [],
    imports: [
        LayoutModule,
        BrowserModule,
    ],
    providers: [ CRFService ],
    // exports: [
    //     UIRouterModule
    // ]
})
export class AppModule { }
