// outsource
import { Component } from '@angular/core';
// services
import { CRFService } from '../../services/CRF.service';
import { StateService } from '@uirouter/angular';

@Component({
    selector: '[id="header"]',
    templateUrl: './header.html',
})
export class HeaderComponent {
    isNavbarCollapsed: false;
    constructor(public crf: CRFService ){}
}
