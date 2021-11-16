export function resolve<T>(props: T) {
  switch (true) {
    // case 'dotted' in props: {
    //   return 'dotted'
    // }
    // case 'dashed' in props: {
    //   return 'dashed'
    // }
    // case 'solid' in props: {
    //   return 'solid'
    // }
    // case 'double' in props: {
    //   return 'double'
    // }
    // case 'groove' in props: {
    //   return 'groove'
    // }
    // case 'ridge' in props: {
    //   return 'ridge'
    // }
    // case 'inset' in props: {
    //   return 'inset'
    // }
    // case 'outset' in props: {
    //   return 'outset'
    // }
    case 'borderStyle' in props: {
      return props['borderStyle']
    }
    default: {
      return undefined
    }
  }
}
