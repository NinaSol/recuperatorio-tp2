import express from "express";
import { ProductosController } from "../controller/productos.js";

export class RouterProductos {
  constructor() {
    this.router = express.Router();
    this.productosController = new ProductosController();
  }
  start() {
    this.router.get("/listar", this.productosController.getProductos);
    this.router.get("/estadistica", this.productosController.getEstadistica);
    this.router.post("/ingreso", this.productosController.saveProducto);
    return this.router;
  }
}
