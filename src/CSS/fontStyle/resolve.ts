import { Style } from './styles.css'

export function resolve<T>(props: T) {
  switch (true) {
    case 'italic' in props: {
      return Style.italic
    }
    case 'oblique' in props: {
      return Style.oblique
    }
    case 'style' in props: {
      return Style[props['style']]
    }
    default: {
      return Style.initial
    }
  }
}
