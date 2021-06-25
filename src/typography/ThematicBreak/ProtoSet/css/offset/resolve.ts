import { Style } from './styles.css'

export function resolve<T>(props: T) {
  switch (true) {
    case 'offset' in props: {
      return Style[props['offset']]
    }
    default: {
      return Style.default
    }
  }
}
