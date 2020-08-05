// Clase Iva
class Iva {
  constructor(id, nombre, cantidad) {
    this.id = id;
    this.nombre = nombre;
    this.cantidad = cantidad;
  }

  // Getters
  getId () {
    return this.id;
  }

  getNombre () {
    return this.nombre;
  }

  getCantidad () {
    return this.cantidad;
  }

  // Setters
  setNombre (nombre) {
    this.nombre = nombre;
  }

  setCantidad (cantidad) {
    this.cantidad = cantidad;
  }

}

export default Iva;