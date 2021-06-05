import { ButtonLink } from 'button'
import { Code, Text, Heading, Paragraph, ThematicBreak } from 'typography'
import { Box, Container } from 'layout'

const Page = () => {
  return (
    <main>
      <Box
        padding="xxlarge"
        borderColor="black"
        borderWidth="thin"
        margin="large"
      >
        <Heading level={1}>&lt;abbr&gt;</Heading>

        <Paragraph>
          You can use{' '}
          <Text.Abbreviation title="Cascading Style Sheets">
            CSS
          </Text.Abbreviation>{' '}
          to style your{' '}
          <Text.Abbreviation title="HyperText Markup Language">
            HTML
          </Text.Abbreviation>
          .
        </Paragraph>
      </Box>

      <Box
        padding="xxlarge"
        borderColor="black"
        borderWidth="thin"
        margin="large"
      >
        <Heading level={1}>&lt;b&gt;</Heading>

        <Paragraph>
          The two most popular science courses offered by the school are{' '}
          <Text.Attention>chemistry</Text.Attention> (the study of chemicals and
          the composition of substances) and{' '}
          <Text.Attention>physics</Text.Attention> (the study of the nature and
          properties of matter and energy).
        </Paragraph>
      </Box>

      <Box
        padding="xxlarge"
        borderColor="black"
        borderWidth="thin"
        margin="large"
      >
        <Heading level={1}>&lt;cite&gt;</Heading>

        <blockquote style={{ fontSize: '1rem' }}>
          <Paragraph>
            It was a bright cold day in April, and the clocks were striking
            thirteen.
          </Paragraph>
          <footer>
            First sentence in{' '}
            <Text.Citation>
              <a href="http://www.george-orwell.org/1984/0.html">
                Nineteen Eighty-Four
              </a>
            </Text.Citation>{' '}
            by George Orwell (Part 1, Chapter 1).
          </footer>
        </blockquote>
      </Box>

      <Box
        padding="xxlarge"
        borderColor="black"
        borderWidth="thin"
        margin="large"
      >
        <Heading level={1}>&lt;dfn&gt;</Heading>

        <Paragraph>
          A <Text.DefinedTerm>validator</Text.DefinedTerm> is a program that
          checks for syntax errors in code or documents.
        </Paragraph>
      </Box>

      <Box
        padding="xxlarge"
        borderColor="black"
        borderWidth="thin"
        margin="large"
      >
        <Heading level={1}>&lt;small&gt;</Heading>

        <Paragraph>
          MDN Web Docs is a learning platform for Web technologies and the
          software that powers the Web.
        </Paragraph>
        <ThematicBreak />
        <Paragraph>
          <Text.Disclaimer>
            The content is licensed under a Creative Commons
            Attribution-ShareAlike 2.5 Generic License.
          </Text.Disclaimer>
        </Paragraph>
      </Box>

      <Box
        padding="xxlarge"
        borderColor="black"
        borderWidth="thin"
        margin="large"
      >
        <Heading level={1}>&lt;strong&gt;</Heading>

        <Paragraph>
          ... the most important rule, the rule you can never forget, no matter
          how much he cries, no matter how much he begs:{' '}
          <Text.Important>never feed him after midnight</Text.Important>.
        </Paragraph>
      </Box>

      <Box
        padding="xxlarge"
        borderColor="black"
        borderWidth="thin"
        margin="large"
      >
        <Heading level={1}>&lt;mark&gt;</Heading>

        <Paragraph>Search results for "salamander":</Paragraph>
        <ThematicBreak />
        <Paragraph>
          Several species of <Text.Highlight>salamander</Text.Highlight> inhabit
          the temperate rainforest of the Pacific Northwest.
        </Paragraph>
        <Paragraph>
          Most <Text.Highlight>salamander</Text.Highlight>s are nocturnal, and
          hunt for insects, worms, and other small creatures.
        </Paragraph>
      </Box>

      <Box
        padding="xxlarge"
        borderColor="black"
        borderWidth="thin"
        margin="large"
      >
        <Heading level={1}>&lt;i&gt;</Heading>

        <Paragraph>
          I looked at it and thought{' '}
          <Text.Idiomatic>This can't be real!</Text.Idiomatic>
        </Paragraph>
      </Box>

      <Box
        padding="xxlarge"
        borderColor="black"
        borderWidth="thin"
        margin="large"
      >
        <Heading level={1}>&lt;s&gt;</Heading>

        <Paragraph>
          <Text.Outdated>
            There will be a few tickets available at the box office tonight.
          </Text.Outdated>
        </Paragraph>
        <Paragraph>SOLD OUT!</Paragraph>
      </Box>

      <Box
        padding="xxlarge"
        borderColor="black"
        borderWidth="thin"
        margin="large"
      >
        <Heading level={1}>&lt;em&gt;</Heading>

        <Paragraph>
          This is <Text.StressEmphasis>not</Text.StressEmphasis> a drill!
        </Paragraph>
      </Box>

      <Box
        padding="xxlarge"
        borderColor="black"
        borderWidth="thin"
        margin="large"
      >
        <Heading level={1}>&lt;sub&gt;</Heading>

        <Paragraph>
          Almost every developer's favorite molecule is C
          <Text.Subscript>8</Text.Subscript>H<Text.Subscript>10</Text.Subscript>
          N<Text.Subscript>4</Text.Subscript>O<Text.Subscript>2</Text.Subscript>
          , also known as "caffeine."
        </Paragraph>
      </Box>

      <Box
        padding="xxlarge"
        borderColor="black"
        borderWidth="thin"
        margin="large"
      >
        <Heading level={1}>&lt;sup&gt;</Heading>

        <Paragraph>
          The <Text.Important>Pythagorean theorem</Text.Important> is often
          expressed as the following equation:
        </Paragraph>

        <Paragraph>
          <Code.Variable>
            a<Text.Superscript>2</Text.Superscript>
          </Code.Variable>{' '}
          +{' '}
          <Code.Variable>
            b<Text.Superscript>2</Text.Superscript>
          </Code.Variable>{' '}
          ={' '}
          <Code.Variable>
            c<Text.Superscript>2</Text.Superscript>
          </Code.Variable>
        </Paragraph>
      </Box>

      <Box
        padding="xxlarge"
        borderColor="black"
        borderWidth="thin"
        margin="large"
      >
        <Heading level={1}>&lt;u&gt;</Heading>

        <Paragraph>
          You could use this element to highlight{' '}
          <Text.UnarticulatedAnnotation>speling</Text.UnarticulatedAnnotation>{' '}
          mistakes, so the writer can{' '}
          <Text.UnarticulatedAnnotation>corect</Text.UnarticulatedAnnotation>{' '}
          them.
        </Paragraph>
      </Box>
    </main>
  )
}

export default Page
