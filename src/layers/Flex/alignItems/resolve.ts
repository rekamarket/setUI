export function resolve<T>(props: T) {
  switch (true) {
    case 'alignItems' in props: {
      return props['alignItems']
    }
    default: {
      return undefined
    }
  }
}
