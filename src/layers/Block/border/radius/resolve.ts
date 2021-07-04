export function resolve<T>(props: T) {
  switch (true) {
    // case 'circle' in props: {
    //   return 'circle'
    // }
    // case 'pill' in props: {
    //   return 'pill'
    // }
    case 'borderRadius' in props: {
      return props['borderRadius']
    }
    default: {
      return undefined
    }
  }
}
