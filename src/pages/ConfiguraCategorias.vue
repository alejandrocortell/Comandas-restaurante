<template>
  <q-page class="q-pa-md">
    <h5 class="text-h5 q-my-sm">Configuración categorías</h5>
    <q-list
      dense
      separator
    >
      <q-item>
        <q-item-section class="col-9 text-bold">Nombre</q-item-section>
      </q-item>
      <q-item
        clickable
        v-for="cat in rest.categorias"
        :key="cat.id"
        @click="modificarCategoria(cat)"
      >
        <q-item-section class="col-9">{{ cat.nombre }}</q-item-section>
      </q-item>
    </q-list>
    <q-btn
      class="full-width q-mt-md"
      label="Añadir categoría"
      @click="anadirCategoria"
    />

    <q-dialog
      v-model="modifica"
      full-width
    >
      <q-card v-if="modifica">
        <q-card-section class="row items-center q-pb-none">
          <div
            v-if="categoriaModifica.id != rest.idcategoria"
            class="text-h6"
          >Modificar categoria</div>
          <div
            v-else
            class="text-h6"
          >Añadir categoria</div>
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
            v-model="categoriaModifica.nombre"
            label="Nombre"
            class="q-mt-md"
          />
          <q-btn
            class="full-width q-mt-md"
            label="Guardar"
            @click="guardarCategoria"
          />
          <q-btn
            v-if="categoriaModifica.id != rest.idCategoria"
            class="col full-width q-mt-xs"
            label="Eliminar"
            color="red"
            icon="delete"
            @click="eliminarCategoria"
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
  name: 'ConfiguraCategorias',
  props: {
  },
  data () {
    return {
      rest: null,
      modifica: false,
      categoriaModifica: null
    };
  },
  created () {
    this.rest = Rest.$restLocal;
  },
  methods: {
    modificarCategoria (cat) {
      this.modifica = true;
      this.categoriaModifica = new Categoria(cat.id, cat.nombre);
    },
    guardarCategoria () {
      // Se modifica una categoria existente si no tiene el mismo id que la futura categoria
      if (this.rest.idCategoria != this.categoriaModifica.id) {
        this.rest.categorias.forEach(cat => {
          if (cat.id === this.categoriaModifica.id) {
            cat.nombre = this.categoriaModifica.nombre;
          }
        });
      } else {
        // Si tiene el mismo id, es una categoria nuevo
        let categoria = new Categoria(this.categoriaModifica.id, this.categoriaModifica.nombre)
        this.rest.idCategoria++;
        this.rest.categorias.push(categoria);
      }

      this.modifica = false;
    },
    eliminarCategoria () {
      let productoUsado = false;
      let ejemploProducto;

      // Comprobación si la categoría está siendo usado
      this.rest.productos.forEach(producto => {
        if (producto.categoria.id === this.categoriaModifica.id) {
          ejemploProducto = producto.nombre;
          productoUsado = true;
        }
      });

      // Se elimina la categoría si no está siendo usado
      if (!productoUsado) {
        let posicion;
        // Busca en que posición está la categoría y la almacena
        for (let index = 0; index < this.rest.categorias.length; index++) {
          if (this.rest.categorias[index].id === this.categoriaModifica.id) {
            posicion = index;
          }
        }

        this.rest.categorias.splice(posicion, 1);
        this.modifica = false;
      } else {
        this.$q.notify({
          type: "negative",
          message: "No se puede eliminar la categoría porque hay productos que" +
            "lo tienen asignado. Quita la categoría a esos productos. Ej. " + ejemploProducto
        });
      }
    },
    anadirCategoria () {
      this.modifica = true;
      this.categoriaModifica = new Categoria(this.rest.idCategoria, '', '');
    }
  }
}
</script>
