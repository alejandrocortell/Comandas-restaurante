// Clase Iva
class Iva {
  constructor(nombre, cantidad) {
    this.nombre = nombre;
    this.cantidad = cantidad;
  }

  // Getters
  getNombre() {
    return this.nombre;
  }

  getCantidad() {
    return this.cantidad;
  }

  // Setters
  setNombre(nombre) {
    this.nombre = nombre;
  }

  setCantidad(cantidad) {
    this.cantidad = cantidad;
  }

}

export default Iva;