// outsource
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'viewer-multiselect',
    templateUrl: './viewer.multiselect.html',
})
export class MultiselectComponent implements OnInit {
    // getting CRF item subject ( type of multiple select ) data from viewer page
    @Input() multiselectData;
    // holders of item options data
    multiselectOptionsARRAY = [];
    multiselectOptions = {};
    // variable for multiselect default settings
    multiselectDefaultSettings = {};
    // multuselect model
    multiselectDataModel: any;
    constructor () {}
    ngOnInit () {
        // console.log(this.data);
        // preparing options data for view because of demands connected with usage of ng-multiple-select
        for ( let i = 0; this.multiselectData.options.length > i; i++ ) {
            this.multiselectOptions = {
                id: this.multiselectData.options[i].uid,
                title: this.multiselectData.options[i].title.ENGLISH,
                value: this.multiselectData.options[i].value,
            };
            this.multiselectOptionsARRAY.push( this.multiselectOptions );
        }
        // setting default settings of multiselect
        this.multiselectDefaultSettings = {
            singleSelection: false,
            idField: 'id',
            textField: 'title',
            itemsShowLimit: this.multiselectData.options.length,
            limitSelection: this.multiselectData.options.length,
        };
    }
    // method to add selected value to CRF subject item
    onItemSelect ( item:any ) {
        for ( let i = 0; this.multiselectOptionsARRAY.length > i; i++ ) {
            if ( item.id === this.multiselectOptionsARRAY[i].id ) {
                this.multiselectData.value.push(this.multiselectOptionsARRAY[i].value);
            }
        }
        // console.log(this.data);
    }
    // method to add all available values to CRF subject item
    onSelectAll ( items: any ) {
        // console.log(items);
        for ( let i = 0; this.multiselectOptionsARRAY.length > i; i++ ) {
            this.multiselectData.value.push(this.multiselectOptionsARRAY[i].value);
        }
    }
    // method to remove value from CRF subject item
    onItemDeSelect( item: any ) {
        for ( let i = 0; this.multiselectOptionsARRAY.length > i; i++ ) {
            if ( item.id === this.multiselectOptionsARRAY[i].id ) {
                this.multiselectData.value.splice( i, 1 );
                // console.log(this.data);
            }
        }
    }
}
