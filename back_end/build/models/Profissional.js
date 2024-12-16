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
exports.Profissional = void 0;
const typeorm_1 = require("typeorm");
const Especialidade_1 = require("./Especialidade");
let Profissional = class Profissional {
    constructor(nome, CPF, email, sexo, salario, data_Nasc) {
        this.nome = nome;
        this.CPF = CPF;
        this.email = email;
        this.sexo = sexo;
        this.salario = salario;
        this.data_Nasc = data_Nasc;
    }
};
exports.Profissional = Profissional;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Profissional.prototype, "idProfissional", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 45 }),
    __metadata("design:type", String)
], Profissional.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 14 }),
    __metadata("design:type", String)
], Profissional.prototype, "CPF", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 45 }),
    __metadata("design:type", String)
], Profissional.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 1 }),
    __metadata("design:type", String)
], Profissional.prototype, "sexo", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 7, scale: 2 }),
    __metadata("design:type", Number)
], Profissional.prototype, "salario", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", Date)
], Profissional.prototype, "data_Nasc", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Especialidade_1.Especialidade, (Especialidade) => Especialidade.profissionais),
    __metadata("design:type", Profissional)
], Profissional.prototype, "especialidades", void 0);
exports.Profissional = Profissional = __decorate([
    (0, typeorm_1.Entity)('Profissionais'),
    __metadata("design:paramtypes", [String, String, String, String, Number, Date])
], Profissional);
