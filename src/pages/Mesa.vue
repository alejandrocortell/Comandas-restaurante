<template>
  <q-page class="q-pa-md">
    <h3 class="text-h3 q-my-sm">Mesa {{ id }}</h3>

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
        @click="modificarProducto(linea)"
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

    <q-dialog
      v-model="modifica"
      full-width
    >
      <q-card v-if="modifica">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">{{ productoModifica.producto.nombre }}</div>
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
            label="Cantidad"
            v-model="productoModifica.cantidad"
            mask="#####"
          />
          <div class="row q-py-sm">
            <q-btn
              class="col full-width"
              icon="remove"
              @click="restaProducto"
            />
            <q-btn
              class="col full-width"
              icon="add"
              @click="sumaProducto"
            />
          </div>
          <q-input
            v-model="productoModifica.nota"
            label="Notas"
            class="q-mt-md"
          />
          <q-separator />
          <q-btn
            class="col full-width q-mt-md"
            label="Eliminar producto"
            color="red"
            icon="delete"
            @click="eliminaProducto"
          />
          <q-btn
            class="col full-width q-mt-sm"
            label="Guardar"
            color="green"
            icon="save"
            @click="actualizaProducto"
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
          to="/"
          label="Restaurante"
        />
        <q-route-tab
          :to="{ name: 'addProducto', params: {id: id } }"
          label="Añadir producto"
        />
        <q-route-tab
          :to="{ name: 'cuenta', params: {id: id } }"
          label="Cuenta"
          v-if="mesa.lineasPedido.length != 0"
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
  name: 'PageMesa',
  props: {
    id: String
  },
  data () {
    return {
      mesa: null,
      rest: null,
      modifica: false,
      productoModifica: null
    };
  },
  created () {
    //Creación de la mesa si etá vacia
    if (Rest.$restLocal.getMesas()[parseInt(this.id) - 1] === null) {
      let mesa = new Mesa(Rest.$restLocal.getIdMesa());
      Rest.$restLocal.aumentarIdMesa();
      Rest.$restLocal.anadirMesa(parseInt(this.id) - 1, mesa);
    }

    this.mesa = Rest.$restLocal.getMesas()[parseInt(this.id) - 1];
    this.rest = Rest.$restLocal;
  },
  methods: {
    calculaPrecioIva (producto) {
      return FA.calculaPrecioIva(producto);
    },
    modificarProducto (linea) {
      this.modifica = true;
      let nuevaLinea = new LineaPedido(linea.cantidad, linea.producto)
      if (linea.nota != null) {
        nuevaLinea.nota = linea.nota;
      }
      this.productoModifica = nuevaLinea;
    },
    sumaProducto () {
      this.productoModifica.cantidad++;
    },
    restaProducto () {
      if (this.productoModifica.cantidad > 1) {
        this.productoModifica.cantidad--;
      }
    },
    actualizaProducto () {
      // Busca el producto con la coincidencia del nombre
      this.mesa.lineasPedido.forEach(linea => {
        if (linea.producto.id === this.productoModifica.producto.id) {
          // Sustituye los datos de la línea de producto por los que hay a modificar
          linea.cantidad = parseInt(this.productoModifica.cantidad);
          linea.producto = this.productoModifica.producto;
          linea.nota = this.productoModifica.nota;

          this.modifica = false;
        }
      });
    },
    eliminaProducto () {
      let posicion;
      // Busca en que posición está la línea y la almacena
      for (let index = 0; index < this.mesa.lineasPedido.length; index++) {
        if (this.mesa.lineasPedido[index].producto.id === this.productoModifica.producto.id) {
          posicion = index;
        }
      }

      this.mesa.lineasPedido.splice(posicion, 1);
      this.modifica = false;
    }
  }
}
</script>
