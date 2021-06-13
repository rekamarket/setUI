import { Style } from './styles.css'

export function resolve<T>(props: T) {
  switch (true) {
    case 'regular' in props: {
      return Style.regular
    }
    case 'bold' in props: {
      return Style.bold
    }
    case 'weight' in props: {
      return Style[props['weight']]
    }
    default: {
      return Style.initial
    }
  }
}
