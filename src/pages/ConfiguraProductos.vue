<template>
  <q-page class="q-pa-md">
    <h3 class="text-h3 q-my-sm">Configuración productos</h3>

    <q-footer
      elevated
      class="bg-grey-8 text-white"
    >
      <q-tabs align="center">
        <q-route-tab
          to="/configuracion"
          label="Volver"
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
  name: 'ConfiguraProductos',
  props: {
  },
  data () {
    return {
      rest: null
    };
  },
  created () {
    this.rest = Rest.$restLocal;
  },
  methods: {

  }
}
</script>
