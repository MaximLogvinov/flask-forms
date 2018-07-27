import { CRFsectionItem } from './crf-item-section.model';

/**
 * Model of CRF item ( total )
 * preparing data before view
 */
export class CRF {
    id: string;
    name: object;
    description: object;
    study_id: number;
    oc_oid: string;
    status_id: any;
    item_group_id: any;
    crf_version_id: any;
    crf_id: any;
    date_updated: string;
    date_created: string;
    sections: any;
    constructor ( data ) {
        this.id = data.id || '';
        this.name = data.name || {};
        this.description = data.description || {};
        this.study_id = data.study_id || 0;
        this.oc_oid = data.oc_oid || '';
        this.status_id = data.status_id || null;
        this.item_group_id = data.item_group_id || null;
        this.crf_version_id = data.crf_version_id || null;
        this.crf_id = data.crf_id || null;
        this.date_updated = data.data_updated || '';
        this.date_created = data.data_created || '';
        this.sections = [];
        for ( let i = 0; data.sections.length > i; i++ ) {
            this.sections.push( new CRFsectionItem( data.sections[i] ) );
        }
    }
}
