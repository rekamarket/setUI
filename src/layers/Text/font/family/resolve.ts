export function resolve<T>(props: T) {
  switch (true) {
    case 'fontFamily' in props: {
      return props['fontFamily']
    }
    default: {
      return undefined
    }
  }
}
