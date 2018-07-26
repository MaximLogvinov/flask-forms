// outsource
import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'viewer-textarea',
    templateUrl: './viewer.textarea.html',
})
export class TextareaComponent implements OnInit{
    @Input() textareaData;
    
    ngOnInit () {
        console.log(this.textareaData);
    }
    // saveText ( item: any ) {
    //     this.values += event.target.value + ' | ';
    // }
}
