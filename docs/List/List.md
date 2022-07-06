---

title: List


---

# List

## Semantics
Можно указать теги - ["ul", "ol"]

```tsx
import React from 'react'
import { List } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<List tag="ul">
		Блок текста
	</List>
	<List tag="ol">
		Блок текста
	</List>
</div>)
```

## color
The color CSS property sets the foreground color value of an element's text and text decorations, and sets the <currentcolor> value. currentcolor may be used as an indirect value on other properties and is the default for other color properties, such as border-color.

```tsx
import React from 'react'
import { List } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<List color="primary" tag="p">
		Блок текста
	</List>
	<List color="secondary" tag="p">
		Блок текста
	</List>
	<List color="black" tag="p">
		Блок текста
	</List>
	<List color="white" tag="p">
		Блок текста
	</List>
</div>)
```
