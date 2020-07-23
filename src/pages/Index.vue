<template>
  <q-page class="flex flex-center">
    <div v-if="rest != null">
      {{ rest.nombre }}
      <div
        v-for="(mesa, index) in rest.mesas"
        :key="index"
      >
        <div>
          {{ index + 1 }}
        </div>
        <router-link :to="{ name: 'mesa', params: {id: (index + 1).toString() } }">
          Abrir mesa
        </router-link>
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
