export function resolve<T>(props: T) {
  switch (true) {
    case 'solid' in props: {
      return 'solid'
    }
    case 'double' in props: {
      return 'double'
    }
    case 'dotted' in props: {
      return 'dotted'
    }
    case 'dashed' in props: {
      return 'dashed'
    }
    case 'wavy' in props: {
      return 'wavy'
    }
    case 'textDecorationStyle' in props: {
      return props['textDecorationStyle']
    }
    default: {
      return undefined
    }
  }
}
