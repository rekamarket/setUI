export function resolve<T>(props: T) {
  switch (true) {
    // case 'primary' in props: {
    //   return 'primary'
    // }
    // case 'secondary' in props: {
    //   return 'secondary'
    // }
    // case 'black' in props: {
    //   return 'black'
    // }
    // case 'white' in props: {
    //   return 'white'
    // }
    case 'backgroundColor' in props: {
      return props['backgroundColor']
    }
    default: {
      return undefined
    }
  }
}
