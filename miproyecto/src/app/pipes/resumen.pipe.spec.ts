import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'resumen',
})
export class ResumenPipe implements PipeTransform {
  transform(value: string, maxWords: number): string {
    return value.split(' ').slice(0, maxWords).join(' ') + '...';
  }
}
