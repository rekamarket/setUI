---

title: Frame


---

# Frame

## Semantics
Можно указать теги - ["ul", "ol"]

```tsx
import React from 'react'
import { Frame } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Frame tag="ul">
		Блок текста
	</Frame>
	<Frame tag="ol">
		Блок текста
	</Frame>
</div>)
```

## color
The color CSS property sets the foreground color value of an element's text and text decorations, and sets the <currentcolor> value. currentcolor may be used as an indirect value on other properties and is the default for other color properties, such as border-color.

```tsx
import React from 'react'
import { Frame } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Frame color="primary" tag="p">
		Блок текста
	</Frame>
	<Frame color="secondary" tag="p">
		Блок текста
	</Frame>
	<Frame color="black" tag="p">
		Блок текста
	</Frame>
	<Frame color="white" tag="p">
		Блок текста
	</Frame>
</div>)
```
