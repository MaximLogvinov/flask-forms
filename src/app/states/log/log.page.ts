// outsource
import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';
// app
import { CRFService } from '../../services/CRF.service';

/**
 * Root application component
 *
 *
 */
@Component({
    selector: '[id="log"]',
    templateUrl: './log.html',
})
export class LogPage implements OnInit {
    public page;
    public listCRF;
    constructor ( private state: StateService, public crf: CRFService ) {}
    changePaginationOptions() {
        this.crf.log( this.page ).subscribe(response => {
            this.listCRF = response;
        });
    }
    ngOnInit() {
        this.crf.log( 1 ).subscribe( response => {
            this.listCRF = response;
            console.log( response );
        });
    }

}
