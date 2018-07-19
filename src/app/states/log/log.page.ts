// outsource
import { Component, Input, OnInit} from '@angular/core';
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
// need to fix methods behaviour and delete needless variables
// also need to fix problem with pagination request behavior ( update url parameters only on second click )
export class LogPage implements OnInit {
    // token handling/ commented because there is no usage of it at that moment
    // @Input() crflist;
    // local variable to set max visible number of pagination pages
    public maxPagesCount = 3;
    // initial pagination page value
    public size = [ 2, 5, 10 ];
    public sort: string;
    // CRF items holder
    public listCRF;
    // will input pagination data in this variable after first request
    public pagination;
    constructor ( private state: StateService, public crf: CRFService ) {}
    changePaginationPage( page ) {
        // setting new page value
        this.crf.page = page;
        this.crf.log().subscribe(response => {
            this.listCRF = response[1];
        });
        // reloading page with new query parameters
        this.state.go( 'log', { page: this.crf.page } );
    }
    changePaginationSize( size ) {
        // setting new size value
        this.crf.size = size;
        this.crf.log().subscribe(response => {
            this.listCRF = response[1];
        });
        // reloading page with new query parameters
        this.state.go( 'log', { size: this.crf.size } );
    }
    changePaginationSortStatus() {
        this.crf.sortField = 'status';
        if ( this.crf.sortDirection === 'asc' ) {
            this.crf.sortDirection = 'desc';
        } else {
            this.crf.sortDirection = 'asc';
        }
        this.crf.log().subscribe(response => {
            this.listCRF = response[1];
        });
        this.state.go( 'log', { sortField: this.crf.sortField, sortDirection: this.crf.sortDirection } );
    }
    changePaginationSortEvent() {
        this.crf.sortField = 'name.ENGLISH';
        if ( this.crf.sortDirection === 'asc' ) {
            this.crf.sortDirection = 'desc';
        } else {
            this.crf.sortDirection = 'asc';
        }
        this.crf.log().subscribe(response => {
            this.listCRF = response[1];
        });
        this.state.go( 'log', { sortField: this.crf.sortField, sortDirection: this.crf.sortDirection } );
    }
    ngOnInit() {
        // transmit default pagination value
        this.crf.log().subscribe( response => {
            // set pagination values at panel in template ( total, size )
            this.pagination = response[0];
            // set list of CRFs items
            this.listCRF = response[1];
        });
    }
}
