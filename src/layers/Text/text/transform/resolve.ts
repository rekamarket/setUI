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
    case 'textTransform' in props: {
      return props['textTransform']
    }
    default: {
      return undefined
    }
  }
}
