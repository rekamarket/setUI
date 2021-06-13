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
    default: {
      return Style.none
    }
  }
}
