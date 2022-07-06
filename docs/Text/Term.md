---

title: Term
group:
	title: Text

---

# Term

## Semantics
Значение по умолчанию - dt; Можно указать теги - ["abbr", "b", "data", "dd", "i", "small", "span", "strong"]

```tsx
import React from 'react'
import { Term } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Term tag="abbr">
		Term
	</Term>
	<Term tag="b">
		Term
	</Term>
	<Term tag="data">
		Term
	</Term>
	<Term tag="dd">
		Term
	</Term>
	<Term tag="i">
		Term
	</Term>
	<Term tag="small">
		Term
	</Term>
	<Term tag="span">
		Term
	</Term>
	<Term tag="strong">
		Term
	</Term>
</div>)
```

## color
The color CSS property sets the foreground color value of an element's text and text decorations, and sets the <currentcolor> value. currentcolor may be used as an indirect value on other properties and is the default for other color properties, such as border-color.

```tsx
import React from 'react'
import { Term } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Term color="primary">
		Term
	</Term>
	<Term color="secondary">
		Term
	</Term>
	<Term color="black">
		Term
	</Term>
	<Term color="white">
		Term
	</Term>
</div>)
```

## fontSize
The font-size CSS property sets the size of the font. Changing the font size also updates the sizes of the font size-relative <length> units, such as em, ex, and so forth.

```tsx
import React from 'react'
import { Term } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Term fontSize="none">
		Term
	</Term>
	<Term fontSize="5xs">
		Term
	</Term>
	<Term fontSize="4xs">
		Term
	</Term>
	<Term fontSize="3xs">
		Term
	</Term>
	<Term fontSize="2xs">
		Term
	</Term>
	<Term fontSize="xs">
		Term
	</Term>
	<Term fontSize="s">
		Term
	</Term>
	<Term fontSize="m">
		Term
	</Term>
	<Term fontSize="l">
		Term
	</Term>
	<Term fontSize="xl">
		Term
	</Term>
	<Term fontSize="2xl">
		Term
	</Term>
	<Term fontSize="3xl">
		Term
	</Term>
	<Term fontSize="4xl">
		Term
	</Term>
	<Term fontSize="5xl">
		Term
	</Term>
</div>)
```

## fontWeight
The font-weight CSS property sets the weight (or boldness) of the font. The weights available depend on the font-family that is currently set.

```tsx
import React from 'react'
import { Term } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Term fontWeight="regular">
		Term
	</Term>
	<Term fontWeight="semiBold">
		Term
	</Term>
</div>)
```

## textTransform
The text-transform CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby.

```tsx
import React from 'react'
import { Term } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Term textTransform="none">
		Term
	</Term>
	<Term textTransform="uppercase">
		Term
	</Term>
	<Term textTransform="lowercase">
		Term
	</Term>
	<Term textTransform="capitalize">
		Term
	</Term>
</div>)
```
