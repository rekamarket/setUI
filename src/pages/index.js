import { Box, Button, ButtonLink, Heading, Modal, Text } from '../units';
import { useBoolean } from '../hooks';

export default () => {
  const [isVisible, {
    setFalse: close,
    setTrue: open,
  }] = useBoolean(false);

  return (
    <div style={{ display: 'grid', gap: '1rem' }}>
      <Box marginX="large">
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Button onClick={open}>open</Button>
          <ButtonLink href="/app" size="xlarge">link</ButtonLink>
        </div>
      </Box>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button size="xlarge" theme="primary" variant="solid">primary</Button>
        <Button size="xlarge" theme="primary" variant="ghost">primary</Button>
        <Button size="xlarge" theme="primary" variant="soft">primary</Button>
        <Button size="xlarge" theme="primary" variant="transparent">primary</Button>
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button size="large" theme="primary" variant="solid">primary</Button>
        <Button size="large" theme="primary" variant="ghost">primary</Button>
        <Button size="large" theme="primary" variant="soft">primary</Button>
        <Button size="large" theme="primary" variant="transparent">primary</Button>
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button theme="primary" variant="solid">primary</Button>
        <Button theme="primary" variant="ghost">primary</Button>
        <Button theme="primary" variant="soft">primary</Button>
        <Button theme="primary" variant="transparent">primary</Button>
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button size="small" theme="primary" variant="solid">primary</Button>
        <Button size="small" theme="primary" variant="ghost">primary</Button>
        <Button size="small" theme="primary" variant="soft">primary</Button>
        <Button size="small" theme="primary" variant="transparent">primary</Button>
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button size="xsmall" theme="primary" variant="solid">primary</Button>
        <Button size="xsmall" theme="primary" variant="ghost">primary</Button>
        <Button size="xsmall" theme="primary" variant="soft">primary</Button>
        <Button size="xsmall" theme="primary" variant="transparent">primary</Button>
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button theme="secondary" variant="solid">secondary</Button>
        <Button theme="secondary" variant="ghost">secondary</Button>
        <Button theme="secondary" variant="soft">secondary</Button>
        <Button theme="secondary" variant="transparent">secondary</Button>
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button theme="light" variant="solid">light</Button>
        <Button theme="light" variant="ghost">light</Button>
        <Button theme="light" variant="soft">light</Button>
        <Button theme="light" variant="transparent">light</Button>
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button theme="lighter" variant="solid">lighter</Button>
        <Button theme="lighter" variant="ghost">lighter</Button>
        <Button theme="lighter" variant="soft">lighter</Button>
        <Button theme="lighter" variant="transparent">lighter</Button>
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button theme="lighterAlt" variant="solid">lighterAlt</Button>
        <Button theme="lighterAlt" variant="ghost">lighterAlt</Button>
        <Button theme="lighterAlt" variant="soft">lighterAlt</Button>
        <Button theme="lighterAlt" variant="transparent">lighterAlt</Button>
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button theme="dark" variant="solid">dark</Button>
        <Button theme="dark" variant="ghost">dark</Button>
        <Button theme="dark" variant="soft">dark</Button>
        <Button theme="dark" variant="transparent">dark</Button>
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button theme="darker" variant="solid">darker</Button>
        <Button theme="darker" variant="ghost">darker</Button>
        <Button theme="darker" variant="soft">darker</Button>
        <Button theme="darker" variant="transparent">darker</Button>
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button theme="darkerAlt" variant="solid">darkerAlt</Button>
        <Button theme="darkerAlt" variant="ghost">darkerAlt</Button>
        <Button theme="darkerAlt" variant="soft">darkerAlt</Button>
        <Button theme="darkerAlt" variant="transparent">darkerAlt</Button>
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button theme="error" variant="solid">error</Button>
        <Button theme="error" variant="ghost">error</Button>
        <Button theme="error" variant="soft">error</Button>
        <Button theme="error" variant="transparent">error</Button>
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button theme="errorPale" variant="solid">errorPale</Button>
        <Button theme="errorPale" variant="ghost">errorPale</Button>
        <Button theme="errorPale" variant="soft">errorPale</Button>
        <Button theme="errorPale" variant="transparent">errorPale</Button>
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button theme="success" variant="solid">success</Button>
        <Button theme="success" variant="ghost">success</Button>
        <Button theme="success" variant="soft">success</Button>
        <Button theme="success" variant="transparent">success</Button>
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button theme="successPale" variant="solid">successPale</Button>
        <Button theme="successPale" variant="ghost">successPale</Button>
        <Button theme="successPale" variant="soft">successPale</Button>
        <Button theme="successPale" variant="transparent">successPale</Button>
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button theme="warning" variant="solid">warning</Button>
        <Button theme="warning" variant="ghost">warning</Button>
        <Button theme="warning" variant="soft">warning</Button>
        <Button theme="warning" variant="transparent">warning</Button>
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button theme="warningPale" variant="solid">warningPale</Button>
        <Button theme="warningPale" variant="ghost">warningPale</Button>
        <Button theme="warningPale" variant="soft">warningPale</Button>
        <Button theme="warningPale" variant="transparent">warningPale</Button>
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button theme="info" variant="solid">info</Button>
        <Button theme="info" variant="ghost">info</Button>
        <Button theme="info" variant="soft">info</Button>
        <Button theme="info" variant="transparent">info</Button>
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button theme="infoPale" variant="solid">infoPale</Button>
        <Button theme="infoPale" variant="ghost">infoPale</Button>
        <Button theme="infoPale" variant="soft">infoPale</Button>
        <Button theme="infoPale" variant="transparent">infoPale</Button>
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button theme="white" variant="solid">white</Button>
        <Button theme="white" variant="ghost">white</Button>
        <Button theme="white" variant="soft">white</Button>
        <Button theme="white" variant="transparent">white</Button>
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button theme="grey10" variant="solid">grey10</Button>
        <Button theme="grey10" variant="ghost">grey10</Button>
        <Button theme="grey10" variant="soft">grey10</Button>
        <Button theme="grey10" variant="transparent">grey10</Button>
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button theme="grey20" variant="solid">grey20</Button>
        <Button theme="grey20" variant="ghost">grey20</Button>
        <Button theme="grey20" variant="soft">grey20</Button>
        <Button theme="grey20" variant="transparent">grey20</Button>
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button theme="grey30" variant="solid">grey30</Button>
        <Button theme="grey30" variant="ghost">grey30</Button>
        <Button theme="grey30" variant="soft">grey30</Button>
        <Button theme="grey30" variant="transparent">grey30</Button>
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button theme="grey40" variant="solid">grey40</Button>
        <Button theme="grey40" variant="ghost">grey40</Button>
        <Button theme="grey40" variant="soft">grey40</Button>
        <Button theme="grey40" variant="transparent">grey40</Button>
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button theme="grey50" variant="solid">grey50</Button>
        <Button theme="grey50" variant="ghost">grey50</Button>
        <Button theme="grey50" variant="soft">grey50</Button>
        <Button theme="grey50" variant="transparent">grey50</Button>
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button theme="grey60" variant="solid">grey60</Button>
        <Button theme="grey60" variant="ghost">grey60</Button>
        <Button theme="grey60" variant="soft">grey60</Button>
        <Button theme="grey60" variant="transparent">grey60</Button>
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button theme="grey90" variant="solid">grey90</Button>
        <Button theme="grey90" variant="ghost">grey90</Button>
        <Button theme="grey90" variant="soft">grey90</Button>
        <Button theme="grey90" variant="transparent">grey90</Button>
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button theme="grey130" variant="solid">grey130</Button>
        <Button theme="grey130" variant="ghost">grey130</Button>
        <Button theme="grey130" variant="soft">grey130</Button>
        <Button theme="grey130" variant="transparent">grey130</Button>
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button theme="grey150" variant="solid">grey150</Button>
        <Button theme="grey150" variant="ghost">grey150</Button>
        <Button theme="grey150" variant="soft">grey150</Button>
        <Button theme="grey150" variant="transparent">grey150</Button>
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button theme="grey160" variant="solid">grey160</Button>
        <Button theme="grey160" variant="ghost">grey160</Button>
        <Button theme="grey160" variant="soft">grey160</Button>
        <Button theme="grey160" variant="transparent">grey160</Button>
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button theme="grey190" variant="solid">grey190</Button>
        <Button theme="grey190" variant="ghost">grey190</Button>
        <Button theme="grey190" variant="soft">grey190</Button>
        <Button theme="grey190" variant="transparent">grey190</Button>
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button theme="black" variant="solid">black</Button>
        <Button theme="black" variant="ghost">black</Button>
        <Button theme="black" variant="soft">black</Button>
        <Button theme="black" variant="transparent">black</Button>
      </div>

      <Modal
        visible={isVisible}
        onClose={close}
        accent="primary"
        title={
          <Heading
            level={3}
            color="grey190"
          >
            Heading
          </Heading>
        }
      >
        <Text>Modal</Text>
      </Modal>
    </div>
  );
};

