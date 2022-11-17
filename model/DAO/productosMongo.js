import { CnxMongoDB } from "../cnxMongoDB.js";
import { ObjectId } from "mongodb";

export class ProductosMongo {
  getProductos = async () => {
    if (!CnxMongoDB.connection) return [];
    try {
      let productos = await CnxMongoDB.db
        .collection("productos")
        .find({})
        .toArray();
      return productos;
    } catch {
      return [];
    }
  };

  saveProducto = async (producto) => {
    if (!CnxMongoDB.connection) return {};
    producto.precio = parseFloat(producto.precio);
    await CnxMongoDB.db.collection("productos").insertOne(producto);
    return producto;
  };
}
