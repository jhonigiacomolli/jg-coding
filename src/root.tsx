import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { theme } from 'theme'
import { App } from 'app'
import { LanguageContextProvider } from 'languages/context'
import { ReactElement } from 'react'

function Root (): ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <LanguageContextProvider>
        <GlobalStyle />
        <App />
      </LanguageContextProvider>
    </ThemeProvider>
  )
}

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`
export { Root }
