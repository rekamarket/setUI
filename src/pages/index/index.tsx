import { useCallback, useEffect } from 'react'
import { useBoolean, useForm } from 'hooks'
import { ButtonPrimary, ButtonLink } from 'button'
import { Box, FlexRow } from 'layout'
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
      <FlexRow margin="large" justifyContent="center">
        <ButtonPrimary onClick={open}>Создать альбом</ButtonPrimary>
      </FlexRow>

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

          <FlexRow
            marginTop="xlarge"
            marginBottom="small"
            gap="medium"
            justifyContent="flexEnd"
            alignItems="center"
          >
            <ButtonPrimary
              variant="transparent"
              size="small"
              onClick={close}
            >
              Отмена
            </ButtonPrimary>

            <ButtonPrimary variant="solid" type="submit">
              Загрузить
            </ButtonPrimary>
          </FlexRow>
        </Form>
      </Modal>
    </main>
  )
}

export default Index;
