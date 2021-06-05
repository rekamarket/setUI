import { ButtonLink } from 'button'
import { Code, Heading, LineBreak } from 'typography'
import { Box } from 'layout'

const Page = () => {
  return (
    <main>
      <Box padding="xxlarge">
        <Heading level={1}>&lt;code&gt;</Heading>
        <p style={{ fontSize: '1rem' }}>
          The <Code>push()</Code> method adds one or more elements to the end of
          an array and returns the new length of the array.
        </p>
      </Box>

      <Box padding="xxlarge">
        <Heading level={1}>&lt;kbd&gt;</Heading>
        <p style={{ fontSize: '1rem' }}>
          Please press <Code.Input>Ctrl</Code.Input> +{' '}
          <Code.Input>Shift</Code.Input> + <Code.Input>R</Code.Input> to
          re-render an MDN page.
        </p>
      </Box>

      <Box padding="xxlarge">
        <Heading level={1}>&lt;samp&gt;</Heading>
        <p style={{ fontSize: '1rem' }}>
          <Code.Output>
            Keyboard not found <LineBreak />
            Press F1 to continue
          </Code.Output>
        </p>
      </Box>

      <Box padding="xxlarge">
        <Heading level={1}>&lt;var&gt;</Heading>
        <p style={{ fontSize: '1rem' }}>
          The volume of a box is <Code.Variable>l</Code.Variable> ×{' '}
          <Code.Variable>w</Code.Variable> × <Code.Variable>h</Code.Variable>,
          where <Code.Variable>l</Code.Variable> represents the length,{' '}
          <Code.Variable>w</Code.Variable> the width and{' '}
          <Code.Variable>h</Code.Variable> the height of the box.
        </p>
      </Box>
    </main>
  )
}

export default Page
