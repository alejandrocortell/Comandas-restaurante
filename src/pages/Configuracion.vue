<template>
  <q-page class="q-pa-md">
    <h3 class="text-h3 q-my-sm">Configuración</h3>
    <div class="flex">
      <q-input
        label="Nombre restaurante"
        v-model="modificaNombre"
        class="col"
      />
      <q-btn
        class="col-4 q-mt-md q-ml-md"
        round
        icon="save"
        @click="modificarNombre"
      />
    </div>
    <div class="flex">
      <q-input
        label="Número de mesas"
        v-model="nMesas"
        mask="####"
        class="col"
      />
      <q-btn
        class="col-4 q-mt-md q-ml-md"
        round
        icon="save"
        @click="modificarMesas"
      />
    </div>
    <q-btn
      class="col full-width q-mt-md"
      label="Impuestos"
      to="configuracion/impuestos"
    />
    <q-btn
      class="col full-width q-mt-md"
      label="Categorías de producto"
      to="configuracion/categorias"
    />
    <q-btn
      class="col full-width q-mt-md"
      label="Productos"
      to="configuracion/productos"
    />
    <q-footer
      elevated
      class="bg-grey-8 text-white"
    >
      <q-tabs align="center">
        <q-route-tab
          to="/"
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
  name: 'Configuracion',
  props: {
  },
  data () {
    return {
      rest: null,
      modificaNombre: null,
      nMesas: null
    };
  },
  created () {
    this.rest = Rest.$restLocal;
    this.modificaNombre = this.rest.nombre;
    this.nMesas = this.rest.mesas.length;
  },
  methods: {
    modificarNombre () {
      this.rest.nombre = this.modificaNombre;
      this.$emit('modifica-restaurante', this.rest)
    },
    modificarMesas () {
      let dif = this.nMesas - this.rest.mesas.length;
      // Si la diferencia es positiva, se añade una mesa en null
      if (dif > 0) {
        for (let index = 0; index < dif; index++) {
          this.rest.mesas.push(null);
        }
      } else {
        // Si la diferencia es negativa, se busca si hay una mesa en null
        let mesaNull = 0;

        this.rest.mesas.forEach(mesa => {
          if (mesa == null) {
            mesaNull++;
          }
        });

        // Se eliminan las mesas si las que hay null son igual o
        // superior a las que quieres eliminar
        if (mesaNull >= Math.abs(dif)) {
          for (let index = 0; index < Math.abs(dif); index++) {
            // Buscamos el elemento null para eliminarlo tantas veces como indiquemos
            let i = this.rest.mesas.indexOf(null);
            if (i !== -1) {
              this.rest.mesas.splice(i, 1);
            }
          }
        } else {
          this.$q.notify({
            type: "negative",
            message: "No se pueden eliminar mesas sin cerrar"
          });
        }
      }
      FA.guardarEstadoLocalStorage();
    }
  }
}
</script>
