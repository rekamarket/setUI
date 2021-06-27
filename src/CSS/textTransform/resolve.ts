export function resolve<T>(props: T) {
  switch (true) {
    case 'uppercase' in props: {
      return 'uppercase'
    }
    case 'lowercase' in props: {
      return 'lowercase'
    }
    case 'capitalize' in props: {
      return 'capitalize'
    }
    case 'transform' in props: {
      return props['transform']
    }
    default: {
      return undefined
    }
  }
}
