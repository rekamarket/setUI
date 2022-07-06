---

title: Definition
group:
	title: Text

---

# Definition

## Semantics
Значение по умолчанию - dd; Можно указать теги - ["abbr", "b", "data", "dt", "i", "small", "span", "strong"]

```tsx
import React from 'react'
import { Definition } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Definition tag="abbr">
		Definition
	</Definition>
	<Definition tag="b">
		Definition
	</Definition>
	<Definition tag="data">
		Definition
	</Definition>
	<Definition tag="dt">
		Definition
	</Definition>
	<Definition tag="i">
		Definition
	</Definition>
	<Definition tag="small">
		Definition
	</Definition>
	<Definition tag="span">
		Definition
	</Definition>
	<Definition tag="strong">
		Definition
	</Definition>
</div>)
```

## color
The color CSS property sets the foreground color value of an element's text and text decorations, and sets the <currentcolor> value. currentcolor may be used as an indirect value on other properties and is the default for other color properties, such as border-color.

```tsx
import React from 'react'
import { Definition } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Definition color="primary">
		Definition
	</Definition>
	<Definition color="secondary">
		Definition
	</Definition>
	<Definition color="black">
		Definition
	</Definition>
	<Definition color="white">
		Definition
	</Definition>
</div>)
```

## fontSize
The font-size CSS property sets the size of the font. Changing the font size also updates the sizes of the font size-relative <length> units, such as em, ex, and so forth.

```tsx
import React from 'react'
import { Definition } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Definition fontSize="none">
		Definition
	</Definition>
	<Definition fontSize="5xs">
		Definition
	</Definition>
	<Definition fontSize="4xs">
		Definition
	</Definition>
	<Definition fontSize="3xs">
		Definition
	</Definition>
	<Definition fontSize="2xs">
		Definition
	</Definition>
	<Definition fontSize="xs">
		Definition
	</Definition>
	<Definition fontSize="s">
		Definition
	</Definition>
	<Definition fontSize="m">
		Definition
	</Definition>
	<Definition fontSize="l">
		Definition
	</Definition>
	<Definition fontSize="xl">
		Definition
	</Definition>
	<Definition fontSize="2xl">
		Definition
	</Definition>
	<Definition fontSize="3xl">
		Definition
	</Definition>
	<Definition fontSize="4xl">
		Definition
	</Definition>
	<Definition fontSize="5xl">
		Definition
	</Definition>
</div>)
```

## fontWeight
The font-weight CSS property sets the weight (or boldness) of the font. The weights available depend on the font-family that is currently set.

```tsx
import React from 'react'
import { Definition } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Definition fontWeight="regular">
		Definition
	</Definition>
	<Definition fontWeight="semiBold">
		Definition
	</Definition>
</div>)
```

## textTransform
The text-transform CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby.

```tsx
import React from 'react'
import { Definition } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Definition textTransform="none">
		Definition
	</Definition>
	<Definition textTransform="uppercase">
		Definition
	</Definition>
	<Definition textTransform="lowercase">
		Definition
	</Definition>
	<Definition textTransform="capitalize">
		Definition
	</Definition>
</div>)
```
