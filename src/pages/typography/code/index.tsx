import { FC } from 'react'
import { ButtonLink } from 'button'
import { Code, Heading, LineBreak, Paragraph } from 'typography'
import Input, { Props } from 'typography/Code/subsets/Input'
import { Box } from 'layout'

const CustomKey: FC<Props> = (props) =>
  Input({
    ...props,
    background: 'warningPale',
    borderColor: 'primary',
    borderRadius: 'medium',
    borderWidth: 'light',
    size: 'xxxlarge',
    style: 'normal',
    weight: 'bold',
  })

const Page = () => {
  return (
    <main>
      <Box padding="xxlarge">
        <Heading level={1}>&lt;code&gt;</Heading>
        <Paragraph>
          The <Code>push()</Code> method adds one or more elements to the end of
          an array and returns the new length of the array.
        </Paragraph>
      </Box>

      <Box padding="xxlarge">
        <Heading level={1}>&lt;kbd&gt;</Heading>
        <Paragraph>
          Please press <Code.Input>Ctrl</Code.Input> +{' '}
          <CustomKey>Shift</CustomKey>+ <Code.Input>R</Code.Input> to re-render
          an MDN page.
        </Paragraph>
      </Box>

      <Box padding="xxlarge">
        <Heading level={1}>&lt;samp&gt;</Heading>
        <Paragraph>
          <Code.Output>
            Keyboard not found <LineBreak />
            Press F1 to continue
          </Code.Output>
        </Paragraph>
      </Box>

      <Box padding="xxlarge">
        <Heading level={1}>&lt;var&gt;</Heading>
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
