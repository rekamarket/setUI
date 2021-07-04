export function resolve<T>(props: T) {
  switch (true) {
    // case 'xsmall' in props: {
    //   return 'xsmall'
    // }
    // case 'xs' in props: {
    //   return 'xsmall'
    // }
    // case 'small' in props: {
    //   return 'small'
    // }
    // case 's' in props: {
    //   return 'small'
    // }
    // case 'medium' in props: {
    //   return 'medium'
    // }
    // case 'm' in props: {
    //   return 'medium'
    // }
    // case 'large' in props: {
    //   return 'large'
    // }
    // case 'l' in props: {
    //   return 'large'
    // }
    // case 'xlarge' in props: {
    //   return 'xlarge'
    // }
    // case 'xl' in props: {
    //   return 'xlarge'
    // }
    case 'gap' in props: {
      return props['gap']
    }
    default: {
      return undefined
    }
  }
}
