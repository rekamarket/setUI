import { FC } from 'react'
import { ButtonLink } from 'button'
import { Code, Heading, LineBreak, Paragraph } from 'typography'
import { Box } from 'layout'
import { Input } from 'uiCode'

const Page = () => {
  return (
    <main>
      <Box padding="xxlarge">
        <Heading.H1>&lt;code&gt; - &lt;Code.Inline&gt;</Heading.H1>
        <Paragraph>
          The <Code.Inline>push()</Code.Inline> method adds one or more elements
          to the end of an array and returns the new length of the array.
        </Paragraph>
      </Box>

      <Box padding="xxlarge">
        <Heading.H1>&lt;kbd&gt; - &lt;Code.Input&gt;</Heading.H1>
        <Paragraph>
          Please press <Code.Input>Ctrl</Code.Input> +{' '}
          <Input.Keyboard>Shift</Input.Keyboard>+ <Code.Input>R</Code.Input> to
          re-render an MDN page.
        </Paragraph>
      </Box>

      <Box padding="xxlarge">
        <Heading.H1>&lt;samp&gt; - &lt;Code.Output&gt;</Heading.H1>
        <Paragraph>
          <Code.Output>
            Keyboard not found <LineBreak />
            Press F1 to continue
          </Code.Output>
        </Paragraph>
      </Box>

      <Box padding="xxlarge">
        <Heading.H1>&lt;var&gt; - &lt;Code.Variable&gt;</Heading.H1>
        <Paragraph>
          The volume of a box is <Code.Variable>l</Code.Variable> ×{' '}
          <Code.Variable>w</Code.Variable> × <Code.Variable>h</Code.Variable>,
          where <Code.Variable>l</Code.Variable> represents the length,{' '}
          <Code.Variable>w</Code.Variable> the width and{' '}
          <Code.Variable>h</Code.Variable> the height of the box.
        </Paragraph>
      </Box>
    </main>
  )
}

export default Page
