(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){e.exports=n(37)},37:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(14),l=n.n(r),u=n(2),o=function(e){var t=e.person,n=e.handleDelete;return c.a.createElement("li",null,c.a.createElement("div",{className:"text"},t.name," ",t.number),c.a.createElement("div",{className:"btn"},c.a.createElement("button",{onClick:function(){return n(t.id)}},c.a.createElement("i",{className:"fa fa-trash"}," Delete"))))},i=function(e){return c.a.createElement("form",{onSubmit:e.AddItem},c.a.createElement("div",null,c.a.createElement("p",null,"Insert name: "),c.a.createElement("input",{value:e.newName,onChange:e.handleNameChange,type:"text"}),c.a.createElement("p",null," Insert number:"),c.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange,type:"text"})),c.a.createElement("div",null,c.a.createElement("button",{type:"submit"},"Add")))},m=function(e){return c.a.createElement("div",null,"Search: ",c.a.createElement("input",{onChange:e.handleFilter,type:"text"}))},s=n(3),d=n.n(s),f="http://localhost:3002/api/persons",h=function(){return d.a.get(f).then((function(e){return e.data}))},p=function(e){var t=d.a.post(f,e);return console.log("out they"),t.then((function(e){return console.log("here is the res"),console.log(e),e.data})).catch((function(e){throw e}))},E=function(e){return d.a.delete("".concat(f,"/").concat(e)).then((function(e){return e.data}))},b=(n(13),function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)(""),s=Object(u.a)(l,2),d=s[0],f=s[1],b=Object(a.useState)(""),v=Object(u.a)(b,2),g=v[0],N=v[1],j=Object(a.useState)(n),O=Object(u.a)(j,2),y=O[0],w=O[1],C=Object(a.useState)(""),S=Object(u.a)(C,2),A=S[0],D=S[1],k=Object(a.useState)(""),x=Object(u.a)(k,2),I=x[0],F=x[1];Object(a.useEffect)((function(){h().then((function(e){r(e),console.log("here is the initial res ".concat(e)),w(e)}))}),[]);var J=function(e){var t=n.filter((function(t){return t.id===e}))[0].name;window.confirm("Are you sure you want to delete ".concat(t,"?"))&&E(e).then((function(t){var a=n.filter((function(t){return t.id!==e}));w(a)}))};return c.a.createElement("div",null,c.a.createElement("h2",{className:"main-title"},"Phonebook"),c.a.createElement((function(e){var t=e.msg;return""===t?null:c.a.createElement("div",{className:I},t)}),{msg:A}),c.a.createElement(m,{handleFilter:function(e){D("");var t=n.filter((function(t){return t.name&&t.name.includes(e.target.value)}));console.log(t),w(t)}}),c.a.createElement("h3",null,"Add New Contact"),c.a.createElement(i,{AddItem:function(e){e.preventDefault();var t={name:d,number:g,id:n.length+1};p(t).then((function(e){var a=n.concat(t);r(a),w(a),D("".concat(d," Added Successfully")),F("success"),f(""),N("")})).catch((function(e){console.log(e.response),D("".concat(e.response.data.error)),F("fail")}))},newName:d,newNumber:g,handleNameChange:function(e){e.preventDefault(),f(e.target.value)},handleNumberChange:function(e){e.preventDefault(),N(e.target.value)}}),c.a.createElement("h3",null,"All Added Contacts"),c.a.createElement("div",null,c.a.createElement("ul",null,y.map((function(e){return c.a.createElement(o,{key:e.id,person:e,handleDelete:J})})))))});l.a.render(c.a.createElement(b,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.647c007a.chunk.js.map