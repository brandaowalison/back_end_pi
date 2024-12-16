import { Request, Response } from "express";
import { Profissional } from "../models/Profissional";
import profissionalRepository from "../repositories/profissionalRepository";



export default class ProfissionalController {

    async create(req: Request, res: Response) {
        if (!req.body.nome) {
            res.status(400).send({
                message: "Não pode ser vazio o profissional!"
            });
            return;
        }

        try {
            const profissional: Profissional = req.body;
            const savedprofissional = await profissionalRepository.save(profissional);
            res.status(201).send(savedprofissional);
        } catch (err) {
            res.status(500).send({
                message: "Erro ao tentar salvar o profissional."
            });
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const profissional = await profissionalRepository.retrieveAll();
            res.status(200).send(profissional);
        } catch (err) {
            res.status(500).send({
                message: "Erro encontrado quando estava se fazendo a busca por todos os profissionais."
            });
        }
    }

    async findOne(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);

        try {
            const profissional = await profissionalRepository.retrieveById(id);
            if (profissional) res.status(200).send(profissional);
            else
                res.status(404).send({
                    message: `Não foi encontrado nenhum profissional com esse id=${id}.`
                });
        } catch (err) {
            res.status(500).send({
                message: `Error não foi possível retornar o profissional com id=${id}.`
            });
        }
    }

    async findName(req: Request, res: Response) {
        const nome: string = req.params.nome;

        try {
            const profissional = await profissionalRepository.retrieveByNome(nome);
            if (profissional) res.status(200).send(profissional);
            else
                res.status(404).send({
                    message: `Não foi encontrado nenhum profissional com esse nome=${nome}.`
                });
        } catch (err) {
            res.status(500).send({
                message: `Error não foi possível retornar o profissional com nome=${nome}.`
            });
        }
    }

    async update(req: Request, res: Response) {
        let profissional: Profissional = req.body;
        profissional.idProfissional = parseInt(req.params.id);        
        try {
            await profissionalRepository.update(profissional);
            res.send({
                message: `Profissional ${profissional.nome} atulizado com sucesso!`
            });
        } catch (err) {
            res.status(500).send({
                message: `Error ao atualizar o Profissional com id=${profissional.idProfissional}.`
            });
        }
    }

    async delete(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);

        try {
            const num = await profissionalRepository.delete(id);

            if (num == 1) {
                res.send({
                    message: "Profissional deletado com sucesso!"
                });
            } else {
                res.send({
                    message: `Não foi possível deletar o Profissional com id=${id}. O Profissional não tenha sido encontrado.`,
                });
            }
        } catch (err) {
            res.status(500).send({
                message: `O Profissional com id==${id}, não pode ser deletado.`
            });
        }
    }

    async deleteEmbutido(req: Request, res: Response) {
        const id: number = parseInt(req.body.id);

        try {
            const num = await profissionalRepository.delete(id);

            if (num == 1) {
                res.send({
                    message: "Profissional deletado com sucesso!"
                });
            } else {
                res.send({
                    message: `Não foi possível deletar o Profissional com id=${id}. O Profissional não tenha sido encontrado.`,
                });
            }
        } catch (err) {
            res.status(500).send({
                message: `O Profissional com id==${id}, não pode ser deletado.`
            });
        }
    }

    async deleteAll(req: Request, res: Response) {
        try {
            const num = await profissionalRepository.deleteAll();

            res.send({ message: `${num} Profissionais foram deletados com sucesso!` });
        } catch (err) {
            res.status(500).send({
                message: "Algum erro ocorreu enquato deletava todos os Profissionais."
            });
        }
    }

}