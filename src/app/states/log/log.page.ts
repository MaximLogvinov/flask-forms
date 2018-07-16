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
    // set max visible number of pagination pages
    public maxPagesCount = 3;
    // initial pagination page value
    public page = 1;
    public size = [ 2, 5, 10 ];
    public sort: string;
    // for CRF items
    public listCRF;
    // will input pagination data in this variable after first request
    public pagination;
    constructor ( private state: StateService, public crf: CRFService ) {}
    changePaginationPage( page ) {
        // setting new page value
        this.page = page;
        this.crf.log( this.page, this.pagination.size, 'name,asc' ).subscribe(response => {
            this.listCRF = response[1];
        });
    }
    changePaginationSize( size ) {
        // setting new size value
        this.pagination.size = size;
        this.crf.log( this.page , this.pagination.size, 'name,asc' ).subscribe(response => {
            this.listCRF = response[1];
        });
    }
    changePaginationSortStatus( sort ) {
        if ( sort === 'status,asc' ) {
            sort = 'status,desc';
        } else {
            sort = 'status,asc';
        }
        // setting new sort value
        this.sort = sort;
        this.crf.log( this.page , this.pagination.size, sort ).subscribe(response => {
            this.listCRF = response[1];
        });
    }
    changePaginationSortEvent( sort ) {
        if (sort === 'name.ENGLISH,desc') {
            sort = 'name.ENGLISH,asc';
        } else {
            sort = 'name.ENGLISH,desc';
        }
        // setting new sort value
        this.sort = sort;
        this.crf.log(this.page, this.pagination.size, sort).subscribe(response => {
            this.listCRF = response[1];
        });
    }
    ngOnInit() {
        // transmit default pagination value
        this.crf.log( this.page, this.size[1], 'name,asc' ).subscribe( response => {
            // set pagination values at panel
            this.pagination = response[0];
            // set list of CRFs items
            this.listCRF = response[1];
            console.log( response );
        });
    }
}
