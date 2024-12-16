import { Application } from "express";
import profissionalRoutes from "./profissional.routes";
import especialidadeRoutes from "./especialidade.routes";

// Concentrador de rotas
export default class Routes {
  constructor(app: Application) {
    app.use("/SalaoBelezaPi", profissionalRoutes, especialidadeRoutes);
  }
}