<template>
  <q-page class="q-pa-md">
    <h5 class="text-h5 q-my-sm">Configuración inicial</h5>
    <q-stepper v-model="step" vertical color="primary" animated>
      <q-step :name="1" title="Primeros pasos" icon="settings" :done="step > 1">
        ¡Bienvenido! Vamos a empezar a configurar tu restaurante, más adelante
        podrás añadir, modificar o eliminar los aspectos que establezcas aquí.

        <q-stepper-navigation>
          <q-btn @click="step = 2" color="primary" label="Siguiente" />
          <q-btn
            @click="cargarPrueba"
            color="primary"
            label="Cargar datos de prueba"
            class="q-ml-sm"/>
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        title="Nombre y número de mesas"
        icon="create_new_folder"
        :done="step > 2"
      >
        <p>
          Introduce el nombre de tu restaurante y el número de mesas que
          dispones
        </p>
        <q-input
          label="Nombre restaurante"
          v-model="nombreRestaurante"
          label-color="accent"
        />
        <q-input
          label="Número de mesas"
          v-model="nMesas"
          mask="####"
          label-color="accent"
        />

        <q-stepper-navigation>
          <q-btn @click="step = 3" color="primary" label="Continuar" />
          <q-btn
            flat
            @click="step = 1"
            color="primary"
            label="Volver"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="3" title="Categorias" icon="assignment" :done="step > 2">
        <p>
          Introduce las categorías que tendrás en tu restaurante. Es una forma
          de organizar los productos. Ej. Entrantes, Carnes, Refrescos, Vinos,
          etc.
        </p>
        <q-list dense separator class="q-mt-md">
          <q-item v-for="(cat, index) in categorias" :key="index">
            <q-item-section>{{ cat }}</q-item-section>
            <q-item-section avatar>
              <q-btn
                round
                dense
                flat
                icon="delete_outline"
                @click="borrarCategoria(cat)"
              />
            </q-item-section>
          </q-item>
        </q-list>
        <q-input
          v-model="nuevaCategoria"
          label="categoria"
          label-color="accent"
        >
          <template v-slot:append>
            <q-btn
              round
              dense
              flat
              icon="add_circle_outline"
              @click="anadirCategoria"
            />
          </template>
        </q-input>

        <q-stepper-navigation>
          <q-btn @click="step = 4" color="primary" label="Continuar" />
          <q-btn
            flat
            @click="step = 2"
            color="primary"
            label="Volver"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="4" title="Impuestos" icon="add_comment" :done="step > 3">
        <p>
          Añade los tipos de impuestos que luego asiganrás a los productos. Ej.
          IVA reducido, IVA normal, etc.
        </p>
        <q-list dense separator class="q-mt-md">
          <q-item v-for="(iva, index) in impuestos" :key="index">
            <q-item-section
              >{{ iva.nombre }} - {{ iva.cantidad }}%</q-item-section
            >
            <q-item-section avatar>
              <q-btn
                round
                dense
                flat
                icon="delete_outline"
                @click="borrarImpuesto(iva)"
              />
            </q-item-section>
          </q-item>
        </q-list>
        <div class="row">
          <q-input
            v-model="nuevoIva.nombre"
            label="Nombre"
            dense
            class="col-8"
            label-color="accent"
          />
          <q-input
            label="Cantidad"
            dense
            class="col-3 q-ml-md"
            v-model="nuevoIva.cantidad"
            mask="##"
            suffix="%"
            label-color="accent"
          />
        </div>
        <q-btn
          dense
          class="full-width q-mt-md"
          label="Añadir impuesto"
          @click="anadirImpuesto"
        />
        <q-stepper-navigation>
          <q-btn @click="step = 5" color="primary" label="Continuar" />
          <q-btn
            flat
            @click="step = 3"
            color="primary"
            label="Volver"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="5"
        title="Productos"
        icon="create_new_folder"
        :done="step > 4"
      >
        <p>
          Añade los productos disponibles y asignales una categoría y un
          impuesto de los que has creado previamente. Más adelante podrás seguir
          introduciendo productos.
        </p>
        <q-list dense separator class="q-mt-md">
          <q-item v-for="(prod, index) in productos" :key="index">
            <q-item-section>{{ prod.nombre }}</q-item-section>
            <q-item-section>{{ prod.precio }}€</q-item-section>
            <q-item-section avatar>
              <q-btn
                round
                dense
                flat
                icon="delete_outline"
                @click="borrarProducto(prod)"
              />
            </q-item-section>
          </q-item>
        </q-list>
        <q-input
          dense
          v-model="nuevoProducto.nombre"
          label="Nombre"
          label-color="accent"
        />
        <q-input
          dense
          v-model="nuevoProducto.precio"
          label="Precio sin impuestos"
          :rules="[val => !isNaN(val) || 'Introduce un precio válido']"
          label-color="accent"
        />
        <q-select
          dense
          label="Categoria"
          :options="categorias"
          v-model="nuevoProducto.categoria"
          label-color="accent"
        />
        <q-select
          dense
          label="Impuesto"
          :options="impuestos"
          option-label="nombre"
          v-model="nuevoProducto.iva"
          label-color="accent"
        />
        <q-btn
          dense
          class="full-width q-mt-md"
          label="Añadir producto"
          @click="anadirProducto"
        />

        <q-stepper-navigation>
          <q-btn @click="finConfiguracion" color="primary" label="Finalizar" />
          <q-btn
            flat
            @click="step = 4"
            color="primary"
            label="Volver"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </q-page>
</template>

<script>
import FA from '../class/FuncionesAuxiliares.js'
import Categoria from '../class/Categoria.js'
import Iva from '../class/Iva.js'
import Producto from '../class/Producto.js'
import Restaurante from '../class/Restaurante.js'

export default {
  name: 'ConfiguracionInicial',
  props: {},
  data () {
    return {
      rest: null,
      step: 1,
      nombreRestaurante: '',
      nMesas: '',
      nuevaCategoria: '',
      categorias: [],
      nuevoIva: {
        nombre: '',
        cantidad: ''
      },
      impuestos: [],
      nuevoProducto: {
        nombre: '',
        precio: '',
        iva: '',
        categoria: ''
      },
      productos: []
    }
  },
  created () {},
  methods: {
    cargarPrueba () {
      FA.datosPrueba()
      FA.guardarEstadoLocalStorage()
      this.$emit('modifica-restaurante', Restaurante.$restLocal)
      this.$router.push({ name: 'index' })
    },
    anadirCategoria () {
      if (this.nuevaCategoria !== '') {
        this.categorias.push(this.nuevaCategoria)
        this.nuevaCategoria = ''
      }
    },
    borrarCategoria (cat) {
      this.categorias.splice(this.categorias.indexOf(cat), 1)
    },
    anadirImpuesto () {
      if (this.nuevoIva.nombre !== '' && this.nuevoIva.cantidad !== '') {
        const nuevoImpuesto = {}
        nuevoImpuesto.nombre = this.nuevoIva.nombre
        nuevoImpuesto.cantidad = parseInt(this.nuevoIva.cantidad)
        this.impuestos.push(nuevoImpuesto)

        this.nuevoIva.nombre = ''
        this.nuevoIva.cantidad = ''
      }
    },
    borrarImpuesto (iva) {
      this.impuestos.splice(this.impuestos.indexOf(iva), 1)
    },
    anadirProducto () {
      if (
        this.nuevoProducto.nombre !== '' &&
        this.nuevoProducto.precio !== '' &&
        this.nuevoProducto.iva !== '' &&
        this.nuevoProducto.categoria !== ''
      ) {
        // Para guardar el producto, de momento solo almacenamos el nombre de cat e iva
        const nuevoProducto = {}
        nuevoProducto.nombre = this.nuevoProducto.nombre
        nuevoProducto.precio = parseInt(this.nuevoProducto.precio)
        nuevoProducto.iva = this.nuevoProducto.iva
        nuevoProducto.categoria = this.nuevoProducto.categoria
        this.productos.push(nuevoProducto)

        this.nuevoProducto.nombre = ''
        this.nuevoProducto.precio = ''
        this.nuevoProducto.iva = ''
        this.nuevoProducto.categoria = ''
      }
    },
    borrarProducto (prod) {
      this.productos.splice(this.productos.indexOf(prod), 1)
    },
    // Se crea el restuaurante con todos los datos almacenados en data
    finConfiguracion () {
      Restaurante.$restLocal = new Restaurante(
        this.nombreRestaurante,
        parseInt(this.nMesas)
      )

      this.categorias.forEach(categoria => {
        const cat = new Categoria(
          Restaurante.$restLocal.getIdCategoria(),
          categoria
        )
        Restaurante.$restLocal.anadirCategoria(cat)
        Restaurante.$restLocal.aumentarIdCategoria()
      })

      this.impuestos.forEach(impuesto => {
        const iva = new Iva(
          Restaurante.$restLocal.getIdImpuesto(),
          impuesto.nombre,
          impuesto.cantidad
        )
        Restaurante.$restLocal.anadirImpuesto(iva)
        Restaurante.$restLocal.aumentarIdImpuesto()
      })

      this.productos.forEach(producto => {
        let categoria
        let impuesto

        // Se almacena el objeto Categoria e Iva para introducir ese objeto en el objeto producto
        Restaurante.$restLocal.getCategorias().forEach(cat => {
          if (producto.categoria === cat.nombre) {
            categoria = cat
          }
        })

        Restaurante.$restLocal.getImpuestos().forEach(iva => {
          if (producto.iva.nombre === iva.nombre) {
            impuesto = iva
          }
        })

        const prod = new Producto(
          Restaurante.$restLocal.getIdProducto(),
          producto.nombre,
          categoria,
          producto.precio,
          impuesto
        )
        Restaurante.$restLocal.anadirProducto(prod)
        Restaurante.$restLocal.aumentarIdProducto()
      })
      FA.guardarEstadoLocalStorage()
      this.$emit('modifica-restaurante', Restaurante.$restLocal)
      this.$router.push({ name: 'index' })
    }
  }
}
</script>
