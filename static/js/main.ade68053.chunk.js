(this.webpackJsonpdrugtest=this.webpackJsonpdrugtest||[]).push([[0],{55:function(t,e,a){},63:function(t,e,a){"use strict";a.r(e);var i=a(0),c=a.n(i),n=a(12),r=a.n(n),s=(a(55),a(13)),d=a(4),l=a(18),o=a(14),j=a(85),b=a(81),u=a(84),O=a(78),p=a(86),g=a(80),f=a(43),x=a.n(f),h=c.a.createContext(null),v=a(2),m=Object(O.a)((function(t){return{editableTitleContainer:{margin:t.spacing(1),display:"flex"},editableTitle:{flexGrow:1,fontSize:"1.2rem",fontWeight:"bold"},input:{fontSize:"1.2rem",fontWeight:"bold",margin:t.spacing(1),"&:focus":{background:"#ddd"}}}}));function C(t){var e=t.title,a=t.listId,c=Object(i.useState)(!1),n=Object(o.a)(c,2),r=n[0],s=n[1],d=Object(i.useState)(e),l=Object(o.a)(d,2),j=l[0],b=l[1],u=Object(i.useContext)(h).updateListTitle,O=m();return Object(v.jsx)("div",{children:r?Object(v.jsx)("div",{children:Object(v.jsx)(p.a,{onChange:function(t){b(t.target.value)},autoFocus:!0,value:j,inputProps:{className:O.input},fullWidth:!0,onBlur:function(){u(j,a),s(!1)}})}):Object(v.jsxs)("div",{className:O.editableTitleContainer,children:[Object(v.jsx)(g.a,{onClick:function(){return s(!r)},className:O.editableTitle,children:e}),Object(v.jsx)(x.a,{})]})})}var I=a(19),k=Object(O.a)((function(t){return{card:{padding:t.spacing(1,1,1,2),margin:t.spacing(1)}}}));function N(t){var e=t.card,a=t.index,i=k();return Object(v.jsx)(I.b,{draggableId:e.id,index:a,children:function(t){return Object(v.jsx)("div",Object(d.a)(Object(d.a)(Object(d.a)({ref:t.innerRef},t.dragHandleProps),t.draggableProps),{},{children:Object(v.jsx)(b.a,{className:i.card,children:e.title})}))}})}var T=a(87),L=a(10),y=a(82),w=a(83),A=a(45),E=a.n(A),F=Object(O.a)((function(t){return{card:{width:"280px",margin:t.spacing(0,1,1,1),paddingBottom:t.spacing(4)},input:{margin:t.spacing(1)},btnConfirm:{background:"#5AAC44",color:"#fff","&:hover":{background:Object(L.c)("#5AAC44",.75)}},confirm:{margin:t.spacing(0,1,1,1)}}}));function P(t){var e=t.setOpen,a=t.listId,c=t.type,n=F(),r=Object(i.useContext)(h),s=r.addMoreCard,d=r.addMoreList,l=Object(i.useState)(""),j=Object(o.a)(l,2),u=j[0],O=j[1];return Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{children:Object(v.jsx)(b.a,{className:n.card,children:Object(v.jsx)(p.a,{onChange:function(t){O(t.target.value)},multiline:!0,fullWidth:!0,inputProps:{className:n.input},value:u,placeholder:"card"===c?"Enter a title of this card..":"Enter list title..."})})}),Object(v.jsxs)("div",{className:n.confirm,children:[Object(v.jsx)(y.a,{className:n.btnConfirm,onClick:function(){"card"===c?(s(u,a),O(""),e(!1)):(d(u),O(""),e(!1))},children:"card"===c?"Add Card":"Add List"}),Object(v.jsx)(w.a,{onClick:function(){return e(!1)},children:Object(v.jsx)(E.a,{})})]})]})}var S=Object(O.a)((function(t){return{root:{marginTop:t.spacing(2)},addCard:{padding:t.spacing(1,1,1,2),margin:t.spacing(0,1,1,1),background:"#EBECF0","&:hover":{backgroundColor:Object(L.c)("#000",.25)}}}}));function B(t){var e=t.listId,a=t.type,c=S(),n=Object(i.useState)(!1),r=Object(o.a)(n,2),s=r[0],d=r[1];return Object(v.jsxs)("div",{className:c.root,children:[Object(v.jsx)(T.a,{in:s,children:Object(v.jsx)(P,{setOpen:d,listId:e,type:a})}),Object(v.jsx)(T.a,{in:!s,children:Object(v.jsx)(b.a,{className:c.addCard,elevation:0,onClick:function(){return d(!s)},children:Object(v.jsx)(g.a,{children:"card"===a?"+ Add Card":"+ Add List"})})})]})}var M=Object(O.a)((function(t){return{root:{minWidth:"300px",backgroundColor:"#EBECF0",marginLeft:t.spacing(1)},cardContainer:{marginTop:t.spacing(4)}}}));function W(t){var e=t.list,a=M();return Object(v.jsx)("div",{children:Object(v.jsxs)(b.a,{className:a.root,children:[Object(v.jsx)(u.a,{}),Object(v.jsx)(C,{title:e.title,listId:e.id}),Object(v.jsx)(I.c,{droppableId:e.id,children:function(t){return Object(v.jsxs)("div",Object(d.a)(Object(d.a)({ref:t.innerRef},t.droppableProps),{},{className:a.cardContainer,children:[e.cards.map((function(t,e){return Object(v.jsx)(N,{card:t,index:e},t.id)})),t.placeholder]}))}}),Object(v.jsx)(B,{type:"card",listId:e.id})]})})}var D={lists:{"list-1":{id:"list-1",title:"Todooo",cards:[{id:"card-1",title:"Learning how to cook"},{id:"card-2",title:"Making sandwich"},{id:"card-3",title:"Taking the trash out"}]},"list-2":{id:"list-2",title:"Doing",cards:[]}},listIds:["list-1","list-2"]},z=Object(O.a)((function(t){return{root:{display:"flex",minHeight:"100vh",background:"gray",width:"100%",overflowY:"auto"}}}));var H=function(){var t=z(),e=Object(i.useState)(D),a=Object(o.a)(e,2),c=a[0],n=a[1];return Object(v.jsx)(h.Provider,{value:{addMoreCard:function(t,e){console.log(t,e);var a={id:Object(j.a)(),title:t},i=c.lists[e];i.cards=[].concat(Object(l.a)(i.cards),[a]);var r=Object(d.a)(Object(d.a)({},c),{},{lists:Object(d.a)(Object(d.a)({},c.lists),{},Object(s.a)({},e,i))});n(r)},addMoreList:function(t){var e=Object(j.a)(),a={id:e,title:t,cards:[]},i={listIds:[].concat(Object(l.a)(c.listIds),[e]),lists:Object(d.a)(Object(d.a)({},c.lists),{},Object(s.a)({},e,a))};n(i)},updateListTitle:function(t,e){var a=c.lists[e];a.title=t;var i=Object(d.a)(Object(d.a)({},c),{},{lists:Object(d.a)(Object(d.a)({},c.lists),{},Object(s.a)({},e,a))});n(i)}},children:Object(v.jsx)(I.a,{onDragEnd:function(t){var e=t.destination,a=t.source,i=t.draggableId;if(console.log("\u76ee\u7684",e,"\u4f86\u6e90",a,"\u6293id",i),e){var r=c.lists[a.droppableId],l=c.lists[e.droppableId],o=r.cards.filter((function(t){return t.id===i}))[0];if(a.droppableId===e.droppableId){r.cards.splice(a.index,1),l.cards.splice(e.index,0,o);var j=Object(d.a)(Object(d.a)({},c),{},{lists:Object(d.a)(Object(d.a)({},c.lists),{},Object(s.a)({},r.id,l))});n(j)}else{var b;r.cards.splice(a.index,1),l.cards.splice(e.index,0,o);var u=Object(d.a)(Object(d.a)({},c),{},{lists:Object(d.a)(Object(d.a)({},c.lists),{},(b={},Object(s.a)(b,r.id,r),Object(s.a)(b,l.id,l),b))});n(u)}}},children:Object(v.jsxs)("div",{className:t.root,children:[c.listIds.map((function(t){var e=c.lists[t];return Object(v.jsx)(W,{list:e},t)})),Object(v.jsx)(B,{type:"list"})]})})})},J=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,89)).then((function(e){var a=e.getCLS,i=e.getFID,c=e.getFCP,n=e.getLCP,r=e.getTTFB;a(t),i(t),c(t),n(t),r(t)}))};r.a.render(Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(H,{})}),document.getElementById("root")),J()}},[[63,1,2]]]);
//# sourceMappingURL=main.ade68053.chunk.js.map