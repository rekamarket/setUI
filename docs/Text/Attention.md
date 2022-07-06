---

title: Attention
group:
	title: Text

---

# Attention

## Semantics
Значение по умолчанию - b; Можно указать теги - ["abbr", "data", "dd", "dt", "i", "small", "span", "strong"]

```tsx
import React from 'react'
import { Attention } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Attention tag="abbr">
		Attention
	</Attention>
	<Attention tag="data">
		Attention
	</Attention>
	<Attention tag="dd">
		Attention
	</Attention>
	<Attention tag="dt">
		Attention
	</Attention>
	<Attention tag="i">
		Attention
	</Attention>
	<Attention tag="small">
		Attention
	</Attention>
	<Attention tag="span">
		Attention
	</Attention>
	<Attention tag="strong">
		Attention
	</Attention>
</div>)
```

## color
The color CSS property sets the foreground color value of an element's text and text decorations, and sets the <currentcolor> value. currentcolor may be used as an indirect value on other properties and is the default for other color properties, such as border-color.

```tsx
import React from 'react'
import { Attention } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Attention color="primary">
		Attention
	</Attention>
	<Attention color="secondary">
		Attention
	</Attention>
	<Attention color="black">
		Attention
	</Attention>
	<Attention color="white">
		Attention
	</Attention>
</div>)
```

## fontSize
The font-size CSS property sets the size of the font. Changing the font size also updates the sizes of the font size-relative <length> units, such as em, ex, and so forth.

```tsx
import React from 'react'
import { Attention } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Attention fontSize="none">
		Attention
	</Attention>
	<Attention fontSize="5xs">
		Attention
	</Attention>
	<Attention fontSize="4xs">
		Attention
	</Attention>
	<Attention fontSize="3xs">
		Attention
	</Attention>
	<Attention fontSize="2xs">
		Attention
	</Attention>
	<Attention fontSize="xs">
		Attention
	</Attention>
	<Attention fontSize="s">
		Attention
	</Attention>
	<Attention fontSize="m">
		Attention
	</Attention>
	<Attention fontSize="l">
		Attention
	</Attention>
	<Attention fontSize="xl">
		Attention
	</Attention>
	<Attention fontSize="2xl">
		Attention
	</Attention>
	<Attention fontSize="3xl">
		Attention
	</Attention>
	<Attention fontSize="4xl">
		Attention
	</Attention>
	<Attention fontSize="5xl">
		Attention
	</Attention>
</div>)
```

## fontWeight
The font-weight CSS property sets the weight (or boldness) of the font. The weights available depend on the font-family that is currently set.

```tsx
import React from 'react'
import { Attention } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Attention fontWeight="regular">
		Attention
	</Attention>
	<Attention fontWeight="semiBold">
		Attention
	</Attention>
</div>)
```

## textTransform
The text-transform CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby.

```tsx
import React from 'react'
import { Attention } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Attention textTransform="none">
		Attention
	</Attention>
	<Attention textTransform="uppercase">
		Attention
	</Attention>
	<Attention textTransform="lowercase">
		Attention
	</Attention>
	<Attention textTransform="capitalize">
		Attention
	</Attention>
</div>)
```
