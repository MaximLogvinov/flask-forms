import { CRFItemSubjectResponse } from './crf-subject-response.model';

/**
 * Preparing CRF section data
 * before sent to server
 */
export class CRFsectionItemResponse {
    name: object;
    data_created: string;
    data_updated: string;
    description: object;
    id: string;
    items: any;
    constructor ( data ) {
        this.data_created = data.data_created || '';
        this.data_updated = data.data_updated || '';
        this.description = data.description || {};
        this.id = data.id || '';
        this.items = [];
        this.name = data.name || {};
        for ( let i = 0; data.items.length > i; i++ ) {
            this.items.push( new CRFItemSubjectResponse( data.items[i] ) );
        }
    }
}
