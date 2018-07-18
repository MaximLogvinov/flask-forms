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
// need to fix methods behaviour and delete needless variables
// also need to fix problem with pagination request behavior ( update url parameters only on second click )
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
        this.crf.page = page;
        console.log(this.crf.page);
        this.crf.log( this.crf.page ).subscribe(response => {
            this.listCRF = response[1];
        });
        // this.state.go( 'log', { page: this.crf.page } );
    }
    changePaginationSize( size ) {
        if ( size === 2 ) {
           this.crf.size = size;
        } else if ( size === 5 ) {
            this.crf.size = size;
        } else {
            this.crf.size = size;
        }
        // setting new size value
       // this.pagination.size = size;
       //  this.state.params.size = size;
        console.log(this.crf.size);
        console.log(this.state.params);
        this.crf.log( this.page  ).subscribe(response => {
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
        this.crf.sortStatus = sort;
        this.crf.log( this.page ).subscribe(response => {
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
        this.crf.log(this.page).subscribe(response => {
            this.listCRF = response[1];
        });
    }
    debug(){
        console.log(this.state.params);
    }
    ngOnInit() {
        // transmit default pagination value
        this.crf.log( this.page ).subscribe( response => {
            // set pagination values at panel
            this.pagination = response[0];
            // set list of CRFs items
            this.listCRF = response[1];
            // this.state.params.page = '2';
            console.log(this.state.params);
            console.log(this.state.current);
            console.log(this.crf.page);
        });
    }
}
