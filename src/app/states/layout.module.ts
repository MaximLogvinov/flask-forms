// outsource
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { RootModule, UIRouterModule } from '@uirouter/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
// components
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';

// app states
import { logState } from './log/log.state';
import { loginState } from './login/login.state';

/**
 * define all pages within application
 *
 *
 */
export const routing: RootModule = {
    // useHash: false, // html5mode - without #
    useHash: true, // with #
    otherwise: logState.url,
    states: [
        logState,
        loginState
    ],
};

/**
 * Layout application module
 *
 *
 */
@NgModule({
    // define list of all page components
    declarations: [
        LayoutComponent,
        HeaderComponent,
        FooterComponent,
        logState.component,
        loginState.component,

    ],
    // define dependencies for all page components
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        UIRouterModule.forRoot(routing),
        NgbModule.forRoot(),
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
    ],
    // define outgoing modules
    exports: [
        UIRouterModule
    ]
})
export class LayoutModule { }
