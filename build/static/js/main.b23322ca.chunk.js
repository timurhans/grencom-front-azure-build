(this["webpackJsonpgreencom-front"]=this["webpackJsonpgreencom-front"]||[]).push([[0],{180:function(e,t,o){"use strict";o.r(t);var n=o(1),a=o.n(n),c=o(22),r=o.n(c),s=(o(84),o(36)),i=o(37),l=o(40),d=o(39),u=o(2),j=o(70),b=o(71),p=o(6),h=o(38),m=o(4),O=o.n(m),f=o(9),v=o(72),x=o.n(v),g="https://greencomapi.azurewebsites.net";function C(e,t){var o=Object(n.useState)((function(){return function(e,t){var o=!1;try{o=JSON.parse(localStorage.getItem(e))}catch(n){o=!1}return o||t}(e,t)})),a=Object(u.a)(o,2),c=a[0],r=a[1];return Object(n.useEffect)((function(){localStorage.setItem(e,JSON.stringify(c))}),[c]),[c,r]}function _(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=Object(n.useState)([]),c=Object(u.a)(a,2),r=c[0],s=c[1],i=C("token",null),l=Object(u.a)(i,2),d=l[0];l[1];return Object(n.useEffect)((function(){if(""!==t){var o={produto:e,periodo:t};O()({method:"GET",headers:{Authorization:"Token "+d},url:"https://greencomapi.azurewebsites.net/periodos",params:o}).then((function(e){s(e.data.dados)}))}}),[e,t,o]),{dadosPeriodo:r}}var w=o(0),k=function(){var e=Object(n.useRef)(null),t=C("username",null),o=Object(u.a)(t,1)[0],a=C("isRep",null),c=[{label:"Conta",icon:"pi pi-user",url:"/conta"},{label:"Pedidos",icon:"pi pi-upload",url:"/pedidos"}];Object(u.a)(a,1)[0]&&(c.push({label:"Promocoes",icon:"pi pi-external-link",url:"/promocoes"}),c.push({label:"Clientes",icon:"pi pi-external-link",url:"/clientes"}));var r=[{label:o,items:c}];return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(b.Menu,{model:r,popup:!0,ref:e,id:"popup_menu"}),Object(w.jsx)(p.Button,{icon:"pi pi-user",onClick:function(t){return e.current.toggle(t)},"aria-controls":"popup_menu","aria-haspopup":!0})]})};function y(e){var t=C("categorias",[]),o=Object(u.a)(t,1)[0],a=Object(n.useState)(""),c=Object(u.a)(a,2),r=c[0],s=c[1],i=C("tipoConta",[]),l=Object(u.a)(i,1)[0],d=Object(w.jsx)("a",{href:"/",children:Object(w.jsx)("img",{alt:"logo",src:"https://ondasstr092020.blob.core.windows.net/modelo/logo.png",height:"40",className:"p-mr-2"})}),b=Object(w.jsx)("a",{href:"/login",children:"Login"});return e.loggedIn&&(b=Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(h.InputText,{onChange:function(e){s(e.target.value),e.target.value.length>=13&&/^\d+$/.test(e.target.value)&&(e.preventDefault(),window.location="/busca?query="+e.target.value,s(""))},placeholder:"Buscar",type:"text"}),Object(w.jsx)(p.Button,{onClick:function(e){""!==r&&(e.preventDefault(),window.location="/busca?query="+r,s(""))},icon:"pi pi-search",className:"p-button-rounded p-button-secondary"}),Object(w.jsx)(p.Button,{icon:"pi pi-shopping-cart",onClick:function(e){return window.location.href="/carrinho"},"aria-controls":"popup_menu","aria-haspopup":!0}),"visitante"===l?Object(w.jsx)(p.Button,{icon:"pi pi-user",onClick:function(e){return window.location.href="/conta"},"aria-controls":"popup_menu","aria-haspopup":!0}):Object(w.jsx)(k,{})]})),Object(w.jsx)("div",{children:Object(w.jsx)("div",{className:"card",children:Object(w.jsx)(j.Menubar,{model:o,start:d,end:b})})})}var N=function(e){Object(l.a)(o,e);var t=Object(d.a)(o);function o(e){var n;return Object(s.a)(this,o),(n=t.call(this,e)).state={banners:[]},n}return Object(i.a)(o,[{key:"componentDidMount",value:function(){this.updateBanners(),document.title="Greenish B2B"}},{key:"updateBanners",value:function(){var e=this;O()({method:"GET",url:"https://greencomapi.azurewebsites.net/home"}).then((function(t){e.setState({banners:t.data.banners}),console.log(e.state.banners)}))}},{key:"render",value:function(){var e=this.state.banners.slice().map((function(e,t){return Object(w.jsx)("a",{href:e.url,children:Object(w.jsx)("img",{src:e.img})})}));return Object(w.jsx)("div",{children:e})}}]),o}(a.a.Component),S=o(30),B=(o(135),o(13));function T(e){var t=Object(n.useState)(""),o=Object(u.a)(t,2),a=o[0],c=o[1],r=Object(n.useState)(""),s=Object(u.a)(r,2),i=s[0],l=s[1],d=C("token",null),j=Object(u.a)(d,2),b=(j[0],j[1]),m=C("loggedin",null),f=Object(u.a)(m,2)[1],v=C("clienteId",null),x=Object(u.a)(v,2)[1],_=C("clienteNome",null),k=Object(u.a)(_,2)[1],y=C("isRep",null),N=Object(u.a)(y,2),T=(N[0],N[1]),I=C("username",null),P=Object(u.a)(I,2)[1],A=C("carrinhoId",null),E=Object(u.a)(A,2)[1],z=C("categorias",[]),D=Object(u.a)(z,2)[1],R=C("colecoes",[]),F=Object(u.a)(R,2)[1],q=C("periodos",[]),G=Object(u.a)(q,2)[1],L=C("tipoConta",[]),M=Object(u.a)(L,2)[1],U=Object(n.useRef)(null);Object(n.useEffect)((function(){document.title="Greenish B2B | Login"}),[]);return Object(w.jsxs)("div",{children:[Object(w.jsx)(B.Messages,{ref:U}),Object(w.jsxs)("div",{className:"p-field",children:[Object(w.jsx)("label",{htmlFor:"login",children:"Login"}),Object(w.jsx)(h.InputText,{id:"login",value:a,onChange:function(e){return c(e.target.value)}})]}),Object(w.jsxs)("div",{className:"p-field",children:[Object(w.jsx)("label",{htmlFor:"senha",children:"Senha"}),Object(w.jsx)(S.Password,{id:"senha",value:i,onChange:function(e){return l(e.target.value)},feedback:!1})]}),Object(w.jsx)(p.Button,{label:"Entrar",onClick:function(){return function(){var e=new FormData;e.append("username",a),e.append("password",i),O.a.post(g+"/api-token-auth/",e).then((function(e){var t={headers:{Authorization:"Token "+e.data.token}};console.log(t),b(e.data.token),O.a.get(g+"/login",t).then((function(e){console.log(e.data),f(!0),x(e.data.clienteId),k(e.data.clienteNome),T(e.data.isRep),P(e.data.username),E(null),D(e.data.cats),F(e.data.colecoes),G(e.data.periodos),M(e.data.tipo_conta),window.location.href="/"}))})).catch((function(e){U.current.show([{severity:"error",summary:"Usuario ou senha Incorretos",sticky:!1}]),c(""),l("")}))}()}})]})}var I=o(23),P=o(20),A=o(8),E=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),o=t[0],c=t[1],r=C("token",null),s=Object(u.a)(r,2),i=s[0],l=(s[1],C("clienteId",null)),d=Object(u.a)(l,2)[1],j=C("clienteNome",null),b=Object(u.a)(j,2)[1],h=C("carrinhoId",null),m=Object(u.a)(h,2),f=m[0],v=m[1];Object(n.useEffect)((function(){O()({method:"GET",headers:{Authorization:"Token "+i},url:"https://greencomapi.azurewebsites.net/clientes"}).then((function(e){console.log(e.data.clientes),c(e.data.clientes)})),document.title="Greenish B2B | Clientes"}),[]);var x=function(e,t){O()({method:"GET",headers:{Authorization:"Token "+i},url:g+"/pedidos/deleta/"+f}),d(e),b(t),v(null),window.location.href="/"};return Object(w.jsx)("div",{children:Object(w.jsx)("div",{className:"card",children:Object(w.jsxs)(P.DataTable,{value:o,children:[Object(w.jsx)(A.Column,{field:"razao_social",header:"Razao Social",filter:!0,filterPlaceholder:"Busca por Razao Social"}),Object(w.jsx)(A.Column,{field:"uf",header:"UF"}),Object(w.jsx)(A.Column,{field:"cidade",header:"Cidade",filter:!0,filterPlaceholder:"Busca por Cidade"}),Object(w.jsx)(A.Column,{field:"tabela_precos",header:"Tabela"}),Object(w.jsx)(A.Column,{field:"desc_cond_pag",header:"Condicao Pagamento"}),Object(w.jsx)(A.Column,{body:function(e){return Object(w.jsx)(a.a.Fragment,{children:Object(w.jsx)(p.Button,{label:"Selecionar",onClick:function(){return function(e){Object(I.confirmDialog)({message:"Itens nao salvos no carrinho serao apagados. Confirma alteracao?",header:"Confirmacao",icon:"pi pi-exclamation-triangle",acceptLabel:"Sim",rejectLabel:"Nao",accept:function(){return x(e.id,e.nome)}})}(e)}})})}})]})})})},z=o(74),D=o(17),R=(o(162),o(164),o(75)),F=o.n(R),q=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),o=t[0],c=t[1],r=C("token",null),s=Object(u.a)(r,2),i=s[0],l=(s[1],C("clienteId",null)),d=Object(u.a)(l,2)[1],j=C("clienteNome",null),b=Object(u.a)(j,2)[1],h=C("carrinhoId",null),m=Object(u.a)(h,2),f=m[0],v=m[1],x=Object(n.useState)(!1),_=Object(u.a)(x,2),k=_[0],y=_[1],N=Object(n.useRef)(null),S=C("isRep",null),T=Object(u.a)(S,1)[0],E=function(){O()({method:"GET",url:"https://greencomapi.azurewebsites.net/pedidos",headers:{Authorization:"Token "+i}}).then((function(e){c(e.data.pedidos)}))};Object(n.useEffect)((function(){E(),document.title="Greenish B2B | Pedidos"}),[]);var R=function(e,t,o){O()({method:"GET",url:g+"/pedidos/retoma/"+e,headers:{Authorization:"Token "+i},params:{carrinhoAtualId:f}}).then((function(n){n.data.confirmed?(v(e),d(t),b(o),window.location.href="/carrinho"):N.current.show([{severity:"error",summary:n.data.message,sticky:!1}])}))};console.log(o);return Object(w.jsxs)("div",{children:[Object(w.jsx)(B.Messages,{ref:N}),Object(w.jsx)(D.Dialog,{title:"Processando",visible:k,onHide:function(){return""},children:Object(w.jsx)(z.ProgressSpinner,{})}),Object(w.jsx)("div",{className:"card",children:Object(w.jsxs)(P.DataTable,{value:o,children:[Object(w.jsx)(A.Column,{field:"id",header:"ID"}),Object(w.jsx)(A.Column,{field:"cliente__razao_social",header:"Razao Social",filter:!0,filterPlaceholder:"Buscar"}),Object(w.jsx)(A.Column,{field:"colecao",header:"Colecao",filter:!0,filterPlaceholder:"Buscar"}),Object(w.jsx)(A.Column,{header:"Valor",body:function(e){return"".concat(e.valor_total.toLocaleString("en-US",{style:"currency",currency:"BRL"}))}}),Object(w.jsx)(A.Column,{field:"qtd_total",header:"Qtd"}),Object(w.jsx)(A.Column,{field:"cliente__desc_cond_pag",header:"Cond Pag"}),Object(w.jsx)(A.Column,{body:function(e){return F()(e.data_criacao,"YYYY-MM-DDTHH:mm:ssZ").format("DD/MM/YYYY")},header:"Data"}),Object(w.jsx)(A.Column,{field:"liberado_rep",header:"Liberado",body:function(e){return e.liberado_rep?Object(w.jsx)(w.Fragment,{children:"Sim"}):Object(w.jsx)(w.Fragment,{children:"N\xe3o"})}}),Object(w.jsx)(A.Column,{field:"enviado_fabrica",header:"Enviado",body:function(e){return e.enviado_fabrica?Object(w.jsx)(w.Fragment,{children:"Sim"}):Object(w.jsx)(w.Fragment,{children:"N\xe3o"})}}),Object(w.jsx)(A.Column,{field:"codigo_erp",header:"ID Ondas"}),Object(w.jsx)(A.Column,{header:"Teste",body:function(e){return e.is_teste?Object(w.jsx)(w.Fragment,{children:"Sim"}):Object(w.jsx)(w.Fragment,{children:"N\xe3o"})}}),Object(w.jsx)(A.Column,{header:"Acoes",body:function(e){return Object(w.jsxs)(a.a.Fragment,{children:[e.liberado_rep?Object(w.jsx)(w.Fragment,{}):Object(w.jsx)(p.Button,{label:"Alterar",onClick:function(){return function(e){Object(I.confirmDialog)({message:"Itens nao salvos no carrinho serao apagados. Confirma alteracao?",header:"Confirmacao",icon:"pi pi-exclamation-triangle",acceptLabel:"Sim",rejectLabel:"Nao",accept:function(){return R(e.id,e.cliente__id,e.cliente__nome)}})}(e)}}),e.liberado_rep?Object(w.jsx)(w.Fragment,{}):e.liberado_cliente&&T?Object(w.jsx)(p.Button,{label:"Processar",onClick:function(){return function(e){y(!0),O()({method:"GET",url:g+"/pedidos/processa/"+e.id,headers:{Authorization:"Token "+i}}).then((function(e){y(!1),e.data.confirmed?E():N.current.show([{severity:"error",summary:e.data.message,sticky:!0}])}))}(e)}}):Object(w.jsx)(w.Fragment,{})]})}})]})})]})},G=function(){var e=C("token",null),t=Object(u.a)(e,2),o=t[0],c=(t[1],C("carrinhoId",null)),r=Object(u.a)(c,2),s=r[0],i=(r[1],Object(n.useRef)(null)),l=Object(n.useState)([]),d=Object(u.a)(l,2),j=d[0],b=d[1];Object(n.useEffect)((function(){h(),document.title="Greenish B2B | Promocoes"}),[]);var h=function(){O()({method:"GET",headers:{Authorization:"Token "+o},url:"https://greencomapi.azurewebsites.net/promocoes"}).then((function(e){b(e.data.promocoes),console.log(e.data.promocoes)}))};return Object(w.jsxs)("div",{children:[Object(w.jsx)(B.Messages,{ref:i}),Object(w.jsx)("div",{className:"card",children:Object(w.jsxs)(P.DataTable,{value:j,children:[Object(w.jsx)(A.Column,{field:"descricao",header:"Promocao"}),Object(w.jsx)(A.Column,{header:"Acoes",body:function(e){var t=e.condicoes.slice().map((function(t,n){return Object(w.jsx)(p.Button,{className:"p-mr-2",label:e.tipo_condicao+" - "+t.condicao,onClick:function(){return function(e,t){var n=g+"/promocoes/"+s;O()({method:"GET",url:n,headers:{Authorization:"Token "+o},params:{id_promocao:e,id_condicao:t}}).then((function(e){i.current.show([{severity:"success",summary:"Promo\xe7\xe3o computada com sucesso",sticky:!1}])}))}(e.id_promocao,t.id)}})}));return Object(w.jsx)(a.a.Fragment,{children:t})}})]})}),Object(w.jsx)(p.Button,{className:"p-d-block p-mx-auto p-mt-6",label:"Remover Promo\xe7\xf5es",onClick:function(){return function(){var e=g+"/promocoes/remove/"+s;O()({method:"GET",headers:{Authorization:"Token "+o},url:e}).then((function(e){i.current.show([{severity:"success",summary:"Promo\xe7\xf5es Removidas com sucesso",sticky:!1}])}))}()}})]})};o(32);function L(e){var t=Object(n.useState)(""),o=Object(u.a)(t,2),a=o[0],c=o[1],r=Object(n.useState)(""),s=Object(u.a)(r,2),i=s[0],l=s[1],d=Object(n.useState)(""),j=Object(u.a)(d,2),b=j[0],h=j[1],m=C("token",null),f=Object(u.a)(m,2),v=f[0],x=(f[1],Object(n.useState)(!1)),_=Object(u.a)(x,2),k=_[0],y=_[1],N=Object(n.useRef)(null),T=C("tipoConta",null),I=Object(u.a)(T,1)[0];Object(n.useEffect)((function(){document.title="Greenish B2B | Conta"}),[]);return Object(w.jsxs)("div",{children:[Object(w.jsxs)(D.Dialog,{title:"Alterar Senha",visible:k,onHide:function(){return y(!1)},children:[Object(w.jsx)(B.Messages,{ref:N}),Object(w.jsx)("h5",{children:"Senha Atual"}),Object(w.jsx)(S.Password,{value:a,onChange:function(e){return c(e.target.value)},feedback:!1}),Object(w.jsx)("h5",{children:"Senha Nova"}),Object(w.jsx)(S.Password,{value:i,onChange:function(e){return l(e.target.value)},feedback:!1}),Object(w.jsx)("h5",{children:"Confirme a Nova Senha"}),Object(w.jsx)(S.Password,{value:b,onChange:function(e){return h(e.target.value)},feedback:!1}),Object(w.jsx)("h5",{}),Object(w.jsx)(p.Button,{label:"Confirmar",onClick:function(){return function(){if(i===b){var e={senhaNova:i,senhaAtual:a},t={headers:{Authorization:"Token "+v}};O.a.post(g+"/change_password/",e,t).then((function(e){e.data.confirmed?(localStorage.clear(),window.location.href="/login"):N.current.show([{severity:"error",summary:e.data.message,sticky:!1}])}))}else N.current.show([{severity:"error",summary:"Confirmacao de nova senha invalida",sticky:!1}]);c(""),l(""),h("")}()}})]}),"visitante"===I?Object(w.jsx)(w.Fragment,{}):Object(w.jsx)(p.Button,{label:"Alterar Senha",onClick:function(){return y(!0)}}),Object(w.jsx)(p.Button,{label:"Logout",onClick:function(){return function(){var e={headers:{Authorization:"Token "+v}};O.a.get(g+"/accounts/logout",e).then((function(e){localStorage.clear(),window.location.href="/"}))}()}})]})}var M=o(31),U=o(29),J=o(21);function H(e){var t=Object(n.useState)(!1),o=Object(u.a)(t,2),a=o[0],c=o[1],r=Object(w.jsxs)("div",{children:[Object(w.jsx)("h3",{children:e.produto.produto__descricao}),Object(w.jsx)("p",{children:e.produto.produto__produto+" - "+e.produto.produto__linha+" - R$"+e.produto.preco})]});return Object(w.jsx)("div",{className:"p-shadow-2 p-m-2",children:Object(w.jsxs)(U.Card,{header:r,children:[Object(w.jsx)("img",{top:!0,width:"100%",src:e.produto.produto__url_imagem,alt:"Sem Imagem"}),Object(w.jsx)("div",{className:"p-grid",children:Object(w.jsxs)("div",{className:"p-field p-col-12 p-md-3",children:[Object(w.jsx)(p.Button,{label:"Detalhes",icon:"pi pi-external-link",onClick:function(){c(!0)}}),Object(w.jsx)(D.Dialog,{header:e.produto.produto__produto,maximizable:!0,visible:a,style:{width:"75vw"},onHide:function(){c(!1)},children:Object(w.jsxs)("div",{className:"p-grid",children:[Object(w.jsx)("div",{className:"p-col",children:Object(w.jsx)("img",{top:!0,width:"100%",src:e.produto.produto__url_imagem,alt:"Sem Imagem"})}),Object(w.jsx)("div",{className:"p-col-fixed",style:{width:"500px"},children:Object(w.jsx)(Y,{produto:e.produto})})]})})]})})]})})}function Y(e){var t=Object(n.useState)(e.produto),o=Object(u.a)(t,1)[0],a=Object(n.useState)(""),c=Object(u.a)(a,2),r=c[0],s=c[1],i=Object(n.useState)({}),l=Object(u.a)(i,2),d=l[0],j=l[1],b=Object(n.useState)(Object(w.jsx)("div",{})),h=Object(u.a)(b,2),m=h[0],f=h[1],v=C("token",null),x=Object(u.a)(v,2),k=x[0],y=(x[1],C("clienteId",null)),N=Object(u.a)(y,1)[0],S=C("carrinhoId",null),T=Object(u.a)(S,2),I=T[0],P=T[1],A=Object(n.useRef)(null),E=_(o.produto__produto,r).dadosPeriodo;Object(n.useEffect)((function(){var e={};for(var t in E){var n=E[t].cor,a=new Array(o.produto__qtd_tamanhos).fill(0);e[n]=a}j(e)}),[E]),Object(n.useEffect)((function(){if(""!==r){var e=E.map((function(e){return Object(w.jsx)(V,{dados:e,pedido:d,setPedido:j})}));f(e)}}),[d]);return Object(w.jsxs)("div",{children:[Object(w.jsx)(B.Messages,{ref:A}),Object(w.jsx)(J.Dropdown,{id:"dropdown",value:r,options:JSON.parse(e.produto.produto__periodos),onChange:function(e){return s(e.value)}}),Object(w.jsxs)("div",{className:"p-grid",children:[Object(w.jsx)("div",{className:"p-col",children:"TIPO"}),Object(w.jsx)("div",{className:"p-col",children:"COR"}),function(e){return JSON.parse(e.produto.produto__tamanhos).map((function(e){return Object(w.jsx)("div",{className:"p-col-1",children:e})}))}(e)]}),m,Object(w.jsx)(p.Button,{label:"Adicionar",onClick:function(){var e=0;for(var t in d){e+=d[t].reduce((function(e,t){return e+t}),0)}var n={produto:o,periodo:r,qtds:d,qtd_total:e,clienteId:N,carrinhoId:I},a={headers:{Authorization:"Token "+k}};console.log(n),console.log(a.headers),e>0?O.a.post(g+"/carrinho/",n,a).then((function(e){e.data.confirmed?(A.current.show([{severity:"success",summary:e.data.message,sticky:!0}]),P(e.data.carrinhoId)):A.current.show([{severity:"error",summary:e.data.message,sticky:!0}])})).catch((function(e){console.log(e.message)})):A.current.show([{severity:"error",summary:"Quantidade deve ser maior que 0",sticky:!1}])}})]})}function V(e){var t=function(e,t,o){null==e&&(e=0);var n=t.pedido;n[t.dados.cor][o]=e,t.setPedido(n)};return Object(w.jsxs)("div",{className:"p-grid",children:[Object(w.jsx)("div",{className:"p-col",children:e.dados.desc_liberacao}),Object(w.jsx)("div",{className:"p-col",children:e.dados.cor+" - "+e.dados.desc_cor}),function(e){var o=[];if(0===Object.keys(e.pedido).length)return o.map((function(e){return e}));var n=function(){var n=a;e.dados.liberacao?o.push(Object(w.jsx)("div",{className:"p-col-1 p-mt-4",children:Object(w.jsx)(M.InputNumber,{min:0,id:e.dados.cor+n,value:e.pedido[e.dados.cor][n],onValueChange:function(o){return t(o.value,e,n)},mode:"decimal",showButtons:!0,buttonLayout:"vertical",style:{width:"2.5em"},decrementButtonClassName:"p-button-secondary",incrementButtonClassName:"p-button-secondary",incrementButtonIcon:"pi pi-plus",decrementButtonIcon:"pi pi-minus"})})):(console.log(e.dados.qtds),o.push(Object(w.jsx)("div",{className:"p-col-1 p-mt-4",children:Object(w.jsxs)("span",{className:"p-float-label",children:[Object(w.jsx)(M.InputNumber,{max:e.dados.qtds[n],min:0,id:e.dados.cor+n,value:e.pedido[e.dados.cor][n],onValueChange:function(o){return t(o.value,e,n)},mode:"decimal",showButtons:!0,buttonLayout:"vertical",style:{width:"2.5em"},decrementButtonClassName:"p-button-secondary",incrementButtonClassName:"p-button-secondary",incrementButtonIcon:"pi pi-plus",decrementButtonIcon:"pi pi-minus"}),Object(w.jsx)("label",{htmlFor:e.dados.cor+n,children:e.dados.qtds[n]})]})})))};for(var a in e.dados.qtds)n();return o.map((function(e){return e}))}(e)]})}var $=o(76);function Q(){var e=Object(n.useState)(Object(w.jsx)("div",{})),t=Object(u.a)(e,2),o=t[0],a=t[1],c=Object(n.useState)(0),r=Object(u.a)(c,2),s=r[0],i=r[1],l=Object(n.useState)(12),d=Object(u.a)(l,2),j=d[0],b=d[1],h=Object(n.useState)(0),m=Object(u.a)(h,2),v=m[0],_=m[1],k=C("token",null),y=Object(u.a)(k,2),N=(y[0],y[1],C("colecao","Todas")),S=Object(u.a)(N,2),B=S[0],T=S[1],I=C("periodo","Todos"),P=Object(u.a)(I,2),A=P[0],E=P[1],z=C("clienteId",null),R=Object(u.a)(z,1)[0],F=C("tamColuna",2),q=Object(u.a)(F,2),G=q[0],L=q[1],M=Object(n.useState)("p-col-12 p-md-6 p-lg-"+G),U=Object(u.a)(M,2),Y=U[0],V=U[1],Q=Object(n.useState)(!1),W=Object(u.a)(Q,2),Z=W[0],K=W[1],X=C("colecoes",[]),ee=Object(u.a)(X,1)[0],te=C("periodos",[]),oe=Object(u.a)(te,1)[0];Object(n.useEffect)((function(){document.title="Greenish B2B | Produtos"}),[]);var ne=function(e,t,o){var a=Object(n.useState)({}),c=Object(u.a)(a,2),r=c[0],s=c[1],i=Object(f.g)(),l=C("token",null),d=Object(u.a)(l,2),j=d[0];return d[1],Object(n.useEffect)((function(){var n=x.a.parse(window.location.search),a=g+i.pathname+"/",c=e;"Todas"===c&&(c=null);var r=t;"Todos"===r&&(r=null),O()({method:"GET",url:a,headers:{Authorization:"Token "+j},params:{query:n.query,colecao:c,periodo:r,clienteId:o}}).then((function(e){s(e.data)}))}),[i,e,t,o]),{produtos:r}}(B,A,R).produtos;return Object(n.useEffect)((function(){if("lista"in ne){_(ne.lista.length);var e,t=ne.lista.slice(s,s+j);e=t.map((function(e,t){return Object(w.jsx)("div",{className:Y,children:Object(w.jsx)(H,{produto:e},t)})})),a(e),window.scrollTo(0,0)}}),[ne,Y,s,j]),Object(n.useEffect)((function(){V("p-col-12 p-md-6 p-lg-"+G)}),[G]),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("div",{children:[Object(w.jsx)(p.Button,{label:"Filtrar",onClick:function(){K(!0)},className:"p-mr-2"}),Object(w.jsx)(D.Dialog,{header:"Filtros",visible:Z,style:{width:"75vw"},onHide:function(){K(!1)},children:Object(w.jsxs)("div",{className:"p-grid",children:[Object(w.jsxs)("div",{className:"p-col-12 p-md-6 p-lg-2",children:[Object(w.jsx)("h3",{children:"Colecao"}),Object(w.jsx)(J.Dropdown,{id:"dropdown",value:B,options:ee,onChange:function(e){return T(e.value)}})]}),Object(w.jsxs)("div",{className:"p-col-12 p-md-6 p-lg-2",children:[Object(w.jsx)("h3",{children:"Periodo"}),Object(w.jsx)(J.Dropdown,{id:"dropdown",value:A,options:oe,onChange:function(e){return E(e.value)}})]}),Object(w.jsxs)("div",{className:"p-col-12 p-md-6 p-lg-2",children:[Object(w.jsx)("h3",{children:"Tamanho Imagem"}),Object(w.jsx)(J.Dropdown,{id:"dropdown",value:G,options:[2,3,4],onChange:function(e){return L(e.value)}})]})]})})]}),Object(w.jsx)("div",{className:"p-grid",children:o}),Object(w.jsx)($.Paginator,{first:s,rows:j,totalRecords:v,rowsPerPageOptions:[12,24,36],onPageChange:function(e){i(e.first),b(e.rows)}})]})}var W=o(77);function Z(e){var t=Object(n.useState)(!1),o=Object(u.a)(t,2),a=o[0],c=o[1],r=C("token",null),s=Object(u.a)(r,1)[0],i=Object(n.useState)(!0),l=Object(u.a)(i,2),d=l[0],j=l[1],b=Object(n.useRef)(null),h=function(){c(!1)},m=function(){O()({method:"GET",url:g+"/carrinho/delete_item/"+e.produto.id,headers:{Authorization:"Token "+s}}).then((function(t){e.forceUpdate()}))},f=e.produto.preco-e.produto.desconto,v=e.produto.preco,x=Object(w.jsxs)("div",{children:[Object(w.jsx)("h3",{children:e.produto.produto__descricao}),Object(w.jsx)("p",{children:e.produto.produto__produto+" - "+e.produto.qtd_item+" - R$"+e.produto.valor_item}),e.produto.desconto>0?Object(w.jsx)("p",{children:"Pre\xe7o: De R$"+v+" por R$"+f}):Object(w.jsx)("p",{children:"Pre\xe7o: R$"+e.produto.preco})]});return Object(w.jsx)("div",{className:"p-shadow-2 p-m-2",children:Object(w.jsxs)(U.Card,{header:x,children:[Object(w.jsx)(B.Messages,{ref:b}),Object(w.jsx)("img",{top:!0,width:"100%",src:e.produto.produto__url_imagem,alt:"Sem Imagem"}),Object(w.jsxs)("div",{className:"p-grid",children:[Object(w.jsx)(p.Button,{label:"Remover",onClick:function(){Object(I.confirmDialog)({message:"Confirma a exclusao do produto?",header:"Confirmacao",icon:"pi pi-exclamation-triangle",acceptLabel:"Sim",rejectLabel:"Nao",accept:function(){return m()}})}}),Object(w.jsxs)(W.Panel,{header:"Alterar",collapsed:d,onToggle:function(e){return j(e.value)},toggleable:!0,children:[Object(w.jsx)("div",{className:"p-field p-col-12 p-md-4 p-mt-1",children:Object(w.jsxs)("span",{className:"p-float-label",children:[Object(w.jsx)(J.Dropdown,{inputId:"dropdown",value:e.periodoAtual,options:JSON.parse(e.produto.periodos_alteracao),onChange:function(t){return function(t){if(console.log(t),""!==t){var o={periodo:t,produto:e.produto},n={headers:{Authorization:"Token "+s}};O.a.post(g+"/carrinho/update_periodo/"+e.produto.id,o,n).then((function(t){t.data.confirmed?(j(!1),e.forceUpdate()):b.current.show([{severity:"error",summary:t.data.message,sticky:!1}])})).catch((function(e){console.log(e.message)}))}}(t.value)}}),Object(w.jsx)("label",{htmlFor:"dropdown",children:"Periodo"})]})}),Object(w.jsx)(p.Button,{label:"Alterar Quantidades",onClick:function(){c(!0)}})]})]}),Object(w.jsx)("div",{className:"p-field p-col-12 p-md-3",children:Object(w.jsx)(D.Dialog,{header:e.produto.produto__produto,maximizable:!0,visible:a,style:{width:"75vw"},onHide:function(){return h()},children:Object(w.jsxs)("div",{className:"p-grid",children:[Object(w.jsx)("div",{className:"p-col",children:Object(w.jsx)("img",{top:!0,width:"100%",src:e.produto.produto__url_imagem,alt:"Sem Imagem"})}),Object(w.jsx)("div",{className:"p-col-fixed",style:{width:"500px"},children:Object(w.jsx)(K,{periodoAtual:e.periodoAtual,produto:e.produto,forceUpdate:e.forceUpdate,hideModal:h})})]})})})]})})}function K(e){var t=Object(n.useState)(e.produto),o=Object(u.a)(t,1)[0],a=Object(n.useState)(e.periodoAtual),c=Object(u.a)(a,1)[0],r=Object(n.useState)({}),s=Object(u.a)(r,2),i=s[0],l=s[1],d=Object(n.useRef)(null),j=Object(n.useState)(Object(w.jsx)("div",{})),b=Object(u.a)(j,2),h=b[0],m=b[1],f=C("clienteId",null),v=Object(u.a)(f,1)[0],x=C("carrinhoId",null),k=Object(u.a)(x,1)[0],y=C("token",null),N=Object(u.a)(y,1)[0],S=_(o.produto__produto,c).dadosPeriodo;Object(n.useEffect)((function(){var e=function(e,t){var o={},n=JSON.parse(t.qtds),a=!1;for(var c in e){var r=e[c],s=r.cor,i=new Array(t.produto__qtd_tamanhos).fill(0);if(s in n)if(r.liberacao)i=n[s];else{var l=ee(n[s],r.qtds),d=Object(u.a)(l,2);i=d[0],d[1]&&(a=!0)}o[s]=i}return[o,a]}(S,o),t=Object(u.a)(e,2),n=t[0];t[1];l(n)}),[S]),Object(n.useEffect)((function(){if(""!==c){var e=S.map((function(e){return Object(w.jsx)(X,{dados:e,pedido:i,setPedido:l})}));m(e)}}),[i]);return Object(w.jsxs)("div",{children:[Object(w.jsx)(B.Messages,{ref:d}),Object(w.jsxs)("div",{className:"p-grid",children:[Object(w.jsx)("div",{className:"p-col",children:"TIPO"}),Object(w.jsx)("div",{className:"p-col",children:"COR"}),JSON.parse(o.produto__tamanhos).map((function(e){return Object(w.jsx)("div",{className:"p-col-1",children:e})}))]}),h,Object(w.jsx)(p.Button,{label:"Alterar",onClick:function(){var t=0;for(var n in i){t+=i[n].reduce((function(e,t){return e+t}),0)}var a={produto:o,qtds:i,qtd_total:t,clienteId:v,carrinhoId:k},c={headers:{Authorization:"Token "+N}};O.a.post(g+"/carrinho/update_qtds/"+o.id,a,c).then((function(t){t.data.confirmed?(d.current.show([{severity:"success",summary:t.data.message,sticky:!0}]),e.forceUpdate(),e.hideModal()):d.current.show([{severity:"error",summary:t.data.message,sticky:!0}])})).catch((function(e){console.log(e.message)}))}})]})}function X(e){var t=function(e,t,o){var n=t.pedido;n[t.dados.cor][o]=e,t.setPedido(n)};return Object(w.jsxs)("div",{className:"p-grid",children:[Object(w.jsx)("div",{className:"p-col",children:e.dados.desc_liberacao}),Object(w.jsx)("div",{className:"p-col",children:e.dados.cor+" - "+e.dados.desc_cor}),function(e){var o=[];if(0===Object.keys(e.pedido).length)return o.map((function(e){return e}));var n=function(){var n=a;e.dados.liberacao?o.push(Object(w.jsx)("div",{className:"p-col-1 p-mt-4",children:Object(w.jsx)(M.InputNumber,{min:0,id:e.dados.cor+n,value:e.pedido[e.dados.cor][n],onValueChange:function(o){return t(o.value,e,n)},mode:"decimal",showButtons:!0,buttonLayout:"vertical",style:{width:"2.5em"},decrementButtonClassName:"p-button-secondary",incrementButtonClassName:"p-button-secondary",incrementButtonIcon:"pi pi-plus",decrementButtonIcon:"pi pi-minus"})})):o.push(Object(w.jsx)("div",{className:"p-col-1 p-mt-4",children:Object(w.jsxs)("span",{className:"p-float-label",children:[Object(w.jsx)(M.InputNumber,{max:e.dados.qtds[n],min:0,id:e.dados.cor+n,value:e.pedido[e.dados.cor][n],onValueChange:function(o){return t(o.value,e,n)},mode:"decimal",showButtons:!0,buttonLayout:"vertical",style:{width:"2.5em"},decrementButtonClassName:"p-button-secondary",incrementButtonClassName:"p-button-secondary",incrementButtonIcon:"pi pi-plus",decrementButtonIcon:"pi pi-minus"}),Object(w.jsx)("label",{htmlFor:e.dados.cor+n,children:e.dados.qtds[n]})]})}))};for(var a in e.dados.qtds)n();return o.map((function(e){return e}))}(e)]})}function ee(e,t){var o=[],n=!1;for(var a in e){t[a]-e[a]<0?(o.push(t[a]),n=!0):o.push(e[a])}return[o,n]}var te=o(78),oe=(o(171),o(173),o(79));function ne(){var e=Object(n.useState)(Object(w.jsx)("div",{})),t=Object(u.a)(e,2),o=t[0],a=t[1],c=Object(n.useState)(0),r=Object(u.a)(c,2),s=r[0],i=r[1],l=C("clienteId",null),d=Object(u.a)(l,2),j=d[0],b=d[1],h=C("clienteNome",null),m=Object(u.a)(h,2),f=m[0],v=m[1],x=C("carrinhoId",null),_=Object(u.a)(x,2),k=_[0],y=_[1],N=C("token",null),S=Object(u.a)(N,2),B=S[0],T=(S[1],C("isRep",null)),I=Object(u.a)(T,2),P=I[0],A=(I[1],Object(n.useState)(!1)),E=Object(u.a)(A,2),z=E[0],R=E[1],F=Object(n.useState)("Teste"),q=Object(u.a)(F,2),G=q[0],L=q[1],M=C("tipoConta",null),U=Object(u.a)(M,1)[0],J=function(e,t){var o=Object(n.useState)([]),a=Object(u.a)(o,2),c=a[0],r=a[1],s=Object(n.useState)(0),i=Object(u.a)(s,2),l=i[0],d=i[1],j=Object(n.useState)(0),b=Object(u.a)(j,2),p=b[0],h=b[1],m=Object(n.useState)(""),f=Object(u.a)(m,2),v=f[0],x=f[1],g=Object(n.useState)(null),_=Object(u.a)(g,2),w=_[0],k=_[1],y=C("carrinhoId",null),N=Object(u.a)(y,2),S=N[0],B=N[1],T=C("token",null),I=Object(u.a)(T,2),P=I[0];return I[1],Object(n.useEffect)((function(){var e={carrinhoId:S,clienteId:t};O()({method:"GET",headers:{Authorization:"Token "+P},url:"https://greencomapi.azurewebsites.net/carrinho",params:e}).then((function(e){e.data.confirmed&&B(e.data.carrinhoId),r(e.data.dados),x(e.data.observacoes),k(e.data.message),d(e.data.valor_total),h(e.data.qtd_total)}))}),[e,S,v,l,p]),{carrinho:c,emptyMessage:w,observacoes:v,valorTotal:l,qtdTotal:p}}(s,j),H=J.carrinho,Y=J.emptyMessage,V=J.observacoes,$=J.valorTotal,Q=J.qtdTotal,W=Object(n.useState)(""),Z=Object(u.a)(W,2),K=Z[0],X=Z[1],ee=function(){i((function(e){return e+1}))};Object(n.useEffect)((function(){document.title="Greenish B2B | Carrinho"}),[]),Object(n.useEffect)((function(){X(V)}),[V]),Object(n.useEffect)((function(){var e=H,t=Object(w.jsx)("div",{className:"p-col-12 p-md-6 p-lg-3"});e.length>0&&(t=e.map((function(e,t){return Object(w.jsx)("div",{className:"p-col-12 p-md-12 p-lg-12",children:Object(w.jsx)(ae,{forceUpdate:ee,periodoAtual:e.periodo,qtd_periodo:e.qtd_periodo,valor_periodo:e.valor_periodo,itens:e.itens},t)})}))),a(t)}),[H,Y,k,s]);return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("p",{children:Y}),Object(w.jsx)("p",{children:"Cliente: "+f+" | Valor Total: "+$+" | Quantidade Total: "+Q}),Object(w.jsx)(p.Button,{label:"Salvar",onClick:function(){return R(!0)},className:"p-mr-2"}),Object(w.jsxs)(D.Dialog,{header:"Observacoes",visible:z,onHide:function(){return R(!1)},children:[Object(w.jsx)("div",{children:Object(w.jsx)(te.InputTextarea,{rows:10,cols:50,value:K,onChange:function(e){return X(e.target.value)}})}),Object(w.jsx)("div",{children:Object(w.jsx)(oe.SelectButton,{value:G,className:"p-d-block p-mx-auto p-mt-2",options:["Teste","Real"],onChange:function(e){return L(e.value)}})}),Object(w.jsx)("div",{children:Object(w.jsx)(p.Button,{label:"Salvar",className:"p-d-block p-mx-auto p-mt-2",onClick:function(){return function(){if("visitante"===U)O()({method:"GET",url:g+"/pedidos/gera_pdf/"+k+"/",headers:{Authorization:"Token "+B}}).then((function(e){e.data.confirmed?window.open(g+"/"+e.data.file,"popUpWindow"):console.log(e.data)}));else{var e=!1;"Teste"===G&&(e=!0),O()({method:"GET",url:g+"/pedidos/salva/"+k+"/",headers:{Authorization:"Token "+B},params:{observacoes:K,isTeste:e}}).then((function(e){e.data.confirmed?(P?(b(null),v(null),y(null)):y(null),window.location.href="/pedidos"):console.log(e.data)}))}}()}})})]}),Object(w.jsx)("div",{className:"p-grid",children:o})]})}function ae(e){var t,o=e.itens.slice();return t=o.map((function(t,o){return Object(w.jsx)("div",{className:"p-col-6 p-md-6 p-lg-2",children:Object(w.jsx)(Z,{periodoAtual:e.periodoAtual,forceUpdate:e.forceUpdate,produto:t},o)})})),Object(w.jsx)(U.Card,{title:e.periodoAtual+" - "+e.qtd_periodo+" - "+e.valor_periodo,children:Object(w.jsx)("div",{className:"p-grid",children:t})})}var ce=function(){var e=C("token",null),t=Object(u.a)(e,2),o=t[0],c=(t[1],C("carrinhoId",null)),r=Object(u.a)(c,2),s=r[0],i=(r[1],Object(n.useRef)(null)),l=Object(n.useState)([]),d=Object(u.a)(l,2),j=d[0],b=d[1];Object(n.useEffect)((function(){h(),document.title="Greenish B2B | Promocoes"}),[]);var h=function(){O()({method:"GET",headers:{Authorization:"Token "+o},url:"https://greencomapi.azurewebsites.net/promocoes"}).then((function(e){b(e.data.promocoes),console.log(e.data.promocoes)}))};return Object(w.jsxs)("div",{children:[Object(w.jsx)(B.Messages,{ref:i}),Object(w.jsx)("div",{className:"card",children:Object(w.jsxs)(P.DataTable,{value:j,children:[Object(w.jsx)(A.Column,{field:"descricao",header:"Promocao"}),Object(w.jsx)(A.Column,{header:"Acoes",body:function(e){var t=e.condicoes.slice().map((function(t,n){return Object(w.jsx)(p.Button,{className:"p-mr-2",label:e.tipo_condicao+" - "+t.condicao,onClick:function(){return function(e,t){var n=g+"/promocoes/"+s;O()({method:"GET",url:n,headers:{Authorization:"Token "+o},params:{id_promocao:e,id_condicao:t}}).then((function(e){i.current.show([{severity:"success",summary:"Promo\xe7\xe3o computada com sucesso",sticky:!1}])}))}(e.id_promocao,t.id)}})}));return Object(w.jsx)(a.a.Fragment,{children:t})}})]})}),Object(w.jsx)(p.Button,{className:"p-d-block p-mx-auto p-mt-6",label:"Remover Promo\xe7\xf5es",onClick:function(){return function(){var e=g+"/promocoes/remove/"+s;O()({method:"GET",headers:{Authorization:"Token "+o},url:e}).then((function(e){i.current.show([{severity:"success",summary:"Promo\xe7\xf5es Removidas com sucesso",sticky:!1}])}))}()}})]})},re=o(44),se=function(e){Object(l.a)(o,e);var t=Object(d.a)(o);function o(e){var n;return Object(s.a)(this,o),(n=t.call(this,e)).state={},n}return Object(i.a)(o,[{key:"verificaLogin",value:function(){var e=JSON.parse(localStorage.getItem("loggedin"));return null==e&&(e=!1),e}},{key:"render",value:function(){var e=this.verificaLogin();return Object(w.jsx)("div",{children:Object(w.jsx)("div",{children:Object(w.jsx)(re.a,{children:Object(w.jsxs)("div",{children:[Object(w.jsx)("nav",{children:Object(w.jsx)(y,{loggedIn:e})}),Object(w.jsxs)(f.d,{children:[Object(w.jsx)(f.b,{path:"/login",component:T}),Object(w.jsx)(f.b,{path:"/clientes",component:E}),Object(w.jsx)(f.b,{path:"/pedidos",component:q}),Object(w.jsx)(f.b,{path:"/promocoes",component:G}),Object(w.jsx)(f.b,{path:"/conta",component:L}),Object(w.jsx)(f.b,{path:"/carrinho",component:ne}),Object(w.jsx)(f.b,{path:"/busca",component:Q}),Object(w.jsx)(f.b,{path:"/teste",component:ce}),Object(w.jsx)(f.b,{path:"/:linha/:categoria/:subcategoria",children:e?Object(w.jsx)(Q,{}):Object(w.jsx)(f.a,{to:"/login"})}),Object(w.jsx)(f.b,{path:"/:linha/:categoria",children:e?Object(w.jsx)(Q,{}):Object(w.jsx)(f.a,{to:"/login"})}),Object(w.jsx)(f.b,{path:"/",component:N})]})]})})})})}}]),o}(a.a.Component),ie=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,181)).then((function(t){var o=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;o(e),n(e),a(e),c(e),r(e)}))};o(177),o(178),o(179);r.a.render(Object(w.jsx)(a.a.StrictMode,{children:Object(w.jsx)(se,{})}),document.getElementById("root")),ie()},84:function(e,t,o){}},[[180,1,2]]]);
//# sourceMappingURL=main.b23322ca.chunk.js.map