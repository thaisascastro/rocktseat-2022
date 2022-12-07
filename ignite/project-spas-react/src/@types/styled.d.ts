import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

// sobreescrever algo do styled-components
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
