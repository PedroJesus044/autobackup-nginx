(function(){"use strict";var e={774:function(e,n,t){var r=t(3751),o=t(641),a=t(33);const i={id:"app"},u={class:"navbar navbar-expand navbar-dark bg-dark"},s={class:"navbar-nav mr-auto"},d={class:"nav d-flex justify-content-between"},l={key:0,class:"nav-item"},c={key:1,class:"nav-item"},f={key:0,class:"float-right"},m={class:"dropdown"},p={class:"btn btn-dark dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},v={class:"dropdown-menu dropdown-menu-right","aria-labelledby":"dropdownMenuButton"},h={class:"m-3"},b=(0,o.Lk)("div",{id:"bottom"},null,-1);function g(e,n,t,r,g,k){const y=(0,o.g2)("router-link"),w=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("div",i,[(0,o.Lk)("nav",u,[(0,o.bF)(y,{to:"/",class:"navbar-brand"},{default:(0,o.k6)((()=>[(0,o.eW)("Auto-backup")])),_:1}),(0,o.Lk)("div",s,[(0,o.Lk)("ul",d,[g.token?((0,o.uX)(),(0,o.CE)("li",l,[(0,o.bF)(y,{to:"/dashboard",class:"nav-link"},{default:(0,o.k6)((()=>[(0,o.eW)("Dashboard")])),_:1})])):(0,o.Q3)("",!0),g.isAdmin?((0,o.uX)(),(0,o.CE)("li",c,[(0,o.bF)(y,{to:"/backups",class:"nav-link"},{default:(0,o.k6)((()=>[(0,o.eW)("Backups")])),_:1})])):(0,o.Q3)("",!0)])]),g.token?((0,o.uX)(),(0,o.CE)("div",f,[(0,o.Lk)("div",m,[(0,o.Lk)("button",p,(0,a.v_)(g.username),1),(0,o.Lk)("div",v,[(0,o.Lk)("a",{class:"dropdown-item",href:"#",onClick:n[0]||(n[0]=e=>k.logout())},"Logout")])])])):(0,o.Q3)("",!0)]),(0,o.Lk)("div",h,[(0,o.bF)(w)])]),b],64)}t(4114);var k={name:"app",data(){return{token:!1,isAdmin:!1,username:""}},methods:{validateSession(){this.token=!!sessionStorage.getItem("token"),this.isAdmin="admin"===sessionStorage.getItem("role"),this.username=sessionStorage.getItem("username")},logout(){sessionStorage.removeItem("token"),sessionStorage.removeItem("role"),sessionStorage.removeItem("username"),this.validateSession(),this.$router.push("/")}},mounted(){this.validateSession(),this.timer=setInterval((()=>{this.validateSession()}),300)}},y=t(6262);const w=(0,y.A)(k,[["render",g]]);var A=w,S=(t(2754),t(9162)),C=t.n(S),E=t(5220);const L=[{path:"/",alias:"/login",name:"login",component:()=>Promise.all([t.e(753),t.e(435)]).then(t.bind(t,435))},{path:"/dashboard",name:"dashboard",component:()=>Promise.all([t.e(753),t.e(685),t.e(106)]).then(t.bind(t,4106)),meta:{requiresAuth:!0,mustBeAdmin:!1}},{path:"/backups",name:"backups",component:()=>Promise.all([t.e(753),t.e(685),t.e(166)]).then(t.bind(t,9166)),meta:{requiresAuth:!0,mustBeAdmin:!0}},{path:"/backups/:id",name:"backups-details",component:()=>Promise.all([t.e(753),t.e(611)]).then(t.bind(t,4611)),meta:{requiresAuth:!0,mustBeAdmin:!0}}],j=(0,E.aE)({history:(0,E.LA)(),routes:L});j.beforeEach(((e,n,t)=>{if(e.meta.requiresAuth){const n=sessionStorage.getItem("token"),r="admin"===sessionStorage.getItem("role");n?e.meta.mustBeAdmin&&r||!1===e.meta.mustBeAdmin?t():t("/dashboard"):t("/login")}else t()}));var O=j;(0,r.Ef)(A).use(O,C()).mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={exports:{}};return e[r].call(a.exports,a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,a){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],a=e[l][2];for(var u=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](r[s])}))?r.splice(s--,1):(u=!1,a<i&&(i=a));if(u){e.splice(l--,1);var d=o();void 0!==d&&(n=d)}}return n}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,o,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{106:"151f95ed",166:"b8443ec3",435:"47aa1a75",611:"c7912bf2",685:"376108ee",753:"61243b19"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{166:"5fed43d8",611:"46db841b"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="frontend-controladora-js:";t.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var u,s;if(void 0!==a)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var c=d[l];if(c.getAttribute("src")==r||c.getAttribute("data-webpack")==n+a){u=c;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+a),u.src=r),e[r]=[o];var f=function(n,t){u.onerror=u.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(t)})),n)return n(t)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,r,o,a){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",t.nc&&(i.nonce=t.nc);var u=function(t){if(i.onerror=i.onload=null,"load"===t.type)o();else{var r=t&&t.type,u=t&&t.target&&t.target.href||n,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+u+")");s.name="ChunkLoadError",s.code="CSS_CHUNK_LOAD_FAILED",s.type=r,s.request=u,i.parentNode&&i.parentNode.removeChild(i),a(s)}};return i.onerror=i.onload=u,i.href=n,r?r.parentNode.insertBefore(i,r.nextSibling):document.head.appendChild(i),i},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===n))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===n)return o}},r=function(r){return new Promise((function(o,a){var i=t.miniCssF(r),u=t.p+i;if(n(i,u))return o();e(r,u,null,o,a)}))},o={524:0};t.f.miniCss=function(e,n){var t={166:1,611:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={524:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=a);var i=t.p+t.u(n),u=new Error,s=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};t.l(i,s,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,a,i=r[0],u=r[1],s=r[2],d=0;if(i.some((function(n){return 0!==e[n]}))){for(o in u)t.o(u,o)&&(t.m[o]=u[o]);if(s)var l=s(t)}for(n&&n(r);d<i.length;d++)a=i[d],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(l)},r=self["webpackChunkfrontend_controladora_js"]=self["webpackChunkfrontend_controladora_js"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(774)}));r=t.O(r)})();
//# sourceMappingURL=app.ec322c2d.js.map