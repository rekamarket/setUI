export function resolve<T>(props: T) {
  switch (true) {
    case 'textDecorationThickness' in props: {
      return props['textDecorationThickness']
    }
    default: {
      return undefined
    }
  }
}
