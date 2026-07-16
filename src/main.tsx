import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './theme.tsx'
import { LangProvider } from './lang.tsx'

createRoot(document.getElementById('root')!).render(
  <LangProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </LangProvider>,
)
