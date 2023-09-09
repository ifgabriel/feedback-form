import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <main className='w-screen h-screen bg-slate-200 flex items-center justify-center'>
      <App />
    </main>
  </React.StrictMode >,
)
