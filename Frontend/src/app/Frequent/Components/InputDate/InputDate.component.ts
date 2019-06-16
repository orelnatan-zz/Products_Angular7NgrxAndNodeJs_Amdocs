import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'input-date',
  templateUrl: './InputDate.component.html',
  styleUrls: ['./InputDate.component.scss', ],
  changeDetection: ChangeDetectionStrategy.OnPush
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

  convertToCalenderFormat(date: string): string {
    return moment(parseInt(date)).format('YYYY-MM-DD');
  }

  convertToUnixFormat(date): string {
    return (new Date(date).getTime()).toString();
  }
}
