(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"0f9e":function(a,t,e){"use strict";class o{constructor(a,t,e){this.id=a,this.nombre=t,this.cantidad=e}getId(){return this.id}getNombre(){return this.nombre}getCantidad(){return this.cantidad}setNombre(a){this.nombre=a}setCantidad(a){this.cantidad=a}}t["a"]=o},"693b":function(a,t,e){"use strict";e.r(t);var o=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("q-page",{staticClass:"q-pa-md"},[e("h5",{staticClass:"text-h5 q-my-sm"},[a._v("Configuración categorías")]),e("q-list",{attrs:{dense:"",separator:""}},[e("q-item",[e("q-item-section",{staticClass:"col-9 text-bold"},[a._v("Nombre")])],1),a._l(a.rest.categorias,(function(t){return e("q-item",{key:t.id,attrs:{clickable:""},on:{click:function(e){return a.modificarCategoria(t)}}},[e("q-item-section",{staticClass:"col-9"},[a._v(a._s(t.nombre))])],1)}))],2),e("q-btn",{staticClass:"full-width q-mt-md",attrs:{label:"Añadir categoría"},on:{click:a.anadirCategoria}}),e("q-dialog",{attrs:{"full-width":""},model:{value:a.modifica,callback:function(t){a.modifica=t},expression:"modifica"}},[a.modifica?e("q-card",[e("q-card-section",{staticClass:"row items-center q-pb-none"},[a.categoriaModifica.id!=a.rest.idcategoria?e("div",{staticClass:"text-h6"},[a._v("Modificar categoria")]):e("div",{staticClass:"text-h6"},[a._v("Añadir categoria")]),e("q-space"),e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"close",flat:"",round:"",dense:""}})],1),e("q-card-section",[e("q-input",{staticClass:"q-mt-md",attrs:{label:"Nombre","label-color":"accent"},model:{value:a.categoriaModifica.nombre,callback:function(t){a.$set(a.categoriaModifica,"nombre",t)},expression:"categoriaModifica.nombre"}}),e("q-btn",{staticClass:"full-width q-mt-md",attrs:{label:"Guardar",color:"positive",icon:"save"},on:{click:a.guardarCategoria}}),a.categoriaModifica.id!=a.rest.idCategoria?e("q-btn",{staticClass:"col full-width q-mt-xs",attrs:{label:"Eliminar",color:"negative",icon:"delete"},on:{click:a.eliminarCategoria}}):a._e()],1)],1):a._e()],1),e("q-footer",{staticClass:"bg-secondary text-black",attrs:{elevated:""}},[e("q-tabs",{attrs:{align:"center"}},[e("q-route-tab",{attrs:{to:"/configuracion",label:"Volver"}})],1)],1)],1)},r=[],i=(e("a434"),e("70f3")),s=e("9a5b"),c=(e("8203"),e("0f9e"),e("9254"),e("f5d1"),e("d2a5")),n={name:"ConfiguraCategorias",props:{},data(){return{rest:null,modifica:!1,categoriaModifica:null}},created(){this.rest=c["a"].$restLocal},methods:{modificarCategoria(a){this.modifica=!0,this.categoriaModifica=new s["a"](a.id,a.nombre)},guardarCategoria(){if(this.rest.idCategoria!=this.categoriaModifica.id)this.rest.categorias.forEach(a=>{a.id===this.categoriaModifica.id&&(a.nombre=this.categoriaModifica.nombre)});else{let a=new s["a"](this.categoriaModifica.id,this.categoriaModifica.nombre);this.rest.idCategoria++,this.rest.categorias.push(a)}this.modifica=!1,i["a"].guardarEstadoLocalStorage()},eliminarCategoria(){let a,t=!1;if(this.rest.productos.forEach(e=>{e.categoria.id===this.categoriaModifica.id&&(a=e.nombre,t=!0)}),t)this.$q.notify({type:"negative",message:"No se puede eliminar la categoría porque hay productos quelo tienen asignado. Quita la categoría a esos productos. Ej. "+a});else{let a;for(let t=0;t<this.rest.categorias.length;t++)this.rest.categorias[t].id===this.categoriaModifica.id&&(a=t);this.rest.categorias.splice(a,1),this.modifica=!1}i["a"].guardarEstadoLocalStorage()},anadirCategoria(){this.modifica=!0,this.categoriaModifica=new s["a"](this.rest.idCategoria,"","")}}},d=n,u=e("2877"),l=e("9989"),g=e("1c1c"),h=e("66e5"),m=e("4074"),p=e("9c40"),f=e("24e8"),I=e("f09f"),b=e("a370"),L=e("2c91"),C=e("27f9"),w=e("7ff0"),$=e("429b"),P=e("7867"),v=e("7f67"),M=e("eebe"),q=e.n(M),N=Object(u["a"])(d,o,r,!1,null,null,null);t["default"]=N.exports;q()(N,"components",{QPage:l["a"],QList:g["a"],QItem:h["a"],QItemSection:m["a"],QBtn:p["a"],QDialog:f["a"],QCard:I["a"],QCardSection:b["a"],QSpace:L["a"],QInput:C["a"],QFooter:w["a"],QTabs:$["a"],QRouteTab:P["a"]}),q()(N,"directives",{ClosePopup:v["a"]})},"70f3":function(a,t,e){"use strict";var o=e("9a5b"),r=e("8203"),i=e("0f9e"),s=e("9254"),c=e("f5d1"),n=e("d2a5");class d{static guardarEstadoLocalStorage(){localStorage.setItem("restauranteLocal",JSON.stringify(n["a"].$restLocal))}static restaurarEstadoLocalStorage(){if(localStorage.restauranteLocal){const t=JSON.parse(localStorage.getItem("restauranteLocal"));function a(a,t,e){const d=new r["a"](n["a"].$restLocal.getIdMesa());null!==a&&(n["a"].$restLocal.aumentarIdMesa(),a.lineasPedido.forEach(a=>{const t=new i["a"](a.producto.iva.id,a.producto.iva.nombre,a.producto.iva.cantidad),e=new o["a"](a.producto.categoria.id,a.producto.categoria.nombre),r=new c["a"](a.producto.id,a.producto.nombre,e,a.producto.precio,t),n=new s["a"](parseInt(a.cantidad),r);null!=a.nota&&n.setNota(a.nota),d.anadirLinea(n)}),n["a"].$restLocal.anadirMesa(t,d))}return n["a"].$restLocal=new n["a"](t.nombre,t.mesas.length),t.categorias.forEach(a=>{const t=new o["a"](n["a"].$restLocal.getIdCategoria(),a.nombre);n["a"].$restLocal.anadirCategoria(t),n["a"].$restLocal.aumentarIdCategoria()}),t.impuestos.forEach(a=>{const t=new i["a"](n["a"].$restLocal.getIdImpuesto(),a.nombre,a.cantidad);n["a"].$restLocal.anadirImpuesto(t),n["a"].$restLocal.aumentarIdImpuesto()}),t.productos.forEach(a=>{const t=new c["a"](n["a"].$restLocal.getIdProducto(),a.nombre,a.categoria,a.precio,a.iva);n["a"].$restLocal.anadirProducto(t),n["a"].$restLocal.aumentarIdProducto()}),t.mesas.forEach(a),t.historico.forEach(a=>{const t=new r["a"](a.id);a.lineasPedido.forEach(a=>{const e=new i["a"](a.producto.iva.id,a.producto.iva.nombre,a.producto.iva.cantidad),r=new o["a"](a.producto.categoria.id,a.producto.categoria.nombre),n=new c["a"](a.producto.id,a.producto.nombre,r,a.producto.precio,e),d=new s["a"](parseInt(a.cantidad),n);t.anadirLinea(d)}),n["a"].$restLocal.anadirHistorico(t)}),!0}return!1}static calculaPrecioIva(a){const t=parseFloat(a.precio)*parseFloat(a.iva.cantidad)/100+parseFloat(a.precio);return Math.round(100*t)/100}static datosPrueba(){n["a"].$restLocal=new n["a"]("Casa Pepe",10);const a=new i["a"](n["a"].$restLocal.getIdImpuesto(),"reducido",10);n["a"].$restLocal.anadirImpuesto(a),n["a"].$restLocal.aumentarIdImpuesto();const t=new i["a"](n["a"].$restLocal.getIdImpuesto(),"normal",21);n["a"].$restLocal.anadirImpuesto(t),n["a"].$restLocal.aumentarIdImpuesto();const e=new i["a"](n["a"].$restLocal.getIdImpuesto(),"super",51);n["a"].$restLocal.anadirImpuesto(e),n["a"].$restLocal.aumentarIdImpuesto();const d=new o["a"](n["a"].$restLocal.getIdCategoria(),"refresco");n["a"].$restLocal.anadirCategoria(d),n["a"].$restLocal.aumentarIdCategoria();const u=new o["a"](n["a"].$restLocal.getIdCategoria(),"alcoholica");n["a"].$restLocal.anadirCategoria(u),n["a"].$restLocal.aumentarIdCategoria();const l=new c["a"](n["a"].$restLocal.getIdProducto(),"Coca-cola",d,1,a);n["a"].$restLocal.anadirProducto(l),n["a"].$restLocal.aumentarIdProducto();const g=new c["a"](n["a"].$restLocal.getIdProducto(),"fanta",d,1.2,a);n["a"].$restLocal.anadirProducto(g),n["a"].$restLocal.aumentarIdProducto();const h=new c["a"](n["a"].$restLocal.getIdProducto(),"Pepsi",d,.8,t);n["a"].$restLocal.anadirProducto(h),n["a"].$restLocal.aumentarIdProducto();const m=new c["a"](n["a"].$restLocal.getIdProducto(),"Vino",u,2,t);n["a"].$restLocal.anadirProducto(m),n["a"].$restLocal.aumentarIdProducto();const p=new r["a"](n["a"].$restLocal.getIdMesa());n["a"].$restLocal.aumentarIdMesa();const f=new s["a"](2,l);f.setNota("Sin hielos");const I=new s["a"](1,m),b=new s["a"](2,g);p.anadirLinea(f),p.anadirLinea(I),p.anadirLinea(b),n["a"].$restLocal.anadirMesa(0,p);const L=new r["a"](n["a"].$restLocal.getIdMesa());n["a"].$restLocal.aumentarIdMesa();const C=new s["a"](5,l),w=new s["a"](5,m),$=new s["a"](5,g);L.anadirLinea(C),L.anadirLinea(w),L.anadirLinea($),n["a"].$restLocal.anadirMesa(1,L)}}t["a"]=d},8203:function(a,t,e){"use strict";class o{constructor(a){this.id=a,this.lineasPedido=new Array}getId(){return this.id}getLineasPedido(){return this.lineasPedido}anadirLinea(a){let t=!1;this.lineasPedido.forEach(e=>{e.getProducto().getId()===a.getProducto().getId()&&(e.setCantidad(parseInt(e.getCantidad())+parseInt(a.getCantidad())),t=!0)}),t||this.lineasPedido.push(a)}}t["a"]=o},9254:function(a,t,e){"use strict";class o{constructor(a,t){this.cantidad=a,this.producto=t,this.nota=null}getCantidad(){return this.cantidad}getProducto(){return this.producto}getNota(){return this.nota}setCantidad(a){this.cantidad=a}setProducto(a){this.producto=a}setNota(a){this.nota=a}}t["a"]=o},"9a5b":function(a,t,e){"use strict";class o{constructor(a,t){this.id=a,this.nombre=t}getId(){return this.id}getNombre(){return this.nombre}setNombre(a){this.nombre=a}}t["a"]=o},d2a5:function(a,t,e){"use strict";e("c975"),e("a434");class o{constructor(a,t){this.nombre=a,this.mesas=new Array(t);for(let e=0;e<this.mesas.length;e++)this.mesas[e]=null;this.idMesa=1,this.idProducto=1,this.idImpuesto=1,this.idCategoria=1,this.productos=new Array,this.impuestos=new Array,this.categorias=new Array,this.historico=new Array}getNombre(){return this.nombre}getMesas(){return this.mesas}getIdMesa(){return this.idMesa}getIdProducto(){return this.idProducto}getIdImpuesto(){return this.idImpuesto}getIdCategoria(){return this.idCategoria}getProductos(){return this.productos}getImpuestos(){return this.impuestos}getCategorias(){return this.categorias}getHistorico(){return this.historico}setNombre(a){this.nombre=a}aumentarIdMesa(){this.idMesa++}aumentarIdImpuesto(){this.idImpuesto++}aumentarIdCategoria(){this.idCategoria++}aumentarIdProducto(){this.idProducto++}setMesas(a){this.mesas=a}anadirMesa(a,t){this.mesas[a]=t}cerrarMesa(a){this.mesas[a]=null}anadirProducto(a){this.productos.push(a)}eliminarProducto(a){this.productos.splice(this.productos.indexOf(a),1)}anadirImpuesto(a){this.impuestos.push(a)}eliminarImpuesto(a){this.impuestos.splice(this.impuestos.indexOf(a),1)}anadirCategoria(a){this.categorias.push(a)}eliminarCategoria(a){this.categorias.splice(this.categorias.indexOf(a),1)}anadirHistorico(a){this.historico.push(a)}}t["a"]=o},f5d1:function(a,t,e){"use strict";class o{constructor(a,t,e,o,r){this.id=a,this.nombre=t,this.categoria=e,this.precio=o,this.iva=r}getId(){return this.id}getNombre(){return this.nombre}getCategoria(){return this.categoria}getPrecio(){return this.precio}getIva(){return this.iva}setNombre(a){this.nombre=a}setCategoria(a){this.categoria=a}setPrecio(a){this.precio=a}setIva(a){this.iva=a}}t["a"]=o}}]);