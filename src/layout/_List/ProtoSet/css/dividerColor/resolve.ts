import { Style } from './styles.css'

export function resolve<T>(props: T) {
  switch (true) {
    case 'dividerColor' in props: {
      return Style[props['dividerColor']]
    }
    default: {
      return Style.default
    }
  }
}
