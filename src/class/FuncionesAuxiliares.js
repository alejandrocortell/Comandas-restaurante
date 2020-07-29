import Categoria from "../class/Categoria.js";
import Comanda from "../class/Comanda.js";
import Iva from "../class/Iva.js";
import LineaPedido from "../class/LineaPedido.js";
import Producto from "../class/Producto.js";
import Restaurante from "../class/Restaurante.js";

class FuncionesAuxiliares {
  static guardarEstadoLocalStorage () {
    //localStorage.setItem("usuarioLocal", JSON.stringify(Usuario.$usuarioLocal));
    console.log("Guardar");
  }

  static restaurarEstadoLocalStorage () {
    console.log("Restaurar");
  }

  static calculaPrecioIva (producto) {
    let precioIva = ((parseFloat(producto.precio) + parseFloat(producto.iva.cantidad)) / 100) + parseFloat(producto.precio);
    return Math.round(precioIva * 100) / 100;
  }

  static datosPrueba () {
    Restaurante.$restLocal = new Restaurante('Casa Pepe', 10);

    let reducido = new Iva('reducido', 10);
    let normal = new Iva('normal', 21);

    let cat1 = new Categoria('refresco');
    let cat2 = new Categoria('alcoholica');

    let coca = new Producto('Coca-cola', cat1, 1, reducido);
    let fanta = new Producto('fanta', cat1, 1.2, reducido);
    let pepsi = new Producto('Pepsi', cat1, 0.8, normal);
    let vino = new Producto('Vino', cat2, 2, normal);

    Restaurante.$restLocal.anadirCategoria(cat1);
    Restaurante.$restLocal.anadirCategoria(cat2);
    Restaurante.$restLocal.anadirImpuesto(reducido);
    Restaurante.$restLocal.anadirImpuesto(normal);
    Restaurante.$restLocal.anadirProducto(coca);
    Restaurante.$restLocal.anadirProducto(fanta);
    Restaurante.$restLocal.anadirProducto(pepsi);
    Restaurante.$restLocal.anadirProducto(vino);

    let mesa1 = new Comanda(Restaurante.$restLocal.getIdMesa());
    Restaurante.$restLocal.aumentarIdMesa();

    let linea1 = new LineaPedido(2, coca);
    linea1.setNota("Sin hielos");
    let linea2 = new LineaPedido(1, vino);
    let linea3 = new LineaPedido(2, fanta);
    mesa1.anadirLinea(linea1);
    mesa1.anadirLinea(linea2);
    mesa1.anadirLinea(linea3);
    Restaurante.$restLocal.anadirMesa(0, mesa1);

    let mesa2 = new Comanda(Restaurante.$restLocal.getIdMesa());
    Restaurante.$restLocal.aumentarIdMesa();

    let linea4 = new LineaPedido(5, coca);
    let linea5 = new LineaPedido(5, vino);
    let linea6 = new LineaPedido(5, fanta);
    mesa2.anadirLinea(linea4);
    mesa2.anadirLinea(linea5);
    mesa2.anadirLinea(linea6);
    Restaurante.$restLocal.anadirMesa(1, mesa2);
  }
}

export default FuncionesAuxiliares;