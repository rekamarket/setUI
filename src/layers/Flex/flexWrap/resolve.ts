export function resolve<T>(props: T) {
  switch (true) {
    // case 'nowrap' in props: {
    //   return 'nowrap'
    // }
    // case 'wrap' in props: {
    //   return 'wrap'
    // }
    // case 'wrapReverse' in props: {
    //   return 'wrapReverse'
    // }
    case 'flexWrap' in props: {
      return props['flexWrap']
    }
    default: {
      return undefined
    }
  }
}
