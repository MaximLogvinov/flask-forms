/**
 * CRF item ( as item of CRF list ) model
 * preparing data before view
 */
export class CRFItem {
    name: object;
    subject: string;
    status: string;
    crf: string;
    rules: any;
    metadata: object;
    token: string;
    id: string;
    url: string;
    updated: string;
    created: string;
    completed: any;
    preview: any;
    constructor ( data ) {
        this.name = data.name || {};
        this.subject = data.subject || '';
        this.status = data.status || '';
        this.crf = data.CRFs || '';
        this.rules = data.rules || [];
        this.metadata = data.metadata || {};
        this.token = data.token || '';
        this.id = data.id || '';
        this.url = data.url || '';
        this.updated = data.date_updated || '';
        this.created = data.date_created || '';
        this.completed = data.completed || [];
        this.preview = data.preview || null;
    }
}
