import { useCallback, useEffect } from 'react'
import { useBoolean, useForm } from 'hooks'
import { ButtonPrimary, ButtonLink } from 'button'
import { Box, Flex, Segment, Stack, Container, Tabs } from 'layout'
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
        <Heading.H1 color="grey190" size="large">
          Создать новый альбом
        </Heading.H1>

        <Box
          padding="xxlarge"
          borderColor="grey160"
          borderWidth="thin"
          borderRadius="medium"
          background="errorPale"
        >
          <Text.Placeholder />
          <Text.Important underline color="error">
            Strong
          </Text.Important>
          <Text.Important lowercase color="error">
            Emphasis
          </Text.Important>
          <Flex
            borderColor="primary"
            borderWidth="thin"
            borderRadius="small"
            padding="large"
            background="success"
            gap="xxlarge"
          >
            <Text.StressEmphasis uppercase color="error">
              Emphasis
            </Text.StressEmphasis>
            <Text.Idiomatic lineThrough color="error">
              Emphasis
            </Text.Idiomatic>
          </Flex>
        </Box>
      </Container.Small>

      <Tabs>
        <Tabs.Panel
          key="1"
          tab={
            <Heading.Thin level={2} color="grey160">
              title
            </Heading.Thin>
          }
        >
          <Box padding="xxlarge" borderColor="grey160">
            <Heading.Placeholder level={1} />
          </Box>
        </Tabs.Panel>

        <Tabs.Panel
          key="2"
          tab={
            <Heading.Thin level={2} color="grey160">
              title
            </Heading.Thin>
          }
        >
          <Box.Placeholder padding="xxlarge" />
        </Tabs.Panel>
      </Tabs>

      <Segment padding="large" gap="large">
        <Segment.Start padding="large">
          <Text>Segment start</Text>
        </Segment.Start>
        <Segment.Interval>
          <Text>Segment Interval</Text>
        </Segment.Interval>
        <Segment.End>
          <Text>Segment End</Text>
        </Segment.End>
      </Segment>

      <Segment.Column padding="large" gap="large">
        <Segment.Start padding="large">
          <Text>SegmentColumn start</Text>
        </Segment.Start>
        <Segment.Interval>
          <Text>SegmentColumn Interval</Text>
        </Segment.Interval>
        <Segment.End>
          <Text>SegmentColumn End</Text>
        </Segment.End>
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
          <Heading.H1 color="grey190" size="large">
            Создать новый альбом
          </Heading.H1>
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
