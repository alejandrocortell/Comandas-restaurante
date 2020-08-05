// Clase mesa
class Mesa {
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
      if (linea.getProducto().getId() === lineaPedido.getProducto().getId()) {
        linea.setCantidad(parseInt(linea.getCantidad()) + parseInt(lineaPedido.getCantidad()));
        encontrado = true;
      }
    });

    if (!encontrado) {
      this.lineasPedido.push(lineaPedido);
    }
  }

}

export default Mesa;