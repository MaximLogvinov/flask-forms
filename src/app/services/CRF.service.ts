// outsource
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

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
        return this.http
            .post(
                'http://192.168.0.19:5604/flask/viewer/XLJV7EmzwmZM/log',
                credentials )
            .map( data => {
                console.log(data);
                return data;
            });
    }
}
