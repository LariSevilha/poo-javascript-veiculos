class Veiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    ligar() {
        console.log(`${this.marca} ${this.modelo} foi ligado.`);
    }

    desligar() {
        console.log(`${this.marca} ${this.modelo} foi desligado.`);
    }
}


// CAMINHÃO
class Caminhao extends Veiculo {
    constructor(marca, modelo, capacidadeCarga) {
        super(marca, modelo);
        this.capacidadeCarga = capacidadeCarga;
    }

    carregar(peso) {
        try {
            if (peso <= 0) {
                throw new Error("O peso deve ser maior que zero.");
            }

            if (peso > this.capacidadeCarga) {
                throw new Error(
                    `Carga excedida. Limite: ${this.capacidadeCarga} kg.`
                );
            }

            console.log(`Caminhão carregado com ${peso} kg.`);
        } catch (erro) {
            console.log("Erro:", erro.message);
        }
    }
}


// ÔNIBUS
class Onibus extends Veiculo {
    constructor(marca, modelo, capacidadePassageiros) {
        super(marca, modelo);
        this.capacidadePassageiros = capacidadePassageiros;
    }

    embarcar(quantidade) {
        try {
            if (quantidade <= 0) {
                throw new Error("A quantidade de passageiros deve ser maior que zero.");
            }

            if (quantidade > this.capacidadePassageiros) {
                throw new Error(
                    `Capacidade excedida. Limite: ${this.capacidadePassageiros} passageiros.`
                );
            }

            console.log(`${quantidade} passageiros embarcaram.`);
        } catch (erro) {
            console.log("Erro:", erro.message);
        }
    }
}


// MOTO
class Moto extends Veiculo {
    constructor(marca, modelo, cilindradas) {
        super(marca, modelo);
        this.cilindradas = cilindradas;
    }

    acelerar(velocidade) {
        try {
            if (velocidade <= 0) {
                throw new Error("A velocidade deve ser maior que zero.");
            }

            if (velocidade > 200) {
                throw new Error("Velocidade informada acima do limite permitido no sistema.");
            }

            console.log(`Moto acelerando a ${velocidade} km/h.`);
        } catch (erro) {
            console.log("Erro:", erro.message);
        }
    }
}


// CRIANDO OS OBJETOS

const caminhao1 = new Caminhao("Volvo", "FH 540", 30000);

const onibus1 = new Onibus(
    "Mercedes-Benz",
    "O 500",
    45
);

const moto1 = new Moto(
    "Honda",
    "CB 500",
    500
);


// TESTANDO CAMINHÃO

caminhao1.ligar();

caminhao1.carregar(20000);

caminhao1.carregar(35000);

caminhao1.desligar();


// TESTANDO ÔNIBUS

onibus1.ligar();

onibus1.embarcar(30);

onibus1.embarcar(60);

onibus1.desligar();


// TESTANDO MOTO

moto1.ligar();

moto1.acelerar(80);

moto1.acelerar(250);

moto1.desligar();