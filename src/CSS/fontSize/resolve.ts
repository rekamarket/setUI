import { Style } from './styles.css'

export function resolve<T>(props: T) {
  switch (true) {
    case 'xxxsmall' in props: {
      return Style.xxxsmall
    }
    case 'xxxs' in props: {
      return Style.xxxsmall
    }
    case 'xxsmall' in props: {
      return Style.xxsmall
    }
    case 'xxs' in props: {
      return Style.xxsmall
    }
    case 'xsmall' in props: {
      return Style.xsmall
    }
    case 'xs' in props: {
      return Style.xsmall
    }
    case 'small' in props: {
      return Style.small
    }
    case 's' in props: {
      return Style.small
    }
    case 'medium' in props: {
      return Style.medium
    }
    case 'm' in props: {
      return Style.medium
    }
    case 'large' in props: {
      return Style.large
    }
    case 'l' in props: {
      return Style.large
    }
    case 'xlarge' in props: {
      return Style.xlarge
    }
    case 'xl' in props: {
      return Style.xlarge
    }
    case 'xxlarge' in props: {
      return Style.xxlarge
    }
    case 'xxl' in props: {
      return Style.xxlarge
    }
    case 'xxxlarge' in props: {
      return Style.xxxlarge
    }
    case 'xxxl' in props: {
      return Style.xxxlarge
    }
    case 'smaller' in props: {
      return Style.smaller
    }
    case 'larger' in props: {
      return Style.larger
    }
    case 'size' in props: {
      return Style[props['size']]
    }
    default: {
      return Style.initial
    }
  }
}
