---

title: Text


---

# Text

## Semantics
Можно указать теги - ["abbr", "b", "data", "dd", "dt", "i", "small", "span", "strong"]

```tsx
import React from 'react'
import { Text } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Text tag="abbr">
		Text content
	</Text>
	<Text tag="b">
		Text content
	</Text>
	<Text tag="data">
		Text content
	</Text>
	<Text tag="dd">
		Text content
	</Text>
	<Text tag="dt">
		Text content
	</Text>
	<Text tag="i">
		Text content
	</Text>
	<Text tag="small">
		Text content
	</Text>
	<Text tag="span">
		Text content
	</Text>
	<Text tag="strong">
		Text content
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
		Text content
	</Text>
	<Text color="secondary" tag="span">
		Text content
	</Text>
	<Text color="black" tag="span">
		Text content
	</Text>
	<Text color="white" tag="span">
		Text content
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
		Text content
	</Text>
	<Text fontSize="5xs" tag="span">
		Text content
	</Text>
	<Text fontSize="4xs" tag="span">
		Text content
	</Text>
	<Text fontSize="3xs" tag="span">
		Text content
	</Text>
	<Text fontSize="2xs" tag="span">
		Text content
	</Text>
	<Text fontSize="xs" tag="span">
		Text content
	</Text>
	<Text fontSize="s" tag="span">
		Text content
	</Text>
	<Text fontSize="m" tag="span">
		Text content
	</Text>
	<Text fontSize="l" tag="span">
		Text content
	</Text>
	<Text fontSize="xl" tag="span">
		Text content
	</Text>
	<Text fontSize="2xl" tag="span">
		Text content
	</Text>
	<Text fontSize="3xl" tag="span">
		Text content
	</Text>
	<Text fontSize="4xl" tag="span">
		Text content
	</Text>
	<Text fontSize="5xl" tag="span">
		Text content
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
		Text content
	</Text>
	<Text fontWeight="semiBold" tag="span">
		Text content
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
		Text content
	</Text>
	<Text textTransform="uppercase" tag="span">
		Text content
	</Text>
	<Text textTransform="lowercase" tag="span">
		Text content
	</Text>
	<Text textTransform="capitalize" tag="span">
		Text content
	</Text>
</div>)
```
