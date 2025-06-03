import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resumen'
})
export class ResumenPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
