const { Sequelize } = require('sequelize');

// Configuração do banco de dados (ajuste conforme suas credenciais)
const sequelize = new Sequelize('locacaoVeiculos', 'usuario', 'senha', {
  host: 'localhost',
  dialect: 'mysql', // Ou 'postgres' dependendo do seu banco de dados
  logging: false, // Desativa logs SQL no console (opcional)
});

module.exports = sequelize;
