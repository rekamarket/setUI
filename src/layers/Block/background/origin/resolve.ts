export function resolve<T>(props: T) {
  switch (true) {
    case 'backgroundOrigin' in props: {
      return props['backgroundOrigin']
    }
    default: {
      return undefined
    }
  }
}
