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
    public pagination;
    constructor ( private state: StateService, public crf: CRFService ) {}
    changePaginationOptions() {
        // problems with page parameter, fix next time
        this.crf.log( 1 ).subscribe(response => {
            this.listCRF = response[1];
        });
    }
    ngOnInit() {
        this.crf.log( 1 ).subscribe( response => {
            this.pagination = response[0];
            this.listCRF = response[1];
            console.log( response );
        });
    }

}
