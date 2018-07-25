// outsource
import { Component, OnInit } from '@angular/core';
// services
import { CRFService } from '../../services/CRF.service';

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
    //
    public nameCRF;
    public descriptionCRF;
    public formListNameCRF;
    //
    public testSelectSettings = {};
    //
    dropdownList = [];
    constructor ( public crf: CRFService ) {}
    ngOnInit () {
        this.crf.getData().subscribe(response => {
            // Untreated data. Used to get name and description property which is not part of CRFs subject model
            this.untreatedResponse = response[0];
            this.subjectCRFlist = response[1];
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
    // test multi select data
    onDebugg () {
        console.log(this.subjectCRFlist)
    }
}
