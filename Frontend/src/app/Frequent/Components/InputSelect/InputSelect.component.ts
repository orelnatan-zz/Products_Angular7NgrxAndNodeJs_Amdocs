import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'input-select',
  templateUrl: './InputSelect.component.html',
  styleUrls: [ './InputSelect.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class InputSelect {
    @Input() title: string;
    @Input() validation: string;
	@Input() placeholder: string;
	@Input() type: string;
    @Input() value: string;
    @Input() submitted: boolean;
    @Input() invalid: boolean;

    @Output() onChange: EventEmitter<any> = new EventEmitter();

}
