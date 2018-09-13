// outsource
import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'viewer-checkbox',
    templateUrl: './viewer.checkbox.html',
})
export class CheckboxComponent implements OnInit {
    @Input() checkboxData;
    public checkboxLabel: string;
    getCheckboxValue( value: boolean ) {
        // using [] as wrapper because of server requirements to response
        this.checkboxData.value = [ value ];
        console.log(this.checkboxData);
    }
    ngOnInit () {
        this.checkboxLabel = this.checkboxData.label.ENGLISH;
    }
}
