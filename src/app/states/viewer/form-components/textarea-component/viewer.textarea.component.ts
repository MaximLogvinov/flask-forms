// outsource
import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'viewer-textarea',
    templateUrl: './viewer.textarea.html',
})
export class TextareaComponent implements OnInit {
    @Input() textareaData;
    public textareaLabel;
    ngOnInit () {
        this.textareaLabel = this.textareaData.label.ENGLISH;
    }
    getTextareaValue( text: string ) {
        // using [] as wrapper because of server requirements to response
        this.textareaData.value = [ text ];
    }
}
