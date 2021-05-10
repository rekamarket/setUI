export const FORM = {
  name: {
    key: 'name',
    label: 'Имя',
    rules: [{ required: true, message: 'Введите имя' }],
  },

  contacts: {
    key: 'contacts',
    label: 'Контакты',
    rules: [{ required: true, message: 'Введите контакты' }],
  },

  logo: {
    key: 'logo',
    label: 'Лого',
    rules: [],
  },
}
