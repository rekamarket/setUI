import { ButtonLink } from 'button'
import { Edit, Heading } from 'typography'
import { Box } from 'layout'

const Page = () => {
  return (
    <main>
      <Box padding="xxlarge">
        <Heading level={1}>&lt;ins&gt; and &lt;del&gt;</Heading>

        <Edit.Insertion>
          <p>Insertion</p>
          <p>Insertion</p>
          <p>Insertion</p>
          <p>Insertion</p>
        </Edit.Insertion>

        <Edit.Deletion>
          <p>Deletion</p>
        </Edit.Deletion>
      </Box>
    </main>
  )
}

export default Page
