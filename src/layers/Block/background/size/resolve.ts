export function resolve<T>(props: T) {
  switch (true) {
    case 'cover' in props: {
      return 'cover'
    }
    case 'contain' in props: {
      return 'contain'
    }
    case 'backgroundSize' in props: {
      return props['backgroundSize']
    }
    default: {
      return undefined
    }
  }
}
