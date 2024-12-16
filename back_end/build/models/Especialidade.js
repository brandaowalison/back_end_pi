"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Especialidade = void 0;
const typeorm_1 = require("typeorm");
const Profissional_1 = require("./Profissional");
let Especialidade = class Especialidade {
    constructor(nome, precoBase, descricao) {
        this.nome = nome;
        this.precoBase = precoBase;
        this.descricao = descricao;
    }
};
exports.Especialidade = Especialidade;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Especialidade.prototype, "idEspecialidade", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 45 }),
    __metadata("design:type", String)
], Especialidade.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 7, scale: 2 }),
    __metadata("design:type", Number)
], Especialidade.prototype, "precoBase", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 45 }),
    __metadata("design:type", String)
], Especialidade.prototype, "descricao", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Profissional_1.Profissional, (profissional) => profissional.especialidades),
    __metadata("design:type", Profissional_1.Profissional)
], Especialidade.prototype, "profissionais", void 0);
exports.Especialidade = Especialidade = __decorate([
    (0, typeorm_1.Entity)('Especialidades'),
    __metadata("design:paramtypes", [String, Number, String])
], Especialidade);