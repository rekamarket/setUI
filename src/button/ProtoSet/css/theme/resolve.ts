import { Style } from './styles.css'

export function resolve<T>(props: T) {
  switch (true) {
    case 'theme' in props: {
      return Style[props['theme']]
    }
    default: {
      return Style.default
    }
  }
}
