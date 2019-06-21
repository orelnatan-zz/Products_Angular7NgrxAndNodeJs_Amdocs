import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({
   name: 'toUnixFormat'
})
export class ToUnixFormat implements PipeTransform {
    transform(date: string): string {
        return (new Date(date).getTime()).toString();
   }
}