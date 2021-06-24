import { Style } from './styles.css'

export function resolve<T>(props: T) {
  switch (true) {
    case 'shape' in props: {
      return Style[props['shape']]
    }
    default: {
      return Style.default
    }
  }
}
