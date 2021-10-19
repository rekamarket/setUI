export function resolve<T>(props: T) {
  switch (true) {
    case 'markerSize' in props: {
      return props['markerSize']
    }
    default: {
      return undefined
    }
  }
}
