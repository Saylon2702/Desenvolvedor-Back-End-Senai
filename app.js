const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sequelize = require('./config/config');
const veiculoRoutes = require('./routes/veiculoRoutes');

// Middleware para parsing do corpo da requisição
app.use(bodyParser.json());

// Rota para veículos
app.use('/api', veiculoRoutes);

// Conectar ao banco de dados e iniciar o servidor
sequelize.sync()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida');
    app.listen(3000, () => {
      console.log('Servidor rodando na porta 3000');
    });
  })
  .catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error);
  });
