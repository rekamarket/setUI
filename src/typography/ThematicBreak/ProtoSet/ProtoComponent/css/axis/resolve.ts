export function resolve<T>(props: T) {
  switch (true) {
    // case 'vertical' in props: {
    //   return 'vertical'
    // }
    // case 'horizontal' in props: {
    //   return 'horizontal'
    // }
    case 'axis' in props: {
      return props['axis']
    }
    default: {
      return undefined
    }
  }
}
