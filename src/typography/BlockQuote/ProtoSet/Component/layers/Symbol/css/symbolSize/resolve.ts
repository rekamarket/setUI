export function resolve<T>(props: T) {
  switch (true) {
    case 'symbolSize' in props: {
      return props['symbolSize']
    }
    default: {
      return undefined
    }
  }
}
