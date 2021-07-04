export function resolve<T>(props: T) {
  switch (true) {
    // case 'row' in props: {
    //   return 'row'
    // }
    // case 'rowReverse' in props: {
    //   return 'rowReverse'
    // }
    // case 'column' in props: {
    //   return 'column'
    // }
    // case 'columnReverse' in props: {
    //   return 'columnReverse'
    // }
    case 'flexDirection' in props: {
      return props['flexDirection']
    }
    default: {
      return undefined
    }
  }
}
