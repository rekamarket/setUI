import { ButtonLink } from 'button'
import { Quote, Heading } from 'typography'
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
        <Heading level={1}>&lt;q&gt;</Heading>

        <p style={{ fontSize: '1rem' }}>
          When Dave asks HAL to open the pod bay door, HAL answers:{' '}
          <Quote.Inline cite="https://www.imdb.com/title/tt0062622/quotes/qt0396921">
            I'm sorry, Dave. I'm afraid I can't do that.
          </Quote.Inline>
        </p>
      </Box>

      <Container.Small
        padding="xxlarge"
        borderColor="black"
        borderWidth="thin"
        margin="large"
      >
        <Heading level={1}>&lt;blockquote&gt;</Heading>

        <figure style={{ fontSize: '1rem' }}>
          <Quote.Block cite="https://www.huxley.net/bnw/four.html">
            Words can be like X-rays, if you use them properly—they’ll go
            through anything. You read and you’re pierced.
          </Quote.Block>
          <figcaption>
            —Aldous Huxley, <cite>Brave New World</cite>
          </figcaption>
        </figure>
      </Container.Small>
    </main>
  )
}

export default Page
