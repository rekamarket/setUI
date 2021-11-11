export function resolve<T>(props: T) {
  switch (true) {
    case 'solid' in props: {
      return 'solid'
    }
    case 'ghost' in props: {
      return 'ghost'
    }
    case 'soft' in props: {
      return 'soft'
    }
    case 'text' in props: {
      return 'text'
    }
    case 'variant' in props: {
      return props['variant']
    }
    default: {
      return undefined
    }
  }
}
