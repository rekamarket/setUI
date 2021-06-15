import { Style } from './styles.css'

export function resolve<T>(props: T) {
  switch (true) {
    case 'solid' in props: {
      return Style.solid
    }
    case 'ghost' in props: {
      return Style.ghost
    }
    case 'soft' in props: {
      return Style.soft
    }
    case 'text' in props: {
      return Style.text
    }
    case 'variant' in props: {
      return Style[props['variant']]
    }
    default: {
      return Style.default
    }
  }
}
