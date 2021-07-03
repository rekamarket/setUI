export function resolve<T>(props: T) {
  switch (true) {
    case 'backgroundClip' in props: {
      return props['backgroundClip']
    }
    default: {
      return undefined
    }
  }
}
