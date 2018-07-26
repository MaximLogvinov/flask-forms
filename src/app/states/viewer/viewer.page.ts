// outsource
import { Component, OnInit } from '@angular/core';
// services
import { CRFService } from '../../services/CRF.service';
// pipes
import { OrderPipe } from 'ngx-order-pipe';
// test
// model
import { CRFresponseItem } from '../../models/crf-response-item.model';

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
    public subjectCRFlist;
    public untreatedResponse;
    // data holders for needed properties of untreated response
    public nameCRF;
    public descriptionCRF;
    public formListNameCRF;
    //test
    public test: CRFresponseItem;
    constructor ( public crf: CRFService, private orderPipe: OrderPipe ) {}
    ngOnInit () {
        this.crf.getData().subscribe(response => {
            // Untreated data. Used to get name and description property which is not part of CRFs subject model
            this.untreatedResponse = response[0];
            this.subjectCRFlist = response[1];
            // sorting subject CRF list collection by order property
            this.subjectCRFlist = this.orderPipe.transform(this.subjectCRFlist, 'order');
            console.log(this.untreatedResponse);
            console.log(this.subjectCRFlist);
            // preparing needed properties from server response which is not a part of CRFs subject model
            if ( this.untreatedResponse ) {
                this.nameCRF = this.untreatedResponse.name.ENGLISH || 'Problems with server response.';
                this.descriptionCRF = this.untreatedResponse.description.ENGLISH || 'Problems with server response.';
                this.formListNameCRF = this.untreatedResponse.sections[0].name.ENGLISH || 'Problems with server response.';
                console.log(this.subjectCRFlist[0].maxLength );
            } else {
                this.nameCRF = 'Empty CRF';
                this.descriptionCRF = '';
                this.formListNameCRF =  '';
            }
        });
    }
    // test data
    onDebugg () {
        console.log(this.subjectCRFlist);
        console.log(new CRFresponseItem(this.untreatedResponse));
        console.log(new CRFresponseItem(this.subjectCRFlist));
    }
}
