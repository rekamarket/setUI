import { useCallback, useEffect } from 'react'
import { useBoolean, useForm } from 'hooks'
import { ButtonPrimary, ButtonLink } from 'button'
import { Box, Flex, Segment, Stack, Container } from 'layout'
import { Heading, Text } from 'typography'
import { Form, Input } from 'form'
import { Modal } from 'dialog'
import { FORM } from './form'

const Index = () => {
  const [form] = useForm()
  const [isVisible, { setFalse: close, setTrue: open }] = useBoolean(false)

  useEffect(() => {
    if (isVisible) {
      return () => form.resetFields()
    }
  }, [isVisible, form])

  const handleFinish = useCallback((values: unknown) => {
    console.log('>', values)
  }, [])

  return (
    <main>
      <Container.Small padding="large" margin="large" direction="right">
        <Heading.Placeholder level={1} />

        <Box.x4x3>
          <Text.Placeholder length={23} />
          <Heading.Placeholder level={2} size="xxxlarge" length={33} />
          <Heading level={1}>h</Heading>
        </Box.x4x3>
      </Container.Small>

      <Segment padding="large" gap="large">
        <Segment.Start padding="large">Segment start</Segment.Start>
        <Segment.Interval>Segment Interval</Segment.Interval>
        <Segment.End>Segment End</Segment.End>
      </Segment>

      <Segment.Column padding="large" gap="large">
        <Segment.Start padding="large">SegmentColumn start</Segment.Start>
        <Segment.Interval>SegmentColumn Interval</Segment.Interval>
        <Segment.End>SegmentColumn End</Segment.End>
      </Segment.Column>

      <Stack gap="large" padding="xlarge">
        <ButtonPrimary>Text</ButtonPrimary>
        <ButtonPrimary>Text</ButtonPrimary>
      </Stack>

      <Flex.Center margin="large">
        <ButtonPrimary onClick={open}>Создать альбом</ButtonPrimary>
      </Flex.Center>

      <Modal
        visible={isVisible}
        onClose={close}
        accent="primary"
        title={
          <Heading level={2} color="grey190" size="large">
            Создать новый альбом
          </Heading>
        }
      >
        <Form
          form={form}
          onFinish={handleFinish}
          direction="column"
          paddingX="xxlarge"
          paddingY="xlarge"
        >
          <Form.Field
            name={FORM.name.key}
            label={FORM.name.label}
            rules={FORM.name.rules}
          >
            <Input theme="primary" />
          </Form.Field>

          <Form.Field
            name={FORM.contacts.key}
            label={FORM.contacts.label}
            rules={FORM.contacts.rules}
          >
            <Input theme="primary" />
          </Form.Field>

          <Form.Field
            name={FORM.logo.key}
            label={FORM.logo.label}
            rules={FORM.logo.rules}
          >
            <Input type="file" theme="primary" style={{ padding: '8px 1em' }} />
          </Form.Field>

          <Form.Field
            name={FORM.album.key}
            label={FORM.album.label}
            rules={FORM.album.rules}
          >
            <Input
              type="file"
              multiple
              theme="primary"
              style={{ padding: '8px 1em' }}
            />
          </Form.Field>

          <Flex.Inline
            marginTop="xlarge"
            marginBottom="small"
            gap="medium"
            justifyContent="flexEnd"
          >
            <ButtonPrimary variant="transparent" size="small" onClick={close}>
              Отмена
            </ButtonPrimary>

            <ButtonPrimary variant="solid" type="submit">
              Загрузить
            </ButtonPrimary>
          </Flex.Inline>
        </Form>
      </Modal>
    </main>
  )
}

export default Index
