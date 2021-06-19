import { Style } from './styles.css'

export function resolve<T>(props: T) {
  switch (true) {
    case 'size' in props: {
      return Style[props['size']]
    }
    default: {
      return Style.default
    }
  }
}
