import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { toast } from 'react-toastify';
import type Corrida from '../../models/Corrida';
import type { CalculoTempoCorrida } from '../../models/CalculoTempoCorrida';
import { calcularDistancia } from '../../service/MapsService';
import MapaTrajeto from './MapaTrajetoComponent';
import { cadastrarCorrida, buscarTempoCorrida } from '../../service/Service';
import type { CorridaRequest } from '../../models/CorridaRequest';

export default function CadastroCorrida() {
    const navigate = useNavigate();
    const [corrida, setCorrida] = useState<Corrida>({
        id: 0,
        origem: '',
        destino: '',
        preco: 0,
        horario: '',
        velocidadeMedia: 60,
        distancia: 0,
    });
    const [tempoInfo, setTempoInfo] = useState<CalculoTempoCorrida | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const origemRef = useRef<HTMLInputElement>(null);
    const destinoRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (origemRef.current && destinoRef.current) {
            const options = {
                componentRestrictions: { country: 'br' },
                fields: ['formatted_address', 'geometry']
            };

            const origemAutocomplete = new google.maps.places.Autocomplete(origemRef.current, options);
            const destinoAutocomplete = new google.maps.places.Autocomplete(destinoRef.current, options);

            origemAutocomplete.addListener('place_changed', () => {
                const place = origemAutocomplete.getPlace();
                const endereco = place.formatted_address || '';  // Add default empty string
                setCorrida(prev => ({ ...prev, origem: endereco }));
                if (endereco) handleEnderecoSelecionado();
            });

            destinoAutocomplete.addListener('place_changed', () => {
                const place = destinoAutocomplete.getPlace();
                const endereco = place.formatted_address || '';  // Add default empty string
                setCorrida(prev => ({ ...prev, destino: endereco }));
                if (endereco) handleEnderecoSelecionado();
            });

            return () => {
                google.maps.event.clearInstanceListeners(origemAutocomplete);
                google.maps.event.clearInstanceListeners(destinoAutocomplete);
            };
        }
    }, []);

    const handleEnderecoSelecionado = async () => {
        if (corrida.origem && corrida.destino) {
            try {
                const { distancia, velocidadeMedia, preco } = await calcularDistancia(
                    corrida.origem,
                    corrida.destino
                );

                setCorrida(prev => ({
                    ...prev,
                    distancia,
                    velocidadeMedia,
                    preco
                }));
            } catch (error) {
                toast.error('Erro ao calcular distância e preço');
            }
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const token = localStorage.getItem('token');

            if (!token) {
                toast.error('Sessão expirada. Por favor, faça login novamente.');
                navigate('/login');
                return;
            }

            // Add time validation before submission
            if (!/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(corrida.horario)) {
                toast.error('Horário deve estar no formato HH:mm');
                setIsLoading(false);
                return;
            }

            const header = {
                headers: {
                    'Authorization': token,
                    'Content-Type': 'application/json'
                }
            };

            const corridaRequest: CorridaRequest = {
                origem: corrida.origem,
                destino: corrida.destino,
                preco: corrida.preco,
                horario: `${new Date().toISOString().split('T')[0]}T${corrida.horario}:00`,
                velocidadeMedia: corrida.velocidadeMedia,
                distancia: corrida.distancia
            };

            const response = await cadastrarCorrida(corridaRequest, setCorrida, header);

            if (response?.id) {
                // Get ride time information after successful creation
                const tempoResposta = await buscarTempoCorrida(response.id, header);
                setTempoInfo(tempoResposta);
            }

            // Show success message with longer duration
            toast.success('Corrida cadastrada com sucesso! Aguarde um motorista aceitar sua corrida.', {
                autoClose: 5000, // 5 seconds
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });

            // Reset form after successful submission
            setCorrida({
                id: 0,
                origem: '',
                destino: '',
                preco: 0,
                horario: '',
                velocidadeMedia: 60,
                distancia: 0
            });

            // Clear the input refs
            if (origemRef.current) origemRef.current.value = '';
            if (destinoRef.current) destinoRef.current.value = '';

        } catch (error: any) {
            console.error('Erro ao cadastrar corrida:', error);
            toast.error(
                error.response?.data?.message ||
                'Erro ao solicitar corrida. Tente novamente.'
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#f3f4f6] py-8 px-4">
            <div className={`mx-auto transition-all duration-300 ${corrida.origem && corrida.destino ? 'max-w-7xl' : 'max-w-xl'}`}>
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Form Section */}
                    <div className={`bg-white p-8 rounded-lg shadow ${corrida.origem && corrida.destino ? 'md:w-1/2' : 'w-full'}`}>
                        <h1 className="text-3xl font-bold text-[#374151] mb-6 text-center">
                            Solicitar Nova Corrida
                        </h1>

                        <div className="text-center mb-8">
                            <div className="w-40 h-40 mx-auto mb-4">
                                <DotLottieReact
                                    src="https://lottie.host/2f46f7d1-2b66-41cd-888a-b69939b0331e/l3MhQvuMEz.lottie"
                                    loop
                                    autoplay
                                />
                            </div>
                            <p className="text-[#6b7280]">
                                Preencha os dados abaixo para solicitar sua corrida
                            </p>
                        </div>

                        <div className="bg-[#f3f4f6] p-4 rounded-lg mb-6">
                            <h2 className="text-[#374151] font-medium mb-2">Importante:</h2>
                            <ul className="list-disc list-inside text-[#6b7280] space-y-1">
                                <li>Verifique o endereço de origem e destino</li>
                                <li>Confira o valor da corrida antes de confirmar</li>
                                <li>O horário deve ser no formato HH:mm</li>
                            </ul>
                        </div>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label
                                    className="block text-[#374151] font-medium mb-2"
                                    htmlFor="origem"
                                >
                                    Endereço de Origem
                                </label>
                                <input
                                    ref={origemRef}
                                    type="text"
                                    id="origem"
                                    value={corrida.origem}
                                    onChange={(e) => setCorrida({ ...corrida, origem: e.target.value })}
                                    className="w-full p-3 border border-[#6b7280] rounded-md focus:outline-none focus:ring-2 focus:ring-[#84cc16]"
                                    placeholder="Digite o endereço de origem"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    className="block text-[#374151] font-medium mb-2"
                                    htmlFor="destino"
                                >
                                    Endereço de Destino
                                </label>
                                <input
                                    ref={destinoRef}
                                    type="text"
                                    id="destino"
                                    value={corrida.destino}
                                    onChange={(e) => setCorrida({ ...corrida, destino: e.target.value })}
                                    className="w-full p-3 border border-[#6b7280] rounded-md focus:outline-none focus:ring-2 focus:ring-[#84cc16]"
                                    placeholder="Digite o endereço de destino"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label
                                        className="block text-[#374151] font-medium mb-2"
                                        htmlFor="preco"
                                    >
                                        Preço Estimado (R$)
                                    </label>
                                    <input
                                        type="number"
                                        id="preco"
                                        value={corrida.preco}
                                        onChange={(e) => setCorrida({ ...corrida, preco: Number(e.target.value) })}
                                        className="w-full p-3 border border-[#6b7280] rounded-md focus:outline-none focus:ring-2 focus:ring-[#84cc16]"
                                        min="0"
                                        step="0.01"
                                        required
                                    />
                                </div>

                                <div>
                                    <label
                                        className="block text-[#374151] font-medium mb-2"
                                        htmlFor="horario"
                                    >
                                        Horário
                                    </label>
                                    <input
                                        type="time"
                                        id="horario"
                                        value={corrida.horario}
                                        onChange={(e) => setCorrida({ ...corrida, horario: e.target.value })}
                                        className="w-full p-3 border border-[#6b7280] rounded-md focus:outline-none focus:ring-2 focus:ring-[#84cc16]"
                                        required
                                    />
                                </div>
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
                                        Solicitando corrida...
                                    </>
                                ) : (
                                    'Solicitar Corrida'
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Map Section - Now side by side on desktop */}
                    {corrida.origem && corrida.destino && (
                        <div className="bg-white p-8 rounded-lg shadow md:w-1/2">
                            <h2 className="text-2xl font-bold text-[#374151] mb-6">
                                Visualização do Trajeto
                            </h2>
                            <MapaTrajeto
                                origem={corrida.origem}
                                destino={corrida.destino}
                            />
                            <div className="mt-4 p-4 bg-[#f3f4f6] rounded-lg">
                                <div className="grid grid-cols-3 gap-4">
                                    <div>
                                        <p className="text-[#6b7280]">Distância:</p>
                                        <p className="font-medium">{corrida.distancia.toFixed(1)} km</p>
                                    </div>
                                    <div>
                                        <p className="text-[#6b7280]">Velocidade Média:</p>
                                        <p className="font-medium">{corrida.velocidadeMedia} km/h</p>
                                    </div>
                                    {tempoInfo && (
                                        <div>
                                            <p className="text-[#6b7280]">Tempo Estimado:</p>
                                            <p className="font-medium">{tempoInfo.tempoDeViagem}</p>
                                            <p className="text-[#6b7280] mt-2">Chegada Prevista:</p>
                                            <p className="font-medium">
                                                {new Date(tempoInfo.tempoPrevistoChegada).toLocaleTimeString('pt-BR')}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}