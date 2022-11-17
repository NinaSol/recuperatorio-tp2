export class ProductosMem {
  constructor() {
    this.productos = [
      {
        nombre: "televisor",
        precio: 50000,
        descripcion: "televisor samsung 4k",
        url: "https://images.samsung.com/is/image/samsung/ar-uhd-ku6000-un50ku6000gxzb-frontblack-61521109?$624_624_PNG$",
      },
      {
        _id: "63759136479e8160cb973dfe",
        nombre: "licuadora",
        precio: 10000,
        descripcion: "licuadora liliana",
        url: "https://pixelstore.com.ar/wp-content/uploads/2019/11/licuadora-liliana-al519-21-eb020ab775b45715e115391851511485-1024-1024.jpg",
      },
      {
        _id: "63759a66cbaaad107d1b061a",
        nombre: "ventilador",
        precio: 15000,
        descripcion: "ventilador de pie",
        url: "http://d3ugyf2ht6aenh.cloudfront.net/stores/884/018/products/vent-0121-3d7b3913c964f5a6af16082337993002-640-0.jpg",
      },
    ];
  }

  getProductos = async (_) => {
    try {
      return this.productos;
    } catch {
      return [];
    }
  };
  saveProducto = async (producto) => {
    producto.id = Math.floor(Math.random() * 100);
    this.productos.push(producto);
    return producto;
  };
}
