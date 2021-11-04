export function resolve<T>(props: T) {
  switch (true) {
    case 'rect' in props: {
      return 'rect'
    }
    case 'square' in props: {
      return 'square'
    }
    case 'shape' in props: {
      return props['shape']
    }
    default: {
      return undefined
    }
  }
}
