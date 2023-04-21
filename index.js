const express = require('express');
const app = express();

// Rota inicial
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor rodando: http://localhost:3000');
});