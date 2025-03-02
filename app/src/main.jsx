import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createGlobalStyle } from 'styled-components'
import App from './App.jsx'

const GlobalStyle=createGlobalStyle`

*{
margin:0;
padding:0;
box-sizing:border-box;
}

body{
height:100%;
width:100%;
background-color:sky;
overflow:hidden;
}
`
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
)
