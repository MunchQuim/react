import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Game from './game'

import "./style.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Game />
  </StrictMode>,
)
