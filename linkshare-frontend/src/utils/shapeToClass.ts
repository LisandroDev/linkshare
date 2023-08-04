import { Shape } from '../types/types';

export function shapeToClass(shape: Shape) {
  switch (shape) {
    case 'CIRCLE':
      return 'rounded rounded-full';

    case 'ROUNDED':
      return 'rounded rounded-md';

    case 'SQUARE':
      return 'rounded-none';
    default:
      'rounded-none';
  }
}
