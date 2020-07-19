<template>
  <q-page class="flex flex-center">
    {{ rest }}
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
  name: 'PageIndex',
  data () {
    return {
      rest: null
    };
  },
  mounted () {
    this.rest = Rest.$restLocal;
  }
}
</script>
