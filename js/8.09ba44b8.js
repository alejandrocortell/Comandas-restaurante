(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"0f9e":function(t,a,e){"use strict";class o{constructor(t,a,e){this.id=t,this.nombre=a,this.cantidad=e}getId(){return this.id}getNombre(){return this.nombre}getCantidad(){return this.cantidad}setNombre(t){this.nombre=t}setCantidad(t){this.cantidad=t}}a["a"]=o},"70f3":function(t,a,e){"use strict";var o=e("9a5b"),r=e("8203"),s=e("0f9e"),n=e("9254"),i=e("f5d1"),c=e("d2a5");class d{static guardarEstadoLocalStorage(){localStorage.setItem("restauranteLocal",JSON.stringify(c["a"].$restLocal))}static restaurarEstadoLocalStorage(){if(localStorage.restauranteLocal){const a=JSON.parse(localStorage.getItem("restauranteLocal"));function t(t,a,e){const d=new r["a"](c["a"].$restLocal.getIdMesa());null!==t&&(c["a"].$restLocal.aumentarIdMesa(),t.lineasPedido.forEach(t=>{const a=new s["a"](t.producto.iva.id,t.producto.iva.nombre,t.producto.iva.cantidad),e=new o["a"](t.producto.categoria.id,t.producto.categoria.nombre),r=new i["a"](t.producto.id,t.producto.nombre,e,t.producto.precio,a),c=new n["a"](parseInt(t.cantidad),r);null!=t.nota&&c.setNota(t.nota),d.anadirLinea(c)}),c["a"].$restLocal.anadirMesa(a,d))}return c["a"].$restLocal=new c["a"](a.nombre,a.mesas.length),a.categorias.forEach(t=>{const a=new o["a"](c["a"].$restLocal.getIdCategoria(),t.nombre);c["a"].$restLocal.anadirCategoria(a),c["a"].$restLocal.aumentarIdCategoria()}),a.impuestos.forEach(t=>{const a=new s["a"](c["a"].$restLocal.getIdImpuesto(),t.nombre,t.cantidad);c["a"].$restLocal.anadirImpuesto(a),c["a"].$restLocal.aumentarIdImpuesto()}),a.productos.forEach(t=>{const a=new i["a"](c["a"].$restLocal.getIdProducto(),t.nombre,t.categoria,t.precio,t.iva);c["a"].$restLocal.anadirProducto(a),c["a"].$restLocal.aumentarIdProducto()}),a.mesas.forEach(t),a.historico.forEach(t=>{const a=new r["a"](t.id);t.lineasPedido.forEach(t=>{const e=new s["a"](t.producto.iva.id,t.producto.iva.nombre,t.producto.iva.cantidad),r=new o["a"](t.producto.categoria.id,t.producto.categoria.nombre),c=new i["a"](t.producto.id,t.producto.nombre,r,t.producto.precio,e),d=new n["a"](parseInt(t.cantidad),c);a.anadirLinea(d)}),c["a"].$restLocal.anadirHistorico(a)}),!0}return!1}static calculaPrecioIva(t){const a=parseFloat(t.precio)*parseFloat(t.iva.cantidad)/100+parseFloat(t.precio);return Math.round(100*a)/100}static datosPrueba(){c["a"].$restLocal=new c["a"]("Casa Pepe",10);const t=new s["a"](c["a"].$restLocal.getIdImpuesto(),"reducido",10);c["a"].$restLocal.anadirImpuesto(t),c["a"].$restLocal.aumentarIdImpuesto();const a=new s["a"](c["a"].$restLocal.getIdImpuesto(),"normal",21);c["a"].$restLocal.anadirImpuesto(a),c["a"].$restLocal.aumentarIdImpuesto();const e=new s["a"](c["a"].$restLocal.getIdImpuesto(),"super",51);c["a"].$restLocal.anadirImpuesto(e),c["a"].$restLocal.aumentarIdImpuesto();const d=new o["a"](c["a"].$restLocal.getIdCategoria(),"refresco");c["a"].$restLocal.anadirCategoria(d),c["a"].$restLocal.aumentarIdCategoria();const u=new o["a"](c["a"].$restLocal.getIdCategoria(),"alcoholica");c["a"].$restLocal.anadirCategoria(u),c["a"].$restLocal.aumentarIdCategoria();const l=new i["a"](c["a"].$restLocal.getIdProducto(),"Coca-cola",d,1,t);c["a"].$restLocal.anadirProducto(l),c["a"].$restLocal.aumentarIdProducto();const m=new i["a"](c["a"].$restLocal.getIdProducto(),"fanta",d,1.2,t);c["a"].$restLocal.anadirProducto(m),c["a"].$restLocal.aumentarIdProducto();const p=new i["a"](c["a"].$restLocal.getIdProducto(),"Pepsi",d,.8,a);c["a"].$restLocal.anadirProducto(p),c["a"].$restLocal.aumentarIdProducto();const h=new i["a"](c["a"].$restLocal.getIdProducto(),"Vino",u,2,a);c["a"].$restLocal.anadirProducto(h),c["a"].$restLocal.aumentarIdProducto();const g=new r["a"](c["a"].$restLocal.getIdMesa());c["a"].$restLocal.aumentarIdMesa();const b=new n["a"](2,l);b.setNota("Sin hielos");const v=new n["a"](1,h),I=new n["a"](2,m);g.anadirLinea(b),g.anadirLinea(v),g.anadirLinea(I),c["a"].$restLocal.anadirMesa(0,g);const f=new r["a"](c["a"].$restLocal.getIdMesa());c["a"].$restLocal.aumentarIdMesa();const L=new n["a"](5,l),P=new n["a"](5,h),$=new n["a"](5,m);f.anadirLinea(L),f.anadirLinea(P),f.anadirLinea($),c["a"].$restLocal.anadirMesa(1,f)}}a["a"]=d},8203:function(t,a,e){"use strict";class o{constructor(t){this.id=t,this.lineasPedido=new Array}getId(){return this.id}getLineasPedido(){return this.lineasPedido}anadirLinea(t){let a=!1;this.lineasPedido.forEach(e=>{e.getProducto().getId()===t.getProducto().getId()&&(e.setCantidad(parseInt(e.getCantidad())+parseInt(t.getCantidad())),a=!0)}),a||this.lineasPedido.push(t)}}a["a"]=o},9254:function(t,a,e){"use strict";class o{constructor(t,a){this.cantidad=t,this.producto=a,this.nota=null}getCantidad(){return this.cantidad}getProducto(){return this.producto}getNota(){return this.nota}setCantidad(t){this.cantidad=t}setProducto(t){this.producto=t}setNota(t){this.nota=t}}a["a"]=o},"9a5b":function(t,a,e){"use strict";class o{constructor(t,a){this.id=t,this.nombre=a}getId(){return this.id}getNombre(){return this.nombre}setNombre(t){this.nombre=t}}a["a"]=o},a305:function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",{staticClass:"q-pa-md"},[e("h5",{staticClass:"text-h5 q-my-sm"},[t._v("Configuración inicial")]),e("q-stepper",{attrs:{vertical:"",color:"primary",animated:""},model:{value:t.step,callback:function(a){t.step=a},expression:"step"}},[e("q-step",{attrs:{name:1,title:"Primeros pasos",icon:"settings",done:t.step>1}},[t._v("\n      ¡Bienvenido! Vamos a empezar a configurar tu restaurante, más adelante\n      podrás añadir, modificar o eliminar los aspectos que establezcas aquí.\n\n      "),e("q-stepper-navigation",[e("q-btn",{attrs:{color:"primary",label:"Siguiente"},on:{click:function(a){t.step=2}}}),e("q-btn",{staticClass:"q-ml-sm",attrs:{color:"primary",label:"Cargar datos de prueba"},on:{click:t.cargarPrueba}})],1)],1),e("q-step",{attrs:{name:2,title:"Nombre y número de mesas",icon:"create_new_folder",done:t.step>2}},[e("p",[t._v("\n        Introduce el nombre de tu restaurante y el número de mesas que\n        dispones\n      ")]),e("q-input",{attrs:{label:"Nombre restaurante","label-color":"accent"},model:{value:t.nombreRestaurante,callback:function(a){t.nombreRestaurante=a},expression:"nombreRestaurante"}}),e("q-input",{attrs:{label:"Número de mesas",mask:"####","label-color":"accent"},model:{value:t.nMesas,callback:function(a){t.nMesas=a},expression:"nMesas"}}),e("q-stepper-navigation",[e("q-btn",{attrs:{color:"primary",label:"Continuar"},on:{click:function(a){t.step=3}}}),e("q-btn",{staticClass:"q-ml-sm",attrs:{flat:"",color:"primary",label:"Volver"},on:{click:function(a){t.step=1}}})],1)],1),e("q-step",{attrs:{name:3,title:"Categorias",icon:"assignment",done:t.step>2}},[e("p",[t._v("\n        Introduce las categorías que tendrás en tu restaurante. Es una forma\n        de organizar los productos. Ej. Entrantes, Carnes, Refrescos, Vinos,\n        etc.\n      ")]),e("q-list",{staticClass:"q-mt-md",attrs:{dense:"",separator:""}},t._l(t.categorias,(function(a,o){return e("q-item",{key:o},[e("q-item-section",[t._v(t._s(a))]),e("q-item-section",{attrs:{avatar:""}},[e("q-btn",{attrs:{round:"",dense:"",flat:"",icon:"delete_outline"},on:{click:function(e){return t.borrarCategoria(a)}}})],1)],1)})),1),e("q-input",{attrs:{label:"categoria","label-color":"accent"},scopedSlots:t._u([{key:"append",fn:function(){return[e("q-btn",{attrs:{round:"",dense:"",flat:"",icon:"add_circle_outline"},on:{click:t.anadirCategoria}})]},proxy:!0}]),model:{value:t.nuevaCategoria,callback:function(a){t.nuevaCategoria=a},expression:"nuevaCategoria"}}),e("q-stepper-navigation",[e("q-btn",{attrs:{color:"primary",label:"Continuar"},on:{click:function(a){t.step=4}}}),e("q-btn",{staticClass:"q-ml-sm",attrs:{flat:"",color:"primary",label:"Volver"},on:{click:function(a){t.step=2}}})],1)],1),e("q-step",{attrs:{name:4,title:"Impuestos",icon:"add_comment",done:t.step>3}},[e("p",[t._v("\n        Añade los tipos de impuestos que luego asiganrás a los productos. Ej.\n        IVA reducido, IVA normal, etc.\n      ")]),e("q-list",{staticClass:"q-mt-md",attrs:{dense:"",separator:""}},t._l(t.impuestos,(function(a,o){return e("q-item",{key:o},[e("q-item-section",[t._v(t._s(a.nombre)+" - "+t._s(a.cantidad)+"%")]),e("q-item-section",{attrs:{avatar:""}},[e("q-btn",{attrs:{round:"",dense:"",flat:"",icon:"delete_outline"},on:{click:function(e){return t.borrarImpuesto(a)}}})],1)],1)})),1),e("div",{staticClass:"row"},[e("q-input",{staticClass:"col-8",attrs:{label:"Nombre",dense:"","label-color":"accent"},model:{value:t.nuevoIva.nombre,callback:function(a){t.$set(t.nuevoIva,"nombre",a)},expression:"nuevoIva.nombre"}}),e("q-input",{staticClass:"col-3 q-ml-md",attrs:{label:"Cantidad",dense:"",mask:"##",suffix:"%","label-color":"accent"},model:{value:t.nuevoIva.cantidad,callback:function(a){t.$set(t.nuevoIva,"cantidad",a)},expression:"nuevoIva.cantidad"}})],1),e("q-btn",{staticClass:"full-width q-mt-md",attrs:{dense:"",label:"Añadir impuesto"},on:{click:t.anadirImpuesto}}),e("q-stepper-navigation",[e("q-btn",{attrs:{color:"primary",label:"Continuar"},on:{click:function(a){t.step=5}}}),e("q-btn",{staticClass:"q-ml-sm",attrs:{flat:"",color:"primary",label:"Volver"},on:{click:function(a){t.step=3}}})],1)],1),e("q-step",{attrs:{name:5,title:"Productos",icon:"create_new_folder",done:t.step>4}},[e("p",[t._v("\n        Añade los productos disponibles y asignales una categoría y un\n        impuesto de los que has creado previamente. Más adelante podrás seguir\n        introduciendo productos.\n      ")]),e("q-list",{staticClass:"q-mt-md",attrs:{dense:"",separator:""}},t._l(t.productos,(function(a,o){return e("q-item",{key:o},[e("q-item-section",[t._v(t._s(a.nombre))]),e("q-item-section",[t._v(t._s(a.precio)+"€")]),e("q-item-section",{attrs:{avatar:""}},[e("q-btn",{attrs:{round:"",dense:"",flat:"",icon:"delete_outline"},on:{click:function(e){return t.borrarProducto(a)}}})],1)],1)})),1),e("q-input",{attrs:{dense:"",label:"Nombre","label-color":"accent"},model:{value:t.nuevoProducto.nombre,callback:function(a){t.$set(t.nuevoProducto,"nombre",a)},expression:"nuevoProducto.nombre"}}),e("q-input",{attrs:{dense:"",label:"Precio sin impuestos",rules:[function(t){return!isNaN(t)||"Introduce un precio válido"}],"label-color":"accent"},model:{value:t.nuevoProducto.precio,callback:function(a){t.$set(t.nuevoProducto,"precio",a)},expression:"nuevoProducto.precio"}}),e("q-select",{attrs:{dense:"",label:"Categoria",options:t.categorias,"label-color":"accent"},model:{value:t.nuevoProducto.categoria,callback:function(a){t.$set(t.nuevoProducto,"categoria",a)},expression:"nuevoProducto.categoria"}}),e("q-select",{attrs:{dense:"",label:"Impuesto",options:t.impuestos,"option-label":"nombre","label-color":"accent"},model:{value:t.nuevoProducto.iva,callback:function(a){t.$set(t.nuevoProducto,"iva",a)},expression:"nuevoProducto.iva"}}),e("q-btn",{staticClass:"full-width q-mt-md",attrs:{dense:"",label:"Añadir producto"},on:{click:t.anadirProducto}}),e("q-stepper-navigation",[e("q-btn",{attrs:{color:"primary",label:"Finalizar"},on:{click:t.finConfiguracion}}),e("q-btn",{staticClass:"q-ml-sm",attrs:{flat:"",color:"primary",label:"Volver"},on:{click:function(a){t.step=4}}})],1)],1)],1)],1)},r=[],s=(e("c975"),e("a434"),e("70f3")),n=e("9a5b"),i=e("0f9e"),c=e("f5d1"),d=e("d2a5"),u={name:"ConfiguracionInicial",props:{},data(){return{rest:null,step:1,nombreRestaurante:"",nMesas:"",nuevaCategoria:"",categorias:[],nuevoIva:{nombre:"",cantidad:""},impuestos:[],nuevoProducto:{nombre:"",precio:"",iva:"",categoria:""},productos:[]}},created(){},methods:{cargarPrueba(){s["a"].datosPrueba(),s["a"].guardarEstadoLocalStorage(),this.$emit("modifica-restaurante",d["a"].$restLocal),this.$router.push({name:"index"})},anadirCategoria(){""!==this.nuevaCategoria&&(this.categorias.push(this.nuevaCategoria),this.nuevaCategoria="")},borrarCategoria(t){this.categorias.splice(this.categorias.indexOf(t),1)},anadirImpuesto(){if(""!==this.nuevoIva.nombre&&""!==this.nuevoIva.cantidad){const t={};t.nombre=this.nuevoIva.nombre,t.cantidad=parseInt(this.nuevoIva.cantidad),this.impuestos.push(t),this.nuevoIva.nombre="",this.nuevoIva.cantidad=""}},borrarImpuesto(t){this.impuestos.splice(this.impuestos.indexOf(t),1)},anadirProducto(){if(""!==this.nuevoProducto.nombre&&""!==this.nuevoProducto.precio&&""!==this.nuevoProducto.iva&&""!==this.nuevoProducto.categoria){const t={};t.nombre=this.nuevoProducto.nombre,t.precio=parseInt(this.nuevoProducto.precio),t.iva=this.nuevoProducto.iva,t.categoria=this.nuevoProducto.categoria,this.productos.push(t),this.nuevoProducto.nombre="",this.nuevoProducto.precio="",this.nuevoProducto.iva="",this.nuevoProducto.categoria=""}},borrarProducto(t){this.productos.splice(this.productos.indexOf(t),1)},finConfiguracion(){d["a"].$restLocal=new d["a"](this.nombreRestaurante,parseInt(this.nMesas)),this.categorias.forEach(t=>{const a=new n["a"](d["a"].$restLocal.getIdCategoria(),t);d["a"].$restLocal.anadirCategoria(a),d["a"].$restLocal.aumentarIdCategoria()}),this.impuestos.forEach(t=>{const a=new i["a"](d["a"].$restLocal.getIdImpuesto(),t.nombre,t.cantidad);d["a"].$restLocal.anadirImpuesto(a),d["a"].$restLocal.aumentarIdImpuesto()}),this.productos.forEach(t=>{let a,e;d["a"].$restLocal.getCategorias().forEach(e=>{t.categoria===e.nombre&&(a=e)}),d["a"].$restLocal.getImpuestos().forEach(a=>{t.iva.nombre===a.nombre&&(e=a)});const o=new c["a"](d["a"].$restLocal.getIdProducto(),t.nombre,a,t.precio,e);d["a"].$restLocal.anadirProducto(o),d["a"].$restLocal.aumentarIdProducto()}),s["a"].guardarEstadoLocalStorage(),this.$emit("modifica-restaurante",d["a"].$restLocal),this.$router.push({name:"index"})}}},l=u,m=e("2877"),p=e("9989"),h=e("f531"),g=e("87fe"),b=e("b19c"),v=e("9c40"),I=e("27f9"),f=e("1c1c"),L=e("66e5"),P=e("4074"),$=e("ddd8"),C=e("eebe"),q=e.n(C),w=Object(m["a"])(l,o,r,!1,null,null,null);a["default"]=w.exports;q()(w,"components",{QPage:p["a"],QStepper:h["a"],QStep:g["a"],QStepperNavigation:b["a"],QBtn:v["a"],QInput:I["a"],QList:f["a"],QItem:L["a"],QItemSection:P["a"],QSelect:$["a"]})},d2a5:function(t,a,e){"use strict";e("c975"),e("a434");class o{constructor(t,a){this.nombre=t,this.mesas=new Array(a);for(let e=0;e<this.mesas.length;e++)this.mesas[e]=null;this.idMesa=1,this.idProducto=1,this.idImpuesto=1,this.idCategoria=1,this.productos=new Array,this.impuestos=new Array,this.categorias=new Array,this.historico=new Array}getNombre(){return this.nombre}getMesas(){return this.mesas}getIdMesa(){return this.idMesa}getIdProducto(){return this.idProducto}getIdImpuesto(){return this.idImpuesto}getIdCategoria(){return this.idCategoria}getProductos(){return this.productos}getImpuestos(){return this.impuestos}getCategorias(){return this.categorias}getHistorico(){return this.historico}setNombre(t){this.nombre=t}aumentarIdMesa(){this.idMesa++}aumentarIdImpuesto(){this.idImpuesto++}aumentarIdCategoria(){this.idCategoria++}aumentarIdProducto(){this.idProducto++}setMesas(t){this.mesas=t}anadirMesa(t,a){this.mesas[t]=a}cerrarMesa(t){this.mesas[t]=null}anadirProducto(t){this.productos.push(t)}eliminarProducto(t){this.productos.splice(this.productos.indexOf(t),1)}anadirImpuesto(t){this.impuestos.push(t)}eliminarImpuesto(t){this.impuestos.splice(this.impuestos.indexOf(t),1)}anadirCategoria(t){this.categorias.push(t)}eliminarCategoria(t){this.categorias.splice(this.categorias.indexOf(t),1)}anadirHistorico(t){this.historico.push(t)}}a["a"]=o},f5d1:function(t,a,e){"use strict";class o{constructor(t,a,e,o,r){this.id=t,this.nombre=a,this.categoria=e,this.precio=o,this.iva=r}getId(){return this.id}getNombre(){return this.nombre}getCategoria(){return this.categoria}getPrecio(){return this.precio}getIva(){return this.iva}setNombre(t){this.nombre=t}setCategoria(t){this.categoria=t}setPrecio(t){this.precio=t}setIva(t){this.iva=t}}a["a"]=o}}]);