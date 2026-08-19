// Classe base que representa um veículo genérico
class Veiculo {
    // Construtor da classe Veiculo recebe marca e modelo
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    // Método para ligar o veículo
    ligar() {
        console.log(`${this.marca} ${this.modelo} foi ligado.`);
    }

    // Método para desligar o veículo
    desligar() {
        console.log(`${this.marca} ${this.modelo} foi desligado.`);
    }
}

// Classe Caminhao herda de Veiculo
class Caminhao extends Veiculo {
    // Construtor da classe Caminhao recebe marca, modelo e capacidade da carga
    constructor(marca, modelo, capacidadeCarga) {
        // Chama o construtor da classe pai (Veiculo)
        super(marca, modelo);
        this.capacidadeCarga = capacidadeCarga;
    }

    // Método para carregar o caminhão com um peso específico
    carregar(peso) {
        // Verifica se o peso informado é maior que zero
        if (peso <= 0) {
            console.log("O peso da carga deve ser maior que zero.");
            return;
        }

        // Verifica se a carga excede a capacidade do caminhão
        if (peso > this.capacidadeCarga) {
            console.log(
                `Carga excedida. O caminhão suporta no máximo ${this.capacidadeCarga} kg.`
            );
            return;
        }

        // Se tudo estiver OK, mostra a mensagem de carga realizada
        console.log(
            `Caminhão carregado com ${peso} kg de carga.`
        );
    }
}

// Criando um objeto da classe Caminhao
const caminhao1 = new Caminhao("Volvo", "FH 540", 30000);

// Testando os atributos do objeto criado
console.log(`Marca: ${caminhao1.marca}`);
console.log(`Modelo: ${caminhao1.modelo}`);
console.log(`Capacidade de carga: ${caminhao1.capacidadeCarga} kg`);

// Testando os métodos da classe
caminhao1.ligar();
caminhao1.carregar(20000);
caminhao1.carregar(35000);
caminhao1.desligar();