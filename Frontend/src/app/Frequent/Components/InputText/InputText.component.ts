import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'input-text',
  templateUrl: './InputText.component.html',
  styleUrls: [ './InputText.component.scss'],
})

export class InputText {
    @Input() title: string;
    @Input() validation: string;
	@Input() placeholder: string;
	@Input() type: string;
    @Input() value: string;
    @Input() submitted: boolean;
    @Input() invalid: boolean;

    @Output() onChange: EventEmitter<any> = new EventEmitter();

}
