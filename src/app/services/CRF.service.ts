// outsource
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// model
import { CRFItem } from '../models/crf-items.model';

@Injectable()
export class CRFService {
    constructor( private http: HttpClient ) {}
    // request parameters
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
            'sort': this.sortField + ',' + this.sortDirection, // 'status,asc'
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
                return [ pagination, CRFlist ];
            });
    }
}
