import { Style } from './styles.css'

export function resolve<T>(props: T) {
  switch (true) {
    case 'axis' in props: {
      return Style[props['axis']]
    }
    default: {
      return Style.default
    }
  }
}
