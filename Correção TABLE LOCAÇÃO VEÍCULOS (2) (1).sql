CREATE DATABASE locacaoVeiculos;

USE locacaoVeiculos;

CREATE TABLE Veiculos (
	id_veiculos INT PRIMARY KEY IDENTITY (1,1) NOT NULL,
	modelo_veiculo VARCHAR(255) NOT NULL,
	marca_veiculo VARCHAR (255) NOT NULL,
	categoria_veiculo VARCHAR (255),
	placa VARCHAR (255) NOT NULL,
	renavam VARCHAR(30) NOT NULL,
	quilometragem DECIMAL NOT NULL,
	ano_fabricacao INT NOT NULL,
	cor VARCHAR(30) NOT NULL,
	combustivel VARCHAR(30) NOT NULL,
	preco_diaria DECIMAL NOT NULL,
	status_disponibilidade BIT NOT NULL,
	data_ultima_manutencao DATE NOT NULL
);

CREATE TABLE Cliente (
	id_cliente INT PRIMARY KEY IDENTITY (1,1) NOT NULL,
	nome VARCHAR(255) NOT NULL,
	cpf VARCHAR(30) NOT NULL,
	tel VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL,
	senha VARCHAR(255) NOT NULL,
	endereco VARCHAR(255),
	profissao VARCHAR(255)
);

CREATE TABLE Funcionario (
	id_funcionario INT PRIMARY KEY IDENTITY (1,1) NOT NULL,
	nome_funcionario VARCHAR(255) NOT NULL,
	cpf_funcionario VARCHAR(255) NOT NULL,
	tel_funcionario VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL,
	senha VARCHAR(255) NOT NULL,
	privilegio_funcionario VARCHAR(255) NOT NULL
);

CREATE TABLE Reserva (
	id_reserva INT PRIMARY KEY IDENTITY (1,1) NOT NULL,
	data_reserva DATE NOT NULL,
	data_inicio DATE NOT NULL,
	data_fim DATE NOT NULL,
	status_reserva VARCHAR(255) NOT NULL,
	id_veiculo_reserva INT,
	FOREIGN KEY (id_veiculo_reserva) REFERENCES Veiculos (id_veiculos),
	id_cliente_reserva INT,
	FOREIGN KEY (id_cliente_reserva) REFERENCES Cliente (id_cliente),
);

CREATE TABLE RelatorioFinanceiro (
	id_relatorio_financeiro INT PRIMARY KEY IDENTITY (1,1) NOT NULL,
	data_relatorio DATE NOT NULL,
	ganhos_relatorio DECIMAL NOT NULL,
	categoria_relatorio VARCHAR(255) NOT NULL,
	id_reserva_relatorio_financeiro INT,
	FOREIGN KEY (id_reserva_relatorio_financeiro) REFERENCES Reserva (id_reserva)
);

CREATE TABLE Manutencao (
	id_manutencao INT PRIMARY KEY IDENTITY (1,1) NOT NULL,
	data_manutencao DATE NOT NULL,
	tipo_manutencao VARCHAR(255) NOT NULL,
	custo_manutencao VARCHAR(255) NOT NULL,
	id_veiculo_manutencao INT,
	FOREIGN KEY (id_veiculo_manutencao) REFERENCES Veiculos (id_veiculos),
);