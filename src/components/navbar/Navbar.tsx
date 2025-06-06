import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { handleLogout } = useContext(AuthContext);
    const [isLogged, setIsLogged] = useState<boolean>(false);

    useEffect(() => {
        checkLoginStatus();
    }, [location.pathname]);

    const checkLoginStatus = () => {
        const token = localStorage.getItem('token');
        setIsLogged(token !== null && !['/login', '/cadastro', '/'].includes(location.pathname));
    };

    const logout = () => {
        handleLogout();
        setIsLogged(false);
        toast.info('Logout realizado com sucesso!');
        navigate('/login');
    };

    return (
        <nav className="bg-[#f3f4f6] border-b border-[#cad1db] px-6 py-3 relative">
            <div className="flex items-center justify-between relative">

                {/* Logo */}
                <Link to={isLogged ? "/home" : "/"} className="flex items-center gap-2">
                    <img
                        src="https://ik.imagekit.io/6tjnbersb/rebu98.png?updatedAt=1749133477430"
                        alt="Imagem rebU"
                        className="h-10 w-auto"
                    />
                </Link>

                {/* Nav */}
                {isLogged ? (
                    <>
                        <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-6">
                            <Link
                                to="/home"
                                className={`${location.pathname === '/home' ? 'text-[#374151]' : 'text-[#354B45]'
                                    } hover:text-[#84cc16] transition-colors font-semibold`}
                            >
                                Home
                            </Link>
                            <Link
                                to="/corridas"
                                className={`${location.pathname === '/corridas' ? 'text-[#374151]' : 'text-[#354B45]'
                                    } hover:text-[#84cc16] transition-colors font-semibold`}
                            >
                                Corridas
                            </Link>
                            <Link
                                to="/corridas/cadastrar"
                                className={`${location.pathname === '/corridas/cadastrar' ? 'text-[#374151]' : 'text-[#354B45]'
                                    } hover:text-[#84cc16] transition-colors font-semibold`}
                            >
                                Nova Corrida
                            </Link>
                            <Link
                                to="/motoristas/cadastrar"
                                className={`${location.pathname === '/motoristas/cadastrar' ? 'text-[#374151]' : 'text-[#354B45]'
                                    } hover:text-[#84cc16] transition-colors font-semibold`}
                            >
                                Cadastrar Motorista
                            </Link>
                            <Link
                                to="/sobrenos"
                                className={`${location.pathname === '/sobre' ? 'text-[#374151]' : 'text-[#354B45]'
                                    } hover:text-[#84cc16] transition-colors font-semibold`}
                            >
                                Sobre Nós
                            </Link>
                        </div>

                        {/* Logout */}
                        <div className="flex gap-6">
                            <button
                                onClick={logout}
                                className="text-[#354B45] hover:text-[#84cc16] transition-colors font-semibold"
                            >
                                Sair
                            </button>
                        </div>
                    </>
                ) : (
                    !['/login', '/cadastro', '/'].includes(location.pathname) && (
                        <div className="flex gap-6 ml-auto">
                            <Link
                                to="/login"
                                className="text-[#354B45] hover:text-[#84cc16] py-2 transition-colors font-semibold"
                            >
                                Login
                            </Link>
                            <Link
                                to="/cadastro"
                                className="bg-[#84cc16] text-[#f3f4f6] hover:bg-[#6aa509] transition-colors font-semibold px-4 py-2 rounded"
                            >
                                Cadastre-se
                            </Link>
                        </div>
                    )
                )}
            </div>
        </nav>
    );
};

export default Navbar;
