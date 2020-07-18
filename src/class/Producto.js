// Clase Producto
class Producto {
  constructor(nombre, categoria, precio, iva) {
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = precio;
    this.iva = iva;
  }

  // Getters
  getNombre() {
    return this.nombre;
  }

  getCategoria() {
    return this.categoria;
  }

  getPrecio() {
    return this.precio;
  }

  getIva() {
    return this.iva;
  }

  // Setters
  setNombre(nombre) {
    this.nombre = nombre;
  }

  setCategoria(categoria) {
    this.categoria = categoria;
  }

  setPrecio(precio) {
    this.precio = precio;
  }

  setIva(iva) {
    this.iva = iva;
  }

}

export default Producto;