export function resolve<T>(props: T) {
  switch (true) {
    case 'symbolGap' in props: {
      return props['symbolGap']
    }
    default: {
      return undefined
    }
  }
}
