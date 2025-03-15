import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto Mono", monospace;
} 

:focus {
  outline: 0;
  box-shadow: 0 0 0 2px ${props => props.theme['green-500']};
}

body {
  background: ${props => props.theme['gray-900']};
  color: ${props => props.theme['gray-300']};
}


`