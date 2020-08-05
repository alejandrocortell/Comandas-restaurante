// Clase Categoria
class Categoria {
  constructor(id, nombre) {
    this.id = id;
    this.nombre = nombre;
  }

  // Getters
  getId () {
    return this.id;
  }

  getNombre () {
    return this.nombre;
  }

  // Setters
  setNombre (nombre) {
    this.nombre = nombre;
  }

}

export default Categoria;