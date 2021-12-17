open VariantReflection

module ButtonLinkVariant = {
  include VariantReflection

  @genType
  type i = { "variant": VariantReflection.t }

  type state = {
    "color": string,
    "backgroundColor": string,
    "borderColor": string,
    "outlineColor": string,
    "outlineStyle": string,
  }

  type value = {
    "color": string,
    "backgroundColor": string,
    "borderColor": string,
    ":hover": state,
    ":active": state,
    ":focus": state,
    ":disabled": state,
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

      ":hover": {
        "color": "var(--text-color)",
        "backgroundColor": "hsl(var(--h) var(--s) calc(var(--l) - 10%) / var(--a))",
        "borderColor": "hsl(var(--h) var(--s) calc(var(--l) - 10%) / var(--a))",
        "outlineColor": "inherit",
        "outlineStyle": "none",
      },

      ":active": {
        "color": "var(--text-color)",
        "backgroundColor": "hsl(var(--h) var(--s) calc(var(--l) - 20%) / var(--a))",
        "borderColor": "hsl(var(--h) var(--s) calc(var(--l) - 20%) / var(--a))",
        "outlineColor": "inherit",
        "outlineStyle": "none",
      },

      ":focus": {
        "color": "var(--text-color)",
        "backgroundColor": "hsl(var(--h) var(--s) calc(var(--l) - 10%) / var(--a))",
        "borderColor": "hsl(var(--h) var(--s) calc(var(--l) - 10%) / var(--a))",
        "outlineColor": "hsl(0 0% 100% / .8)",
        "outlineStyle": "solid",
      },

      ":disabled": {
        "color": "var(--text-color)",
        "backgroundColor": "hsl(var(--h) var(--s) var(--l) / .5)",
        "borderColor": "hsl(var(--h) var(--s) var(--l) / .5)",
        "outlineColor": "inherit",
        "outlineStyle": "none",
      },
    },

    "ghost": {
      "color": "var(--color)",
      "backgroundColor": "transparent",
      "borderColor": "var(--color)",

      ":hover": {
        "color": "hsl(var(--h) var(--s) calc(var(--l) - 10%) / var(--a))",
        "backgroundColor": "transparent",
        "borderColor": "hsl(var(--h) var(--s) calc(var(--l) - 10%) / var(--a))",
        "outlineColor": "inherit",
        "outlineStyle": "none",
      },

      ":active": {
        "color": "hsl(var(--h) var(--s) calc(var(--l) - 20%) / var(--a))",
        "backgroundColor": "transparent",
        "borderColor": "hsl(var(--h) var(--s) calc(var(--l) - 20%) / var(--a))",
        "outlineColor": "inherit",
        "outlineStyle": "none",
      },

      ":focus": {
        "color": "hsl(var(--h) var(--s) calc(var(--l) - 20%) / var(--a))",
        "backgroundColor": "transparent",
        "borderColor": "hsl(var(--h) var(--s) calc(var(--l) - 20%) / var(--a))",
        "outlineColor": "hsl(var(--h) var(--s) calc(var(--l) - 20%) / .5)",
        "outlineStyle": "solid",
      },

      ":disabled": {
        "color": "hsl(var(--h) var(--s) var(--l) / .5)",
        "backgroundColor": "transparent",
        "borderColor": "hsl(var(--h) var(--s) var(--l) / .5)",
        "outlineColor": "inherit",
        "outlineStyle": "none",
      },
    },

    "borderless": {
      "color": "var(--color)",
      "backgroundColor": "hsl(var(--h) var(--s) 90% / var(--a))",
      "borderColor": "hsl(var(--h) var(--s) 90% / var(--a))",

      ":hover": {
        "color": "var(--color)",
        "backgroundColor": "hsl(var(--h) var(--s) 80% / var(--a))",
        "borderColor": "hsl(var(--h) var(--s) 80% / var(--a))",
        "outlineColor": "inherit",
        "outlineStyle": "none",
      },

      ":active": {
        "color": "var(--color)",
        "backgroundColor": "hsl(var(--h) var(--s) 70% / var(--a))",
        "borderColor": "hsl(var(--h) var(--s) 70% / var(--a)))",
        "outlineColor": "inherit",
        "outlineStyle": "none",
      },

      ":focus": {
        "color": "var(--color)",
        "backgroundColor": "hsl(var(--h) var(--s) 70% / var(--a))",
        "borderColor": "hsl(var(--h) var(--s) 70% / var(--a))",
        "outlineColor": "hsl(0 0% 100% / .5)",
        "outlineStyle": "solid",
      },

      ":disabled": {
        "color": "var(--color)",
        "backgroundColor": "transparent",
        "borderColor": "hsl(var(--h) var(--s) var(--l) / .5)",
        "outlineColor": "inherit",
        "outlineStyle": "none",
      },
    },

    "text": {
      "color": "var(--color)",
      "backgroundColor": "transparent",
      "borderColor": "transparent",

      ":hover": {
        "color": "hsl(var(--h) var(--s) calc(var(--l) - 10%) / var(--a))",
        "backgroundColor": "transparent",
        "borderColor": "transparent",
        "outlineColor": "inherit",
        "outlineStyle": "none",
      },

      ":active": {
        "color": "hsl(var(--h) var(--s) calc(var(--l) - 20%) / var(--a))",
        "backgroundColor": "transparent",
        "borderColor": "transparent",
        "outlineColor": "inherit",
        "outlineStyle": "none",
      },

      ":focus": {
        "color": "hsl(var(--h) var(--s) calc(var(--l) - 20%) / var(--a))",
        "backgroundColor": "transparent",
        "borderColor": "transparent",
        "outlineColor": "hsl(var(--h) var(--s) calc(var(--l) - 20%) / .5)",
        "outlineStyle": "solid",
      },

      ":disabled": {
        "color": "hsl(var(--h) var(--s) var(--l) / .5)",
        "backgroundColor": "transparent",
        "borderColor": "transparent",
        "outlineColor": "inherit",
        "outlineStyle": "none",
      },
    },
  }

  type stateOutput = {
    "color": string,
    "backgroundColor": string,
    "borderColor": string,
    "outlineColor": string,
    "outlineStyle": string,
  }

  type output = {
    "color": string,
    "borderColor": string,
    "backgroundColor": string,
    "borderStyle": string,
    "outlineStyle": string,
    "transition": string,
    ":hover": stateOutput,
    ":active": stateOutput,
    ":focus": stateOutput,
    ":disabled": stateOutput,
  }

  type cssResolve = (value) => output
}
