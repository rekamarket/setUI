export function resolve<T>(props: T) {
  switch (true) {
    case 'alignContent' in props: {
      return props['alignContent']
    }
    default: {
      return undefined
    }
  }
}
