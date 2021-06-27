export function resolve<T>(props: T) {
  switch (true) {
    case 'pill' in props: {
      return 'pill'
    }
    case 'circle' in props: {
      return 'circle'
    }
    case 'radius' in props: {
      return props['radius']
    }
    default: {
      return undefined
    }
  }
}
