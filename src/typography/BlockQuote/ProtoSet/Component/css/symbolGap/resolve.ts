import { Style } from './styles.css'

export function resolve<T>(props: T) {
  switch (true) {
    case 'symbolGap' in props: {
      return Style[props['symbolGap']]
    }
    default: {
      return Style.default
    }
  }
}
