// todo: rename it - now it should not merge the props, justt check if there is an overlap.

function mergePropsWithWarning<T>(
  defaultProps,
  props,
  componentName = 'Component'
): T {
  Object.entries(props).forEach(([key, value]) => {
    if (
      Object.prototype.hasOwnProperty.call(defaultProps, key) &&
      defaultProps[key] === value
    ) {
      console.warn(
        `%cYou are passing %c${key} %cwith %c${value} %cvalue, which is already a default value for %c<${componentName} />`,
        '',
        'color:orange;font-weight:bold',
        '',
        'color:orange;font-weight:bold',
        '',
        'color:red;font-weight:bold'
      )

      // todo: Add warning for misusing `padding/margin`
    }
  })

  const o: T = { ...defaultProps }

  for (const [key, value] of Object.entries(props)) {
    if (value) {
      o[key] = value
    }
  }

  return o
}

function omit<T extends object, K extends Extract<keyof T, string>>(
  obj: T,
  ...keys: K[]
): Omit<T, K> {
  const ret: any = {}
  const excludeSet: Set<string> = new Set(keys)
  // TS-NOTE: Set<K> makes the obj[key] type check fail. So, loosing typing here.

  for (const key in obj) {
    if (!excludeSet.has(key)) {
      ret[key] = obj[key]
    }
  }
  return ret
}

export default {
  omit,
  mergePropsWithWarning,
}
