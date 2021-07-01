export function resolve<T>(props: T) {
  switch (true) {
    case 'start' in props: {
      return 'start'
    }
    case 'center' in props: {
      return 'center'
    }
    case 'end' in props: {
      return 'end'
    }
    case 'left' in props: {
      return 'left'
    }
    case 'right' in props: {
      return 'right'
    }
    case 'justify' in props: {
      return 'justify'
    }
    case 'align' in props: {
      return props['align']
    }
    default: {
      return undefined
    }
  }
}
