import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'status'
})

export class UpdatePipe implements PipeTransform {
    transform(status: number) {
        if(status == 1) {
            return 'logged';
        }
        else if(status == 2) {
            return 'recreated';
        }
        else if(status == 3) {
            return "in progress";
        }
        else if(status === 4) {
            return "fixed";
        }
        else {
            return 'declined';
        }

    }
}