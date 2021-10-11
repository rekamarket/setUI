export function resolve<T>(props: T) {
  switch (true) {
    case 'backgroundPosition' in props: {
      return props['backgroundPosition']
    }
    default: {
      return undefined
    }
  }
}
