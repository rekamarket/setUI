export function resolve<T>(props: T) {
  switch (true) {
    case 'direction' in props: {
      return props['direction']
    }
    default: {
      return undefined
    }
  }
}
