export function resolve<T>(props: T) {
  switch (true) {
    case 'dividerOffset' in props: {
      return props['dividerOffset']
    }
    default: {
      return undefined
    }
  }
}
