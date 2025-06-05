import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Cadastro from './pages/cadastro/Cadastro'
import Perfil from './pages/perfil/Perfil'
import { AuthProvider } from './context/AuthContext'
import SobreNos from './pages/sobrenos/SobreNos'
import CadastroMotorista from './components/motoristas/CadastroMotorista'
import CadastroCorrida from './components/corridas/CadastroCorrida'
import ListaCorridas from './pages/corridas/ListaCorridas'

function App() {
  return (
    <>
      {/* <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
              <Route path="/sobre" element={<SobreNos />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path='/motoristas/cadastrar' element={<CadastroMotorista />} />
              <Route path='/corridas/cadastrar' element={<CadastroCorrida />} />
              <Route path='/corridas' element={<ListaCorridas />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider> */}
      <ListaCorridas />
    </>
  )
}

export default App