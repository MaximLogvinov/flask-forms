/**
 * Model of CRF item subject
 * preparing data before view
 */
export class CRFItemSubjectResponse {
    type: string;
    title: object;
    label: object;
    id: string;
    date_updated: string;
    date_created: string;
    oc_oid: string;
    adds: object;
    order: number;
    options: any;
    value: any;
    constructor ( data ) {
        this.type = data.type || '';
        this.title = data.title || {};
        this.label = data.label || {};
        this.oc_oid = data.ocoID || '';
        this.id = data.id || '';
        this.date_updated = data.updated || '';
        this.date_created = data.created || '';
        this.order = data.order || 0;
        this.value = data.value || [];
        this.options = data.options || [];
        this.adds = {
            // setting null, false values because of type conversion
            pattern: data.pattern || null,
            placeholder: data.placeholder || {},
            disabled: data.disabled || false,
            help: data.help || {},
            required: data.required || false
        };
    }
}
