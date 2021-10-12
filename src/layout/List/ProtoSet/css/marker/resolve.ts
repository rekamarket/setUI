export function resolve<T>(props: T) {
  switch (true) {
    case 'marker' in props: {
      return 'marker'
    }
    default: {
      return undefined
    }
  }
}
