// outsource
import { Component, OnInit } from '@angular/core';
// services
import { CRFService } from '../../services/CRF.service';
import { StateService } from '@uirouter/angular';
// pipes
import { OrderPipe } from 'ngx-order-pipe';
// model
import { CRFResponse} from '../../models/crf-response-item.model';
/**
 * Root application component
 *
 *
 */
@Component({
    selector: '[id="viewer"]',
    templateUrl: './viewer.html',
})
export class ViewerPage implements OnInit {
    public dataCRFResponse = [];

    public totalCRFData;
    public subjectCRFlist = [];
    // data holders for needed properties of untreated response
    public nameCRF;
    public descriptionCRF;
    public formListNameCRF;
    constructor ( public crf: CRFService, private orderPipe: OrderPipe, private state: StateService ) {}
    ngOnInit () {
        this.crf.getData().subscribe(response => {
            this.totalCRFData = response;
            for ( let i = 0; this.totalCRFData.length > i; i++ ) {
                for ( let j = 0; this.totalCRFData[i].sections.length > j; j++ ) {
                    // variable for setting changes in current items list
                    this.subjectCRFlist[i] = this.totalCRFData[i].sections[j].items;
                    console.log(this.subjectCRFlist[i]);
                    // sorting subject CRF list collection by order property
                    this.subjectCRFlist[i] = this.orderPipe.transform(this.subjectCRFlist[i], 'order');
                    // preparing needed properties for view
                    if ( this.totalCRFData[i] ) {
                        this.nameCRF = this.totalCRFData[i].name.ENGLISH;
                        this.descriptionCRF = this.totalCRFData[i].description.ENGLISH;
                        this.formListNameCRF = this.totalCRFData[i].sections[j].name.ENGLISH;
                    } else {
                        this.nameCRF = 'Empty CRF';
                        this.descriptionCRF = '';
                        this.formListNameCRF = '';
                    }
                }
            }

        });
    }
    sentDataCRF () {
        this.totalCRFData[0].sections[0].items = this.subjectCRFlist;
        console.log(this.totalCRFData);
        this.dataCRFResponse.push( new CRFResponse( this.totalCRFData[0] ));
        console.log( this.dataCRFResponse , 'response');
        this.crf
            .saveCRF(this.dataCRFResponse[0])
            .subscribe(response => { console.log('success', response); } );
        this.state.go('log', { token: this.crf.token} );
    }
}
