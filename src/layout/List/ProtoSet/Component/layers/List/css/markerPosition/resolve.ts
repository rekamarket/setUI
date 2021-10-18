export function resolve<T>(props: T) {
  switch (true) {
    case 'inside' in props: {
      return 'inside'
    }
    case 'outside' in props: {
      return 'outside'
    }
    case 'markerPosition' in props: {
      return props['markerPosition']
    }
    default: {
      return undefined
    }
  }
}
