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
const profissionalRepository_1 = __importDefault(require("../repositories/profissionalRepository"));
class ProfissionalController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.body.nome) {
                res.status(400).send({
                    message: "Não pode ser vazio o profissional!"
                });
                return;
            }
            try {
                const profissional = req.body;
                const savedprofissional = yield profissionalRepository_1.default.save(profissional);
                res.status(201).send(savedprofissional);
            }
            catch (err) {
                res.status(500).send({
                    message: "Erro ao tentar salvar o profissional."
                });
            }
        });
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const profissional = yield profissionalRepository_1.default.retrieveAll();
                res.status(200).send(profissional);
            }
            catch (err) {
                res.status(500).send({
                    message: "Erro encontrado quando estava se fazendo a busca por todos os profissionais."
                });
            }
        });
    }
    findOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                const profissional = yield profissionalRepository_1.default.retrieveById(id);
                if (profissional)
                    res.status(200).send(profissional);
                else
                    res.status(404).send({
                        message: `Não foi encontrado nenhum profissional com esse id=${id}.`
                    });
            }
            catch (err) {
                res.status(500).send({
                    message: `Error não foi possível retornar o profissional com id=${id}.`
                });
            }
        });
    }
    findName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const nome = req.params.nome;
            try {
                const profissional = yield profissionalRepository_1.default.retrieveByNome(nome);
                if (profissional)
                    res.status(200).send(profissional);
                else
                    res.status(404).send({
                        message: `Não foi encontrado nenhum profissional com esse nome=${nome}.`
                    });
            }
            catch (err) {
                res.status(500).send({
                    message: `Error não foi possível retornar o profissional com nome=${nome}.`
                });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let profissional = req.body;
            profissional.idProfissional = parseInt(req.params.id);
            try {
                yield profissionalRepository_1.default.update(profissional);
                res.send({
                    message: `Profissional ${profissional.nome} atulizado com sucesso!`
                });
            }
            catch (err) {
                res.status(500).send({
                    message: `Error ao atualizar o Profissional com id=${profissional.idProfissional}.`
                });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                const num = yield profissionalRepository_1.default.delete(id);
                if (num == 1) {
                    res.send({
                        message: "Profissional deletado com sucesso!"
                    });
                }
                else {
                    res.send({
                        message: `Não foi possível deletar o Profissional com id=${id}. O Profissional não tenha sido encontrado.`,
                    });
                }
            }
            catch (err) {
                res.status(500).send({
                    message: `O Profissional com id==${id}, não pode ser deletado.`
                });
            }
        });
    }
    deleteEmbutido(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.body.id);
            try {
                const num = yield profissionalRepository_1.default.delete(id);
                if (num == 1) {
                    res.send({
                        message: "Profissional deletado com sucesso!"
                    });
                }
                else {
                    res.send({
                        message: `Não foi possível deletar o Profissional com id=${id}. O Profissional não tenha sido encontrado.`,
                    });
                }
            }
            catch (err) {
                res.status(500).send({
                    message: `O Profissional com id==${id}, não pode ser deletado.`
                });
            }
        });
    }
    deleteAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const num = yield profissionalRepository_1.default.deleteAll();
                res.send({ message: `${num} Profissionais foram deletados com sucesso!` });
            }
            catch (err) {
                res.status(500).send({
                    message: "Algum erro ocorreu enquato deletava todos os Profissionais."
                });
            }
        });
    }
}
exports.default = ProfissionalController;
