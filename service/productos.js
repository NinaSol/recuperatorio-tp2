import config from "../config.js";
import { ProductosFactoryDAO } from "../model/DAO/productosFactory.js";

export class ProductosService {
  constructor() {
    this.productosModel = ProductosFactoryDAO.get(config.DB);
  }
  getProductos = async () => {
    const productos = await this.productosModel.getProductos();
    return productos.length === 0 ? "No hay productos para listar" : productos;
  };

  getEstadistica = async () => {
    const productos = await this.getProductos();
    //sum
    let precioSumatoria = 0;
    productos.forEach((p) => (precioSumatoria += p.precio));
    //prom
    const precioPromedio = precioSumatoria / productos.length;

    //max
    const prodPrecioMaximo = productos.reduce((previous, current) => {
      return current.precio > previous.precio ? current : previous;
    });

    //min
    const prodPrecioMinimo = productos.reduce((previous, current) => {
      return current.precio < previous.precio ? current : previous;
    });

    let resultMin = {
      precio: prodPrecioMinimo.precio,
      nombre: prodPrecioMinimo.nombre,
    };
    let resultMax = {
      precio: prodPrecioMaximo.precio,
      nombre: prodPrecioMaximo.nombre,
    };

    return {
      precioPromedio,
      precioSumatoria,
      resultMin,
      resultMax,
    };
  };

  saveProducto = async (producto) => {
    return await this.productosModel.saveProducto(producto);
  };
}
