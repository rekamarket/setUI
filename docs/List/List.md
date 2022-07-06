---

title: List


---

# List

## Semantics
Можно указать теги - ["div", "ul", "ol"]

```tsx
import React from 'react'
import { List } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<List tag="div">
		List content
	</List>
	<List tag="ul">
		List content
	</List>
	<List tag="ol">
		List content
	</List>
</div>)
```

## markerGap
The space between content and the marker

```tsx
import React from 'react'
import { List } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<List markerGap="none" tag="ul">
		List content
	</List>
	<List markerGap="s" tag="ul">
		List content
	</List>
	<List markerGap="m" tag="ul">
		List content
	</List>
	<List markerGap="l" tag="ul">
		List content
	</List>
</div>)
```

## markerPosition

```tsx
import React from 'react'
import { List } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<List markerPosition="inside" tag="ul">
		List content
	</List>
	<List markerPosition="outside" tag="ul">
		List content
	</List>
</div>)
```

## markerSize

```tsx
import React from 'react'
import { List } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<List markerSize="none" tag="ul">
		List content
	</List>
	<List markerSize="s" tag="ul">
		List content
	</List>
	<List markerSize="m" tag="ul">
		List content
	</List>
	<List markerSize="l" tag="ul">
		List content
	</List>
</div>)
```

## markerType

```tsx
import React from 'react'
import { List } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<List markerType="none" tag="ul">
		List content
	</List>
	<List markerType="bullet" tag="ul">
		List content
	</List>
	<List markerType="circle" tag="ul">
		List content
	</List>
</div>)
```

## color
The color CSS property sets the foreground color value of an element's text and text decorations, and sets the <currentcolor> value. currentcolor may be used as an indirect value on other properties and is the default for other color properties, such as border-color.

```tsx
import React from 'react'
import { List } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<List color="primary" tag="ul">
		List content
	</List>
	<List color="secondary" tag="ul">
		List content
	</List>
	<List color="black" tag="ul">
		List content
	</List>
	<List color="white" tag="ul">
		List content
	</List>
</div>)
```

## fontSize
The font-size CSS property sets the size of the font. Changing the font size also updates the sizes of the font size-relative <length> units, such as em, ex, and so forth.

```tsx
import React from 'react'
import { List } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<List fontSize="none" tag="ul">
		List content
	</List>
	<List fontSize="5xs" tag="ul">
		List content
	</List>
	<List fontSize="4xs" tag="ul">
		List content
	</List>
	<List fontSize="3xs" tag="ul">
		List content
	</List>
	<List fontSize="2xs" tag="ul">
		List content
	</List>
	<List fontSize="xs" tag="ul">
		List content
	</List>
	<List fontSize="s" tag="ul">
		List content
	</List>
	<List fontSize="m" tag="ul">
		List content
	</List>
	<List fontSize="l" tag="ul">
		List content
	</List>
	<List fontSize="xl" tag="ul">
		List content
	</List>
	<List fontSize="2xl" tag="ul">
		List content
	</List>
	<List fontSize="3xl" tag="ul">
		List content
	</List>
	<List fontSize="4xl" tag="ul">
		List content
	</List>
	<List fontSize="5xl" tag="ul">
		List content
	</List>
</div>)
```

## fontWeight
The font-weight CSS property sets the weight (or boldness) of the font. The weights available depend on the font-family that is currently set.

```tsx
import React from 'react'
import { List } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<List fontWeight="regular" tag="ul">
		List content
	</List>
	<List fontWeight="semiBold" tag="ul">
		List content
	</List>
</div>)
```
