export function resolve<T>(props: T) {
  switch (true) {
    case 'dividerColor' in props: {
      return props['dividerColor']
    }
    default: {
      return undefined
    }
  }
}
