import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/login/Login'
import Cadastro from './pages/cadastro/Cadastro'

function App() {
  return (
    <>
        <BrowserRouter>
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </BrowserRouter>
    </>
  )
}

export default App