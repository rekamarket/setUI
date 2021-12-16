module InteractiveVariant = {
  let key = "interactiveVariant"

  @genType
  type t = [
    | #solid
    | #ghost
    | #borderless
    | #text
  ]

  let initial = #solid;

  type value = {
    "color": string,
    "backgroundColor": string,
    "borderColor": string,
    // "hover": Record<string, string>
    // "active": Record<string, string>
    // "focus": Record<string, string | Record<string, string>>
    // "disabled": Record<string, string>
  };

  type options = {
    "solid": value,
    "ghost": value,
    "borderless": value,
    "text": value,
  };

  let options = {
    "solid": {
      "color": "var(--text-color)",
      "backgroundColor": "var(--color)",
      "borderColor": "var(--color)",
    },

    "ghost": {
      "color": "var(--color)",
      "backgroundColor": "transparent",
      "borderColor": "var(--color)",
    },

    "borderless": {
      "color": "var(--color)",
      "backgroundColor": "hsl(var(--h) var(--s) 90% / var(--a))",
      "borderColor": "hsl(var(--h) var(--s) 90% / var(--a))",
    },

    "text": {
      "color": "var(--color)",
      "backgroundColor": "transparent",
      "borderColor": "transparent",
    },
  }

  type variant = {
    "solid": string,
    "ghost": string,
    "borderless": string,
    "text": string,
  };

  type output = {
    "color": string,
    "borderColor": string,
    "backgroundColor": string,
    "borderStyle": string,
    "outlineStyle": string,
    "transition": string,
  }

  type cssResolve = (value) => output
}
