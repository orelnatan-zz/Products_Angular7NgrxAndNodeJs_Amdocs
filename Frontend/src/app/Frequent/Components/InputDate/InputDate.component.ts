import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ToUnixFormat } from './Pips/ToUnixFormat.pipe';

@Component({
  selector: 'input-date',
  templateUrl: './InputDate.component.html',
  styleUrls: ['./InputDate.component.scss', ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ ToUnixFormat, ]
})

export class InputDate {
  @Input() title: string;
  @Input() value: string;
  @Input() min: string;
  @Input() max: string;
  @Input() validation: string;
  @Input() submitted: boolean;
  @Input() invalid: boolean;

  @Output() onChange: EventEmitter<any> = new EventEmitter();

  constructor(
      private toUnixFormat: ToUnixFormat
    ) {}

  convertToUnixFormat(date: string): string {
    return this.toUnixFormat.transform(date);
  }
}
