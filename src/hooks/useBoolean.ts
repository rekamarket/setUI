import { useCallback, useState } from 'react'

const useBoolean = (initialValue?: boolean) => {
  const [value, setValue] = useState(initialValue ?? false)

  const setTrue = useCallback(() => setValue(true), [setValue])
  const setFalse = useCallback(() => setValue(false), [setValue])
  const toggle = useCallback(() => setValue((prev) => !prev), [setValue])

  return [
    value,
    {
      set: setValue,
      setTrue,
      setFalse,
      toggle,
    },
  ] as [
    boolean,
    {
      set: (b: boolean) => void
      setTrue: () => void
      setFalse: () => void
      toggle: () => void
    }
  ]
}

export default useBoolean
