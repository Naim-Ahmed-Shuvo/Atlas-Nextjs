import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import Layout from '../layout/Layout'
import StateProvider, { useStateValue } from '../store/StateProvider'
import reducer, { initialState } from '../store/reducer'


function MyApp({ Component, pageProps }) {
 
  return <ThemeProvider attribute="class">
    <StateProvider initialState={initialState} reducer={reducer}>
      
        <Component {...pageProps} />
   
    </StateProvider>
  </ThemeProvider>
}

export default MyApp
