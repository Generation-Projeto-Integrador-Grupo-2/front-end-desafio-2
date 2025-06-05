import { useState } from 'react';
import { toast } from 'react-toastify';
import { corridasMock } from '../../mock/corridas.mock';
import type Corrida from '../../models/Corrida';

export default function ListaCorridas() {
    const [corridas] = useState<Corrida[]>(corridasMock);
    const [loadingId, setLoadingId] = useState<number | null>(null);

    const handleAceitarCorrida = async (id: number) => {
        setLoadingId(id);
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            toast.success('Corrida aceita com sucesso!');
        } catch (error) {
            toast.error('Erro ao aceitar corrida');
        } finally {
            setLoadingId(null);
        }
    };

    return (
        <div className="min-h-screen bg-[#f3f4f6] py-8 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-[#374151] mb-8">
                    Corridas Disponíveis
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {corridas.map(corrida => (
                        <div key={corrida.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={corrida.usuario?.foto}
                                        alt={corrida.usuario?.nome}
                                        className="w-12 h-12 rounded-full"
                                    />
                                    <div>
                                        <h2 className="text-xl font-semibold text-[#374151]">
                                            {corrida.usuario?.nome}
                                        </h2>
                                        <p className="text-[#6b7280] text-sm">
                                            Horário: {corrida.horario}
                                        </p>
                                    </div>
                                </div>
                                <span className="bg-[#84cc16] text-white px-3 py-1 rounded-full text-sm font-medium">
                                    R$ {corrida.preco.toFixed(2)}
                                </span>
                            </div>

                            <div className="space-y-3 mb-4">
                                <div className="bg-[#f3f4f6] p-3 rounded">
                                    <p className="text-[#6b7280] text-sm">Origem:</p>
                                    <p className="font-medium text-[#374151]">{corrida.origem}</p>
                                </div>
                                <div className="bg-[#f3f4f6] p-3 rounded">
                                    <p className="text-[#6b7280] text-sm">Destino:</p>
                                    <p className="font-medium text-[#374151]">{corrida.destino}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div>
                                    <p className="text-[#6b7280] text-sm">Distância:</p>
                                    <p className="font-medium text-[#374151]">
                                        {corrida.distancia.toFixed(1)} km
                                    </p>
                                </div>
                                <div>
                                    <p className="text-[#6b7280] text-sm">Velocidade Média:</p>
                                    <p className="font-medium text-[#374151]">
                                        {corrida.velocidadeMedia} km/h
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={() => handleAceitarCorrida(corrida.id)}
                                disabled={loadingId === corrida.id}
                                className="w-full bg-[#84cc16] text-white py-3 px-4 rounded-md
                                    hover:bg-[#65a30d] transition-colors disabled:bg-opacity-50
                                    disabled:cursor-not-allowed font-medium text-sm
                                    focus:outline-none focus:ring-2 focus:ring-[#84cc16] focus:ring-offset-2"
                            >
                                {loadingId === corrida.id ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        Aceitando...
                                    </span>
                                ) : (
                                    'Aceitar Corrida'
                                )}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}