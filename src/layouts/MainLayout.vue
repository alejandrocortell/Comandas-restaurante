<template>
  <q-layout view="hHh lpR fFf">

    <q-header
      elevated
      class="bg-primary"
      height-hint="98"
    >
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <q-icon
              name="local_dining"
              size="md"
            ></q-icon>
          </q-avatar>
          {{ titulo }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view @modifica-restaurante="modificaRestaurante" />
    </q-page-container>
  </q-layout>
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
  name: 'MainLayout',

  components: {
  },

  data () {
    return {
      titulo: ''
    };
  },
  created () {
    if (!FA.restaurarEstadoLocalStorage()) {
      this.$router.push({ name: 'configuracionInicial' })
    } else {
      this.titulo = Rest.$restLocal.getNombre();
    }
  },
  methods: {
    modificaRestaurante (rest) {
      Rest.$restLocal = rest;
      this.titulo = Rest.$restLocal.getNombre();
      FA.guardarEstadoLocalStorage();
    }
  }
};
</script>
