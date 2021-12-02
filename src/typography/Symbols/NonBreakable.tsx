import React, { VFC } from 'react'

export const displayName = 'NonBreakable'

const NonBreakable: VFC = () => <>{`\u00a0`}</>

NonBreakable.displayName = displayName

export default NonBreakable
