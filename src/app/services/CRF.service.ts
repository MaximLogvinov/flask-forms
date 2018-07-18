// outsource
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// model
import { CRFItem } from '../models/crf-items.model';

@Injectable()
export class CRFService {
    constructor( private http: HttpClient ) {}
    public page;
    public size;
    public sortStatus;
    public sortEvent;
    /**
     * log data from server
     *
     * @public
     */
    // need to fix behaviour of this function and input crf variables in request!
    public log ( pageNumber ) {
        // set size value ( first initialization starts at log state, with default url values )
        // and transfer it to number from string
        const pageSize = +this.size;
        console.log(this.sortStatus);
        const credentials = {
            'page': pageNumber - 1,
            'size': pageSize,
            'sortStatus': this.sortStatus, // 'status,asc'
            'sortEvent': 'name,asc'
        };
        const CRFlist = [];
        let pagination = {};
        return this.http
            .post(
                'http://192.168.0.19:5604/flask/viewer/XLJV7EmzwmZM/log',
                credentials )
            .map( data => {
                for ( let i = 0; data['items'].length > i; i++ ) {
                    CRFlist.push(new CRFItem(data['items'][i]));
                }
                pagination = data['rest']['pagination'];
                console.log(data);
                return [ pagination, CRFlist ];
            });
    }
}
