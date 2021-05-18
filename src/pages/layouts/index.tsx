import { ButtonLink } from 'button'
import { Stack } from 'layout'

const Layouts = () => {
  return (
    <main>
      <Stack gap="large" padding="xlarge">
        <ButtonLink href="/layouts/container">container</ButtonLink>
        <ButtonLink href="/layouts/holy-grail">holy grail</ButtonLink>
        <ButtonLink href="/layouts/sticky-header">sticky header</ButtonLink>
        <ButtonLink href="/layouts/sticky-footer">sticky footer</ButtonLink>
        <ButtonLink href="/layouts/sidebar">sidebar</ButtonLink>
      </Stack>
    </main>
  )
}

export default Layouts
