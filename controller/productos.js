import { ProductosService } from "../service/productos.js";

export class ProductosController {
  constructor() {
    this.productosService = new ProductosService();
  }
  getProductos = async (req, res) => {
    res.json(await this.productosService.getProductos());
  };

  getEstadistica = async (req, res) => {
    res.json(await this.productosService.getEstadistica());
  };

  saveProducto = async (req, res) => {
    const producto = req.body;
    res.json(await this.productosService.saveProducto(producto));
  };
}
