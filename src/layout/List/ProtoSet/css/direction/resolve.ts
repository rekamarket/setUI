import { Style } from './styles.css'

export function resolve<T>(props: T) {
  switch (true) {
    case 'direction' in props: {
      return Style[props['direction']]
    }
    default: {
      return Style.default
    }
  }
}
