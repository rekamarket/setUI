---

title: OrderedList
group:
	title: List

---

# OrderedList

## Semantics
Значение по умолчанию - ol; Можно указать теги - ["div", "ul"]

```tsx
import React from 'react'
import { OrderedList } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<OrderedList tag="div">
		OrderedList content
	</OrderedList>
	<OrderedList tag="ul">
		OrderedList content
	</OrderedList>
</div>)
```

## markerGap
The space between content and the marker

```tsx
import React from 'react'
import { OrderedList } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<OrderedList markerGap="none">
		OrderedList content
	</OrderedList>
	<OrderedList markerGap="s">
		OrderedList content
	</OrderedList>
	<OrderedList markerGap="m">
		OrderedList content
	</OrderedList>
	<OrderedList markerGap="l">
		OrderedList content
	</OrderedList>
</div>)
```

## markerPosition

```tsx
import React from 'react'
import { OrderedList } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<OrderedList markerPosition="inside">
		OrderedList content
	</OrderedList>
	<OrderedList markerPosition="outside">
		OrderedList content
	</OrderedList>
</div>)
```

## markerSize

```tsx
import React from 'react'
import { OrderedList } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<OrderedList markerSize="none">
		OrderedList content
	</OrderedList>
	<OrderedList markerSize="s">
		OrderedList content
	</OrderedList>
	<OrderedList markerSize="m">
		OrderedList content
	</OrderedList>
	<OrderedList markerSize="l">
		OrderedList content
	</OrderedList>
</div>)
```

## markerType

```tsx
import React from 'react'
import { OrderedList } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<OrderedList markerType="none">
		OrderedList content
	</OrderedList>
	<OrderedList markerType="bullet">
		OrderedList content
	</OrderedList>
	<OrderedList markerType="circle">
		OrderedList content
	</OrderedList>
</div>)
```

## color
The color CSS property sets the foreground color value of an element's text and text decorations, and sets the <currentcolor> value. currentcolor may be used as an indirect value on other properties and is the default for other color properties, such as border-color.

```tsx
import React from 'react'
import { OrderedList } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<OrderedList color="primary">
		OrderedList content
	</OrderedList>
	<OrderedList color="secondary">
		OrderedList content
	</OrderedList>
	<OrderedList color="black">
		OrderedList content
	</OrderedList>
	<OrderedList color="white">
		OrderedList content
	</OrderedList>
</div>)
```

## fontSize
The font-size CSS property sets the size of the font. Changing the font size also updates the sizes of the font size-relative <length> units, such as em, ex, and so forth.

```tsx
import React from 'react'
import { OrderedList } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<OrderedList fontSize="none">
		OrderedList content
	</OrderedList>
	<OrderedList fontSize="5xs">
		OrderedList content
	</OrderedList>
	<OrderedList fontSize="4xs">
		OrderedList content
	</OrderedList>
	<OrderedList fontSize="3xs">
		OrderedList content
	</OrderedList>
	<OrderedList fontSize="2xs">
		OrderedList content
	</OrderedList>
	<OrderedList fontSize="xs">
		OrderedList content
	</OrderedList>
	<OrderedList fontSize="s">
		OrderedList content
	</OrderedList>
	<OrderedList fontSize="m">
		OrderedList content
	</OrderedList>
	<OrderedList fontSize="l">
		OrderedList content
	</OrderedList>
	<OrderedList fontSize="xl">
		OrderedList content
	</OrderedList>
	<OrderedList fontSize="2xl">
		OrderedList content
	</OrderedList>
	<OrderedList fontSize="3xl">
		OrderedList content
	</OrderedList>
	<OrderedList fontSize="4xl">
		OrderedList content
	</OrderedList>
	<OrderedList fontSize="5xl">
		OrderedList content
	</OrderedList>
</div>)
```

## fontWeight
The font-weight CSS property sets the weight (or boldness) of the font. The weights available depend on the font-family that is currently set.

```tsx
import React from 'react'
import { OrderedList } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<OrderedList fontWeight="regular">
		OrderedList content
	</OrderedList>
	<OrderedList fontWeight="semiBold">
		OrderedList content
	</OrderedList>
</div>)
```
