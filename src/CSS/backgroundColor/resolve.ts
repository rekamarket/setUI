import { Style } from './styles.css'

export function resolve<T>(props: T) {
  switch (true) {
    case 'primary' in props: {
      return Style.primary
    }
    case 'secondary' in props: {
      return Style.secondary
    }
    case 'black' in props: {
      return Style.black
    }
    case 'white' in props: {
      return Style.white
    }
    case 'background' in props: {
      return Style[props['background']]
    }
    default: {
      return Style.initial
    }
  }
}
