<template>
  <q-page class=" q-pa-md">
    <h6 class="text-h6 q-my-sm">Mesa {{ id }}</h6>

    <q-list
      dense
      separator
    >
      <q-item class="flex">
        <q-item-section class="col-3 text-bold">Cantidad</q-item-section>
        <q-item-section class="col-7 text-bold">Producto</q-item-section>
        <q-item-section class="col-2 items-end text-bold">Precio</q-item-section>
      </q-item>

      <q-item
        clickable
        v-for="linea in mesa.lineasPedido"
        :key="linea.producto.nombre"
      >
        <q-item-section class="col-3">{{ linea.cantidad }}</q-item-section>
        <q-item-section class="col-7">
          <q-item-label>{{ linea.producto.nombre }}</q-item-label>
          <q-item-label
            v-if="linea.nota != null"
            caption
          >{{ linea.nota }}</q-item-label>
        </q-item-section>
        <q-item-section class="col-2 items-end">{{ calculaPrecioIva(linea.producto) }} €</q-item-section>
      </q-item>
    </q-list>

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
  name: 'PageMesa',
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
    //Creación de la mesa si etá vacia
    if (Rest.$restLocal.getMesas()[parseInt(this.id) - 1] === null) {
      let mesa = new Comanda(Rest.$restLocal.getIdMesa());
      Rest.$restLocal.aumentarIdMesa();
      Rest.$restLocal.anadirMesa(parseInt(this.id) - 1, mesa);
    }

    this.mesa = Rest.$restLocal.getMesas()[parseInt(this.id) - 1];
    this.rest = Rest.$restLocal;
  },
  methods: {
    calculaPrecioIva (producto) {
      let precioIva = ((parseFloat(producto.precio) + parseFloat(producto.iva.cantidad)) / 100) + parseFloat(producto.precio);
      return Math.round(precioIva * 100) / 100;
    }
  }
}
</script>
