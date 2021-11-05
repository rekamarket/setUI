export function resolve<T>(props: T) {
  switch (true) {
    case 'primary' in props: {
      return 'primary'
    }
    case 'secondary' in props: {
      return 'secondary'
    }
    case 'critical' in props: {
      return 'critical'
    }
    case 'white' in props: {
      return 'white'
    }
    case 'black' in props: {
      return 'black'
    }
    case 'theme' in props: {
      return props['theme']
    }
    default: {
      return undefined
    }
  }
}
