export function resolve<T>(props: T) {
  switch (true) {
    // case 'scroll' in props: {
    //   return 'scroll'
    // }
    // case 'fixed' in props: {
    //   return 'fixed'
    // }
    // case 'local' in props: {
    //   return 'local'
    // }
    case 'backgroundAttachment' in props: {
      return props['backgroundAttachment']
    }
    default: {
      return undefined
    }
  }
}
