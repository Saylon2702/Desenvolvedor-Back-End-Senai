const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

// Definição do modelo de Veiculo
const Veiculo = sequelize.define('Veiculo', {
  modelo_veiculo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  marca_veiculo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  categoria_veiculo: {
    type: DataTypes.STRING,
  },
  placa: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  renavam: {
    type: DataTypes.STRING(3000),
    allowNull: false,
  },
  quilometragem: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  ano_fabricacao: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  combustivel: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  preco_diaria: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  status_disponibilidade: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  data_ultima_manutencao: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = Veiculo;
