<template>
  <q-layout view="hHh lpR fFf">

    <q-header
      elevated
      class="bg-primary text-white"
      height-hint="98"
    >
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

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
          :to="{ name: 'mesa', params: {id: 1 } }"
          label="Page One"
        />
        <q-route-tab
          :to="{ name: 'mesa', params: {id: 2 } }"
          label="Page Two"
        />
        <q-route-tab
          :to="{ name: 'mesa', params: {id: 3 } }"
          label="Page Three"
        />
      </q-tabs>
    </q-footer>

  </q-layout>
</template>

<script>
import FA from "../class/FuncionesAuxiliares.js";
import Categoria from "../class/Categoria.js";
import Comanda from "../class/Comanda.js";
import Iva from "../class/Iva.js";
import LineaPedido from "../class/LineaPedido.js";
import Producto from "../class/Producto.js";
import Restaurante from "../class/Restaurante.js";

export default {
  name: 'MainLayout',

  components: {
  },

  data () {
    return {};
  },
  created: function () {
    //FA.restaurarEstadoLocalStorage();
    FA.datosPrueba();
  },
};
</script>
