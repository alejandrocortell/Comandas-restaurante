<template>
  <q-page class="q-pa-md">
    <h5 class="text-h5 q-my-sm">Configuración productos</h5>

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
import Mesa from "../class/Mesa.js";
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
