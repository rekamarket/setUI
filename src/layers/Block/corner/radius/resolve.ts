export function resolve<T>(props: T) {
  switch (true) {
    // case 'circle' in props: {
    //   return 'circle'
    // }
    // case 'pill' in props: {
    //   return 'pill'
    // }
    case 'cornerRadius' in props: {
      return props['cornerRadius']
    }
    default: {
      return undefined
    }
  }
}
