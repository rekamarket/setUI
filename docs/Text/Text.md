---

title: Text


---

# Text

## Semantics
Можно указать теги - ["abbr", "b", "dfn", "em", "i", "small", "span", "strong"]

```tsx
import React from 'react'
import { Text } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Text tag="abbr">
		Инлайновый текст
	</Text>
	<Text tag="b">
		Инлайновый текст
	</Text>
	<Text tag="dfn">
		Инлайновый текст
	</Text>
	<Text tag="em">
		Инлайновый текст
	</Text>
	<Text tag="i">
		Инлайновый текст
	</Text>
	<Text tag="small">
		Инлайновый текст
	</Text>
	<Text tag="span">
		Инлайновый текст
	</Text>
	<Text tag="strong">
		Инлайновый текст
	</Text>
</div>)
```

## color
The color CSS property sets the foreground color value of an element's text and text decorations, and sets the <currentcolor> value. currentcolor may be used as an indirect value on other properties and is the default for other color properties, such as border-color.

```tsx
import React from 'react'
import { Text } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Text color="primary" tag="span">
		Инлайновый текст
	</Text>
	<Text color="secondary" tag="span">
		Инлайновый текст
	</Text>
	<Text color="black" tag="span">
		Инлайновый текст
	</Text>
	<Text color="white" tag="span">
		Инлайновый текст
	</Text>
</div>)
```

## fontSize
The font-size CSS property sets the size of the font. Changing the font size also updates the sizes of the font size-relative <length> units, such as em, ex, and so forth.

```tsx
import React from 'react'
import { Text } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Text fontSize="none" tag="span">
		Инлайновый текст
	</Text>
	<Text fontSize="5xs" tag="span">
		Инлайновый текст
	</Text>
	<Text fontSize="4xs" tag="span">
		Инлайновый текст
	</Text>
	<Text fontSize="3xs" tag="span">
		Инлайновый текст
	</Text>
	<Text fontSize="2xs" tag="span">
		Инлайновый текст
	</Text>
	<Text fontSize="xs" tag="span">
		Инлайновый текст
	</Text>
	<Text fontSize="s" tag="span">
		Инлайновый текст
	</Text>
	<Text fontSize="m" tag="span">
		Инлайновый текст
	</Text>
	<Text fontSize="l" tag="span">
		Инлайновый текст
	</Text>
	<Text fontSize="xl" tag="span">
		Инлайновый текст
	</Text>
	<Text fontSize="2xl" tag="span">
		Инлайновый текст
	</Text>
	<Text fontSize="3xl" tag="span">
		Инлайновый текст
	</Text>
	<Text fontSize="4xl" tag="span">
		Инлайновый текст
	</Text>
	<Text fontSize="5xl" tag="span">
		Инлайновый текст
	</Text>
</div>)
```

## fontWeight
The font-weight CSS property sets the weight (or boldness) of the font. The weights available depend on the font-family that is currently set.

```tsx
import React from 'react'
import { Text } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Text fontWeight="regular" tag="span">
		Инлайновый текст
	</Text>
	<Text fontWeight="semiBold" tag="span">
		Инлайновый текст
	</Text>
</div>)
```

## textTransform
The text-transform CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby.

```tsx
import React from 'react'
import { Text } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Text textTransform="none" tag="span">
		Инлайновый текст
	</Text>
	<Text textTransform="uppercase" tag="span">
		Инлайновый текст
	</Text>
	<Text textTransform="lowercase" tag="span">
		Инлайновый текст
	</Text>
	<Text textTransform="capitalize" tag="span">
		Инлайновый текст
	</Text>
</div>)
```
