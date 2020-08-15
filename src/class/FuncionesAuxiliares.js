import Categoria from "../class/Categoria.js";
import Mesa from "./Mesa.js";
import Iva from "../class/Iva.js";
import LineaPedido from "../class/LineaPedido.js";
import Producto from "../class/Producto.js";
import Restaurante from "../class/Restaurante.js";

class FuncionesAuxiliares {
  static guardarEstadoLocalStorage () {
    localStorage.setItem("restauranteLocal", JSON.stringify(Restaurante.$restLocal));
  }

  static restaurarEstadoLocalStorage () {
    if (!localStorage["restauranteLocal"]) {
      // Si no existe devuelve false para cargar la página de bienvenida
      return false;
    } else {
      // Creación del restaurante y guardarlo en memoria
      let datos = JSON.parse(localStorage.getItem("restauranteLocal"));
      Restaurante.$restLocal = new Restaurante(datos.nombre, datos.mesas.length);

      datos.categorias.forEach(categoria => {
        let cat = new Categoria(Restaurante.$restLocal.getIdCategoria(), categoria.nombre);
        Restaurante.$restLocal.anadirCategoria(cat);
        Restaurante.$restLocal.aumentarIdCategoria();
      });

      datos.impuestos.forEach(impuesto => {
        let iva = new Iva(Restaurante.$restLocal.getIdImpuesto(), impuesto.nombre, impuesto.cantidad);
        Restaurante.$restLocal.anadirImpuesto(iva);
        Restaurante.$restLocal.aumentarIdImpuesto();
      });

      datos.productos.forEach(producto => {
        let prod = new Producto(Restaurante.$restLocal.getIdProducto(), producto.nombre, producto.categoria, producto.precio, producto.iva);
        Restaurante.$restLocal.anadirProducto(prod);
        Restaurante.$restLocal.aumentarIdProducto();
      });

      // Realiza la siguiente función por cada elemento de mesas
      datos.mesas.forEach(funcion);

      function funcion (m, index, arr) {
        // Crea la mesa
        let mesa = new Mesa(Restaurante.$restLocal.getIdMesa());
        if (m !== null) {
          Restaurante.$restLocal.aumentarIdMesa();
          //Crea las lineas de pedido de esa mesa
          m.lineasPedido.forEach(linea => {
            let iva = new Iva(linea.producto.iva.id, linea.producto.iva.nombre, linea.producto.iva.cantidad);
            let cat = new Categoria(linea.producto.categoria.id, linea.producto.categoria.nombre);
            let prod = new Producto(linea.producto.id, linea.producto.nombre, cat, linea.producto.precio, iva);
            let lineaNueva = new LineaPedido(parseInt(linea.cantidad), prod);

            if (linea.nota != null) {
              lineaNueva.setNota(linea.nota)
            }
            // Inserción de linea en la mesa
            mesa.anadirLinea(lineaNueva);
          });
          // Inserción de la mesa en el restaurante, en la posición del index
          Restaurante.$restLocal.anadirMesa(index, mesa);
        }
      }

      datos.historico.forEach(m => {
        let mesa = new Mesa(m.id);

        m.lineasPedido.forEach(linea => {
          let iva = new Iva(linea.producto.iva.id, linea.producto.iva.nombre, linea.producto.iva.cantidad);
          let cat = new Categoria(linea.producto.categoria.id, linea.producto.categoria.nombre);
          let prod = new Producto(linea.producto.id, linea.producto.nombre, cat, linea.producto.precio, iva);
          let lineaNueva = new LineaPedido(parseInt(linea.cantidad), prod);

          mesa.anadirLinea(lineaNueva);
        });

        Restaurante.$restLocal.anadirHistorico(mesa);
      });

      return true;
    }
  }

  static calculaPrecioIva (producto) {
    let precioIva = ((parseFloat(producto.precio) * parseFloat(producto.iva.cantidad)) / 100) + parseFloat(producto.precio);
    return Math.round(precioIva * 100) / 100;
  }

  // Función para cargar datos durante el desarrollo
  static datosPrueba () {
    Restaurante.$restLocal = new Restaurante('Casa Pepe', 10);

    let reducido = new Iva(Restaurante.$restLocal.getIdImpuesto(), 'reducido', 10);
    Restaurante.$restLocal.anadirImpuesto(reducido);
    Restaurante.$restLocal.aumentarIdImpuesto();
    let normal = new Iva(Restaurante.$restLocal.getIdImpuesto(), 'normal', 21);
    Restaurante.$restLocal.anadirImpuesto(normal);
    Restaurante.$restLocal.aumentarIdImpuesto();
    let sup = new Iva(Restaurante.$restLocal.getIdImpuesto(), 'super', 51);
    Restaurante.$restLocal.anadirImpuesto(sup);
    Restaurante.$restLocal.aumentarIdImpuesto();

    let cat1 = new Categoria(Restaurante.$restLocal.getIdCategoria(), 'refresco');
    Restaurante.$restLocal.anadirCategoria(cat1);
    Restaurante.$restLocal.aumentarIdCategoria();
    let cat2 = new Categoria(Restaurante.$restLocal.getIdCategoria(), 'alcoholica');
    Restaurante.$restLocal.anadirCategoria(cat2);
    Restaurante.$restLocal.aumentarIdCategoria();

    let coca = new Producto(Restaurante.$restLocal.getIdProducto(), 'Coca-cola', cat1, 1, reducido);
    Restaurante.$restLocal.anadirProducto(coca);
    Restaurante.$restLocal.aumentarIdProducto();
    let fanta = new Producto(Restaurante.$restLocal.getIdProducto(), 'fanta', cat1, 1.2, reducido);
    Restaurante.$restLocal.anadirProducto(fanta);
    Restaurante.$restLocal.aumentarIdProducto();
    let pepsi = new Producto(Restaurante.$restLocal.getIdProducto(), 'Pepsi', cat1, 0.8, normal);
    Restaurante.$restLocal.anadirProducto(pepsi);
    Restaurante.$restLocal.aumentarIdProducto();
    let vino = new Producto(Restaurante.$restLocal.getIdProducto(), 'Vino', cat2, 2, normal);
    Restaurante.$restLocal.anadirProducto(vino);
    Restaurante.$restLocal.aumentarIdProducto();

    let mesa1 = new Mesa(Restaurante.$restLocal.getIdMesa());
    Restaurante.$restLocal.aumentarIdMesa();

    let linea1 = new LineaPedido(2, coca);
    linea1.setNota("Sin hielos");
    let linea2 = new LineaPedido(1, vino);
    let linea3 = new LineaPedido(2, fanta);
    mesa1.anadirLinea(linea1);
    mesa1.anadirLinea(linea2);
    mesa1.anadirLinea(linea3);
    Restaurante.$restLocal.anadirMesa(0, mesa1);

    let mesa2 = new Mesa(Restaurante.$restLocal.getIdMesa());
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