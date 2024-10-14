import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(value: number): string {
    if (value == null || value < 0) {
      return '00:00 hours';
    }

    const hours = Math.floor(value / 60);
    const minutes = Math.floor(value % 60);

    const paddedHours = hours.toString().padStart(2, '0');
    const paddedMinutes = minutes.toString().padStart(2, '0');

    return `${paddedHours}:${paddedMinutes} ${hours > 1 ? 'hours' : 'hour'} `;
  }
}
