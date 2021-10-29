import Footer from 'components/Footer';
import './_app.css';

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default App;
