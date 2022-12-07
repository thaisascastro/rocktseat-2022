import { ThemeProvider } from "styled-components";
import { Button } from './components/button'
import { GlobalStyle } from "./global";
import { defaultTheme } from "./styles/themes/default";

export default function App() {
  return (
   <ThemeProvider theme={defaultTheme}>
    <Button variant='primary' />
    <Button variant='secondary'/>
    <Button variant='success'/>
    <Button variant='danger'/>
    <GlobalStyle/>
   </ThemeProvider>
  )
}

