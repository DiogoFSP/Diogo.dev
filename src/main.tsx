import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './theme.tsx'
import { LangProvider } from './lang.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <LangProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </LangProvider>
  </BrowserRouter>,
)
