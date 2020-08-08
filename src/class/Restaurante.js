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
  /*
    setProductos(productos) {
      this.productos = productos;
    }
  
    setImpuestos(impuestos) {
      this.impuestos = impuestos;
    }
  
    setHistorico(historico) {
      this.historico = historico;
    }
  */
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
    let nombre = producto.getNombre();
    let posicion;

    for (let index = 0; index < this.productos.length; index++) {
      if (this.productos[index].getNombre() == nombre) {
        posicion = index;
        break;
      }
    }

    this.productos.splice(posicion, 1);
  }

  anadirImpuesto (iva) {
    this.impuestos.push(iva);
  }

  eliminarImpuesto (iva) {
    let nombre = iva.getNombre();
    let posicion;

    for (let index = 0; index < this.impuestos.length; index++) {
      if (this.impuestos[index].getNombre() == nombre) {
        posicion = index;
        break;
      }
    }

    this.impuestos.splice(posicion, 1);
  }

  anadirCategoria (categoria) {
    this.categorias.push(categoria);
  }

  eliminarCategoria (categoria) {
    let nombre = categoria.getNombre();
    let posicion;

    for (let index = 0; index < this.categorias.length; index++) {
      if (this.categorias[index].getNombre() == nombre) {
        posicion = index;
        break;
      }
    }

    this.categorias.splice(posicion, 1);
  }

  anadirHistorico (mesa) {
    this.historico.push(mesa);
  }
}

export default Restaurante;