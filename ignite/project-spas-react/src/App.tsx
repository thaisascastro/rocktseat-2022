import { Router } from './router'
import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from './global'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
