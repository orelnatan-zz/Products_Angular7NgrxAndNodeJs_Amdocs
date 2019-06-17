import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe ({
   name: 'toCalenderFormat'
})
export class ToCalenderFormat implements PipeTransform {
    transform(date: string): string {
        return moment(parseInt(date)).format('YYYY-MM-DD'); 
   }
}