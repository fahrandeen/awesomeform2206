(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{162:function(e,t,n){},201:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(44),o=n.n(c),l=n(21),i=n(22),u=n(27),s=n(23),m=n(28),d=n(203),p=n(204),b=n(202),f=n(88),v=n.n(f),E=n(61),y=n.n(E),h=n(89),w=function(e){return e?void 0:"Feild is required"},O=function(e){return e.length<4?"Values must be at least 4 charactor":void 0},j=function(e){return e.length>10?"Values is too long":void 0},g=function(e,t){return e===t.password?void 0:"Password not matched"},k=function(){var e=Object(h.a)(y.a.mark(function e(t){var n;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=function(e){return new Promise(function(t){return setTimeout(t,e)})},e.next=3,n(1e3);case 3:if(!["fahran","hamdhy"].includes(t.username)){e.next=5;break}return e.abrupt("return",Promise.reject({username:"Already taken"}));case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),x=n(90),S=n.n(x),_=function(e){return e.asyncValidating?"async-validating":e.active?void 0:e.touched&&e.invalid?"invalid":e.touched&&e.valid?"valid":void 0},N=function(e){var t=e.label,n=e.input,a=e.type,c=e.meta;return r.a.createElement("div",{className:v()("custom-input-container",{"flex-row-reverse":"checkbox"===a},{dirty:c.dirty},_(c))},r.a.createElement("input",Object.assign({},n,{type:a,autoFocus:e.autoFocus})),r.a.createElement("label",null,t),c.error&&c.touched&&!c.active&&r.a.createElement("div",{className:"feedback-text error-text"},c.error))},C=function(e){return r.a.createElement("div",null,r.a.createElement("label",null,e.label),r.a.createElement("select",e.input,r.a.createElement("option",{value:"tabs"},"Tabs"),r.a.createElement("option",{value:"spaces"},"Spaces")))},V=function(e){var t=e.fields;return r.a.createElement("div",{className:"custom-field-array-container"},t.map(function(e,n){return r.a.createElement("div",{key:n,className:"field-array-item"},r.a.createElement(d.a,{name:e,type:"text",component:N,label:"Discount Code #".concat(n+1),validate:[w],normalize:S.a,autoFocus:!0}),r.a.createElement("button",{type:"button",onClick:function(){return t.remove(n)}},"\xd7"))}),r.a.createElement("button",{type:"button",onClick:function(){return t.push()}},"Add ",t.length?"Another":"Discount Code(s)"))},P=n(63),D=n.n(P),F=(n(162),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.handleSubmit;return r.a.createElement("form",{onSubmit:e},r.a.createElement(d.a,{name:"firstname",component:N,type:"text",label:"First Name",validate:[w],normalize:D.a}),r.a.createElement(d.a,{name:"surname",component:N,type:"text",label:"Surname",validate:[w],normalize:D.a}),r.a.createElement(d.a,{name:"username",component:N,type:"text",label:"User Name",validate:[w,j,O]}),r.a.createElement(d.a,{name:"password",component:N,type:"password",label:"Password",validate:[w]}),r.a.createElement(d.a,{name:"conformPassword",component:N,type:"password",label:"Confirm Password",validate:[w,g]}),r.a.createElement(d.a,{name:"preference",component:C,label:"Preferred Formatting"}),r.a.createElement(d.a,{name:"newsletter",component:N,type:"checkbox",label:"Sign up to newsletter"}),r.a.createElement(p.a,{name:"discountCodes",component:V}),r.a.createElement("button",{type:"submit"},"Submit"))}}]),t}(a.Component)),T=F=Object(b.a)({form:"register",asyncValidate:k,asyncBlurFields:["username"]})(F),I=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Product Details"))}}]),t}(a.Component),A=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).submit=function(e){window.alert(JSON.stringify(e,null,4))},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"getInitialValues",value:function(){return{preference:"tabs",newsletter:!0}}},{key:"render",value:function(){return r.a.createElement("div",{class:"container-fluid"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-6 col-sm-9 bg-success"},r.a.createElement(T,{onSubmit:this.submit,initialValues:this.getInitialValues()})),r.a.createElement("div",{class:"col-6 col-sm-3 bg-warning"},r.a.createElement(I,null))))}}]),t}(a.Component),X=n(15),z=n(5),J={form:n(205).a},U=Object(z.b)(J),B=Object(z.c)(U,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(r.a.createElement(X.a,{store:B},r.a.createElement(A,null)),document.getElementById("root"))},93:function(e,t,n){e.exports=n(201)}},[[93,1,2]]]);
//# sourceMappingURL=main.0dff8d4d.chunk.js.map