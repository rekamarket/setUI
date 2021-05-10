import { FC } from 'react'

type Props = {
  Component: FC
  pageProps: any
}

const App: FC<Props> = ({ Component, pageProps }) => {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  )
}

export default App
