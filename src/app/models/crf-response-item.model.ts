/**
 * Preparing CRF before sent to server
 */
export class CRFresponseItem {
    completed: boolean;
    data_created: Date;
    data_updated: Date;
    description: object;
    id: string;
    name: object;
    oc_oid: string;
    study_id: number;
    sections: any;
    // sections properties
    constructor ( data ) {
        this.completed = data.completed;
        this.data_created = data.data_created || '';
        this.data_updated = data.data_updated || '';
        this.description = data.description;
        this.id = data.id;
        this.name = data.name;
        this.oc_oid = data.oc_oid;
        this.sections = [];
        this.study_id = data.study_id;
        // fill there sections using for cycle
    }
}
