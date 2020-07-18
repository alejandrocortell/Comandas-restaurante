// Clase linea Pedido
class LineaPedido {
  constructor(cantidad, producto) {
    this.cantidad = cantidad;
    this.producto = producto;
  }

  // Getters
  getCantidad() {
    return this.cantidad;
  }

  getProducto() {
    return this.producto;
  }

}

export default LineaPedido;