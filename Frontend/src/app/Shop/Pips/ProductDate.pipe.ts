import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe ({
   name: 'productDate'
})
export class ProductDate implements PipeTransform {
    transform(value: string): string {
        return moment(parseInt(value)).format('DD/MM/YYYY');
   }
}