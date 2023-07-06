import { Router } from "express";
import { methodsHTTP as categoriasController } from "../controllers/categorias.controller.js";

const routerCategorias = Router();

routerCategorias.get("/", categoriasController.getCategoria);
routerCategorias.get("/:id", categoriasController.getCategoriaId);
routerCategorias.post("/", categoriasController.addCategoria);
routerCategorias.delete("/:id", categoriasController.deleteCategoria);
routerCategorias.put("/:id", categoriasController.updateCategoria);


export default routerCategorias;

