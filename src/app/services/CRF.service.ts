// outsource
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// models
import { CRF } from '../models/crf-item.model';
import { CRFItem } from '../models/crf-items.model';
import { CRFItemSubject } from '../models/crf-item-subject.model';

@Injectable()
export class CRFService {
    constructor( private http: HttpClient ) {}
    // current CRF token
    public token;
    // request parameters for log method
    public page;
    public size;
    // sorting params in request
    // need to divide field and direction because we use different sorting requests
    // and because of comma transfiguration in url
    public sortField;
    public sortDirection;
    /**
     * log data from server
     *
     * @public
     */
    public log () {
        // set parameters ( first initialization starts at log state, with default url values )
        // and transfer it to number
        const pageNumber = +this.page;
        const pageSize = +this.size;
        // console.log(this.sortStatus);
        const credentials = {
            // subtracting one because page numbering on server side starts from zero
            'page': pageNumber ? pageNumber - 1 : 0,
            'size': pageSize,
            'sort': this.sortField + ',' + this.sortDirection, //
        };
        const CRFlist = [];
        let pagination = {};
        return this.http
            .post(
                'http://192.168.0.19:5604/flask/viewer/' + this.token + '/log',
                credentials )
            .map( data => {
                for ( let i = 0; data['items'].length > i; i++ ) {
                    CRFlist.push(new CRFItem( data['items'][i] ));
                }
                pagination = data['rest']['pagination'];
                return [ pagination, CRFlist ];
            });
    }
    public getData() {
        let totalCRFlistData = [];
        const CRFsubjectList = [];
        const CRFs = [];
        return this.http
            .get( 'http://192.168.0.19:5604/flask/viewer/' + this.token + '/data' )
            .map( data => {
                // data verification
                if ( data['CRFs'].length > 0 ) {
                    for ( let i = 0; data['CRFs'][0]['sections'][0]['items'].length > i; i++ ) {
                        CRFsubjectList.push( new CRFItemSubject( data['CRFs'][0]['sections'][0]['items'][i] ) );
                    }
                }
                for ( let i = 0; data['CRFs'].length > i; i++ ) {
                    CRFs.push( new CRF( data['CRFs'][i] ));
                }
                console.log(CRFs);
                console.log( data['CRFs'] );
                totalCRFlistData = data['CRFs'][0];
                return  CRFs;
            });
    }
    public saveCRF ( crf ) {
        console.log(crf, 'ssaveCRF');
        return this.http
            .post( 'http://192.168.0.19:5604/flask/viewer/' + this.token + '/save-crf', crf )
            .map( data => {
                console.log(data, 'success');
                return data;
            });
    }
}
