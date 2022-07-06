---

title: UnorderedList
group:
	title: List

---

# UnorderedList

## color
The color CSS property sets the foreground color value of an element's text and text decorations, and sets the <currentcolor> value. currentcolor may be used as an indirect value on other properties and is the default for other color properties, such as border-color.

```tsx
import React from 'react'
import { UnorderedList } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<UnorderedList color="primary">
		Абзац. Многострочный текст
	</UnorderedList>
	<UnorderedList color="secondary">
		Абзац. Многострочный текст
	</UnorderedList>
	<UnorderedList color="black">
		Абзац. Многострочный текст
	</UnorderedList>
	<UnorderedList color="white">
		Абзац. Многострочный текст
	</UnorderedList>
</div>)
```
