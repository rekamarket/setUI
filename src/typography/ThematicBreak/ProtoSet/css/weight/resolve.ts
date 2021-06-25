import { Style } from './styles.css'

export function resolve<T>(props: T) {
  switch (true) {
    case 'weight' in props: {
      return Style[props['weight']]
    }
    default: {
      return Style.default
    }
  }
}
