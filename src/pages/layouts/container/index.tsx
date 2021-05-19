import { ButtonLink } from 'button'
import { Heading } from 'typography'
import { Container } from 'layout'

const Layouts = () => {
  return (
    <main>
      <Container size="small">
        <Heading.Placeholder level={1} />
      </Container>

      <Container>Container</Container>

      <Container size="large">size="large"</Container>
    </main>
  )
}

export default Layouts
