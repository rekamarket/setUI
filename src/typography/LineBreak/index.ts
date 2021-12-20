import { VFC, createElement } from 'react'

export const displayName = 'LineBreak'

const LineBreak: VFC = () => createElement('br')

LineBreak.displayName = displayName

export default LineBreak
