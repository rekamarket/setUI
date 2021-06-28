export function resolve<T>(props: T) {
  switch (true) {
    case 'borderWidth' in props: {
      return props['borderWidth']
    }
    default: {
      return undefined
    }
  }
}
