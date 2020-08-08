<template>
  <q-page class="q-pa-md">
    <h5 class="text-h5 q-my-sm">Configuración productos</h5>
    <q-list
      dense
      separator
    >
      <div
        v-for="cat in rest.categorias"
        :key="cat.id"
      >
        <q-separator class="q-mt-md" />
        <q-item-label
          header
          class="text-h5"
        >{{ cat.nombre }}</q-item-label>
        <q-item>
          <q-item-section class="col text-bold">Nombre</q-item-section>
          <q-item-section class="col-2 text-bold">Precio</q-item-section>
          <q-item-section class="col text-bold">Impuesto</q-item-section>
        </q-item>
        <div
          v-for="prod in rest.productos"
          :key="prod.id"
          @click="modificarProducto(prod)"
        >
          <q-item
            dense
            clickable
            v-if="cat.id == prod.categoria.id"
          >
            <q-item-section class="col">{{ prod.nombre }}</q-item-section>
            <q-item-section class="col-2">{{ prod.precio }}€</q-item-section>
            <q-item-section class="col">{{ prod.iva.nombre }} ({{prod.iva.cantidad}}%)</q-item-section>
          </q-item>
        </div>
      </div>
    </q-list>
    <q-btn
      class="full-width q-mt-md"
      label="Añadir producto"
      @click="anadirProducto"
    />

    <q-dialog
      v-model="modifica"
      full-width
    >
      <q-card v-if="modifica">
        <q-card-section class="row items-center q-pb-none">
          <div
            v-if="productoModifica.id != rest.idProducto"
            class="text-h6"
          >Modificar producto</div>
          <div
            v-else
            class="text-h6"
          >Añadir producto</div>
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
            v-model="productoModifica.nombre"
            label="Nombre"
            class="q-mt-md"
          />
          <q-input
            label="Precio"
            v-model="productoModifica.precio"
            :rules="[ val => !isNaN(val) || 'Introduce un precio válido']"
          />
          <q-select
            label="Categoria"
            :options="optionsCategoria"
            v-model="productoModifica.categoria"
            option-label="nombre"
          />
          <q-select
            label="Impuesto"
            :options="optionsImpuesto"
            v-model="productoModifica.iva"
            option-label="nombre"
          />
          <q-btn
            class="full-width q-mt-md"
            label="Guardar"
            @click="guardarProducto"
          />
          <q-btn
            v-if="productoModifica.id != rest.idProducto"
            class="col full-width q-mt-xs"
            label="Eliminar"
            color="red"
            icon="delete"
            @click="eliminarProducto"
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
  name: 'ConfiguraProductos',
  props: {
  },
  data () {
    return {
      rest: null,
      modifica: false,
      productoModifica: null,
      optionsImpuesto: [],
      optionsCategoria: []
    };
  },
  created () {
    this.rest = Rest.$restLocal;
    this.rest.impuestos.forEach(impuesto => {
      this.optionsImpuesto.push(impuesto)
    });
    this.rest.categorias.forEach(categoria => {
      this.optionsCategoria.push(categoria)
    });
  },
  methods: {
    modificarProducto (prod) {
      this.modifica = true;
      this.productoModifica = new Producto(prod.id, prod.nombre, prod.categoria, prod.precio, prod.iva);
    },
    guardarProducto () {
      // Comprobación precio válido
      if (isNaN(this.productoModifica.precio)) {
        this.$q.notify({
          type: "negative",
          message: "Precio inválido"
        });
      } else if (this.productoModifica.nombre == '' ||
        this.productoModifica.categoria == '' ||
        this.productoModifica.iva == '' ||
        this.productoModifica.precio == '') {
        // Comprobación campos en blanco
        this.$q.notify({
          type: "negative",
          message: "No pueden haber campos en blanco"
        });
      } else if (this.rest.idProducto != this.productoModifica.id) {
        // Se modifica un producto existente si no tiene el mismo id que el futuro producto
        this.rest.productos.forEach(producto => {
          if (producto.id === this.productoModifica.id) {
            producto.nombre = this.productoModifica.nombre;
            producto.categoria = this.productoModifica.categoria;
            producto.precio = Math.round(this.productoModifica.precio * 100) / 100;
            producto.iva = this.productoModifica.iva;
          }
        });
        this.modifica = false;
      } else {
        // Si tiene el mismo id, es un producto nuevo
        let producto = new Producto(this.productoModifica.id, this.productoModifica.nombre, this.productoModifica.categoria, this.productoModifica.precio, this.productoModifica.iva);
        this.rest.idProducto++;
        this.rest.productos.push(producto);
        this.modifica = false;
      }
      FA.guardarEstadoLocalStorage();
    },
    eliminarProducto () {
      let productoUsado = false;
      let ejemploMesa;

      // Comprobación si el producto está siendo usado
      this.rest.mesas.forEach(mesa => {
        if (mesa !== null) {
          mesa.lineasPedido.forEach(linea => {
            if (linea.producto.id === this.productoModifica.id) {
              ejemploMesa = mesa.id;
              productoUsado = true;
            }
          });
        }
      });

      // Se elimina el producto si no está siendo usado
      if (!productoUsado) {
        let posicion;
        // Busca en que posición está el producto y la almacena
        for (let index = 0; index < this.rest.productos.length; index++) {
          if (this.rest.productos[index].id === this.productoModifica.id) {
            posicion = index;
          }
        }

        this.rest.productos.splice(posicion, 1);
        this.modifica = false;
      } else {
        this.$q.notify({
          type: "negative",
          message: "No se puede eliminar el producto porque hay mesas que" +
            "lo tienen asignado. Quita el producto a esas mesas. Ej. " + ejemploMesa
        });
      }
      FA.guardarEstadoLocalStorage();
    },
    anadirProducto () {
      this.modifica = true;
      this.productoModifica = new Producto(this.rest.idProducto, '', '', '', '');
    }
  }
}
</script>
