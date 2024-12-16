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
const Profissional_1 = require("../models/Profissional");
class ProfissionalRepository {
    constructor() {
        this.profissionalRepository = data_source_1.AppDataSource.getRepository(Profissional_1.Profissional);
    }
    save(profissional) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const savedProfissional = yield this.profissionalRepository.save(profissional);
                return savedProfissional;
            }
            catch (err) {
                throw new Error("Falha ao criar cadastro do Profissional!");
            }
        });
    }
    retrieveAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.profissionalRepository.find();
            }
            catch (error) {
                throw new Error("Falha ao retornar Profissional!");
            }
        });
    }
    retrieveById(profissionalId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.profissionalRepository.findOneBy({
                    idProfissional: profissionalId
                });
            }
            catch (error) {
                throw new Error("Falha ao buscar um Profissional!");
            }
        });
    }
    retrieveByNome(n) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.profissionalRepository.findOneBy({
                    nome: n,
                });
            }
            catch (error) {
                throw new Error("Falha ao buscar um Profissional!");
            }
        });
    }
    update(profissional) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idProfissional, nome, CPF, email, sexo, salario, data_Nasc } = profissional;
            try {
                this.profissionalRepository.save(profissional);
            }
            catch (error) {
                throw new Error("Falha ao atualizar o Profissional!");
            }
        });
    }
    delete(profissionalId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const profissionalEncontrado = yield this.profissionalRepository.findOneBy({
                    idProfissional: profissionalId,
                });
                if (profissionalEncontrado) {
                    this.profissionalRepository.delete(profissionalEncontrado);
                    return 1;
                }
                return 0;
            }
            catch (error) {
                throw new Error("Falha ao deletar Profissional!");
            }
        });
    }
    deleteAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let num = this.profissionalRepository.query("select count(id_profissional) from profissional;");
                this.profissionalRepository.query("delete from profissional;");
                return num;
            }
            catch (error) {
                throw new Error("Falha ao deletar todos os Profissionais!");
            }
        });
    }
}
exports.default = new ProfissionalRepository();
