import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from "./js/pages/Index";
import './sass/index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
)
