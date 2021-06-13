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
    case 'normal' in props: {
      return Style.normal
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
    case 'fontWeight' in props: {
      return Style[props['fontWeight']]
    }
    default: {
      return Style.initial
    }
  }
}
