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
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../db/data-source");
const Especialidade_1 = require("../models/Especialidade");
class EspecialidadeRepository {
    constructor() {
        this.especialidadeRepository = data_source_1.AppDataSource.getRepository(Especialidade_1.Especialidade);
    }
    save(especialidade) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const savedEspecialidade = yield this.especialidadeRepository.save(especialidade);
                return savedEspecialidade;
            }
            catch (err) {
                throw new Error("Falha ao criar uma Especialidade!");
            }
        });
    }
    retrieveAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.especialidadeRepository.find();
            }
            catch (error) {
                throw new Error("Falha ao retornar uma Especialidade!");
            }
        });
    }
    retrieveById(especialidadeId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.especialidadeRepository.findOneBy({
                    idEspecialidade: especialidadeId
                });
            }
            catch (error) {
                throw new Error("Falha ao buscar uma Especialidade!");
            }
        });
    }
    retrieveByNome(n) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.especialidadeRepository.findOneBy({
                    nome: n,
                });
            }
            catch (error) {
                throw new Error("Falha ao buscar uma Especialidade!");
            }
        });
    }
    update(especialidade) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idEspecialidade, nome, precoBase, descricao } = especialidade;
            try {
                this.especialidadeRepository.save(especialidade);
            }
            catch (error) {
                throw new Error("Falha ao atualizar uma Especialidade!");
            }
        });
    }
    delete(especialidadeId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const especialidadeEncontrada = yield this.especialidadeRepository.findOneBy({
                    idEspecialidade: especialidadeId,
                });
                if (especialidadeEncontrada) {
                    this.especialidadeRepository.delete(especialidadeEncontrada);
                    return 1;
                }
                return 0;
            }
            catch (error) {
                throw new Error("Falha ao deletar a Especialidade!");
            }
        });
    }
    deleteAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let num = this.especialidadeRepository.query("select count(idEspecialidade) from especialidade;");
                this.especialidadeRepository.query("delete from especialidade;");
                return num;
            }
            catch (error) {
                throw new Error("Falha ao deletar todas as especialidades!");
            }
        });
    }
}
exports.default = new EspecialidadeRepository();
