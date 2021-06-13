import { Style } from './styles.css'

export function resolve<T>(props: T) {
  switch (true) {
    case 'italic' in props: {
      return Style.italic
    }
    case 'oblique' in props: {
      return Style.oblique
    }
    case 'fontStyle' in props: {
      return Style[props['fontStyle']]
    }
    default: {
      return Style.initial
    }
  }
}
