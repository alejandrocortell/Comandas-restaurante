// Clase linea Pedido
class LineaPedido {
  constructor(cantidad, producto) {
    this.cantidad = cantidad;
    this.producto = producto;
    this.nota = null;
  }

  // Getters
  getCantidad () {
    return this.cantidad;
  }

  getProducto () {
    return this.producto;
  }

  getNota () {
    return this.nota;
  }

  // Getters
  setCantidad (cantidad) {
    this.cantidad = cantidad;
  }

  setProducto (producto) {
    this.producto = producto;
  }

  setNota (nota) {
    this.nota = nota;
  }

}

export default LineaPedido;