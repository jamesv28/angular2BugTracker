import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'time'
})

export class TimeConversion implements PipeTransform {
    transform(createdTime: number) {
        let d = new Date(0);
        d.setUTCMilliseconds(createdTime);
        return d;
    }
}