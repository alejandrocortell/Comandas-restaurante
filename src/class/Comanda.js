// Clase comanda
class Comanda {
  constructor(id) {
    this.id = id;
    this.lineasPedido = new Array();
  }

  // Getters
  getId () {
    return this.id;
  }

  getLineasPedido () {
    return this.lineasPedido;
  }

  anadirLinea (lineaPedido) {
    let encontrado = false;
    this.lineasPedido.forEach(linea => {
      if (linea.getProducto().getNombre() === lineaPedido.getProducto().getNombre()) {
        linea.setCantidad(linea.getCantidad() + lineaPedido.getCantidad());
        encontrado = true;
      }
    });

    if (!encontrado) {
      this.lineasPedido.push(lineaPedido);
    }
  }

}

export default Comanda;