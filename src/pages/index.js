import { Box, Button, ButtonLink, Form, Heading, Input, Modal, Text } from '../units'
import { useBoolean } from '../hooks'

export default () => {
  const [isVisible, { setFalse: close, setTrue: open }] = useBoolean(false)

  return (
    <div style={{ display: 'grid', gap: '1rem', background: '#333' }}>
      <Button onClick={open}>Создать альбом</Button>

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
        <Form>
          <Box paddingX="xxlarge" paddingY="xlarge">
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

            <Box marginTop="xlarge" marginBottom="medium">
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', alignItems: 'center' }}>
                <Button theme="primary" variant="transparent" size="small">
                  Отмена
                </Button>
                <Button theme="primary" variant="solid">
                  Загрузить
                </Button>
              </div>
            </Box>
          </Box>
        </Form>
      </Modal>
    </div>
  )
}
