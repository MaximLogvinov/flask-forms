// outsource
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { RootModule, UIRouterModule } from '@uirouter/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// components
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';

// app states

// log state
import { logState } from './log/log.state';
import { LogPage } from './log/log.page';

// login state
import { loginState } from './login/login.state';
import { LoginPage } from './login/login.page';

// error state
import { ErrorPage } from './error/error.page.ts';
import { errorState } from './error/error.state.ts';

/**
 * define all pages within application
 *
 *
 */
export const routing: RootModule = {
    // useHash: false, // html5mode - without #
    useHash: true, // with #
    otherwise: errorState.url,
    states: [
        logState,
        loginState,
        errorState
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
        LogPage,
        LoginPage,
        ErrorPage
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
