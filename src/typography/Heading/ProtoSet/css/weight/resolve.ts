export function resolve<T>(props: T) {
  switch (true) {
    case 'regular' in props: {
      return 'regular'
    }
    case 'bold' in props: {
      return 'bold'
    }
    case 'fontWeight' in props: {
      return props['fontWeight']
    }
    default: {
      return undefined
    }
  }
}
