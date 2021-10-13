import { Style } from './styles.css'

export function resolve<T>(props: T) {
  switch (true) {
    case 'symbolSize' in props: {
      return Style[props['symbolSize']]
    }
    default: {
      return Style.default
    }
  }
}
