import { Style } from './styles.css'

export function resolve<T>(props: T) {
  switch (true) {
    case 'justifyContent' in props: {
      return props['justifyContent']
    }
    default: {
      return undefined
    }
  }
}
