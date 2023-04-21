const express = require('express');
const app = express();

// Configurações do Express para servir arquivos estáticos
app.use(express.static('public'));

// Rota inicial
app.get('/', (request, response) => {
  response.sendFile(__dirname + '/public/index.html');
});

// Rota para a página de login
app.get('/login', (request, response) => {
  response.sendFile(__dirname + '/public/views/login.html');
});

// Rota para a página de perfil
app.get('/perfil', (request, response) => {
  response.sendFile(__dirname + '/public/views/perfil.html');
});

// Rediciona qualquer protocolo HTTP para a página de login caso o usuário tente acessar uma rota que não existe
app.all('*', (request, response) => {
  response.redirect('/login');
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor rodando: http://localhost:3000');
});