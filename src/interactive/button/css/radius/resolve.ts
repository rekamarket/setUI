import { Style } from './styles.css'

export function resolve<T>(props: T) {
  switch (true) {
    case 'radius' in props: {
      return Style[props['radius']]
    }
    default: {
      return Style.default
    }
  }
}
