// const jwt = require('jsonwebtoken');
// require('dotenv').config();

// const validaAcesso = (req, res, next) => {
//     const authHeader = req.headers['authorization'];

//     // Verifica se o cabeçalho de autorização existe
//     if (!authHeader) {
//         return res.status(401).json({ message: 'Token não fornecido' });
//     }

//     // O token deve estar no formato "Bearer <token>"
//     const token = authHeader.split(' ')[1];

//     // Verifica se o token foi fornecido
//     if (!token) {
//         return res.status(401).json({ message: 'Token não fornecido' });
//     }

//     jwt.verify(token, process.env.KEY, (err, decoded) => {
//         if (err) {
//             return res.status(401).json({ message: 'Token inválido' });
//         }

//         req.matricula = decoded.matricula; // Armazena a matrícula decodificada na requisição
//         next();
//     });
// };

// module.exports = { validaAcesso };

const jwt = require('jsonwebtoken');
require('dotenv').config();

const validaAcesso = (req, res, next) => {
    const token = req.headers.authorization;

    jwt.verify(token, process.env.KEY, (err, data) => {
        if (err != null) res.status(404).json(err).end();
        else {
            next();
        }
    })
}

module.exports = {
    validaAcesso
}

