import Footer from '../src/components/Footer'
import '../styles/globals.css'

const App = ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
    <Footer />
  </>
)

export default App
