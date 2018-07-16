// outsource
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// model
import { CRFItem } from '../../../crf-items.model';

@Injectable()
export class CRFService {
    constructor( private http: HttpClient ) {}

    /**
     * log data from server
     *
     * @public
     */
    public log ( pageNumber, sizeValue, sortValue ) {
        const credentials = {
            'page': pageNumber - 1,
            'size': sizeValue,
            'sort': sortValue // 'name,asc'
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
