# Comandas restaurante (VueJs - Quasar Framework)

Aplicación para tomar comandas en un restaurante
[Enlace a la aplicación](https://alejandrocortell.github.io/Comandas-restaurante/#/bienvenida)

La aplicación incluye:
---------------
* Configuración inicial, donde te ayuda a rellenar los datos necesarios para el funcionamiento de la aplicación
  * Nombre y número de mesas
  * Categorías de los productos
  * Impuestos de los productos
  * Introducción de los productos, asignandoles precio sin impuestos y asignandole una categoría y un impuesto
* Página general del restaurante, con vista de las mesas
* Página de mesa
* Se visualizan los productos pedidos por la mesa, la cantidad, el precio con iva y si tiene alguna nota
    * Se accede a la página para añadir productos a la mesa, ordenados por categorías
    * Página de cuenta de la mesa, viendo el precio sin impuestos y desglosando al final los impuestos agrupados, el precio sin impuestos y el total.
* Desde la página principal existe un acceso directo a la configuración del restaurante
  * Modificación del nombre del restaurante y el número de mesas
  * Permite modificar, añadir o eliminar categorias, impuestos y productos. Existe un control para evitar borrar impuestos o categorías si está asignado a un producto. Muestra el producto que tiene ese impuesto o categoría

## Install the dependencies
```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Lint the files
```bash
npm run lint
```

### Build the app for production
```bash
quasar build
```