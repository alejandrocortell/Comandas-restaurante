<template>
  <q-page class="q-pa-md">
    <h3 class="text-h3 q-my-sm">Cuenta</h3>
    <h6 class="text-h6 q-my-sm">Mesa {{ id }}</h6>

    <q-list dense>
      <q-item class="flex">
        <q-item-section class="col-2 text-bold">Cantidad</q-item-section>
        <q-item-section class="col-6 text-bold">Producto</q-item-section>
        <q-item-section class="col items-end text-bold">Precio ud.</q-item-section>
        <q-item-section class="col items-end text-bold">Total</q-item-section>
      </q-item>

      <q-separator />

      <q-item
        v-for="linea in mesa.lineasPedido"
        :key="linea.producto.nombre"
      >
        <q-item-section class="col-2">{{ linea.cantidad }}</q-item-section>
        <q-item-section class="col-6">{{ linea.producto.nombre }}</q-item-section>
        <q-item-section class="col items-end">{{ linea.producto.precio }} €</q-item-section>
        <q-item-section class="col items-end">{{ linea.producto.precio * linea.cantidad }} €</q-item-section>
      </q-item>

      <q-separator />

      <q-item>
        <q-item-section class="flex items-end text-bold">
          <q-item-label>
            Base imponible: {{ baseImponible }}€
          </q-item-label>
          <div
            v-for="i in iva"
            :key="i.nombre"
          >
            <q-item-label v-if="i.acumulado != 0">
              IVA {{ i.nombre }}: {{ i.acumulado }}€
            </q-item-label>
          </div>
          <q-item-label class="text-h6">
            Total: {{ total }}€
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
    <q-btn
      @click="cerrarMesa()"
      color="white"
      text-color="black"
      class="full-width q-mt-sm"
      label="Cerrar mesa"
      padding="md"
    />

    <q-footer
      elevated
      class="bg-secondary text-black"
    >
      <q-tabs align="center">
        <q-route-tab
          to="/"
          icon="home"
        />
        <q-route-tab
          :to="{ name: 'mesa', params: { id: id.toString() } }"
          label="Volver a mesa"
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
  name: 'Cuenta',
  props: {
    id: String
  },
  data () {
    return {
      mesa: null,
      rest: null,
      baseImponible: 0,
      iva: [],
      total: 0
    };
  },
  created () {
    this.mesa = Rest.$restLocal.getMesas()[parseInt(this.id) - 1];
    this.rest = Rest.$restLocal;

    // Objeto para los ivas acumulados
    this.rest.impuestos.forEach(impuesto => {
      let nuevoIva = Object();
      nuevoIva.id = impuesto.id;
      nuevoIva.nombre = impuesto.nombre;
      nuevoIva.cantidad = impuesto.cantidad;
      nuevoIva.acumulado = 0;
      this.iva.push(nuevoIva);
    });

    this.mesa.lineasPedido.forEach(linea => {
      // Cálculo de la base imponible
      this.baseImponible += Math.round((linea.producto.precio * linea.cantidad) * 100) / 100;

      // Cálculo de cada tipo de iva
      this.iva.forEach(i => {
        if (i.id === linea.producto.iva.id) {
          // Redondea a 2 decimales y suma el valor del iva
          i.acumulado += Math.round((((linea.producto.precio * linea.producto.iva.cantidad) / 100) * linea.cantidad) * 100) / 100;
        }
      });
    });

    // Cálculo del total
    this.iva.forEach(i => {
      this.total += i.acumulado;
    });
    this.total += this.baseImponible;
    this.total = Math.round(this.total * 100) / 100;
  },
  methods: {
    cerrarMesa () {
      // Introducción de la mesa en historicos, borrado de mesa actual y guardado
      this.rest.historico.push(this.mesa);
      this.rest.mesas[this.id - 1] = null;
      FA.guardarEstadoLocalStorage();

      this.$router.push({ name: 'index' })
    }
  }
}
</script>
