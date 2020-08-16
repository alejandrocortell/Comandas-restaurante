<template>
  <q-page class="q-pa-md">
    <div
      v-if="rest != null"
      class="row"
    >
      <div
        v-for="(mesa, index) in rest.mesas"
        :key="index"
        class="col-xs-6 col-sm-4 col-md-2 q-pa-xs"
      >
        <q-btn
          color="white"
          text-color="black"
          class="full-width"
          :class="mesa === null? 'bg-amber-1' : 'bg-green-1 '"
          padding="lg"
          :label="'Mesa ' + (index + 1)"
          :to="{ name: 'mesa', params: {id: (index + 1).toString() } }"
        />
      </div>
    </div>
    <q-page-sticky
      position="bottom-right"
      :offset="[18, 18]"
    >
      <q-btn
        fab
        class="bg-white"
        icon="settings"
        to="configuracion"
      />
    </q-page-sticky>
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
  name: 'PageIndex',
  data () {
    return {
      rest: null,
      configuracion: false,
      modificaNombre: ''
    };
  },
  mounted () {
    this.rest = Rest.$restLocal;
  }
}
</script>
