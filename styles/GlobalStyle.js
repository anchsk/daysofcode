import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  scroll-behavior: smooth;
}

#__next {
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

a {
  color: inherit;
  text-decoration: none;
}
`

export default GlobalStyle