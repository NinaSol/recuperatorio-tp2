import { ProductosMem } from "./productosMem.js";
import { ProductosMongo } from "./productosMongo.js";

export class ProductosFactoryDAO {
  static get(tipo) {
    switch (tipo) {
      case "MEM":
        console.log("MEM");
        return new ProductosMem();

      case "MONGO":
        console.log("MONGO");
        return new ProductosMongo();

      default:
        return new ProductosMem();
    }
  }
}
