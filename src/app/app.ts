// outsource
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// app
import { LayoutModule } from './states/layout.module';
import { LayoutComponent } from './states/layout.component';
import { CRFService } from './services/CRF.service';

/**
 * Root application module
 *
 *
 */
@NgModule({
    bootstrap: [ LayoutComponent ],
    imports: [
        LayoutModule,
        BrowserModule,
    ],
    providers: [ CRFService ],
})
export class AppModule { }
