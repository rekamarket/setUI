---

title: BlockQuote


---

# BlockQuote

## Semantics
Можно указать теги - ["ul", "ol"]

```tsx
import React from 'react'
import { BlockQuote } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<BlockQuote tag="ul">
		Блок текста
	</BlockQuote>
	<BlockQuote tag="ol">
		Блок текста
	</BlockQuote>
</div>)
```

## color
The color CSS property sets the foreground color value of an element's text and text decorations, and sets the <currentcolor> value. currentcolor may be used as an indirect value on other properties and is the default for other color properties, such as border-color.

```tsx
import React from 'react'
import { BlockQuote } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<BlockQuote color="primary" tag="p">
		Блок текста
	</BlockQuote>
	<BlockQuote color="secondary" tag="p">
		Блок текста
	</BlockQuote>
	<BlockQuote color="black" tag="p">
		Блок текста
	</BlockQuote>
	<BlockQuote color="white" tag="p">
		Блок текста
	</BlockQuote>
</div>)
```
