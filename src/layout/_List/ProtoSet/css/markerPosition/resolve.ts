import { Style } from './styles.css'

export function resolve<T>(props: T) {
  switch (true) {
    case 'inside' in props: {
      return Style.inside
    }
    case 'outside' in props: {
      return Style.outside
    }
    case 'markerPosition' in props: {
      return Style[props['markerPosition']]
    }
    default: {
      return Style.default
    }
  }
}
