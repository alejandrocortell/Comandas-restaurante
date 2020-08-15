// Clase Restaurante
class Restaurante {
  constructor(nombre, numeroMesas) {
    this.nombre = nombre;
    this.mesas = new Array(numeroMesas);
    // Se rellena el array con null
    for (let index = 0; index < this.mesas.length; index++) {
      this.mesas[index] = null;
    }

    this.idMesa = 1;
    this.idProducto = 1;
    this.idImpuesto = 1;
    this.idCategoria = 1;
    this.productos = new Array();
    this.impuestos = new Array();
    this.categorias = new Array();
    this.historico = new Array();
  }

  // Getters
  getNombre () {
    return this.nombre;
  }

  getMesas () {
    return this.mesas;
  }

  getIdMesa () {
    return this.idMesa;
  }

  getIdProducto () {
    return this.idProducto;
  }

  getIdImpuesto () {
    return this.idImpuesto;
  }

  getIdCategoria () {
    return this.idCategoria;
  }

  getProductos () {
    return this.productos;
  }

  getImpuestos () {
    return this.impuestos;
  }

  getCategorias () {
    return this.categorias;
  }

  getHistorico () {
    return this.historico;
  }

  // Setters
  setNombre (nombre) {
    this.nombre = nombre;
  }

  aumentarIdMesa () {
    this.idMesa++;
  }

  aumentarIdImpuesto () {
    this.idImpuesto++;
  }

  aumentarIdCategoria () {
    this.idCategoria++;
  }

  aumentarIdProducto () {
    this.idProducto++;
  }

  setMesas (mesas) {
    this.mesas = mesas;
  }

  // Agregar y borrar elementos de los arrays
  anadirMesa (numMesa, mesa) {
    this.mesas[numMesa] = mesa;
  }

  cerrarMesa (numMesa) {
    this.mesas[numMesa] = null;
  }

  anadirProducto (producto) {
    this.productos.push(producto);
  }

  eliminarProducto (producto) {
    this.productos.splice(this.productos.indexOf(producto), 1)
  }

  anadirImpuesto (iva) {
    this.impuestos.push(iva);
  }

  eliminarImpuesto (iva) {
    this.impuestos.splice(this.impuestos.indexOf(iva), 1)
  }

  anadirCategoria (categoria) {
    this.categorias.push(categoria);
  }

  eliminarCategoria (categoria) {
    this.categorias.splice(this.categorias.indexOf(categoria), 1)
  }

  anadirHistorico (mesa) {
    this.historico.push(mesa);
  }
}

export default Restaurante;