import '../public/assets/css/main/app.css'
import '../styles/globals.css'

import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {    
    import('../public/assets/js/bootstrap');
    // import('../public/assets/js/pages/horizontal-layout.js');
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
