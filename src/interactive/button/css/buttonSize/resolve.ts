import { Style } from './styles.css'

export function resolve<T>(props: T) {
  switch (true) {
    case 'xsmall' in props: {
      return Style.xsmall
    }
    case 'small' in props: {
      return Style.small
    }
    case 'medium' in props: {
      return Style.medium
    }
    case 'large' in props: {
      return Style.large
    }
    case 'xlarge' in props: {
      return Style.xlarge
    }
    case 'size' in props: {
      return Style[props['size']]
    }
    default: {
      return Style.default
    }
  }
}
