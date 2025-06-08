import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resaltar',
  standalone: false
})
export class ResaltarPipe implements PipeTransform {

   transform(value: string, icon: string = '🌟'): string {
    return `${icon} ${value.toUpperCase()}`;
  }
}
