import { Style } from './styles.css'

export function resolve<T>(props: T) {
  switch (true) {
    case 'color' in props: {
      return Style[props['color']]
    }
    default: {
      return Style.default
    }
  }
}
