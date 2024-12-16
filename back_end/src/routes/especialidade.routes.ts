import { Router } from "express";
import EspecialidadeController from "../controller/especialidade.controller";


class EspecialidadeRoutes {
  router = Router();
  controller = new EspecialidadeController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {

    
    this.router.post("/especialidade", this.controller.create);


    this.router.get("/especialidades", this.controller.findAll);

    this.router.get("/especialidade/:id", this.controller.findOne);

    this.router.get("/especialidade/nome/:nome", this.controller.findName);


    this.router.put("/especialidade/:id", this.controller.update);

 
    this.router.delete("/especialidade/:id", this.controller.delete);


    this.router.delete("/profissional", this.controller.deleteAll);
  }
}

export default new EspecialidadeRoutes().router;