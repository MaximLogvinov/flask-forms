// outsource
import { Component, Input } from '@angular/core';

@Component({
    selector: 'viewer-radio',
    templateUrl: './viewer.radio.html',
})
export class RadioComponent {
    @Input() radioData;
    onSelect ( item: any ) {
        // wrapping item in array because response requirement
        this.radioData.value = [item];
    }
}
