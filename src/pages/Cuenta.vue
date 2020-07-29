<template>
  <q-page class="q-pa-md">

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
          :to="{ name: 'addProducto', params: {id: id } }"
          label="Añadir producto"
        />
        <q-route-tab
          :to="{ name: 'addProducto', params: {id: id } }"
          label="Cuenta"
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
  name: 'Cuenta',
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
    calculaPrecioIva (producto) {
      return FA.calculaPrecioIva(producto);
    }
  }
}
</script>
