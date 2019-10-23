import { Pipe, PipeTransform } from '@angular/core';

// m ^ n (2^3)
// {{ 2 | power: 3   }}
// default 2^1 [1 to be default]
// {{ 2 | power}}

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  // method is called by angular
  // m is from left side of the pipe
  transform(m: number, n: number = 1): number {
    return Math.pow(m, n);
  }

}
