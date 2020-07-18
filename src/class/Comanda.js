// Clase comanda
class Comanda {
  constructor(id) {
    this.id = id;
    this.lineasPedido = new Array();
  }

  // Getters
  getId() {
    return this.id;
  }

  getLineasPedido() {
    return this.lineasPedido;
  }

  anadirLinea(lineaPedido){
    this.lineasPedido.push(lineaPedido);
  }

}

export default Comanda;