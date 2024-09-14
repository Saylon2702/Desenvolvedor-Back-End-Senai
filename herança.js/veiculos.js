const readline = require('readline-sync');

// Superclasse Veiculo
class Veiculo {
    constructor(marca, modelo, ano, cor) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }

    exibirInfo() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}, cor: ${this.cor}`;
    }
}
// Subclasse Carro
class Carro extends Veiculo {
    constructor(marca, modelo, ano, cor, numeroDePortas) {
        super(marca, modelo, ano, cor);
        this.numeroDePortas = numeroDePortas;
    }
    exibirInfo() {
        return `${super.exibirInfo()}, Portas: ${this.numeroDePortas}`;
    }
}
// Subclasse Moto
class Moto extends Veiculo {
    constructor(marca, modelo, ano, cor, cilindrada) {
        super(marca, modelo, ano, cor);
        this.cilindrada = cilindrada;
    }
    exibirInfo() {
        return `${super.exibirInfo()}, Cilindrada: ${this.cilindrada}`;
    }
}
// Lista para armazenar veículos
const veiculos = [];

// Funções para interagir com o usuário
function criarVeiculo() {
    const tipo = readline.question('Digite o tipo de veículo (carro/moto): ').toLowerCase();
    const marca = readline.question('Digite a marca: ');
    const modelo = readline.question('Digite o modelo: ');
    const ano = readline.question('Digite o ano: ');
    const cor = readline.question('Digite a cor: ');


    if (tipo === 'carro') {
        const numeroDePortas = readline.question('Digite o numero de portas: ');
        veiculos.push(new Carro(marca, modelo, ano, cor, numeroDePortas));

    } else if (tipo === 'moto') {
        const cilindrada = readline.question('Digite a cilindrada em cc: ');
        veiculos.push(new Moto(marca, modelo, ano, cor, cilindrada));
    } else {
        console.log('Tipo de veículo inválido.');
    }
}

function exibirVeiculos() {
    if (veiculos.length === 0) {
        console.log('Nenhum veículo cadastrado.');
        return;
    }

    console.log('Veículos cadastrados:');
    veiculos.forEach((veiculo, index) => {
        console.log(`${index + 1}: ${veiculo.exibirInfo()}`);
    });
}

// Menu de opções
function menu() {
    let opcao;
    do {
        console.log('\nMenu:');
        console.log('1. Criar Veículo');
        console.log('2. Exibir Veículos');
        console.log('0. Sair');
        opcao = readline.question('Escolha uma opcao: ');

        switch (opcao) {
            case '1':
                criarVeiculo();
                break;
            case '2':
                exibirVeiculos();
                break;
            case '0':
                console.log('Saindo em 3, 2, 1');
                break;
            default:
                console.log('Opção inválida. Tente novamente.');
        }
    } while (opcao !== '0');
}
menu();