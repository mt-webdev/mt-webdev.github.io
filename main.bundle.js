var ac_main=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=34)}({34:function(t,e,n){"use strict";function r(t){return(new DOMParser).parseFromString(t,"text/html").body.childNodes[0]}n.r(e);n(77);var o="check",i="times";function a(){return new Promise(function(t,e){var n,r=document.createElement("div");r.setAttribute("class","toast-message"),r.setAttribute("id","sw--toast-message"),r.appendChild(((n=document.createElement("span")).innerText="Es gibt Neuerungen, bitte neu laden!",n));var a=u(o,function(){r.remove(),t(!0)});r.appendChild(a);var c=function(t){return u(i,t)}(function(){r.remove(),t(!1)});r.appendChild(c),document.getElementsByTagName("app-root")[0].appendChild(r)})}function u(t,e){var n=document.createElement("div");return n.setAttribute("class","fa fa-"+t),n.addEventListener("click",e),n}var c={Home:"/templates/home.html"},s="skipWaiting";var l=function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function u(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(a,u)}c((r=r.apply(t,e||[])).next())})},f=function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=r[2&i[0]?"return":i[0]?"throw":"next"])&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[0,o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},p=function(){function t(){this.entryPoint=c.Home,this.htmlTemplate=null,this.rootElement=document.getElementsByTagName(this.rootSelector)[0],this.updateSW()}return Object.defineProperty(t.prototype,"rootSelector",{get:function(){return"APP-ROOT"},enumerable:!0,configurable:!0}),t.prototype.updateSW=function(){return l(this,void 0,void 0,function(){var t;return f(this,function(e){try{navigator.serviceWorker.addEventListener("controllerchange",function(){t||(window.location.reload(),t=!0)})}catch(t){console.error(t)}return[2]})})},t.prototype.init=function(){return l(this,void 0,void 0,function(){var t,e,n,o=this;return f(this,function(i){switch(i.label){case 0:return this.rootElement?[4,this.fetchHtmlTemplate()]:[2];case 1:return t=i.sent(),e=this,n=r,[4,t.text()];case 2:return e.htmlTemplate=n.apply(void 0,[i.sent()]),setTimeout(function(){o._setContentAfterLoad()},1500),[2]}})})},t.prototype._setContentAfterLoad=function(){this._removeLogo(),this.rootElement.appendChild(this.htmlTemplate)},t.prototype._removeLogo=function(){document.body.removeChild(document.getElementById("shell"))},t.prototype._parseToHtml=function(){new DOMParser},t.prototype.fetchHtmlTemplate=function(){return l(this,void 0,void 0,function(){return f(this,function(t){return[2,window.fetch(this.entryPoint)]})})},t}();!function(){function t(t){a().then(function(e){e&&t.postMessage({action:s})})}function e(e){e.addEventListener("statechange",function(){"installed"==e.state&&t(e)})}navigator.serviceWorker&&navigator.serviceWorker.register("sw.d0c2e5d63497b511626bfeb8390a7bdc.js").then(function(n){navigator.serviceWorker.controller&&(n.waiting&&t(n.waiting),n.installing&&e(n.installing),n.addEventListener("updatefound",function(){return e(n.installing)}))})}(),(new p).init()},77:function(t,e){}});