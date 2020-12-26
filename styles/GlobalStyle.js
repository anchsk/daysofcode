import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
body {
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap');

h3, h2 {
 font-family: 'Raleway' !important;
 }
}
`
export default GlobalStyle
