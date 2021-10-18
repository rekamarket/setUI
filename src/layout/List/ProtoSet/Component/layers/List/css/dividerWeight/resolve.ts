export function resolve<T>(props: T) {
  switch (true) {
    case 'dividerWeight' in props: {
      return props['dividerWeight']
    }
    default: {
      return undefined
    }
  }
}
