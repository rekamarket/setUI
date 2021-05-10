import { FC } from 'react'
import './index.css'

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
