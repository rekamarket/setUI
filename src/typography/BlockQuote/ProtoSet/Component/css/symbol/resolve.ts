import { Style } from './styles.css'

export function resolve<T>(props: T) {
  switch (true) {
    case 'symbol' in props && props['symbol']: {
      return Style[props['symbol']]
    }
    default: {
      return Style.default
    }
  }
}
