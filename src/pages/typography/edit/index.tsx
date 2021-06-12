import { ButtonLink } from 'button'
import { Edit, Heading, Paragraph } from 'typography'

const Page = () => {
  return (
    <main>
      <Paragraph padding="xxlarge">
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
      </Paragraph>
    </main>
  )
}

export default Page
