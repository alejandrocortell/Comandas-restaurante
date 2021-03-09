(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"0f9e":function(t,a,e){"use strict";class s{constructor(t,a,e){this.id=t,this.nombre=a,this.cantidad=e}getId(){return this.id}getNombre(){return this.nombre}getCantidad(){return this.cantidad}setNombre(t){this.nombre=t}setCantidad(t){this.cantidad=t}}a["a"]=s},"69c5":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",{staticClass:"q-pa-md"},[e("h3",{staticClass:"text-h3 q-my-sm"},[t._v("Configuración")]),e("div",{staticClass:"flex"},[e("q-input",{staticClass:"col",attrs:{label:"Nombre restaurante","label-color":"accent"},model:{value:t.modificaNombre,callback:function(a){t.modificaNombre=a},expression:"modificaNombre"}}),e("q-btn",{staticClass:"col-4 q-mt-md q-ml-md",attrs:{round:"",icon:"save"},on:{click:t.modificarNombre}})],1),e("div",{staticClass:"flex"},[e("q-input",{staticClass:"col",attrs:{label:"Número de mesas",mask:"####","label-color":"accent"},model:{value:t.nMesas,callback:function(a){t.nMesas=a},expression:"nMesas"}}),e("q-btn",{staticClass:"col-4 q-mt-md q-ml-md",attrs:{round:"",icon:"save"},on:{click:t.modificarMesas}})],1),e("q-btn",{staticClass:"col full-width q-mt-md",attrs:{label:"Impuestos",to:"configuracion/impuestos"}}),e("q-btn",{staticClass:"col full-width q-mt-md",attrs:{label:"Categorías de producto",to:"configuracion/categorias"}}),e("q-btn",{staticClass:"col full-width q-mt-md",attrs:{label:"Productos",to:"configuracion/productos"}}),e("q-footer",{staticClass:"bg-secondary text-black",attrs:{elevated:""}},[e("q-tabs",{attrs:{align:"center"}},[e("q-route-tab",{attrs:{to:"/",label:"Volver"}})],1)],1)],1)},o=[],r=(e("c975"),e("a434"),e("70f3")),i=(e("9a5b"),e("8203"),e("0f9e"),e("9254"),e("f5d1"),e("d2a5")),n={name:"Configuracion",props:{},data(){return{rest:null,modificaNombre:null,nMesas:null}},created(){this.rest=i["a"].$restLocal,this.modificaNombre=this.rest.nombre,this.nMesas=this.rest.mesas.length},methods:{modificarNombre(){this.rest.nombre=this.modificaNombre,this.$q.notify({type:"positive",message:"Nombre modificado"}),this.$emit("modifica-restaurante",this.rest)},modificarMesas(){let t=this.nMesas-this.rest.mesas.length;if(t>0)for(let a=0;a<t;a++)this.rest.mesas.push(null);else{let a=0;if(this.rest.mesas.forEach(t=>{null==t&&a++}),a>=Math.abs(t)){for(let a=0;a<Math.abs(t);a++){let t=this.rest.mesas.indexOf(null);-1!==t&&this.rest.mesas.splice(t,1)}this.$q.notify({type:"positive",message:"Modificado el número de mesas"})}else this.$q.notify({type:"negative",message:"No se pueden eliminar mesas que están sin cerrar"})}r["a"].guardarEstadoLocalStorage()}}},c=n,d=e("2877"),u=e("9989"),l=e("27f9"),m=e("9c40"),h=e("7ff0"),g=e("429b"),p=e("7867"),I=e("eebe"),b=e.n(I),f=Object(d["a"])(c,s,o,!1,null,null,null);a["default"]=f.exports;b()(f,"components",{QPage:u["a"],QInput:l["a"],QBtn:m["a"],QFooter:h["a"],QTabs:g["a"],QRouteTab:p["a"]})},"70f3":function(t,a,e){"use strict";var s=e("9a5b"),o=e("8203"),r=e("0f9e"),i=e("9254"),n=e("f5d1"),c=e("d2a5");class d{static guardarEstadoLocalStorage(){localStorage.setItem("restauranteLocal",JSON.stringify(c["a"].$restLocal))}static restaurarEstadoLocalStorage(){if(localStorage.restauranteLocal){const a=JSON.parse(localStorage.getItem("restauranteLocal"));function t(t,a,e){const d=new o["a"](c["a"].$restLocal.getIdMesa());null!==t&&(c["a"].$restLocal.aumentarIdMesa(),t.lineasPedido.forEach(t=>{const a=new r["a"](t.producto.iva.id,t.producto.iva.nombre,t.producto.iva.cantidad),e=new s["a"](t.producto.categoria.id,t.producto.categoria.nombre),o=new n["a"](t.producto.id,t.producto.nombre,e,t.producto.precio,a),c=new i["a"](parseInt(t.cantidad),o);null!=t.nota&&c.setNota(t.nota),d.anadirLinea(c)}),c["a"].$restLocal.anadirMesa(a,d))}return c["a"].$restLocal=new c["a"](a.nombre,a.mesas.length),a.categorias.forEach(t=>{const a=new s["a"](c["a"].$restLocal.getIdCategoria(),t.nombre);c["a"].$restLocal.anadirCategoria(a),c["a"].$restLocal.aumentarIdCategoria()}),a.impuestos.forEach(t=>{const a=new r["a"](c["a"].$restLocal.getIdImpuesto(),t.nombre,t.cantidad);c["a"].$restLocal.anadirImpuesto(a),c["a"].$restLocal.aumentarIdImpuesto()}),a.productos.forEach(t=>{const a=new n["a"](c["a"].$restLocal.getIdProducto(),t.nombre,t.categoria,t.precio,t.iva);c["a"].$restLocal.anadirProducto(a),c["a"].$restLocal.aumentarIdProducto()}),a.mesas.forEach(t),a.historico.forEach(t=>{const a=new o["a"](t.id);t.lineasPedido.forEach(t=>{const e=new r["a"](t.producto.iva.id,t.producto.iva.nombre,t.producto.iva.cantidad),o=new s["a"](t.producto.categoria.id,t.producto.categoria.nombre),c=new n["a"](t.producto.id,t.producto.nombre,o,t.producto.precio,e),d=new i["a"](parseInt(t.cantidad),c);a.anadirLinea(d)}),c["a"].$restLocal.anadirHistorico(a)}),!0}return!1}static calculaPrecioIva(t){const a=parseFloat(t.precio)*parseFloat(t.iva.cantidad)/100+parseFloat(t.precio);return Math.round(100*a)/100}static datosPrueba(){c["a"].$restLocal=new c["a"]("Casa Pepe",10);const t=new r["a"](c["a"].$restLocal.getIdImpuesto(),"reducido",10);c["a"].$restLocal.anadirImpuesto(t),c["a"].$restLocal.aumentarIdImpuesto();const a=new r["a"](c["a"].$restLocal.getIdImpuesto(),"normal",21);c["a"].$restLocal.anadirImpuesto(a),c["a"].$restLocal.aumentarIdImpuesto();const e=new r["a"](c["a"].$restLocal.getIdImpuesto(),"super",51);c["a"].$restLocal.anadirImpuesto(e),c["a"].$restLocal.aumentarIdImpuesto();const d=new s["a"](c["a"].$restLocal.getIdCategoria(),"refresco");c["a"].$restLocal.anadirCategoria(d),c["a"].$restLocal.aumentarIdCategoria();const u=new s["a"](c["a"].$restLocal.getIdCategoria(),"alcoholica");c["a"].$restLocal.anadirCategoria(u),c["a"].$restLocal.aumentarIdCategoria();const l=new n["a"](c["a"].$restLocal.getIdProducto(),"Coca-cola",d,1,t);c["a"].$restLocal.anadirProducto(l),c["a"].$restLocal.aumentarIdProducto();const m=new n["a"](c["a"].$restLocal.getIdProducto(),"fanta",d,1.2,t);c["a"].$restLocal.anadirProducto(m),c["a"].$restLocal.aumentarIdProducto();const h=new n["a"](c["a"].$restLocal.getIdProducto(),"Pepsi",d,.8,a);c["a"].$restLocal.anadirProducto(h),c["a"].$restLocal.aumentarIdProducto();const g=new n["a"](c["a"].$restLocal.getIdProducto(),"Vino",u,2,a);c["a"].$restLocal.anadirProducto(g),c["a"].$restLocal.aumentarIdProducto();const p=new o["a"](c["a"].$restLocal.getIdMesa());c["a"].$restLocal.aumentarIdMesa();const I=new i["a"](2,l);I.setNota("Sin hielos");const b=new i["a"](1,g),f=new i["a"](2,m);p.anadirLinea(I),p.anadirLinea(b),p.anadirLinea(f),c["a"].$restLocal.anadirMesa(0,p);const L=new o["a"](c["a"].$restLocal.getIdMesa());c["a"].$restLocal.aumentarIdMesa();const $=new i["a"](5,l),w=new i["a"](5,g),C=new i["a"](5,m);L.anadirLinea($),L.anadirLinea(w),L.anadirLinea(C),c["a"].$restLocal.anadirMesa(1,L)}}a["a"]=d},8203:function(t,a,e){"use strict";class s{constructor(t){this.id=t,this.lineasPedido=new Array}getId(){return this.id}getLineasPedido(){return this.lineasPedido}anadirLinea(t){let a=!1;this.lineasPedido.forEach(e=>{e.getProducto().getId()===t.getProducto().getId()&&(e.setCantidad(parseInt(e.getCantidad())+parseInt(t.getCantidad())),a=!0)}),a||this.lineasPedido.push(t)}}a["a"]=s},9254:function(t,a,e){"use strict";class s{constructor(t,a){this.cantidad=t,this.producto=a,this.nota=null}getCantidad(){return this.cantidad}getProducto(){return this.producto}getNota(){return this.nota}setCantidad(t){this.cantidad=t}setProducto(t){this.producto=t}setNota(t){this.nota=t}}a["a"]=s},"9a5b":function(t,a,e){"use strict";class s{constructor(t,a){this.id=t,this.nombre=a}getId(){return this.id}getNombre(){return this.nombre}setNombre(t){this.nombre=t}}a["a"]=s},d2a5:function(t,a,e){"use strict";e("c975"),e("a434");class s{constructor(t,a){this.nombre=t,this.mesas=new Array(a);for(let e=0;e<this.mesas.length;e++)this.mesas[e]=null;this.idMesa=1,this.idProducto=1,this.idImpuesto=1,this.idCategoria=1,this.productos=new Array,this.impuestos=new Array,this.categorias=new Array,this.historico=new Array}getNombre(){return this.nombre}getMesas(){return this.mesas}getIdMesa(){return this.idMesa}getIdProducto(){return this.idProducto}getIdImpuesto(){return this.idImpuesto}getIdCategoria(){return this.idCategoria}getProductos(){return this.productos}getImpuestos(){return this.impuestos}getCategorias(){return this.categorias}getHistorico(){return this.historico}setNombre(t){this.nombre=t}aumentarIdMesa(){this.idMesa++}aumentarIdImpuesto(){this.idImpuesto++}aumentarIdCategoria(){this.idCategoria++}aumentarIdProducto(){this.idProducto++}setMesas(t){this.mesas=t}anadirMesa(t,a){this.mesas[t]=a}cerrarMesa(t){this.mesas[t]=null}anadirProducto(t){this.productos.push(t)}eliminarProducto(t){this.productos.splice(this.productos.indexOf(t),1)}anadirImpuesto(t){this.impuestos.push(t)}eliminarImpuesto(t){this.impuestos.splice(this.impuestos.indexOf(t),1)}anadirCategoria(t){this.categorias.push(t)}eliminarCategoria(t){this.categorias.splice(this.categorias.indexOf(t),1)}anadirHistorico(t){this.historico.push(t)}}a["a"]=s},f5d1:function(t,a,e){"use strict";class s{constructor(t,a,e,s,o){this.id=t,this.nombre=a,this.categoria=e,this.precio=s,this.iva=o}getId(){return this.id}getNombre(){return this.nombre}getCategoria(){return this.categoria}getPrecio(){return this.precio}getIva(){return this.iva}setNombre(t){this.nombre=t}setCategoria(t){this.categoria=t}setPrecio(t){this.precio=t}setIva(t){this.iva=t}}a["a"]=s}}]);