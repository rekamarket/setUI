export function resolve<T>(props: T) {
  switch (true) {
    case 'rect' in props: {
      return 'rect'
    }
    case 'square' in props: {
      return 'square'
    }
    case 'fit' in props: {
      return 'fit'
    }
    case 'shape' in props: {
      return props['shape']
    }
    default: {
      return undefined
    }
  }
}
