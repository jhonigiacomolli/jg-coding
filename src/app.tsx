import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { LanguageContextProvider } from 'hooks/language'
import { ReactElement } from 'react'
import { theme } from 'theme'
import { GlobalContextProvider } from 'hooks/global'
import { Root } from 'root'

export const App = (): ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalContextProvider>
        <LanguageContextProvider>
          <GlobalStyle />
          <Root />
        </LanguageContextProvider>
      </GlobalContextProvider>
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
        box-sizing: border-box;
        overflow-x: hidden;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: ${({ theme }) => theme.colors.primary70};
    }
`
