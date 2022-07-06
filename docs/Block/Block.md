---

title: Block


---

# Block

## Semantics
Можно указать теги - ["ul", "ol"]

```tsx
import React from 'react'
import { Block } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Block tag="ul">
		Блок текста
	</Block>
	<Block tag="ol">
		Блок текста
	</Block>
</div>)
```

## color
The color CSS property sets the foreground color value of an element's text and text decorations, and sets the <currentcolor> value. currentcolor may be used as an indirect value on other properties and is the default for other color properties, such as border-color.

```tsx
import React from 'react'
import { Block } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Block color="primary" tag="p">
		Блок текста
	</Block>
	<Block color="secondary" tag="p">
		Блок текста
	</Block>
	<Block color="black" tag="p">
		Блок текста
	</Block>
	<Block color="white" tag="p">
		Блок текста
	</Block>
</div>)
```
