// outsource
import { Component } from '@angular/core';
import { StateService } from '@uirouter/angular';

@Component({
    selector: '[id="header"]',
    templateUrl: './header.html',
})
export class HeaderComponent {
    isNavbarCollapsed: false;
}
