import { Style } from './styles.css'

export function resolve<T>(props: T) {
  switch (true) {
    case 'variant' in props: {
      return Style[props['variant']]
    }
    default: {
      return Style.default
    }
  }
}
