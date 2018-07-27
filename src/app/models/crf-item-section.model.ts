import { CRFItemSubject } from './crf-item-subject.model';

/**
 * Preparing CRF section data
 * before sent to server
 */
export class CRFsectionItem {
    name: object;
    description: object;
    crfID: string;
    owner_id: any;
    status_id: any;
    crf_version_id: any;
    crf_id: any;
    section_id: any;
    date_updated: string;
    date_created: string;
    order: number;
    id: string;
    items: any;
    constructor ( data ) {
        this.name = data.name || {};
        this.description = data.description || {};
        this.crfID = data.crfID || '';
        this.owner_id = data.owner_id || null;
        this.status_id = data.status_id || null;
        this.crf_version_id = data.crf_version_id || null;
        this.crf_id = data.crf_id || null;
        this.section_id = data.section_id || null;
        this.date_updated = data.data_updated || '';
        this.date_created = data.data_created || '';
        this.order = data.order || 0;
        this.id = data.id || '';
        this.items = [];
        for ( let i = 0; data.items.length > i; i++ ) {
            this.items.push( new CRFItemSubject( data.items[i] ) );
        }
    }
}
