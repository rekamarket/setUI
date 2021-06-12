import { FC } from 'react'
import { Heading } from 'typography'
import { Box } from 'layout'

const Page = () => {
  return (
    <main>
      <Box padding="xxlarge">
        <Heading.H1> &lt;Heading.H1&gt;</Heading.H1>
      </Box>

      <Box padding="xxlarge">
        <Heading.H2> &lt;Heading.H2&gt;</Heading.H2>
      </Box>

      <Box padding="xxlarge">
        <Heading.H3> &lt;Heading.H3&gt;</Heading.H3>
      </Box>

      <Box padding="xxlarge">
        <Heading.H4> &lt;Heading.H4&gt;</Heading.H4>
      </Box>

      <Box padding="xxlarge">
        <Heading.H5> &lt;Heading.H5&gt;</Heading.H5>
      </Box>

      <Box padding="xxlarge">
        <Heading.H6> &lt;Heading.H6&gt;</Heading.H6>
      </Box>
    </main>
  )
}

export default Page
