"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const especialidadeRepository_1 = __importDefault(require("../repositories/especialidadeRepository"));
class EspecialidadeController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.body.nome) {
                res.status(400).send({
                    message: "Não pode ser vazio a Especialidade!"
                });
                return;
            }
            try {
                const especialidade = req.body;
                const savedespecialidade = yield especialidadeRepository_1.default.save(especialidade);
                res.status(201).send(savedespecialidade);
            }
            catch (err) {
                res.status(500).send({
                    message: "Erro ao tentar salvar uma especialidade."
                });
            }
        });
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const especialidade = yield especialidadeRepository_1.default.retrieveAll();
                res.status(200).send(especialidade);
            }
            catch (err) {
                res.status(500).send({
                    message: "Erro encontrado quando estava se fazendo a busca por todas as especialidades."
                });
            }
        });
    }
    findOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                const especialidade = yield especialidadeRepository_1.default.retrieveById(id);
                if (especialidade)
                    res.status(200).send(especialidade);
                else
                    res.status(404).send({
                        message: `Não foi encontrado nenhuma especialidade com esse id=${id}.`
                    });
            }
            catch (err) {
                res.status(500).send({
                    message: `Error não foi possível retornar a especialidade com id=${id}.`
                });
            }
        });
    }
    findName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const nome = req.params.nome;
            try {
                const especialidade = yield especialidadeRepository_1.default.retrieveByNome(nome);
                if (especialidade)
                    res.status(200).send(especialidade);
                else
                    res.status(404).send({
                        message: `Não foi encontrado nenhuma especialidade com esse nome=${nome}.`
                    });
            }
            catch (err) {
                res.status(500).send({
                    message: `Error não foi possível retornar a especialidade com nome=${nome}.`
                });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let especialidade = req.body;
            especialidade.idEspecialidade = parseInt(req.params.id);
            try {
                yield especialidadeRepository_1.default.update(especialidade);
                res.send({
                    message: `Especialidade ${especialidade.nome} atulizado com sucesso!`
                });
            }
            catch (err) {
                res.status(500).send({
                    message: `Error ao atualizar a Especialidade com id=${especialidade.idEspecialidade}.`
                });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                const num = yield especialidadeRepository_1.default.delete(id);
                if (num == 1) {
                    res.send({
                        message: "Especialidade deletado com sucesso!"
                    });
                }
                else {
                    res.send({
                        message: `Não foi possível deletar a especialidade com id=${id}. A Especialidade não tenha sido encontrado.`,
                    });
                }
            }
            catch (err) {
                res.status(500).send({
                    message: `A Especialidade com id==${id}, não pode ser deletado.`
                });
            }
        });
    }
    deleteEmbutido(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.body.id);
            try {
                const num = yield especialidadeRepository_1.default.delete(id);
                if (num == 1) {
                    res.send({
                        message: "Especialidade deletado com sucesso!"
                    });
                }
                else {
                    res.send({
                        message: `Não foi possível deletar a Especialidade com id=${id}. A Especialidade não tenha sido encontrado.`,
                    });
                }
            }
            catch (err) {
                res.status(500).send({
                    message: `A Especialidade com id==${id}, não pode ser deletado.`
                });
            }
        });
    }
    deleteAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const num = yield especialidadeRepository_1.default.deleteAll();
                res.send({ message: `${num} Especialidades foram deletadas com sucesso!` });
            }
            catch (err) {
                res.status(500).send({
                    message: "Algum erro ocorreu enquato deletava todas as Especialidades."
                });
            }
        });
    }
}
exports.default = EspecialidadeController;
