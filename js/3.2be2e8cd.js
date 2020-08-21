(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"0f9e":function(t,a,e){"use strict";class r{constructor(t,a,e){this.id=t,this.nombre=a,this.cantidad=e}getId(){return this.id}getNombre(){return this.nombre}getCantidad(){return this.cantidad}setNombre(t){this.nombre=t}setCantidad(t){this.cantidad=t}}a["a"]=r},"33a2":function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",{staticClass:"q-pa-md"},[e("h3",{staticClass:"text-h3 q-my-sm"},[t._v("Añadir producto")]),e("h6",{staticClass:"text-h6 q-my-sm"},[t._v("Mesa "+t._s(t.id))]),t._l(t.productos,(function(a){return e("div",{key:a.categoria.nombre},[e("h6",{staticClass:"text-h6 q-my-sm"},[t._v(t._s(a.categoria.nombre))]),e("div",{staticClass:"row"},t._l(a.productos,(function(a){return e("div",{key:a.nombre,staticClass:"col-6 q-pa-xs"},[e("q-btn",{staticClass:"full-width",attrs:{color:"white","text-color":"black"},on:{click:function(e){return t.addProducto(a)}}},[e("div",[t._v("\n            "+t._s(a.nombre)+"\n            "),e("br"),e("span",{staticClass:"text-weight-light"},[t._v(t._s(t.calculaPrecioIva(a))+"€")])])])],1)})),0)])})),e("q-footer",{staticClass:"bg-secondary text-black",attrs:{elevated:""}},[e("q-tabs",{attrs:{align:"center"}},[e("q-route-tab",{attrs:{to:"/",icon:"home"}}),e("q-route-tab",{attrs:{to:{name:"mesa",params:{id:t.id.toString()}},label:"Volver a mesa"}})],1)],1)],2)},o=[],s=e("70f3"),i=(e("9a5b"),e("8203"),e("0f9e"),e("9254")),n=(e("f5d1"),e("d2a5")),c={name:"AddProducto",props:{id:String},data(){return{mesa:null,rest:null,productos:[]}},created(){this.mesa=n["a"].$restLocal.getMesas()[parseInt(this.id)-1],this.rest=n["a"].$restLocal,this.rest.categorias.forEach(t=>{let a=new Object,e=[];a.categoria=t,this.rest.productos.forEach(a=>{a.categoria.id===t.id&&e.push(a)}),a.productos=e,this.productos.push(a)})},methods:{addProducto(t){let a=new i["a"](1,t);n["a"].$restLocal.getMesas()[parseInt(this.id)-1].anadirLinea(a),s["a"].guardarEstadoLocalStorage()},calculaPrecioIva(t){return s["a"].calculaPrecioIva(t)}}},d=c,u=e("2877"),l=e("9989"),h=e("9c40"),m=e("7ff0"),g=e("429b"),p=e("7867"),I=e("eebe"),L=e.n(I),b=Object(u["a"])(d,r,o,!1,null,null,null);a["default"]=b.exports;L()(b,"components",{QPage:l["a"],QBtn:h["a"],QFooter:m["a"],QTabs:g["a"],QRouteTab:p["a"]})},"70f3":function(t,a,e){"use strict";var r=e("9a5b"),o=e("8203"),s=e("0f9e"),i=e("9254"),n=e("f5d1"),c=e("d2a5");class d{static guardarEstadoLocalStorage(){localStorage.setItem("restauranteLocal",JSON.stringify(c["a"].$restLocal))}static restaurarEstadoLocalStorage(){if(localStorage["restauranteLocal"]){let a=JSON.parse(localStorage.getItem("restauranteLocal"));function t(t,a,e){let d=new o["a"](c["a"].$restLocal.getIdMesa());null!==t&&(c["a"].$restLocal.aumentarIdMesa(),t.lineasPedido.forEach(t=>{let a=new s["a"](t.producto.iva.id,t.producto.iva.nombre,t.producto.iva.cantidad),e=new r["a"](t.producto.categoria.id,t.producto.categoria.nombre),o=new n["a"](t.producto.id,t.producto.nombre,e,t.producto.precio,a),c=new i["a"](parseInt(t.cantidad),o);null!=t.nota&&c.setNota(t.nota),d.anadirLinea(c)}),c["a"].$restLocal.anadirMesa(a,d))}return c["a"].$restLocal=new c["a"](a.nombre,a.mesas.length),a.categorias.forEach(t=>{let a=new r["a"](c["a"].$restLocal.getIdCategoria(),t.nombre);c["a"].$restLocal.anadirCategoria(a),c["a"].$restLocal.aumentarIdCategoria()}),a.impuestos.forEach(t=>{let a=new s["a"](c["a"].$restLocal.getIdImpuesto(),t.nombre,t.cantidad);c["a"].$restLocal.anadirImpuesto(a),c["a"].$restLocal.aumentarIdImpuesto()}),a.productos.forEach(t=>{let a=new n["a"](c["a"].$restLocal.getIdProducto(),t.nombre,t.categoria,t.precio,t.iva);c["a"].$restLocal.anadirProducto(a),c["a"].$restLocal.aumentarIdProducto()}),a.mesas.forEach(t),a.historico.forEach(t=>{let a=new o["a"](t.id);t.lineasPedido.forEach(t=>{let e=new s["a"](t.producto.iva.id,t.producto.iva.nombre,t.producto.iva.cantidad),o=new r["a"](t.producto.categoria.id,t.producto.categoria.nombre),c=new n["a"](t.producto.id,t.producto.nombre,o,t.producto.precio,e),d=new i["a"](parseInt(t.cantidad),c);a.anadirLinea(d)}),c["a"].$restLocal.anadirHistorico(a)}),!0}return!1}static calculaPrecioIva(t){let a=parseFloat(t.precio)*parseFloat(t.iva.cantidad)/100+parseFloat(t.precio);return Math.round(100*a)/100}static datosPrueba(){c["a"].$restLocal=new c["a"]("Casa Pepe",10);let t=new s["a"](c["a"].$restLocal.getIdImpuesto(),"reducido",10);c["a"].$restLocal.anadirImpuesto(t),c["a"].$restLocal.aumentarIdImpuesto();let a=new s["a"](c["a"].$restLocal.getIdImpuesto(),"normal",21);c["a"].$restLocal.anadirImpuesto(a),c["a"].$restLocal.aumentarIdImpuesto();let e=new s["a"](c["a"].$restLocal.getIdImpuesto(),"super",51);c["a"].$restLocal.anadirImpuesto(e),c["a"].$restLocal.aumentarIdImpuesto();let d=new r["a"](c["a"].$restLocal.getIdCategoria(),"refresco");c["a"].$restLocal.anadirCategoria(d),c["a"].$restLocal.aumentarIdCategoria();let u=new r["a"](c["a"].$restLocal.getIdCategoria(),"alcoholica");c["a"].$restLocal.anadirCategoria(u),c["a"].$restLocal.aumentarIdCategoria();let l=new n["a"](c["a"].$restLocal.getIdProducto(),"Coca-cola",d,1,t);c["a"].$restLocal.anadirProducto(l),c["a"].$restLocal.aumentarIdProducto();let h=new n["a"](c["a"].$restLocal.getIdProducto(),"fanta",d,1.2,t);c["a"].$restLocal.anadirProducto(h),c["a"].$restLocal.aumentarIdProducto();let m=new n["a"](c["a"].$restLocal.getIdProducto(),"Pepsi",d,.8,a);c["a"].$restLocal.anadirProducto(m),c["a"].$restLocal.aumentarIdProducto();let g=new n["a"](c["a"].$restLocal.getIdProducto(),"Vino",u,2,a);c["a"].$restLocal.anadirProducto(g),c["a"].$restLocal.aumentarIdProducto();let p=new o["a"](c["a"].$restLocal.getIdMesa());c["a"].$restLocal.aumentarIdMesa();let I=new i["a"](2,l);I.setNota("Sin hielos");let L=new i["a"](1,g),b=new i["a"](2,h);p.anadirLinea(I),p.anadirLinea(L),p.anadirLinea(b),c["a"].$restLocal.anadirMesa(0,p);let $=new o["a"](c["a"].$restLocal.getIdMesa());c["a"].$restLocal.aumentarIdMesa();let w=new i["a"](5,l),P=new i["a"](5,g),f=new i["a"](5,h);$.anadirLinea(w),$.anadirLinea(P),$.anadirLinea(f),c["a"].$restLocal.anadirMesa(1,$)}}a["a"]=d},8203:function(t,a,e){"use strict";class r{constructor(t){this.id=t,this.lineasPedido=new Array}getId(){return this.id}getLineasPedido(){return this.lineasPedido}anadirLinea(t){let a=!1;this.lineasPedido.forEach(e=>{e.getProducto().getId()===t.getProducto().getId()&&(e.setCantidad(parseInt(e.getCantidad())+parseInt(t.getCantidad())),a=!0)}),a||this.lineasPedido.push(t)}}a["a"]=r},9254:function(t,a,e){"use strict";class r{constructor(t,a){this.cantidad=t,this.producto=a,this.nota=null}getCantidad(){return this.cantidad}getProducto(){return this.producto}getNota(){return this.nota}setCantidad(t){this.cantidad=t}setProducto(t){this.producto=t}setNota(t){this.nota=t}}a["a"]=r},"9a5b":function(t,a,e){"use strict";class r{constructor(t,a){this.id=t,this.nombre=a}getId(){return this.id}getNombre(){return this.nombre}setNombre(t){this.nombre=t}}a["a"]=r},d2a5:function(t,a,e){"use strict";e("c975"),e("a434");class r{constructor(t,a){this.nombre=t,this.mesas=new Array(a);for(let e=0;e<this.mesas.length;e++)this.mesas[e]=null;this.idMesa=1,this.idProducto=1,this.idImpuesto=1,this.idCategoria=1,this.productos=new Array,this.impuestos=new Array,this.categorias=new Array,this.historico=new Array}getNombre(){return this.nombre}getMesas(){return this.mesas}getIdMesa(){return this.idMesa}getIdProducto(){return this.idProducto}getIdImpuesto(){return this.idImpuesto}getIdCategoria(){return this.idCategoria}getProductos(){return this.productos}getImpuestos(){return this.impuestos}getCategorias(){return this.categorias}getHistorico(){return this.historico}setNombre(t){this.nombre=t}aumentarIdMesa(){this.idMesa++}aumentarIdImpuesto(){this.idImpuesto++}aumentarIdCategoria(){this.idCategoria++}aumentarIdProducto(){this.idProducto++}setMesas(t){this.mesas=t}anadirMesa(t,a){this.mesas[t]=a}cerrarMesa(t){this.mesas[t]=null}anadirProducto(t){this.productos.push(t)}eliminarProducto(t){this.productos.splice(this.productos.indexOf(t),1)}anadirImpuesto(t){this.impuestos.push(t)}eliminarImpuesto(t){this.impuestos.splice(this.impuestos.indexOf(t),1)}anadirCategoria(t){this.categorias.push(t)}eliminarCategoria(t){this.categorias.splice(this.categorias.indexOf(t),1)}anadirHistorico(t){this.historico.push(t)}}a["a"]=r},f5d1:function(t,a,e){"use strict";class r{constructor(t,a,e,r,o){this.id=t,this.nombre=a,this.categoria=e,this.precio=r,this.iva=o}getId(){return this.id}getNombre(){return this.nombre}getCategoria(){return this.categoria}getPrecio(){return this.precio}getIva(){return this.iva}setNombre(t){this.nombre=t}setCategoria(t){this.categoria=t}setPrecio(t){this.precio=t}setIva(t){this.iva=t}}a["a"]=r}}]);