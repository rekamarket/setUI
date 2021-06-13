import { Style } from './styles.css'

export function resolve<T>(props: T) {
  switch (true) {
    case 'uppercase' in props: {
      return Style.uppercase
    }
    case 'lowercase' in props: {
      return Style.lowercase
    }
    case 'capitalize' in props: {
      return Style.capitalize
    }
    case 'transform' in props: {
      return Style[props['transform']]
    }
    default: {
      return Style.none
    }
  }
}
