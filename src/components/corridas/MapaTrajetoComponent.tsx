import { useEffect, useRef } from 'react';

// Declare Google Maps types
declare global {
    interface Window {
        google: typeof google;
    }
}

interface MapaTrajetoProps {
    origem: string;
    destino: string;
}

export default function MapaTrajeto({ origem, destino }: MapaTrajetoProps) {
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mapRef.current || !origem || !destino) return;

        try {
            const map = new google.maps.Map(mapRef.current, {
                zoom: 12,
                center: { lat: -23.550520, lng: -46.633308 }, // São Paulo
            });

            const directionsService = new google.maps.DirectionsService();
            const directionsRenderer = new google.maps.DirectionsRenderer({
                map: map,
            });

            directionsService.route({
                origin: origem,
                destination: destino,
                travelMode: google.maps.TravelMode.DRIVING,
                region: 'BR'
            }, (result, status) => {
                if (status === 'OK' && result) {
                    directionsRenderer.setDirections(result);
                } else {
                    console.error('Erro ao calcular rota:', status);
                }
            });
        } catch (error) {
            console.error('Erro ao inicializar mapa:', error);
        }
    }, [origem, destino]);

    return (
        <div
            ref={mapRef}
            className="w-full h-[400px] rounded-lg border border-[#6b7280]"
        />
    );
}