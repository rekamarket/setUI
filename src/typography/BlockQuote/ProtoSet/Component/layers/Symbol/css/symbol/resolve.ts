export function resolve<T>(props: T) {
  switch (true) {
    case 'symbol' in props: {
      return props['symbol']
    }
    default: {
      return undefined
    }
  }
}
