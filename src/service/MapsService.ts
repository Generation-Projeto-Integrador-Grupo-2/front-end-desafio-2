export const calcularDistancia = async (origem: string, destino: string) => {
    const service = new google.maps.DistanceMatrixService();

    try {
        const response = await service.getDistanceMatrix({
            origins: [origem],
            destinations: [destino],
            travelMode: google.maps.TravelMode.DRIVING,
        });

        if (response.rows[0].elements[0].status === 'OK') {
            const distanciaEmMetros = response.rows[0].elements[0].distance.value;
            const tempoEmSegundos = response.rows[0].elements[0].duration.value;

            return {
                distancia: distanciaEmMetros / 1000, // converter para km
                velocidadeMedia: (distanciaEmMetros / tempoEmSegundos) * 3.6, // converter para km/h
                preco: calcularPreco(distanciaEmMetros / 1000)
            };
        }
        throw new Error('Não foi possível calcular a distância');
    } catch (error) {
        throw new Error('Erro ao calcular distância');
    }
};

const calcularPreco = (distanciaKm: number) => {
    const precoBase = 5.0;
    const precoKm = 2.5;
    return Number((precoBase + (distanciaKm * precoKm)).toFixed(2));
};