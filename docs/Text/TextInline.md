---

title: TextInline
group:
	title: Text

---

# TextInline

## Semantics
Значение по умолчанию - span; Можно указать теги - ["abbr", "b", "data", "dd", "dt", "i", "small", "strong"]

```tsx
import React from 'react'
import { TextInline } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<TextInline tag="abbr">
		TextInline
	</TextInline>
	<TextInline tag="b">
		TextInline
	</TextInline>
	<TextInline tag="data">
		TextInline
	</TextInline>
	<TextInline tag="dd">
		TextInline
	</TextInline>
	<TextInline tag="dt">
		TextInline
	</TextInline>
	<TextInline tag="i">
		TextInline
	</TextInline>
	<TextInline tag="small">
		TextInline
	</TextInline>
	<TextInline tag="strong">
		TextInline
	</TextInline>
</div>)
```

## color
The color CSS property sets the foreground color value of an element's text and text decorations, and sets the <currentcolor> value. currentcolor may be used as an indirect value on other properties and is the default for other color properties, such as border-color.

```tsx
import React from 'react'
import { TextInline } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<TextInline color="primary">
		TextInline
	</TextInline>
	<TextInline color="secondary">
		TextInline
	</TextInline>
	<TextInline color="black">
		TextInline
	</TextInline>
	<TextInline color="white">
		TextInline
	</TextInline>
</div>)
```

## fontSize
The font-size CSS property sets the size of the font. Changing the font size also updates the sizes of the font size-relative <length> units, such as em, ex, and so forth.

```tsx
import React from 'react'
import { TextInline } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<TextInline fontSize="none">
		TextInline
	</TextInline>
	<TextInline fontSize="5xs">
		TextInline
	</TextInline>
	<TextInline fontSize="4xs">
		TextInline
	</TextInline>
	<TextInline fontSize="3xs">
		TextInline
	</TextInline>
	<TextInline fontSize="2xs">
		TextInline
	</TextInline>
	<TextInline fontSize="xs">
		TextInline
	</TextInline>
	<TextInline fontSize="s">
		TextInline
	</TextInline>
	<TextInline fontSize="m">
		TextInline
	</TextInline>
	<TextInline fontSize="l">
		TextInline
	</TextInline>
	<TextInline fontSize="xl">
		TextInline
	</TextInline>
	<TextInline fontSize="2xl">
		TextInline
	</TextInline>
	<TextInline fontSize="3xl">
		TextInline
	</TextInline>
	<TextInline fontSize="4xl">
		TextInline
	</TextInline>
	<TextInline fontSize="5xl">
		TextInline
	</TextInline>
</div>)
```

## fontWeight
The font-weight CSS property sets the weight (or boldness) of the font. The weights available depend on the font-family that is currently set.

```tsx
import React from 'react'
import { TextInline } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<TextInline fontWeight="regular">
		TextInline
	</TextInline>
	<TextInline fontWeight="semiBold">
		TextInline
	</TextInline>
</div>)
```

## textTransform
The text-transform CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby.

```tsx
import React from 'react'
import { TextInline } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<TextInline textTransform="none">
		TextInline
	</TextInline>
	<TextInline textTransform="uppercase">
		TextInline
	</TextInline>
	<TextInline textTransform="lowercase">
		TextInline
	</TextInline>
	<TextInline textTransform="capitalize">
		TextInline
	</TextInline>
</div>)
```
