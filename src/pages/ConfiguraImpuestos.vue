<template>
  <q-page class="q-pa-md">
    <h5 class="text-h5 q-my-sm">Configuración impuestos</h5>
    <q-list
      dense
      separator
    >
      <q-item>
        <q-item-section class="col-9 text-bold">Nombre</q-item-section>
        <q-item-section class="col-3 text-bold text-center">Cantidad</q-item-section>
      </q-item>
      <q-item
        clickable
        v-for="iva in rest.impuestos"
        :key="iva.id"
        @click="modificarImpuesto(iva)"
      >
        <q-item-section class="col-9">{{ iva.nombre }}</q-item-section>
        <q-item-section class="col-3 text-center">{{ iva.cantidad }}%</q-item-section>
      </q-item>
    </q-list>
    <q-btn
      class="full-width q-mt-md"
      label="Añadir impuesto"
      @click="anadirImpuesto"
    />

    <q-dialog
      v-model="modifica"
      full-width
    >
      <q-card v-if="modifica">
        <q-card-section class="row items-center q-pb-none">
          <div
            v-if="impuestoModifica.id != rest.idImpuesto"
            class="text-h6"
          >Modificar impuesto</div>
          <div
            v-else
            class="text-h6"
          >Añadir impuesto</div>
          <q-space />
          <q-btn
            icon="close"
            flat
            round
            dense
            v-close-popup
          />
        </q-card-section>

        <q-card-section>
          <q-input
            v-model="impuestoModifica.nombre"
            label="Nombre"
            class="q-mt-md"
          />
          <q-input
            label="Cantidad"
            v-model="impuestoModifica.cantidad"
            mask="##"
          />
          <q-btn
            class="full-width q-mt-md"
            label="Guardar"
            @click="guardarImpuesto"
          />
          <q-btn
            v-if="impuestoModifica.id != rest.idImpuesto"
            class="col full-width q-mt-xs"
            label="Eliminar"
            color="red"
            icon="delete"
            @click="eliminarImpuesto"
          />
        </q-card-section>
      </q-card>
    </q-dialog>

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
  name: 'ConfiguraImpuestos',
  props: {
  },
  data () {
    return {
      rest: null,
      modifica: false,
      impuestoModifica: null
    };
  },
  created () {
    this.rest = Rest.$restLocal;
  },
  methods: {
    modificarImpuesto (iva) {
      this.modifica = true;
      this.impuestoModifica = new Iva(iva.id, iva.nombre, iva.cantidad);
    },
    guardarImpuesto () {
      // Se modifica un impuesto existente si no tiene el mismo id que el futuro impuesto
      if (this.rest.idImpuesto != this.impuestoModifica.id) {
        this.rest.impuestos.forEach(impuesto => {
          if (impuesto.id === this.impuestoModifica.id) {
            impuesto.nombre = this.impuestoModifica.nombre;
            impuesto.cantidad = this.impuestoModifica.cantidad;
          }
        });
      } else {
        // Si tiene el mismo id, es un impuesto nuevo
        let impuesto = new Iva(this.impuestoModifica.id, this.impuestoModifica.nombre, this.impuestoModifica.cantidad)
        this.rest.idImpuesto++;
        this.rest.impuestos.push(impuesto);
      }

      this.modifica = false;
      FA.guardarEstadoLocalStorage();
    },
    eliminarImpuesto () {
      let productoUsado = false;
      let ejemploProducto;

      // Comprobación si el impuesto está siendo usado
      this.rest.productos.forEach(producto => {
        if (producto.iva.id === this.impuestoModifica.id) {
          ejemploProducto = producto.nombre;
          productoUsado = true;
        }
      });

      // Se elimina el impuesto si no está siendo usado
      if (!productoUsado) {
        let posicion;
        // Busca en que posición está el impuesto y la almacena
        for (let index = 0; index < this.rest.impuestos.length; index++) {
          if (this.rest.impuestos[index].id === this.impuestoModifica.id) {
            posicion = index;
          }
        }

        this.rest.impuestos.splice(posicion, 1);
        this.modifica = false;
      } else {
        this.$q.notify({
          type: "negative",
          message: "No se puede eliminar el impuesto porque hay productos que" +
            "lo tienen asignado. Quita el impuesto a esos productos. Ej. " + ejemploProducto
        });
      }
      FA.guardarEstadoLocalStorage();
    },
    anadirImpuesto () {
      this.modifica = true;
      this.impuestoModifica = new Iva(this.rest.idImpuesto, '', '');
    }
  }
}
</script>
