export function resolve<T>(props: T) {
  switch (true) {
    case 'repeatX' in props: {
      return 'repeatX'
    }
    case 'repeatY' in props: {
      return 'repeatY'
    }
    case 'repeat' in props: {
      return 'repeat'
    }
    case 'space' in props: {
      return 'space'
    }
    case 'round' in props: {
      return 'round'
    }
    case 'noRepeat' in props: {
      return 'noRepeat'
    }
    case 'backgroundRepeat' in props: {
      return props['backgroundRepeat']
    }
    default: {
      return undefined
    }
  }
}
