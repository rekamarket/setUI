import { Style } from './styles.css'

export function resolve<T>(props: T) {
  switch (true) {
    case 'dividerOffset' in props: {
      return Style[props['dividerOffset']]
    }
    default: {
      return Style.default
    }
  }
}
