// outsource
import { Component, Input } from '@angular/core';

@Component({
    selector: 'viewer-checkbox',
    templateUrl: './viewer.checkbox.html',
})
export class CheckboxComponent {
    @Input() checkboxData;
}
