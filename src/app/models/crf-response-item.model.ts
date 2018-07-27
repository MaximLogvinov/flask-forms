import { CRFsectionItemResponse } from './crf-section-response.model';

/**
 * Preparing CRF before sent to server
 */
export class CRFResponse {
    completed: boolean;
    data_created: string;
    data_updated: string;
    description: object;
    id: string;
    name: object;
    oc_oid: string;
    study_id: number;
    sections: any;
    constructor ( data ) {
        // need this field by default equal to 'false', because if value equal 'true' this CRF after request would be unavailable
        this.completed = false;
        this.data_created = data.data_created || '2018-06-24T11:20:00.000Z'; // remove after test
        this.data_updated = data.data_updated || '2018-06-24T11:20:00.000Z';
        this.description = data.description || {};
        this.id = data.id || '';
        this.name = data.name || {};
        this.oc_oid = data.oc_oid || '';
        this.sections = [];
        this.study_id = data.study_id || 0;
        for ( let i = 0; data.sections.length > i; i++ ) {
            this.sections.push( new CRFsectionItemResponse( data.sections[i] ) );
        }
    }
}
