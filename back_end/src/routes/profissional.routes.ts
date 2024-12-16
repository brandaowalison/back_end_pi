import { Router } from "express";
import ProfissionalController from "../controller/profissional.controller";


class ProfissionalRoutes {
  router = Router();
  controller = new ProfissionalController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {

    // Criar um novo profissional.
    this.router.post("/profissional", this.controller.create);

    // Retornar os profissionais já cadastrados.
    this.router.get("/profissionais", this.controller.findAll);

    // Retorna um profissional específico pelo seu id
    this.router.get("/profissional/:id", this.controller.findOne);

    // Retorna um profissional específico pelo seu nome
    this.router.get("/profissional/nome/:nome", this.controller.findName);

    // Atualizar um profissional pelo seu id
    this.router.put("/profissional/:id", this.controller.update);

    // Deleta um profissional pelo seu id
    this.router.delete("/profissional/:id", this.controller.delete);

    // Deleta um profissional pelo seu id embutido
    // this.router.delete("/profissional", this.controller.deleteEmbutido);

    // Deleta todos os profissionais
    this.router.delete("/profissional", this.controller.deleteAll);
  }
}

export default new ProfissionalRoutes().router;