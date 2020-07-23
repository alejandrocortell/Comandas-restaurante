// Clase linea Pedido
class LineaPedido {
  constructor(cantidad, producto) {
    this.cantidad = cantidad;
    this.producto = producto;
  }

  // Getters
  getCantidad () {
    return this.cantidad;
  }

  getProducto () {
    return this.producto;
  }

  // Getters
  setCantidad (cantidad) {
    this.cantidad = cantidad;
  }

  setProducto (producto) {
    this.producto = producto;
  }

}

export default LineaPedido;