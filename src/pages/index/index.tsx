import {
  Box,
  Button,
  ButtonLink,
  Flex,
  Form,
  Heading,
  Input,
  Modal,
  Text,
} from '../../units'
import { useBoolean } from '../../hooks'
import { FORM } from './form'

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
            <Input theme="error" />
          </Form.Field>

          <Form.Field
            name={FORM.logo.key}
            label={FORM.logo.label}
            rules={FORM.logo.rules}
          >
            <Input theme="error" />
          </Form.Field>

          <Flex
            marginTop="xlarge"
            marginBottom="small"
            gap="medium"
            justifyContent="flexEnd"
            alignItems="center"
          >
            <Button
              theme="primary"
              variant="transparent"
              size="small"
              onClick={close}
            >
              Отмена
            </Button>

            <Button theme="primary" variant="solid" type="submit">
              Загрузить
            </Button>
          </Flex>
        </Form>
      </Modal>
    </main>
  )
}
