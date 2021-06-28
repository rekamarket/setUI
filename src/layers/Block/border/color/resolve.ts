export function resolve<T>(props: T) {
  switch (true) {
    case 'borderColor' in props: {
      return props['borderColor']
    }
    default: {
      return undefined
    }
  }
}
