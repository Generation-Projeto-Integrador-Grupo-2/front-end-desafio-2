import './App.css'
import CadastroMotorista from './components/motoristas/CadastroMotorista'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CadastroCorrida from './components/corridas/CadastroCorrida';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/motoristas/novo" element={<CadastroMotorista />} />
          <Route path="/corridas/nova" element={<CadastroCorrida />} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          theme="light"
        />
      </div>
    </BrowserRouter>
  )
}

export default App
