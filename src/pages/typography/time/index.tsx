import { ButtonLink } from 'button'
import { Heading, Time } from 'typography'
import { Box } from 'layout'

const Page = () => {
  return (
    <main>
      <Box
        padding="xxlarge"
        borderColor="black"
        borderWidth="thin"
        margin="large"
      >
        <Heading level={1}>&lt;time&gt;</Heading>

        <p style={{ fontSize: '1rem' }}>
          The Cure will be celebrating their 40th anniversary on{' '}
          <Time datetime="2018-07-07">July 7</Time> in London's Hyde Park.
        </p>

        <p style={{ fontSize: '1rem' }}>
          The concert starts at <Time datetime="20:00">20:00</Time> and you'll
          be able to enjoy the band for at least{' '}
          <Time datetime="PT2H30M">2h 30m</Time>.
        </p>
      </Box>
    </main>
  )
}

export default Page
