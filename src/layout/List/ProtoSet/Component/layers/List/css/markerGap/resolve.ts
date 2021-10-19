export function resolve<T>(props: T) {
  switch (true) {
    case 'markerGap' in props: {
      return props['markerGap']
    }
    default: {
      return undefined
    }
  }
}
