var ac_main=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=36)}({22:function(t,e,n){"use strict";var r=n(38);n.d(e,"a",function(){return r.a});var o=n(39);n.d(e,"b",function(){return o.a})},23:function(t,e,n){"use strict";var r=n(41);n.d(e,"a",function(){return r.a});var o=n(42);n.d(e,"b",function(){return o.a})},36:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(37),o=n(23),i=n(22),u=(n(43),this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function u(t){try{c(r.next(t))}catch(t){i(t)}}function a(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(u,a)}c((r=r.apply(t,e||[])).next())})}),a=this&&this.__generator||function(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=r[2&i[0]?"return":i[0]?"throw":"next"])&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[0,o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},c=function(){function t(){this.entryPoint=o.a.Home,this.htmlTemplate=null,this.rootElement=document.getElementsByTagName(this.rootSelector)[0],this.updateSW()}return Object.defineProperty(t.prototype,"rootSelector",{get:function(){return"APP-ROOT"},enumerable:!0,configurable:!0}),t.prototype.updateSW=function(){return u(this,void 0,void 0,function(){var t;return a(this,function(e){try{navigator.serviceWorker.addEventListener("controllerchange",function(){t||(window.location.reload(),t=!0)})}catch(t){alert(t)}return[2]})})},t.prototype.init=function(){return u(this,void 0,void 0,function(){var t,e,n,r=this;return a(this,function(o){switch(o.label){case 0:return this.rootElement?[4,this.fetchHtmlTemplate()]:[2];case 1:return t=o.sent(),e=this,n=i.a,[4,t.text()];case 2:return e.htmlTemplate=n.apply(void 0,[o.sent()]),setTimeout(function(){r._setContentAfterLoad()},2e3),[2]}})})},t.prototype._setContentAfterLoad=function(){this._removeLogo(),this.rootElement.appendChild(this.htmlTemplate)},t.prototype._removeLogo=function(){document.body.removeChild(document.getElementById("shell"))},t.prototype._parseToHtml=function(){new DOMParser},t.prototype.fetchHtmlTemplate=function(){return u(this,void 0,void 0,function(){return a(this,function(t){return[2,window.fetch(this.entryPoint)]})})},t}();Object(r.a)(),(new c).init()},37:function(t,e,n){"use strict";e.a=function(){function t(t){Object(r.b)().then(function(e){e&&t.postMessage({action:o.b})})}function e(e){e.addEventListener("statechange",function(){"installed"==e.state&&t(e)})}navigator.serviceWorker&&navigator.serviceWorker.register("sw.js").then(function(n){navigator.serviceWorker.controller&&(n.waiting&&t(n.waiting),n.installing&&e(n.installing),n.addEventListener("updatefound",function(){return e(n.installing)}))})};var r=n(22),o=n(23)},38:function(t,e,n){"use strict";e.a=function(t){return(new DOMParser).parseFromString(t,"text/html").body.childNodes[0]}},39:function(t,e,n){"use strict";e.a=function(){return new Promise(function(t,e){var n,r=document.createElement("div");r.setAttribute("class","toast-message"),r.setAttribute("id","sw--toast-message"),r.appendChild(((n=document.createElement("span")).innerText="Es gibt Neuerungen, bitte neu laden!",n));var a=u(o,function(){r.remove(),t(!0)});r.appendChild(a);var c=function(t){return u(i,t)}(function(){r.remove(),t(!1)});r.appendChild(c),document.getElementsByTagName("app-root")[0].appendChild(r)})};var r=n(40),o=(n.n(r),"check"),i="times";function u(t,e){var n=document.createElement("div");return n.setAttribute("class","fa fa-"+t),n.addEventListener("click",e),n}},40:function(t,e){},41:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r={Home:"/app/home.html"}},42:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r="skipWaiting"},43:function(t,e,n){"use strict";var r=n(44);n.n(r)},44:function(t,e){}});