type link = {
  mutable href: string,
  mutable rel: string,
}

type head = {
  appendChild: (. string) => unit,
  removeChild: (. string) => unit,
}

%%raw("import './build/index.gen.css'")

@react.component
let default = (~children: React.element) => {
  React.useEffect0(() => {
    let link = %raw(`
      document.createElement('link')
    `)

    link.href = "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap"
    link.rel = "stylesheet"

    let head = %raw(`
      document.getElementsByTagName('head')[0]
    `)
    head.appendChild(. link)

    let cleanup = () => {
      head.removeChild(. link)
    }

    Some(cleanup)
  })

  <> children </>
}
