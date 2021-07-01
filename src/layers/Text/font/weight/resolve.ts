export function resolve<T>(props: T) {
  switch (true) {
    case 'thin' in props: {
      return 'thin'
    }
    case 'extraLight' in props: {
      return 'extraLight'
    }
    case 'light' in props: {
      return 'light'
    }
    case 'regular' in props: {
      return 'regular'
    }
    case 'medium' in props: {
      return 'medium'
    }
    case 'semiBold' in props: {
      return 'semiBold'
    }
    case 'bold' in props: {
      return 'bold'
    }
    case 'extraBold' in props: {
      return 'extraBold'
    }
    case 'heavy' in props: {
      return 'heavy'
    }
    case 'lighter' in props: {
      return 'lighter'
    }
    case 'bolder' in props: {
      return 'bolder'
    }
    case 'weight' in props: {
      return props['weight']
    }
    default: {
      return undefined
    }
  }
}
