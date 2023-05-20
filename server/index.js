const express = require('express');
const app = express();

// Rota inicial
app.get('/', (request, response) => {
  response.sendStatus(201);
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
    response.sendStatus(401);
  }
});

// Rota para a página de perfil
app.get('/perfil', (request, response) => {
  response.json({data: {name: 'teste', email: 'teste@teste.com', phone: '999999999', address: 'Rua teste, 123', city: 'Campo Grande', state: 'MS', country: 'Mato Grosso do Sul'}})
});

// Rediciona qualquer protocolo HTTP para a página de login caso o usuário tente acessar uma rota que não existe
app.all('*', (request, response) => {
  response.sendStatus(404);
});

// Inicia o servidor na porta 3000
app.listen(3333, () => {
  console.log('Servidor rodando: http://localhost:3000');
});