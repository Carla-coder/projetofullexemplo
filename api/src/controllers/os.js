const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Cria uma nova OS
const create = async (req, res) => {
    const { descricao, colaborador, executor } = req.body;
    try {
        const novaOs = await prisma.os.create({
            data: {
                descricao,
                colaborador,
                executor
            }
        });
        return res.status(201).json(novaOs);
    } catch (error) {
        return res.status(400).json({ message: 'Erro ao criar OS', error: error.message });
    }
};

// Lê uma ou todas as OSs
const read = async (req, res) => {
    try {
        if (req.params.id) {
            const os = await prisma.os.findUnique({
                where: {
                    id: parseInt(req.params.id)
                }
            });
            if (os) {
                return res.json(os);
            } else {
                return res.status(404).json({ message: 'OS não encontrada' });
            }
        } else {
            const os = await prisma.os.findMany();
            return res.json(os);
        }
    } catch (error) {
        return res.status(500).json({ message: 'Erro no servidor', error: error.message });
    }
};

// Atualiza uma OS
const update = async (req, res) => {
    const { id, descricao, colaborador, executor, encerramento } = req.body;
    try {
        const atualizadoOs = await prisma.os.update({
            where: {
                id: parseInt(id)
            },
            data: {
                descricao,
                colaborador,
                executor,
                encerramento
            }
        });
        return res.status(202).json(atualizadoOs);
    } catch (error) {
        return res.status(404).json({ message: 'OS não encontrada', error: error.message });
    }
};

// Deleta uma OS
const del = async (req, res) => {
    try {
        const deletadoOs = await prisma.os.delete({
            where: {
                id: parseInt(req.params.id)
            }
        });
        return res.status(204).send();
    } catch (error) {
        return res.status(404).json({ message: 'OS não encontrada', error: error.message });
    }
};

module.exports = {
    create,
    read,
    update,
    del
};
