import { Router } from "express";
import EspecialidadeController from "../controller/especialidade.controller";


class EspecialidadeRoutes {
  router = Router();
  controller = new EspecialidadeController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {

    // Criar um novo genero.
    this.router.post("/especialidade", this.controller.create);

    // Retornar os generos já cadastrados.
    this.router.get("/especialidades", this.controller.findAll);

    // Retorna um genero específico pelo seu id
    this.router.get("/especialidade/:id", this.controller.findOne);

    // Retorna um genero específico pelo seu nome
    this.router.get("/especialidade/nome/:nome", this.controller.findName);

    // Atualizar um genero pelo seu id
    this.router.put("/especialidade/:id", this.controller.update);

    // Deleta um genero pelo seu id
    this.router.delete("/especialidade/:id", this.controller.delete);

    // Deleta um genero pelo seu id embutido
    this.router.delete("/especialidade", this.controller.deleteEmbutido);

    // Deleta todos os generos
    this.router.delete("/profissional", this.controller.deleteAll);
  }
}

export default new EspecialidadeRoutes().router;