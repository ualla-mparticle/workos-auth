(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[616],{2098:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/workos-auth/login",function(){return e(9835)}])},9835:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return f}});var r=e(4051),u=e.n(r),o=e(5893),i=e(1163),s=e(7294);function c(n,t,e,r,u,o,i){try{var s=n[o](i),c=s.value}catch(a){return void e(a)}s.done?t(c):Promise.resolve(c).then(r,u)}function a(n){return function(){var t=this,e=arguments;return new Promise((function(r,u){var o=n.apply(t,e);function i(n){c(o,r,u,i,s,"next",n)}function s(n){c(o,r,u,i,s,"throw",n)}i(void 0)}))}}function f(){var n=(0,s.useState)(),t=n[0],e=n[1];function r(n){return c.apply(this,arguments)}function c(){return(c=a(u().mark((function n(t){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",fetch("https://workos-sso-server.herokuapp.com/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(n){return n.json()})));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var f=function(){var n=a(u().mark((function n(e){var o;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),n.next=3,r({email:t});case 3:o=n.sent,console.log(o),i.default.push(o.redirect_url);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return(0,o.jsxs)("div",{className:"login-wrapper",children:[(0,o.jsx)("h1",{children:"Please Log In"}),(0,o.jsxs)("form",{onSubmit:f,children:[(0,o.jsxs)("label",{children:[(0,o.jsx)("p",{children:"Email"}),(0,o.jsx)("input",{type:"text",onChange:function(n){return e(n.target.value)}})]}),(0,o.jsx)("div",{children:(0,o.jsx)("button",{type:"submit",children:"Submit"})})]})]})}},1163:function(n,t,e){n.exports=e(387)}},function(n){n.O(0,[774,888,179],(function(){return t=2098,n(n.s=t);var t}));var t=n.O();_N_E=t}]);