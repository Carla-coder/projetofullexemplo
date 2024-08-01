const express = require('express');
const router = express.Router();

const Middleware = require('./middleware/middleware');
const Colaborador = require('./controllers/colaborador');
const Comentario = require('./controllers/comentario');
const Os = require('./controllers/os');
const Usuario = require('./controllers/usuario');

// Rotas de Colaborador
router.post('/login', Colaborador.login);
router.post('/colaborador', Colaborador.create);
router.get('/colaborador', Middleware.validaAcesso, Colaborador.read);
router.get('/colaborador/:matricula', Middleware.validaAcesso, Colaborador.read);
router.put('/colaborador', Middleware.validaAcesso, Colaborador.update);
router.delete('/colaborador/:matricula', Middleware.validaAcesso, Colaborador.del);

// Rotas de Comentario
router.post('/comentario', Comentario.create);
router.get('/comentario', Comentario.read);
router.get('/comentario/:id', Comentario.read);
router.put('/comentario', Comentario.update);
router.delete('/comentario/:id', Comentario.del);

// Rotas de OS
router.post('/os', Os.create);
router.get('/os', Os.read);
router.get('/os/:id', Os.read);
router.put('/os', Os.update);
router.delete('/os/:id', Os.del);

//Rotas de Usuario
router.post('/login', Usuario.login);
router.get('/usuario', Middleware.validaAcesso, Usuario.read);
router.get('/usuario/:matricula', Middleware.validaAcesso, Usuario.read);   

// Rota de teste
router.get('/', (req, res) => {
    return res.json("API OSs respondendo");
});

module.exports = router;

