import { Style } from './styles.css'

export function resolve<T>(props: T) {
  switch (true) {
    case 'marker' in props: {
      return Style[props['marker']]
    }
    default: {
      return Style.default
    }
  }
}
