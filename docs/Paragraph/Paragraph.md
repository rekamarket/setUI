---

title: Paragraph


---

# Paragraph

## Semantics
Можно указать теги - ["p", "div"]

```tsx
import React from 'react'
import { Paragraph } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Paragraph tag="p">
		Блок текста
	</Paragraph>
	<Paragraph tag="div">
		Блок текста
	</Paragraph>
</div>)
```

## color
The color CSS property sets the foreground color value of an element's text and text decorations, and sets the <currentcolor> value. currentcolor may be used as an indirect value on other properties and is the default for other color properties, such as border-color.

```tsx
import React from 'react'
import { Paragraph } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Paragraph color="primary" tag="p">
		Блок текста
	</Paragraph>
	<Paragraph color="secondary" tag="p">
		Блок текста
	</Paragraph>
	<Paragraph color="black" tag="p">
		Блок текста
	</Paragraph>
	<Paragraph color="white" tag="p">
		Блок текста
	</Paragraph>
</div>)
```

## fontSize
The font-size CSS property sets the size of the font. Changing the font size also updates the sizes of the font size-relative <length> units, such as em, ex, and so forth.

```tsx
import React from 'react'
import { Paragraph } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Paragraph fontSize="none" tag="p">
		Блок текста
	</Paragraph>
	<Paragraph fontSize="5xs" tag="p">
		Блок текста
	</Paragraph>
	<Paragraph fontSize="4xs" tag="p">
		Блок текста
	</Paragraph>
	<Paragraph fontSize="3xs" tag="p">
		Блок текста
	</Paragraph>
	<Paragraph fontSize="2xs" tag="p">
		Блок текста
	</Paragraph>
	<Paragraph fontSize="xs" tag="p">
		Блок текста
	</Paragraph>
	<Paragraph fontSize="s" tag="p">
		Блок текста
	</Paragraph>
	<Paragraph fontSize="m" tag="p">
		Блок текста
	</Paragraph>
	<Paragraph fontSize="l" tag="p">
		Блок текста
	</Paragraph>
	<Paragraph fontSize="xl" tag="p">
		Блок текста
	</Paragraph>
	<Paragraph fontSize="2xl" tag="p">
		Блок текста
	</Paragraph>
	<Paragraph fontSize="3xl" tag="p">
		Блок текста
	</Paragraph>
	<Paragraph fontSize="4xl" tag="p">
		Блок текста
	</Paragraph>
	<Paragraph fontSize="5xl" tag="p">
		Блок текста
	</Paragraph>
</div>)
```

## fontWeight
The font-weight CSS property sets the weight (or boldness) of the font. The weights available depend on the font-family that is currently set.

```tsx
import React from 'react'
import { Paragraph } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Paragraph fontWeight="regular" tag="p">
		Блок текста
	</Paragraph>
	<Paragraph fontWeight="semiBold" tag="p">
		Блок текста
	</Paragraph>
</div>)
```
