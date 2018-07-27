// outsource
import { Component, OnInit } from '@angular/core';
// services
import { CRFService } from '../../services/CRF.service';
// pipes
import { OrderPipe } from 'ngx-order-pipe';
// test
// model
import { CRFResponse} from '../../models/crf-response-item.model';
import { CRFsectionItemResponse } from '../../models/crf-section-response.model';
import { CRFItemSubjectResponse } from '../../models/crf-subject-response.model';

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
    public debugList = [];

    public totalCRFData;
    public subjectCRFlist;
    // data holders for needed properties of untreated response
    public nameCRF;
    public descriptionCRF;
    public formListNameCRF;
    constructor ( public crf: CRFService, private orderPipe: OrderPipe ) {}
    ngOnInit () {
        this.crf.getData().subscribe(response => {
            this.totalCRFData = response;
            console.log(this.totalCRFData, 'viewer crf');
            // Untreated data. Used to get name and description property which is not part of CRFs subject model
            this.subjectCRFlist = this.totalCRFData[0].sections[0].items;
            // sorting subject CRF list collection by order property
            this.subjectCRFlist = this.orderPipe.transform(this.subjectCRFlist, 'order');
            // preparing needed properties for view
            if ( this.totalCRFData[0] ) {
                this.nameCRF = this.totalCRFData[0].name.ENGLISH;
                this.descriptionCRF = this.totalCRFData[0].description.ENGLISH;
                this.formListNameCRF = this.totalCRFData[0].sections[0].name.ENGLISH;
            } else {
                this.nameCRF = 'Empty CRF';
                this.descriptionCRF = '';
                this.formListNameCRF = '';
            }
        });
    }
    // test data
    onDebugg () {
        this.totalCRFData[0].sections[0].items = this.subjectCRFlist;
        console.log(this.totalCRFData);
        this.debugList.push( new CRFResponse( this.totalCRFData[0] ));
        console.log( this.debugList , 'response');
        this.crf.saveCRF(this.debugList[0]);
    }
}
