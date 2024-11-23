const express = require('express');
const router = express.Router();
const veiculoController = require('../controllers/veiculoController');

// Rota para listar veículos
router.get('/veiculos', veiculoController.getVeiculos);

// Rota para criar um novo veículo
router.post('/veiculos', veiculoController.createVeiculo);

module.exports = router;
