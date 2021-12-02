import React, { VFC } from 'react'

export const displayName = 'Space'

const Space: VFC = () => <>{`\u0020`}</>

Space.displayName = displayName

export default Space
