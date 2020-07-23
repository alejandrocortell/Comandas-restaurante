<template>
  <q-page class="flex flex-center">
    <div
      v-for="(producto, index) in rest.productos"
      :key="index"
    >
      <p>{{ producto }}</p>
      <div @click="addProducto(producto)">Añadir producto</div>
    </div>
    <q-footer
      elevated
      class="bg-grey-8 text-white"
    >
      <q-tabs align="center">
        <q-route-tab
          to="/"
          label="Index"
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
import Comanda from "../class/Comanda.js";
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
      rest: null
    };
  },
  created () {
    this.mesa = Rest.$restLocal.getMesas()[parseInt(this.id) - 1];
    this.rest = Rest.$restLocal;
  },
  methods: {
    addProducto (producto) {
      let linea = new LineaPedido(1, producto);
      Rest.$restLocal.getMesas()[parseInt(this.id) - 1].anadirLinea(linea);
    }
  }
}
</script>
