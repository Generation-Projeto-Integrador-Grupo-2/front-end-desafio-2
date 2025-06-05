import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type Motorista from '../../models/Motorista';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { cadastrar } from '../../service/Service';
import { toast } from 'react-toastify';

interface MotoristaRequestDTO {
    cnh: string;
    modeloCarro: string;
    placa: string;
}

export default function CadastroMotorista() {
    const navigate = useNavigate();
    const [motorista, setMotorista] = useState<Motorista>({
        cnh: '',
        modeloCarro: '',
        placa: '',
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        // Validate fields before submission
        if (motorista.cnh.length < 3 || motorista.cnh.length > 100) {
            toast.error('CNH deve ter entre 3 e 100 caracteres');
            setIsLoading(false);
            return;
        }

        if (motorista.modeloCarro.length < 3 || motorista.modeloCarro.length > 100) {
            toast.error('Modelo do carro deve ter entre 3 e 100 caracteres');
            setIsLoading(false);
            return;
        }

        if (motorista.placa.length < 3 || motorista.placa.length > 100) {
            toast.error('Placa deve ter entre 3 e 100 caracteres');
            setIsLoading(false);
            return;
        }

        const token = localStorage.getItem('token');

        if (!token) {
            toast.error('Sessão expirada. Por favor, faça login novamente.');
            navigate('/login');
            return;
        }

        const header = {
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            }
        };

        // Create DTO object
        const motoristaDTO: MotoristaRequestDTO = {
            cnh: motorista.cnh,
            modeloCarro: motorista.modeloCarro,
            placa: motorista.placa
        };

        try {
            await cadastrar(
                '/motorista/cadastrar',
                motoristaDTO,
                setMotorista,
                header
            );

            toast.success('Cadastro de motorista realizado com sucesso!');
            navigate('/perfil');
        } catch (error: any) {
            if (error.response?.status === 400) {
                // Check if error message contains specific text about being already registered
                if (error.response.data.message?.includes('já é motorista')) {
                    toast.warning('Você já está cadastrado como motorista!');
                    navigate('/perfil'); // Redirect to profile since they're already registered
                } else {
                    const errorMessage = error.response.data.message ||
                        'Dados inválidos. Verifique as informações fornecidas.';
                    toast.error(errorMessage);
                }
            } else if (error.response?.status === 401) {
                toast.error('Sessão expirada. Por favor, faça login novamente.');
                localStorage.removeItem('token');
                navigate('/login');
            } else {
                toast.error('Erro ao cadastrar motorista');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#f3f4f6] py-8 px-4">
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
                <div className="flex items-center text-sm text-[#6b7280] mb-4">
                    <a href="/" className="hover:text-[#84cc16]">Home</a>
                    <span className="mx-2">/</span>
                    <span>Cadastro de Motorista</span>
                </div>

                <h1 className="text-3xl font-bold text-[#374151] mb-6">
                    Cadastro de Motorista
                </h1>

                <div className="text-center mb-8">
                    <div className="w-32 h-32 mx-auto mb-4">
                        <DotLottieReact
                            src="https://lottie.host/08b06513-9069-4747-9552-981e2e23ff60/96p82MFKkC.lottie"
                            loop
                            autoplay
                        />
                    </div>
                    <p className="text-[#6b7280]">
                        Preencha os dados abaixo para se cadastrar como motorista parceiro
                    </p>
                </div>

                <div className="bg-[#f3f4f6] p-4 rounded-lg mb-6">
                    <h2 className="text-[#374151] font-medium mb-2">Importante:</h2>
                    <ul className="list-disc list-inside text-[#6b7280] space-y-1">
                        <li>CNH deve estar dentro da validade</li>
                        <li>Veículo deve ter no máximo 10 anos de uso</li>
                        <li>Documentação do veículo deve estar em dia</li>
                    </ul>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label
                            className="block text-[#374151] font-medium mb-2"
                            htmlFor="cnh"
                        >
                            CNH
                        </label>
                        <input
                            type="text"
                            id="cnh"
                            value={motorista.cnh}
                            onChange={(e) => {
                                const formatted = e.target.value.replace(/\D/g, '');
                                setMotorista({ ...motorista, cnh: formatted });
                            }}
                            placeholder="00000000000"
                            maxLength={11}
                            className="w-full p-3 border border-[#6b7280] rounded-md focus:outline-none focus:ring-2 focus:ring-[#84cc16] 
invalid:border-red-500 invalid:ring-red-500 transition-all"
                            required
                        />
                    </div>

                    <div>
                        <label
                            className="block text-[#374151] font-medium mb-2"
                            htmlFor="modeloCarro"
                        >
                            Modelo do Carro
                        </label>
                        <input
                            type="text"
                            id="modeloCarro"
                            value={motorista.modeloCarro}
                            onChange={(e) => setMotorista({ ...motorista, modeloCarro: e.target.value })}
                            className="w-full p-3 border border-[#6b7280] rounded-md focus:outline-none focus:ring-2 focus:ring-[#84cc16] 
invalid:border-red-500 invalid:ring-red-500 transition-all"
                            required
                        />
                    </div>

                    <div>
                        <label
                            className="block text-[#374151] font-medium mb-2"
                            htmlFor="placa"
                        >
                            Placa do Veículo
                        </label>
                        <input
                            type="text"
                            id="placa"
                            value={motorista.placa}
                            onChange={(e) => {
                                const formatted = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
                                setMotorista({ ...motorista, placa: formatted });
                            }}
                            placeholder="ABC1234"
                            maxLength={7}
                            className="w-full p-3 border border-[#6b7280] rounded-md focus:outline-none focus:ring-2 focus:ring-[#84cc16] 
invalid:border-red-500 invalid:ring-red-500 transition-all"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-[#84cc16] text-white py-3 px-4 rounded-md hover:bg-opacity-90 
    transition-colors disabled:bg-opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                        {isLoading ? (
                            <>
                                <span className="animate-spin mr-2">⟳</span>
                                Cadastrando...
                            </>
                        ) : (
                            'Confirmar cadastro'
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}