import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import WorkTrialDeck from './components/WorkTrialDeck.tsx'
import { ChecklistProvider } from './hooks/useChecklist'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChecklistProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/worktrialdeck" element={<WorkTrialDeck />} />
        </Routes>
      </BrowserRouter>
    </ChecklistProvider>
  </StrictMode>,
)
