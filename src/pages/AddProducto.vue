<template>
  <q-page class="q-pa-md">
    <h3 class="text-h3 q-my-sm">Añadir producto</h3>
    <h6 class="text-h6 q-my-sm">Mesa {{ id }}</h6>

    <div
      v-for="conjunto in productos"
      :key="conjunto.categoria.nombre"
    >
      <h6 class="text-h6 q-my-sm">{{ conjunto.categoria.nombre }}</h6>
      <div class="row">
        <div
          v-for="producto in conjunto.productos"
          :key="producto.nombre"
          class="col-6 q-pa-xs"
        >
          <q-btn
            @click="addProducto(producto)"
            color="white"
            text-color="black"
            class="full-width"
          >
            <div>
              {{ producto.nombre }}
              <br>
              <span class="text-weight-light">{{ calculaPrecioIva(producto) }}€</span>
            </div>
          </q-btn>
        </div>
      </div>
    </div>

    <q-footer
      elevated
      class="bg-grey-8 text-white"
    >
      <q-tabs align="center">
        <q-route-tab
          to="/"
          label="Restaurante"
        />
        <q-route-tab
          :to="{ name: 'mesa', params: { id: id.toString() } }"
          label="Volver a mesa"
        />
      </q-tabs>
    </q-footer>
  </q-page>
</template>

<script>
import FA from "../class/FuncionesAuxiliares.js";
import Categoria from "../class/Categoria.js";
import Mesa from "../class/Mesa.js";
import Iva from "../class/Iva.js";
import LineaPedido from "../class/LineaPedido.js";
import Producto from "../class/Producto.js";
import Rest from "../class/Restaurante.js";

export default {
  name: 'AddProducto',
  props: {
    id: String
  },
  data () {
    return {
      mesa: null,
      rest: null,
      productos: []
    };
  },
  created () {
    this.mesa = Rest.$restLocal.getMesas()[parseInt(this.id) - 1];
    this.rest = Rest.$restLocal;

    // Creación de un objeto con los productos ordenados por categorías
    this.rest.categorias.forEach(cat => {
      let catTemp = new Object();
      let prodTemp = [];

      catTemp.categoria = cat;

      this.rest.productos.forEach(prod => {
        if (prod.categoria.nombre === cat.nombre) {
          prodTemp.push(prod);
        }
      });

      catTemp.productos = prodTemp;

      this.productos.push(catTemp);
    });
  },
  methods: {
    addProducto (producto) {
      let linea = new LineaPedido(1, producto);
      Rest.$restLocal.getMesas()[parseInt(this.id) - 1].anadirLinea(linea);
    },
    calculaPrecioIva (producto) {
      return FA.calculaPrecioIva(producto);
    }
  }
}
</script>
