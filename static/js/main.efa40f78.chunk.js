(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{13:function(t,e,a){},15:function(t,e,a){"use strict";a.r(e);var c=a(1),n=a.n(c),s=a(3),r=a.n(s),o=(a(13),a(6)),i=a(4),l=a(5),d=a(8),u=a(7),j=a(0),b=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(){var t;return Object(i.a)(this,a),(t=e.call(this)).storeInputData=function(e){t.setState({formInputData:e.target.value})},t.storeFinalData=function(){t.setState({storeData:[].concat(Object(o.a)(t.state.storeData),[t.state.formInputData])})},t.deleteStoreData=function(e){var a=t.state.storeData;1==window.confirm("Are you Sure ?")&&(a.splice(Number(e.target.id),1),t.setState({storeData:a}))},t.state={formInputData:"",storeData:[]},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this;return Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-lg-5 col-md-10",children:Object(j.jsx)("div",{className:"card mt-3",children:Object(j.jsx)("div",{className:"card-body",children:Object(j.jsxs)("form",{children:[Object(j.jsx)("input",{type:"text",className:"form-control",placeholder:"Add Data...",onKeyUp:function(e){t.storeInputData(e)}}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{type:"button",className:"btn btn-success",onClick:this.storeFinalData,children:"Add Data"})]})})})}),Object(j.jsx)("div",{className:"col-lg-5 col-md-10",children:Object(j.jsx)("div",{className:"card mt-3",children:Object(j.jsx)("div",{className:"card-body",children:Object(j.jsx)("ul",{className:"list-group",children:this.state.storeData.map((function(e,a){return Object(j.jsxs)("li",{className:"list-group-item",children:[e,Object(j.jsx)("button",{type:"button",className:"btn btn-danger",id:a,onClick:function(e){t.deleteStoreData(e)},children:"Delete"})]},a)}))})})})})]})}}]),a}(c.Component),m=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(e){var a=e.getCLS,c=e.getFID,n=e.getFCP,s=e.getLCP,r=e.getTTFB;a(t),c(t),n(t),s(t),r(t)}))};r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),m()}},[[15,1,2]]]);
//# sourceMappingURL=main.efa40f78.chunk.js.map