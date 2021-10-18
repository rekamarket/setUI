import { Style } from './styles.css'

export function resolve<T>(props: T) {
  switch (true) {
    case 'dividerWeight' in props: {
      return Style[props['dividerWeight']]
    }
    default: {
      return Style.default
    }
  }
}
