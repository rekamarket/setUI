import render from 'react-element-to-jsx-string'
import Component, { displayName } from './'

export default [
  {
    group: displayName,
    name: '<b>: жирный шрифт',
    code: render(
      <Component>
        Используйте в таких случаях, как ключевые слова в кратком содержании,
        имена продуктов в отзыве, или других частях текста, которые обычно
        выделяют жирным
      </Component>
    ),
  },
]
