# SetUI - new and easy way to style components


Experimental syntax goal:

```js
@padding({
    values: {
        large: 36,
        medium: 24,
        small: 20,
    },
})
@font({
    useBooleanProps,
    size: {
        media: {
            [Phone]: FontSize.small,
            [Tablet]: FontSize.medium,
            [Desktop]: FontSize.large,
        },
    },
})
class CustomText extends Text;

// usage
<CustomText
    padding="large"
    size="large"
    uppercase
    underline
>
    Some text
</CustomText>
```
