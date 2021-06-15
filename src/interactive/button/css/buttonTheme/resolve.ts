import { Style } from './styles.css'

export function resolve<T>(props: T) {
  switch (true) {
    case 'primary' in props: {
      return Style.primary
    }
    case 'secondary' in props: {
      return Style.secondary
    }
    case 'white' in props: {
      return Style.white
    }
    case 'black' in props: {
      return Style.black
    }
    case 'theme' in props: {
      return Style[props['theme']]
    }
    default: {
      return Style.default
    }
  }
}
