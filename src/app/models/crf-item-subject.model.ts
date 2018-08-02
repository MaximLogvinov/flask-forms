/**
 * Model of CRF item subject
 * preparing data for view
 */
export class CRFItemSubject {
    type: string;
    title: object;
    label: object;
    crfId: string;
    sectionId: string;
    ocoID: string;
    itemFormMetadataID: any;
    itemGroupMetadata: any;
    updated: string;
    created: string;
    defaultValue: any;
    order: number;
    // from adds object
    branchingLogic: string;
    disabled: boolean;
    required: boolean;
    pattern: any;
    placeholder: object;
    help: object;
    // options
    options: any;
    id: string;
    value: any;
    maxLength: number;
    rows: number;
    constructor ( data ) {
        this.type = data.type || '';
        this.title = data.title || {};
        this.label = data.label || {};
        this.crfId = data.crfId || '';
        this.sectionId = data.sectionId || '';
        this.ocoID = data.oc_oid || '';
        this.itemFormMetadataID = data.item_form_metadata_id || null;
        this.itemGroupMetadata = data.item_group_metadata_id || null;
        this.updated = data.date_updated || '';
        this.created = data.date_created || '';
        this.defaultValue = data.defaultValue || [];
        this.order = data.order || 0;
        this.options = data.options || [];
        this.id = data.id || '';
        // value parameter expected to be filled by the user and then sent to server
        this.value = [];
        // from adds
        this.branchingLogic = data.branchingLogic || '';
        this.disabled = data.adds.disabled || false;
        this.required = data.adds.required || false;
        this.pattern = data.adds.pattern || null;
        this.placeholder = data.adds.placeholder || {};
        this.help = data.adds.help || {};
        this.maxLength = data.adds.maxlength || 0;
        this.rows = data.adds.rows || 0;
    }
}
