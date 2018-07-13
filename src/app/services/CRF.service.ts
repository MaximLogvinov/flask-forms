// outsource
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

// model
import { CRFItem } from '../../../crf-items.model';

@Injectable()
export class CRFService {
    constructor( private http: HttpClient ) {}

    /**
     * log data from server
     *
     * @returns {Observable<any | undefined>}
     * @public
     */
    public log ( pageNumber ) {
        const credentials = {
            'page': pageNumber - 1,
            'size': 10,
            'sort': 'name,asc'
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
                // console.log(pagination);
                // console.log(CRFlist);
                return [ pagination, CRFlist ];
            });
    }
}
