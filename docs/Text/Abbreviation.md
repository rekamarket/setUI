---

title: Abbreviation
group:
	title: Text

---

# Abbreviation

## Semantics
Значение по умолчанию - abbr; Можно указать теги - ["b", "data", "dd", "dt", "i", "small", "span", "strong"]

```tsx
import React from 'react'
import { Abbreviation } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Abbreviation tag="b">
		Abbreviation
	</Abbreviation>
	<Abbreviation tag="data">
		Abbreviation
	</Abbreviation>
	<Abbreviation tag="dd">
		Abbreviation
	</Abbreviation>
	<Abbreviation tag="dt">
		Abbreviation
	</Abbreviation>
	<Abbreviation tag="i">
		Abbreviation
	</Abbreviation>
	<Abbreviation tag="small">
		Abbreviation
	</Abbreviation>
	<Abbreviation tag="span">
		Abbreviation
	</Abbreviation>
	<Abbreviation tag="strong">
		Abbreviation
	</Abbreviation>
</div>)
```

## color
The color CSS property sets the foreground color value of an element's text and text decorations, and sets the <currentcolor> value. currentcolor may be used as an indirect value on other properties and is the default for other color properties, such as border-color.

```tsx
import React from 'react'
import { Abbreviation } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Abbreviation color="primary">
		Abbreviation
	</Abbreviation>
	<Abbreviation color="secondary">
		Abbreviation
	</Abbreviation>
	<Abbreviation color="black">
		Abbreviation
	</Abbreviation>
	<Abbreviation color="white">
		Abbreviation
	</Abbreviation>
</div>)
```

## fontSize
The font-size CSS property sets the size of the font. Changing the font size also updates the sizes of the font size-relative <length> units, such as em, ex, and so forth.

```tsx
import React from 'react'
import { Abbreviation } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Abbreviation fontSize="none">
		Abbreviation
	</Abbreviation>
	<Abbreviation fontSize="5xs">
		Abbreviation
	</Abbreviation>
	<Abbreviation fontSize="4xs">
		Abbreviation
	</Abbreviation>
	<Abbreviation fontSize="3xs">
		Abbreviation
	</Abbreviation>
	<Abbreviation fontSize="2xs">
		Abbreviation
	</Abbreviation>
	<Abbreviation fontSize="xs">
		Abbreviation
	</Abbreviation>
	<Abbreviation fontSize="s">
		Abbreviation
	</Abbreviation>
	<Abbreviation fontSize="m">
		Abbreviation
	</Abbreviation>
	<Abbreviation fontSize="l">
		Abbreviation
	</Abbreviation>
	<Abbreviation fontSize="xl">
		Abbreviation
	</Abbreviation>
	<Abbreviation fontSize="2xl">
		Abbreviation
	</Abbreviation>
	<Abbreviation fontSize="3xl">
		Abbreviation
	</Abbreviation>
	<Abbreviation fontSize="4xl">
		Abbreviation
	</Abbreviation>
	<Abbreviation fontSize="5xl">
		Abbreviation
	</Abbreviation>
</div>)
```

## fontWeight
The font-weight CSS property sets the weight (or boldness) of the font. The weights available depend on the font-family that is currently set.

```tsx
import React from 'react'
import { Abbreviation } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Abbreviation fontWeight="regular">
		Abbreviation
	</Abbreviation>
	<Abbreviation fontWeight="semiBold">
		Abbreviation
	</Abbreviation>
</div>)
```

## textTransform
The text-transform CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby.

```tsx
import React from 'react'
import { Abbreviation } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Abbreviation textTransform="none">
		Abbreviation
	</Abbreviation>
	<Abbreviation textTransform="uppercase">
		Abbreviation
	</Abbreviation>
	<Abbreviation textTransform="lowercase">
		Abbreviation
	</Abbreviation>
	<Abbreviation textTransform="capitalize">
		Abbreviation
	</Abbreviation>
</div>)
```
