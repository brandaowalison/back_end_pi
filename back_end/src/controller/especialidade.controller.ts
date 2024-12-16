import { Request, Response } from "express";
import { Especialidade } from "../models/Especialidade";
import especialidadeRepository from "../repositories/especialidadeRepository";



export default class EspecialidadeController {

    async create(req: Request, res: Response) {
        const { nome, precoBase, descricao } = req.body;
        if (!nome || !precoBase || !descricao) {
            res.status(400).send({
                message: "Não pode ser vazio a Especialidade!"
            });
            return;
        }

        try {
            const especialidade: Especialidade = req.body;
            const savedespecialidade = await especialidadeRepository.save(especialidade);
            res.status(201).send(savedespecialidade);
        } catch (err) {
            res.status(500).send({
                message: "Erro ao tentar salvar uma especialidade."
            });
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const especialidade = await especialidadeRepository.retrieveAll();
            res.status(200).send(especialidade);
        } catch (err) {
            res.status(500).send({
                message: "Erro encontrado quando estava se fazendo a busca por todas as especialidades."
            });
        }
    }

    async findOne(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);

        try {
            const especialidade = await especialidadeRepository.retrieveById(id);
            if (especialidade) res.status(200).send(especialidade);
            else
                res.status(404).send({
                    message: `Não foi encontrado nenhuma especialidade com esse id=${id}.`
                });
        } catch (err) {
            res.status(500).send({
                message: `Error não foi possível retornar a especialidade com id=${id}.`
            });
        }
    }

    async findName(req: Request, res: Response) {
        const nome: string = req.params.nome;

        try {
            const especialidade = await especialidadeRepository.retrieveByNome(nome);
            if (especialidade) res.status(200).send(especialidade);
            else
                res.status(404).send({
                    message: `Não foi encontrado nenhuma especialidade com esse nome=${nome}.`
                });
        } catch (err) {
            res.status(500).send({
                message: `Error não foi possível retornar a especialidade com nome=${nome}.`
            });
        }
    }

    async update(req: Request, res: Response) {
        let especialidade: Especialidade = req.body;
        especialidade.idEspecialidade = parseInt(req.params.id);        
        try {
            await especialidadeRepository.update(especialidade);
            res.send({
                message: `Especialidade ${especialidade.nome} atulizado com sucesso!`
            });
        } catch (err) {
            res.status(500).send({
                message: `Error ao atualizar a Especialidade com id=${especialidade.idEspecialidade}.`
            });
        }
    }

    async delete(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);

        try {
            const num = await especialidadeRepository.delete(id);

            if (num == 1) {
                res.send({
                    message: "Especialidade deletado com sucesso!"
                });
            } else {
                res.send({
                    message: `Não foi possível deletar a especialidade com id=${id}. A Especialidade não tenha sido encontrado.`,
                });
            }
        } catch (err) {
            res.status(500).send({
                message: `A Especialidade com id==${id}, não pode ser deletado.`
            });
        }
    }

    async deleteEmbutido(req: Request, res: Response) {
        const id: number = parseInt(req.body.id);

        try {
            const num = await especialidadeRepository.delete(id);

            if (num == 1) {
                res.send({
                    message: "Especialidade deletado com sucesso!"
                });
            } else {
                res.send({
                    message: `Não foi possível deletar a Especialidade com id=${id}. A Especialidade não tenha sido encontrado.`,
                });
            }
        } catch (err) {
            res.status(500).send({
                message: `A Especialidade com id==${id}, não pode ser deletado.`
            });
        }
    }

    async deleteAll(req: Request, res: Response) {
        try {
            const num = await especialidadeRepository.deleteAll();

            res.send({ message: `${num} Especialidades foram deletadas com sucesso!` });
        } catch (err) {
            res.status(500).send({
                message: "Algum erro ocorreu enquato deletava todas as Especialidades."
            });
        }
    }

}