const jwt = require('jsonwebtoken');
require('dotenv').config();

const validaAcesso = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: 'Token não fornecido' });
    }

    jwt.verify(token, process.env.KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Token inválido' });
        }

        req.matricula = decoded.matricula;
        next();
    });
};

module.exports = { validaAcesso };
