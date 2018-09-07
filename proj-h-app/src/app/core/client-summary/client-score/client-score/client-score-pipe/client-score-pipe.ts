
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'clientScore'})
export class ClientScorePipe implements PipeTransform {
 
    transform(value: number, exponent: string): string {
        if(value === 1)
            return "Poor";
        if(value === 2)
            return "Weak";
        if(value === 3)
            return "Average";
        if(value === 4)
            return "Good";
        if(value === 5)
            return "Strong";
    }
}
