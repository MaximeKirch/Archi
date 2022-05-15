import Layout from "./components/layout"
//import "../styles/global.css"
import { ChakraProvider } from "@chakra-ui/react"
import Navbar from "./components/navbar"

if (typeof window === 'object') {
  // mark that the app was server-side rendered
  window.__WAS_SSR = true
}


function MyApp({ Component, pageProps }) {

  return(
    <ChakraProvider>
     <Component {...pageProps} />
     </ChakraProvider>
  )
}

export default MyApp
