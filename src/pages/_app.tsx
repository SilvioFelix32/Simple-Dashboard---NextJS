import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}> {/* resetCSS=(false) = remove todos os estilos padrões*/}
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
