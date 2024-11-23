const Veiculo = require('../models/veiculo');

// Função para listar veículos
exports.getVeiculos = async (req, res) => {
  try {
    const veiculos = await Veiculo.findAll();
    res.json(veiculos);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar veículos', error });
  }
};

// Função para criar um novo veículo
exports.createVeiculo = async (req, res) => {
  const { modelo_veiculo, marca_veiculo, placa, renavam, quilometragem, ano_fabricacao, cor, combustivel, preco_diaria, status_disponibilidade, data_ultima_manutencao } = req.body;

  try {
    const veiculo = await Veiculo.create({
      modelo_veiculo,
      marca_veiculo,
      placa,
      renavam,
      quilometragem,
      ano_fabricacao,
      cor,
      combustivel,
      preco_diaria,
      status_disponibilidade,
      data_ultima_manutencao,
    });
    res.status(201).json(veiculo);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar veículo', error });
  }
};
