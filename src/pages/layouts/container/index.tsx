import { ButtonLink } from 'button'
import { Heading } from 'typography'
import { Container } from 'layout'

const Layouts = () => {
  return (
    <main>
      <Container.Small>
        <Heading.Placeholder level={1} />
      </Container.Small>

      <Container.Medium>Container</Container.Medium>

      <Container.Large>size="large"</Container.Large>
    </main>
  )
}

export default Layouts
