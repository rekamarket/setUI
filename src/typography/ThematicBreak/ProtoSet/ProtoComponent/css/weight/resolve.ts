export function resolve<T>(props: T) {
  switch (true) {
    // case 'thin' in props: {
    //   return 'thin'
    // }
    // case 'light' in props: {
    //   return 'light'
    // }
    // case 'medium' in props: {
    //   return 'medium'
    // }
    // case 'bold' in props: {
    //   return 'bold'
    // }
    case 'weight' in props: {
      return props['weight']
    }
    default: {
      return undefined
    }
  }
}
