const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Configurações do Express para servir arquivos estáticos
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Rota inicial
app.get('/', (request, response) => {
  response.sendFile(__dirname + '/public/index.html');
});

// Rota para a página de login
app.get('/login', (request, response) => {
  response.sendFile(__dirname + '/public/views/login.html');
});

// Rota para a ação de login
app.post('/login', (request, response) => {
  try {
    const { username, password } = request.body

    // Verifica se o nome de usuário e a senha são iguais a 'admin'
    if (username === 'admin' && password === 'admin') {
      // Redireciona para a página de perfil
      response.redirect('/perfil');
    } else {
      throw new Error('Usuário ou senha inválidos');
    }
  } catch (error) {
    // Se algum erro ocorrer ou o nome de usuário/senha não forem válidos, redireciona para o login
    response.redirect('/login');
  }
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