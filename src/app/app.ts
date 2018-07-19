// outsource
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// app
import { LayoutModule } from './states/layout.module';
import { RootLayoutComponent } from './states/root-layout.component';
import { CRFService } from './services/CRF.service';

import { UIRouterModule } from '@uirouter/angular';

/**
 * Root application module
 *
 *
 */
@NgModule({
    bootstrap: [ RootLayoutComponent ],
    declarations: [],
    imports: [
        LayoutModule,
        BrowserModule,
    ],
    providers: [ CRFService ],
    exports: [
        UIRouterModule
    ]
})
export class AppModule { }
