(this.webpackJsonpkeepapp=this.webpackJsonpkeepapp||[]).push([[0],{14:function(e,t,s){},16:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s(8),n=s.n(a),i=(s(14),s(0)),l=function(){return Object(i.jsxs)("div",{className:"Navbar",children:[Object(i.jsx)("div",{className:"togglemenu",children:Object(i.jsx)("i",{class:"fas fa-bars"})}),Object(i.jsxs)("div",{className:"logo",children:[Object(i.jsx)("img",{src:"./keep.png",alt:"logoimg"}),Object(i.jsx)("h1",{children:"Keep"})]}),Object(i.jsxs)("div",{className:"searchbar",children:[Object(i.jsx)("i",{class:"fas fa-search"}),Object(i.jsx)("input",{type:"search",placeholder:"Search"})]}),Object(i.jsxs)("div",{className:"menuright",children:[Object(i.jsx)("div",{className:"refresh",children:Object(i.jsx)("i",{class:"uil uil-cloud-check"})}),Object(i.jsx)("div",{className:"listview",children:Object(i.jsx)("i",{class:"uil uil-apps"})}),Object(i.jsx)("div",{className:"settings",children:Object(i.jsx)("i",{class:"uil uil-setting"})}),Object(i.jsx)("div",{className:"profile",children:Object(i.jsx)("img",{src:"./user.jpeg",alt:"",width:"40px"})})]})]})},j=s(9),r=s(2),b=s(5),o=s(7),u=function(e){var t=Object(c.useState)(!1),s=Object(r.a)(t,2),a=s[0],n=s[1],l=Object(c.useState)({title:"",content:""}),j=Object(r.a)(l,2),u=j[0],O=j[1],x=function(e){var t=e.target,s=t.name,c=t.value;O((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(b.a)({},s,c))}))};return Object(i.jsx)("div",{className:"input-note-box",onDoubleClick:function(){n(!1)},children:Object(i.jsxs)("form",{children:[a?Object(i.jsx)("input",{type:"text",name:"title",value:u.title,onChange:x,placeholder:"Title",autoComplete:"off"}):null,Object(i.jsx)("textarea",{cols:"",rows:"",name:"content",value:u.content,onChange:x,placeholder:"Take a note...",onClick:function(){n(!0)}}),a?Object(i.jsxs)("div",{className:"box-footer",children:[Object(i.jsx)("i",{class:"fas fa-bell"}),Object(i.jsx)("i",{class:"fas fa-user-plus"}),Object(i.jsx)("i",{class:"fas fa-palette"}),Object(i.jsx)("i",{class:"far fa-file-image"}),Object(i.jsx)("i",{class:"fas fa-inbox"}),Object(i.jsx)("i",{class:"fas fa-undo"}),Object(i.jsx)("i",{class:"fas fa-redo"}),Object(i.jsx)("i",{class:"fas fa-plus",onClick:function(){e.addbtnval(u),O({title:"",content:""})}})]}):null]})})},O=function(e){var t=Object(c.useState)(!1),s=Object(r.a)(t,2),a=s[0],n=s[1];return Object(i.jsx)("div",{className:"oneboxdiv",onMouseEnter:function(){n(!0)},children:Object(i.jsxs)("div",{className:"one-box",children:[Object(i.jsx)("h4",{children:e.title}),Object(i.jsx)("br",{}),Object(i.jsx)("p",{children:e.content}),a?Object(i.jsxs)("div",{className:"output-box-footer",children:[Object(i.jsx)("i",{class:"fas fa-bell"}),Object(i.jsx)("i",{class:"fas fa-user-plus"}),Object(i.jsx)("i",{class:"fas fa-palette"}),Object(i.jsx)("i",{class:"far fa-file-image"}),Object(i.jsx)("i",{class:"fas fa-inbox"}),Object(i.jsx)("i",{class:"far fa-trash-alt",onClick:function(){e.deleteItems(e.id)}})]}):null]})})},x=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),s=t[0],a=t[1],n=function(e){a((function(t){return t.filter((function(t,s){return s!==e}))}))};return Object(i.jsxs)("div",{children:[Object(i.jsx)(u,{addbtnval:function(e){a((function(t){return[].concat(Object(j.a)(t),[e])}))}}),Object(i.jsx)("div",{className:"outputdivbox",children:s.map((function(e,t){return Object(i.jsx)(O,{id:t,title:e.title,content:e.content,deleteItems:n},t)}))})]})},f=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(l,{}),Object(i.jsx)(x,{})]})};n.a.render(Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(f,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.9e28e83a.chunk.js.map