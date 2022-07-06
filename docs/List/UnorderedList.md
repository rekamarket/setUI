---

title: UnorderedList
group:
	title: List

---

# UnorderedList

## Semantics
Значение по умолчанию - ul; Можно указать теги - ["div", "ol"]

```tsx
import React from 'react'
import { UnorderedList } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<UnorderedList tag="div">
		UnorderedList content
	</UnorderedList>
	<UnorderedList tag="ol">
		UnorderedList content
	</UnorderedList>
</div>)
```

## markerGap
The space between content and the marker

```tsx
import React from 'react'
import { UnorderedList } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<UnorderedList markerGap="none">
		UnorderedList content
	</UnorderedList>
	<UnorderedList markerGap="s">
		UnorderedList content
	</UnorderedList>
	<UnorderedList markerGap="m">
		UnorderedList content
	</UnorderedList>
	<UnorderedList markerGap="l">
		UnorderedList content
	</UnorderedList>
</div>)
```

## markerPosition

```tsx
import React from 'react'
import { UnorderedList } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<UnorderedList markerPosition="inside">
		UnorderedList content
	</UnorderedList>
	<UnorderedList markerPosition="outside">
		UnorderedList content
	</UnorderedList>
</div>)
```

## markerSize

```tsx
import React from 'react'
import { UnorderedList } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<UnorderedList markerSize="none">
		UnorderedList content
	</UnorderedList>
	<UnorderedList markerSize="s">
		UnorderedList content
	</UnorderedList>
	<UnorderedList markerSize="m">
		UnorderedList content
	</UnorderedList>
	<UnorderedList markerSize="l">
		UnorderedList content
	</UnorderedList>
</div>)
```

## markerType

```tsx
import React from 'react'
import { UnorderedList } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<UnorderedList markerType="none">
		UnorderedList content
	</UnorderedList>
	<UnorderedList markerType="bullet">
		UnorderedList content
	</UnorderedList>
	<UnorderedList markerType="circle">
		UnorderedList content
	</UnorderedList>
</div>)
```

## color
The color CSS property sets the foreground color value of an element's text and text decorations, and sets the <currentcolor> value. currentcolor may be used as an indirect value on other properties and is the default for other color properties, such as border-color.

```tsx
import React from 'react'
import { UnorderedList } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<UnorderedList color="primary">
		UnorderedList content
	</UnorderedList>
	<UnorderedList color="secondary">
		UnorderedList content
	</UnorderedList>
	<UnorderedList color="black">
		UnorderedList content
	</UnorderedList>
	<UnorderedList color="white">
		UnorderedList content
	</UnorderedList>
</div>)
```

## fontSize
The font-size CSS property sets the size of the font. Changing the font size also updates the sizes of the font size-relative <length> units, such as em, ex, and so forth.

```tsx
import React from 'react'
import { UnorderedList } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<UnorderedList fontSize="none">
		UnorderedList content
	</UnorderedList>
	<UnorderedList fontSize="5xs">
		UnorderedList content
	</UnorderedList>
	<UnorderedList fontSize="4xs">
		UnorderedList content
	</UnorderedList>
	<UnorderedList fontSize="3xs">
		UnorderedList content
	</UnorderedList>
	<UnorderedList fontSize="2xs">
		UnorderedList content
	</UnorderedList>
	<UnorderedList fontSize="xs">
		UnorderedList content
	</UnorderedList>
	<UnorderedList fontSize="s">
		UnorderedList content
	</UnorderedList>
	<UnorderedList fontSize="m">
		UnorderedList content
	</UnorderedList>
	<UnorderedList fontSize="l">
		UnorderedList content
	</UnorderedList>
	<UnorderedList fontSize="xl">
		UnorderedList content
	</UnorderedList>
	<UnorderedList fontSize="2xl">
		UnorderedList content
	</UnorderedList>
	<UnorderedList fontSize="3xl">
		UnorderedList content
	</UnorderedList>
	<UnorderedList fontSize="4xl">
		UnorderedList content
	</UnorderedList>
	<UnorderedList fontSize="5xl">
		UnorderedList content
	</UnorderedList>
</div>)
```

## fontWeight
The font-weight CSS property sets the weight (or boldness) of the font. The weights available depend on the font-family that is currently set.

```tsx
import React from 'react'
import { UnorderedList } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<UnorderedList fontWeight="regular">
		UnorderedList content
	</UnorderedList>
	<UnorderedList fontWeight="semiBold">
		UnorderedList content
	</UnorderedList>
</div>)
```
