// outsource
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { RootModule, UIRouterModule } from '@uirouter/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

// components
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { RootLayoutComponent } from './root-layout.component';
// viewer components
import { MultiselectComponent } from './viewer/form-components/multiselect-component/viewer.multiselect.component';
import { RadioComponent } from './viewer/form-components/radio-component/viewer.radio.component';
import { TextareaComponent } from './viewer/form-components/textarea-component/viewer.textarea.component';

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

// viewer state
import { ViewerPage } from './viewer/viewer.page';
import { viewerState } from './viewer/viewer.state';

import { rootLayoutState } from './root-layout.state';

/**
 * Metadata of layout state
 *
 *
 */
export const layoutState = {
    // parent: 'root-layout',
    name: 'layout',
    component: LayoutComponent
};

/**
 * define all pages within application
 *
 *
 */
export const routing: RootModule = {
    // useHash: false, // html5mode - without #
    useHash: true, // with #
    otherwise: errorState.url,
    initial: viewerState.url,
    states: [
        logState,
        loginState,
        errorState,
        viewerState,
        rootLayoutState,
        layoutState

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
        // layouts
        LayoutComponent,
        RootLayoutComponent,
        // components
        HeaderComponent,
        FooterComponent,
        // viewer components
        MultiselectComponent,
        RadioComponent,
        TextareaComponent,
        // pages
        LogPage,
        LoginPage,
        ErrorPage,
        ViewerPage
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
        NgMultiSelectDropDownModule.forRoot()
    ],
    // define outgoing modules
    exports: [
        UIRouterModule
    ]
})
export class LayoutModule { }
