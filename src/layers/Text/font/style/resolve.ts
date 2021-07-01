export function resolve<T>(props: T) {
  switch (true) {
    case 'italic' in props: {
      return 'italic'
    }
    case 'oblique' in props: {
      return 'oblique'
    }
    case 'style' in props: {
      return props['style']
    }
    default: {
      return undefined
    }
  }
}
