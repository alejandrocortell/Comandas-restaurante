<template>
  <q-page class="q-pa-md">
    <h6
      v-if="rest != null"
      class="text-h6 q-my-sm"
    >{{ rest.nombre }}</h6>
    <div
      v-if="rest != null"
      class="row"
    >
      <div
        v-for="(mesa, index) in rest.mesas"
        :key="index"
        class="col-6 q-pa-xs"
      >
        <q-btn
          color="white"
          text-color="black"
          class="full-width"
          padding="lg"
          :label="'Mesa ' + (index + 1)"
          :to="{ name: 'mesa', params: {id: (index + 1).toString() } }"
        />
      </div>
    </div>
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
