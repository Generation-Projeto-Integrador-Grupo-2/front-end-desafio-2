import type Corrida from "../models/Corrida";

export const corridasMock: Corrida[] = [
    {
        id: 1,
        origem: "Av. Paulista, 1000 - Bela Vista, São Paulo - SP",
        destino: "Rua Augusta, 500 - Consolação, São Paulo - SP",
        preco: 25.50,
        horario: "14:30",
        velocidadeMedia: 40,
        distancia: 3.2,
        usuario: {
            id: 1,
            nome: "Maria Silva",
            email: "maria@email.com",
            senha: "", // Adding required field
            foto: "https://i.pravatar.cc/150?img=1",
            tipo: "PASSAGEIRO" // Adding required field
        }
    },
    {
        id: 2,
        origem: "Rua Oscar Freire, 123 - Jardins, São Paulo - SP",
        destino: "Shopping Iguatemi - Pinheiros, São Paulo - SP",
        preco: 32.00,
        horario: "15:45",
        velocidadeMedia: 35,
        distancia: 4.5,
        usuario: {
            id: 2,
            nome: "João Santos",
            email: "joao@email.com",
            senha: "", // Adding required field
            foto: "https://i.pravatar.cc/150?img=2",
            tipo: "PASSAGEIRO" // Adding required field
        }
    },
    {
        id: 3,
        origem: "Aeroporto de Guarulhos - Guarulhos, SP",
        destino: "Centro de São Paulo - SP",
        preco: 120.00,
        horario: "08:00",
        velocidadeMedia: 55,
        distancia: 25.3,
        usuario: {
            id: 3,
            nome: "Ana Oliveira",
            email: "ana@email.com",
            senha: "", // Adding required field
            foto: "https://i.pravatar.cc/150?img=3",
            tipo: "PASSAGEIRO" // Adding required field
        }
    }
];