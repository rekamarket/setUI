export function resolve<T>(props: T) {
  switch (true) {
    // case 'xxxsmall' in props: {
    //   return 'xxxsmall'
    // }
    // case 'xxxs' in props: {
    //   return 'xxxsmall'
    // }
    // case 'xxsmall' in props: {
    //   return 'xxsmall'
    // }
    // case 'xxs' in props: {
    //   return 'xxsmall'
    // }
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
    // case 'xxlarge' in props: {
    //   return 'xxlarge'
    // }
    // case 'xxl' in props: {
    //   return 'xxlarge'
    // }
    // case 'xxxlarge' in props: {
    //   return 'xxxlarge'
    // }
    // case 'xxxl' in props: {
    //   return 'xxxlarge'
    // }
    // case 'smaller' in props: {
    //   return 'smaller'
    // }
    // case 'larger' in props: {
    //   return 'larger'
    // }
    case 'fontSize' in props: {
      return props['fontSize']
    }
    default: {
      return undefined
    }
  }
}
