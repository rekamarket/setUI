export function resolve<T>(props: T) {
  switch (true) {
    case 'borderThickness' in props: {
      return props['borderThickness']
    }
    default: {
      return undefined
    }
  }
}
