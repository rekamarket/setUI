import { Box, Button, ButtonLink, Flex, Form, Heading, Input, Modal, Text } from '../units'
import { useBoolean } from '../hooks'

export default () => {
  const [isVisible, { setFalse: close, setTrue: open }] = useBoolean(false)

  return (
    <main>
      <Flex margin="large" justifyContent="center">
        <Button onClick={open}>Создать альбом</Button>
      </Flex>

      <Modal
        visible={isVisible}
        onClose={close}
        accent="primary"
        title={
          <Heading level={2} color="grey190">
            Создать новый альбом
          </Heading>
        }
      >
        <Form direction="column" paddingX="xxlarge" paddingY="xlarge">
          <Form.Field
            name="name"
            label="Имя"
            rules={[{ required: true, message: 'Введите имя' }]}
          >
            <Input
              theme="primary"
            />
          </Form.Field>

          <Form.Field
            name="contacts"
            label="Контакты"
            rules={[{ required: true, message: 'Введите контакты' }]}
          >
            <Input
              theme="error"
            />
          </Form.Field>

          <Form.Field name="logo" label="Лого">
            <Input
              theme="error"
            />
          </Form.Field>

          <Flex
            marginTop="xlarge"
            marginBottom="small"
            gap="medium"
            justifyContent="flexEnd"
            alignItems="center"
          >
            <Button theme="primary" variant="transparent" size="small">
              Отмена
            </Button>

            <Button theme="primary" variant="solid">
              Загрузить
            </Button>
          </Flex>
        </Form>
      </Modal>
    </main>
  )
}
