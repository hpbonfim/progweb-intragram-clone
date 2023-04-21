const express = require('express');
const app = express();

// Configurações do Express para servir arquivos estáticos
app.use(express.static('public'));

// Rota inicial
app.get('/', (request, response) => {
  response.sendFile(__dirname + '/public/index.html');
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor rodando: http://localhost:3000');
});