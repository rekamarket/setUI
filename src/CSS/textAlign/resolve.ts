import { Style } from './styles.css'

export function resolve<T>(props: T) {
  switch (true) {
    case 'start' in props: {
      return Style.start
    }
    case 'center' in props: {
      return Style.center
    }
    case 'end' in props: {
      return Style.end
    }
    case 'left' in props: {
      return Style.left
    }
    case 'right' in props: {
      return Style.right
    }
    case 'justify' in props: {
      return Style.justify
    }
    case 'align' in props: {
      return Style[props['align']]
    }
    default: {
      return Style.initial
    }
  }
}
