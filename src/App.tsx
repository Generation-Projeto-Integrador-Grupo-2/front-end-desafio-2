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
import ErrorBoundary from './components/ErrorBoundary';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
          <div className="min-h-[80vh]">
            <ErrorBoundary>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/sobrenos" element={<SobreNos />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path='/motoristas/cadastrar' element={<CadastroMotorista />} />
                <Route path='/corridas/cadastrar' element={<CadastroCorrida />} />
                <Route path='/corridas' element={<ListaCorridas />} />
              </Routes>
            </ErrorBoundary>
          </div>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default App