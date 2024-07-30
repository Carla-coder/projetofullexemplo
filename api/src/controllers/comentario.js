const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Cria um novo comentário
const create = async (req, res) => {
    const { os, colaborador, comentario } = req.body;
    try {
        const novoComentario = await prisma.comentario.create({
            data: {
                os,
                colaborador,
                comentario
            }
        });
        return res.status(201).json(novoComentario);
    } catch (error) {
        return res.status(400).json({ message: 'Erro ao criar comentário', error: error.message });
    }
};

// Lê um ou todos os comentários
const read = async (req, res) => {
    try {
        if (req.params.id) {
            const comentario = await prisma.comentario.findUnique({
                where: {
                    id: parseInt(req.params.id)
                }
            });
            if (comentario) {
                return res.json(comentario);
            } else {
                return res.status(404).json({ message: 'Comentário não encontrado' });
            }
        } else {
            const comentarios = await prisma.comentario.findMany();
            return res.json(comentarios);
        }
    } catch (error) {
        return res.status(500).json({ message: 'Erro no servidor', error: error.message });
    }
};

// Atualiza um comentário
const update = async (req, res) => {
    const { id, comentario } = req.body;
    try {
        const atualizadoComentario = await prisma.comentario.update({
            where: {
                id: parseInt(id)
            },
            data: {
                comentario
            }
        });
        return res.status(202).json(atualizadoComentario);
    } catch (error) {
        return res.status(404).json({ message: 'Comentário não encontrado', error: error.message });
    }
};

// Deleta um comentário
const del = async (req, res) => {
    try {
        const deletadoComentario = await prisma.comentario.delete({
            where: {
                id: parseInt(req.params.id)
            }
        });
        return res.status(204).send();
    } catch (error) {
        return res.status(404).json({ message: 'Comentário não encontrado', error: error.message });
    }
};

module.exports = {
    create,
    read,
    update,
    del
};
