import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="bg-[#f3f4f6] border-b border-[#cad1db] px-6 py-3 relative">
            <div className="flex items-center justify-between relative">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 z-10">
                    <div className="w-8 h-8 bg-[#84cc16] rounded flex items-center justify-center">
                        <span className="text-white text-sm font-medium">rebU</span>
                    </div>
                    <span className="text-[#354B45] font-semibold">98</span>
                </Link>

                {/* Botões das Páginas */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-6">
                    <Link
                        to="/home"
                        className={`${location.pathname === '/home'
                            ? 'text-[#374151]'
                            : 'text-[#354B45]'
                            } hover:text-[#84cc16] transition-colors font-semibold`}
                    >
                        Home
                    </Link>
                    <Link
                        to="/sobre"
                        className={`${location.pathname === '/sobre'
                            ? 'text-[#374151]'
                            : 'text-[#354B45]'
                            } hover:text-[#84cc16] transition-colors font-semibold`}
                    >
                        Sobre Nós
                    </Link>
                </div>
                <div className="flex gap-6">
                    <Link
                        to="/login"
                        className={`${location.pathname === '/login'
                            ? 'text-[#374151]'
                            : 'text-[#354B45]'
                            } hover:text-[#84cc16] transition-colors font-semibold flex items-center justify-center`}
                    >
                        Login
                    </Link>
                    <Link
                        to="/cadastro"
                        className={`${location.pathname === '/cadastro'
                            ? 'text-[#f3f4f6]'
                            : 'text-[#f3f4f6]'
                            } bg-[#84cc16] hover:bg-[#6aa509] transition-colors font-semibold
                             px-4 py-2 rounded flex items-center justify-center`}
                    >
                        Cadastre-se
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
