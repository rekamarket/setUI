export function resolve<T>(props: T) {
  switch (true) {
    case 'marker' in props: {
      return props['marker']
    }
    default: {
      return undefined
    }
  }
}
