import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'severity'
})

export class SeverityPipe implements PipeTransform {
    transform(severity: number) {
        if(severity == 1) {
            return "cosmetic";
        }
        else if(severity == 2) {
            return "low";
        }
        else if(severity == 3) {
            return "medium"
        }
        else {
            return "severe"
        }
    }
}