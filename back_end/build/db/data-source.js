"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const db_config_1 = require("../config/db.config");
const Profissional_1 = require("../models/Profissional");
const Especialidade_1 = require("../models/Especialidade");
exports.AppDataSource = new typeorm_1.DataSource({
    type: db_config_1.dialect,
    host: db_config_1.config.HOST,
    port: db_config_1.config.PORT,
    username: db_config_1.config.USER,
    password: db_config_1.config.PASSWORD,
    database: db_config_1.config.DB,
    entities: [Profissional_1.Profissional, Especialidade_1.Especialidade],
    synchronize: true,
    logging: false,
});
