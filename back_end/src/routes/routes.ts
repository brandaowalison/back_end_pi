import { Application } from "express";
import ProfissionalRoutes from "./profissional.routes";
import EspecialidadeRoutes from "./especialidade.routes";

// Concentrador de rotas
export default class Routes {
  constructor(app: Application) {
    app.use("/SalaoBelezaPi", ProfissionalRoutes, EspecialidadeRoutes);
  }
}