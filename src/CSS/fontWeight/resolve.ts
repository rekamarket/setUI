import { Style } from './styles.css'

export function resolve<T>(props: T) {
  switch (true) {
    case 'thin' in props: {
      return Style.thin
    }
    case 'extraLight' in props: {
      return Style.extraLight
    }
    case 'light' in props: {
      return Style.light
    }
    case 'regular' in props: {
      return Style.regular
    }
    case 'medium' in props: {
      return Style.medium
    }
    case 'semiBold' in props: {
      return Style.semiBold
    }
    case 'bold' in props: {
      return Style.bold
    }
    case 'extraBold' in props: {
      return Style.extraBold
    }
    case 'heavy' in props: {
      return Style.heavy
    }
    case 'lighter' in props: {
      return Style.lighter
    }
    case 'bolder' in props: {
      return Style.bolder
    }
    case 'weight' in props: {
      return Style[props['weight']]
    }
    default: {
      return Style.initial
    }
  }
}
