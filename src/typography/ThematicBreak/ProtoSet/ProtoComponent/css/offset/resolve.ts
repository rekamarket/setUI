export function resolve<T>(props: T) {
  switch (true) {
    // case 'xxxsmall' in props: {
    //   return 'xxxsmall'
    // }
    // case 'xxsmall' in props: {
    //   return 'xxsmall'
    // }
    // case 'xsmall' in props: {
    //   return 'xsmall'
    // }
    // case 'small' in props: {
    //   return 'small'
    // }
    // case 'medium' in props: {
    //   return 'medium'
    // }
    // case 'large' in props: {
    //   return 'large'
    // }
    // case 'xlarge' in props: {
    //   return 'xlarge'
    // }
    // case 'xxlarge' in props: {
    //   return 'xxlarge'
    // }
    // case 'xxxlarge' in props: {
    //   return 'xxxlarge'
    // }
    case 'offset' in props: {
      return props['offset']
    }
    default: {
      return undefined
    }
  }
}
