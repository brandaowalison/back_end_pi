import "reflect-metadata"
import { DataSource } from "typeorm"
import { config, dialect } from "../config/db.config"
import { Profissional } from "../models/Profissional"
import { Especialidade } from "../models/Especialidade"


export const AppDataSource = new DataSource({
    type: dialect,
    host: config.HOST,
    port: config.PORT,
    username: config.USER,
    password: config.PASSWORD,
    database: config.DB,
    entities: [ Profissional, Especialidade ],
    synchronize: true,
    logging: true,
})