(function(e){function t(t){for(var c,n,s=t[0],i=t[1],l=t[2],u=0,d=[];u<s.length;u++)n=s[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&d.push(o[n][0]),o[n]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);p&&p(t);while(d.length)d.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],c=!0,n=1;n<a.length;n++){var s=a[n];0!==o[s]&&(c=!1)}c&&(r.splice(t--,1),e=i(i.s=a[0]))}return e}var c={},n={app:0},o={app:0},r=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0c19e3":"5006b619","chunk-6e644de2":"617c0fd8","chunk-7861189f":"a0ccf07e","chunk-9a46c246":"8376510e","chunk-b72a7c3a":"22766860","chunk-cacf060c":"093b4085"}[e]+".js"}function i(t){if(c[t])return c[t].exports;var a=c[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a={"chunk-6e644de2":1,"chunk-7861189f":1,"chunk-9a46c246":1,"chunk-b72a7c3a":1,"chunk-cacf060c":1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var c="css/"+({}[e]||e)+"."+{"chunk-2d0c19e3":"31d6cfe0","chunk-6e644de2":"a92241c6","chunk-7861189f":"2b456922","chunk-9a46c246":"dff919c2","chunk-b72a7c3a":"98a5e5c1","chunk-cacf060c":"08b3e1cd"}[e]+".css",o=i.p+c,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var l=r[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===c||u===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===c||u===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var c=t&&t.target&&t.target.src||o,r=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=c,delete n[e],p.parentNode.removeChild(p),a(r)},p.href=o;var b=document.getElementsByTagName("head")[0];b.appendChild(p)})).then((function(){n[e]=0})));var c=o[e];if(0!==c)if(c)t.push(c[2]);else{var r=new Promise((function(t,a){c=o[e]=[t,a]}));t.push(c[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=s(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(p);var a=o[e];if(0!==a){if(a){var c=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+c+": "+n+")",d.name="ChunkLoadError",d.type=c,d.request=n,a[1](d)}o[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=c,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(a,c,function(t){return e[t]}.bind(null,c));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=u;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0704":function(e,t,a){},"0e58":function(e,t,a){},"0f80":function(e,t,a){"use strict";a("0704")},"255a":function(e,t,a){"use strict";a.r(t);var c=a("7a23");const n=Object(c["E"])("data-v-c0d47bd8");Object(c["u"])("data-v-c0d47bd8");const o={class:"card position-relative px-md-2 px-2 pb-md-3 pb-3"},r={class:"position-relative"},s={class:"text-overlay text-shadow text-light font-lg"},i=Object(c["h"])("i",{class:"fas fa-minus-circle font-lg"},null,-1);Object(c["s"])();const l=n((e,t,a,l,u,d)=>{const p=Object(c["y"])("router-link"),b=Object(c["y"])("Modal");return Object(c["r"])(),Object(c["d"])(c["a"],null,[Object(c["h"])("div",o,[Object(c["h"])("div",r,[Object(c["h"])("img",{class:"w-100 box-shadow",src:a.keepProp.img,alt:"Keep Image","data-toggle":"modal","data-target":"#keepModal",onClick:t[1]||(t[1]=e=>l.setActiveKeep(a.keepProp.id))},null,8,["src"]),Object(c["h"])("h2",s,Object(c["A"])(a.keepProp.name),1),Object(c["h"])(p,{to:{name:"Profile",params:{id:a.keepProp.creatorId}}},{default:n(()=>[Object(c["h"])("img",{class:"icon icon-overlay rounded-circle",src:a.keepProp.creator.picture,alt:"Profile Icon",onClick:t[2]||(t[2]=(...t)=>e.goToProfile&&e.goToProfile(...t))},null,8,["src"])]),_:1},8,["to"]),a.vaultKeepProp&&l.state.activeVault.creatorId===l.state.account.id?(Object(c["r"])(),Object(c["d"])("button",{key:0,type:"button","aria-label":"Remove Keep from Vault",class:"btn btn-outline-danger bg-transparent border-0 p-0 m-0 btn-overlay","data-dismiss":"modal",onClick:t[3]||(t[3]=e=>l.removeFromVault(a.vaultKeepProp))},[i])):Object(c["e"])("",!0)])]),Object(c["h"])(b)],64)});var u=a("83fc"),d=a("6c96"),p=a("d10d"),b=a("5d40"),f={name:"Keep",props:{keepProp:{type:Object,required:!0},vaultKeepProp:{type:Object,required:!1}},setup(){const e=Object(c["v"])({account:Object(c["b"])(()=>u["a"].account),activeKeep:Object(c["b"])(()=>u["a"].activeKeep),activeVault:Object(c["b"])(()=>u["a"].activeVault),vaultKeeps:Object(c["b"])(()=>u["a"].vaultKeeps)});return{state:e,async setActiveKeep(t){try{u["a"].loading=!0,setTimeout((function(){u["a"].loading=!1}),1100),d["a"].setActiveKeep(t),await d["a"].getKeepTags(t),e.account.id&&await p["a"].getProfileVaults(e.account.id)}catch(a){b["a"].toast("Error: "+a,"error")}},async removeFromVault(e){try{await b["a"].confirmAction("Are you sure?",`Do you want to remove ${e.name} from this Vault?`,"warning","Delete "+e.name)?(await p["a"].removeFromVault(e.vaultKeepId),await p["a"].getVaultKeeps(e.vaultId),b["a"].toast(e.name+" was deleted!","success")):b["a"].toast(`No worries! ${e.name} is still here!`,"info")}catch(t){b["a"].toast("Error: "+t,"error")}}}},components:{}};a("a9f9");f.render=l,f.__scopeId="data-v-c0d47bd8";t["default"]=f},"2b20":function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return s}));var c=a("bc3a"),n=a.n(c),o=a("8c89");const r=n.a.create({baseURL:o["b"],timeout:8e3}),s=function(e){r.defaults.headers.authorization=e}},"3bef":function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var c=a("83fc"),n=a("41cb"),o=a("2b20");class r{async getTags(){const e=await o["a"].get("api/tags");c["a"].tags=e.data}async createTags(){let e=c["a"].rawTags;c["a"].rawTags.forEach(t=>{c["a"].tags.forEach(a=>{a.name===t&&(e=e.filter(e=>e!==t))}),e.includes(t)&&c["a"].newTags.push({name:t})}),await o["a"].post("api/tags",c["a"].newTags),await this.getTags(),c["a"].newTags=[]}async createKeepTags(e){c["a"].rawTags.forEach(e=>{c["a"].newTags.push(c["a"].tags.find(t=>t.name===e))});const t=[];c["a"].newTags.forEach(a=>{t.push({keepId:e.id,tagId:a.id})}),await o["a"].post("api/keepTags",t),c["a"].newTags=[]}async setActiveTag(e){const t=await o["a"].get("api/tags/"+e.id);c["a"].activeTag=t.data,n["a"].push({name:"Search",params:{id:e.id}})}}const s=new r},"41cb":function(e,t,a){"use strict";var c=a("6c02"),n=a("8816");function o(e){return()=>a("a2f9")(`./${e}.vue`)}const r=[{path:"/",name:"Home",component:o("HomePage")},{path:"/about",name:"About",component:o("AboutPage")},{path:"/account",name:"Account",component:o("AccountPage"),beforeEnter:n["a"]},{path:"/profile/:id",name:"Profile",component:o("ProfilePage")},{path:"/vault/:id",name:"Vault",component:o("VaultPage")},{path:"/tag/:id",name:"Search",component:o("SearchPage")}],s=Object(c["a"])({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:Object(c["b"])(),routes:r});t["a"]=s},"473f":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var c=a("83fc"),n=a("8c89");function o(e,t){if(n["d"])console[e](`[${e}] :: ${(new Date).toLocaleTimeString()} :: `,...t);else{switch(e){case"log":case"assert":return}console[e](`[${e}] :: ${(new Date).toLocaleTimeString()} :: `,...t)}}const r={log(){o("log",arguments)},error(){o("error",arguments)},warn(){o("warn",arguments)},assert(){o("assert",arguments)},trace(){o("trace",arguments)}};var s=a("2b20");class i{async getAccount(){try{const e=await s["a"].get("/account");c["a"].account=e.data}catch(e){r.error("HAVE YOU STARTED YOUR SERVER YET???",e)}}async getProfile(e){const t=await s["a"].get("api/profiles/"+e);c["a"].profile=t.data}async editAccount(e){const t=await s["a"].put("/account",e);c["a"].account=t.data,c["a"].profile=t.data}}const l=new i},"4fa4":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);var c=a("7a23");const n=Object(c["h"])("footer",null,[Object(c["h"])("div",{class:"bg-secondary text-light text-center pt-4 pb-2"},[Object(c["h"])("p",null,[Object(c["g"])("Made with "),Object(c["h"])("span",null,[Object(c["h"])("i",{class:"fas fa-ring mx-1"})]),Object(c["g"])(" by Samwise")])])],-1);function o(e,t,a,o,r,s){const i=Object(c["y"])("Navbar"),l=Object(c["y"])("router-view");return Object(c["r"])(),Object(c["d"])(c["a"],null,[Object(c["h"])("header",null,[Object(c["h"])(i)]),Object(c["h"])("main",null,[Object(c["h"])(l,{key:e.$route.path})]),n],64)}var r=a("83fc"),s={name:"App",setup(){return{appState:Object(c["b"])(()=>r["a"])}}};a("9286");s.render=o;var i=s;function l(e){const t=a("ccc2");t.keys().forEach(a=>{const c=t(a),n=c.default||c,o=n.name||a.substr(a.lastIndexOf("/")+1).replace(/\.\w+$/,"");e.component(o,n)})}var u=a("41cb"),d=a("4989"),p=a.n(d),b=a("1157"),f=a.n(b),v=a("f0bd");const m=Object(c["c"])(i);l(m),m.use(u["a"],p.a,f.a,v["default"]).mount("#app")},"5d40":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var c=a("3d20"),n=a.n(c),o=a("83fc");class r{static async confirmAction(e="Are you sure?",t="You won't be able to revert this!",a="warning",c="Yes, delete it!"){try{const o=await n.a.fire({title:e,text:t,icon:a,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:c});return!!o.isConfirmed}catch(o){return!1}}static toast(e="Warning!",t="warning",a="top-end",c=3e3,o=!0){n.a.fire({title:e,icon:t,position:a,timer:c,timerProgressBar:o,toast:!0,showConfirmButton:!1})}static async keepModal(){await n.a.mixin({title:"Create a New Keep",input:"text",confirmButtonText:"Next &rarr;",progressSteps:[1,2,3,4]}).queue([{title:"Give your Keep a Name!",icon:"info",input:"text",inputValue:"Your Keep's Name..."},{title:"Add a brief Description",icon:"info",input:"textarea",inputLabel:"Description",inputPlaceholder:"Description...",inputValue:"Your Keep's Description...",inputAttributes:{"aria-label":"Keep Description"}},{title:"Give your Keep a Cover Image",icon:"info",input:"text",inputPlaceholder:"Img Url...",text:"We'll provide a placeholder by default..."},{title:"Add search Tags to your Keep!",icon:"info",input:"text",inputPlaceholder:"Separate your Tags with Single Spaces"}]).then(e=>{if(e.value){const t=o["a"].newKeep;t.name=e.value[0],t.description=e.value[1],""===e.value[2]?t.img="http://www.fillmurray.com/300/300":t.img=e.value[2],o["a"].rawTags=e.value[3].toUpperCase().split(" ")}})}static async vaultModal(){await n.a.mixin({title:"Create a New Vault",input:"text",confirmButtonText:"Next &rarr;",progressSteps:[1,2]}).queue([{title:"What shall we name your Vault?",icon:"question",input:"text",inputValue:"Your Vault's Name..."},{title:"Add an image to your Vault",icon:"info",input:"text",inputPlaceholder:"Img Url...",text:"We'll provide a placeholder by default..."}]).then(e=>{if(e.value){const t=o["a"].newVault;t.name=e.value[0],""===e.value[1]?t.img="http://www.fillmurray.com/g/300/300":t.img=e.value[1]}})}static async isPrivate(e){await n.a.fire({title:"Do you want your Vault to be Public or Private?",icon:"question",showDenyButton:!0,confirmButtonText:"Public",denyButtonText:"Private"}).then(t=>{t.isConfirmed&&(e.isPrivate=!1),t.isDenied&&(e.isPrivate=!0)})}static async editAccount(){await n.a.mixin({title:"Edit your Profile Info",input:"text",confirmButtonText:"Next &rarr;",progressSteps:[1,2]}).queue([{title:"Update your Profile Name",icon:"info",inputPlaceholder:"Name..."},{title:"Update your Profile Image",icon:"info",input:"text",inputPlaceholder:"Img Url..."}]).then(e=>{e.value&&(o["a"].account.name=e.value[0],o["a"].account.picture=e.value[1])})}static async addTags(){const{value:e}=await n.a.fire({input:"text",inputLabel:"Add Tags",inputPlaceholder:"Seperate Tags with Single Spaces"});e&&(o["a"].rawTags=e.toUpperCase().split(" "))}}},"5df2":function(e,t,a){},"697c":function(e,t,a){"use strict";a.r(t);var c=a("7a23");const n=Object(c["E"])("data-v-680a2644");Object(c["u"])("data-v-680a2644");const o={class:"col-md-4 col-6"};Object(c["s"])();const r=n((e,t,a,n,r,s)=>(Object(c["r"])(),Object(c["d"])("div",o,[Object(c["h"])("button",{type:"button",class:"btn btn-outline-info m-0 w-100 m-2",onClick:t[1]||(t[1]=e=>n.setActiveTag(a.tagProp))},Object(c["A"])(a.tagProp.name),1)])));var s=a("3bef"),i={name:"Tag",props:{tagProp:{type:Object,required:!0}},setup(){return{async setActiveTag(e){await s["a"].setActiveTag(e)}}},components:{}};i.render=r,i.__scopeId="data-v-680a2644";t["default"]=i},"6c96":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var c=a("83fc"),n=a("2b20");class o{async getKeeps(){const e=await n["a"].get("api/keeps");c["a"].keeps=e.data}shuffleKeeps(){const e=c["a"].keeps;let t,a=e.length;while(0!==a)t=Math.floor(Math.random()*a),a--,[e[a],e[t]]=[e[t],e[a]];c["a"].keeps=e}async getProfileKeeps(e){const t=await n["a"].get(`api/profiles/${e}/keeps`);c["a"].keeps=t.data}async getKeepTags(e){const t=await n["a"].get(`api/keeps/${e}/tags`);c["a"].keepTags=t.data}async getKeepsByTag(e){const t=await n["a"].get(`api/tags/${e}/keeps`);c["a"].keeps=t.data}async createKeep(){const e=await n["a"].post("api/keeps",c["a"].newKeep);c["a"].newKeep=e.data}async editKeep(e){const t=await n["a"].put("api/keeps/"+e.id,e);c["a"].activeKeep=t.data}async deleteKeep(e){await n["a"].delete("api/keeps/"+e)}async setActiveKeep(e){const t=await n["a"].get("api/keeps/"+e);c["a"].activeKeep=t.data}}const r=new o},8169:function(e,t,a){"use strict";a.r(t);var c=a("7a23");const n=Object(c["E"])("data-v-53f814ba");Object(c["u"])("data-v-53f814ba");const o={class:"modal fade",id:"keepModal",tabindex:"-1","aria-labelledby":"keepModalLabel","aria-hidden":"true"},r={class:"modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl"},s={key:0,class:"modal-content"},i={key:0,class:"row justify-content-center"},l={class:"col-md-6 col-12 order-md-1 order-2 position-relative my-auto"},u=Object(c["h"])("i",{class:"fas fa-minus-circle font-lg"},null,-1),d={class:"col-md-6 col-12 order-md-2 order-1 position-relative"},p={class:"modal-header row justify-content-center position-relative pt-5"},b={class:"col-md-3 col-4 text-center"},f=Object(c["h"])("span",null,[Object(c["h"])("i",{class:"far fa-eye text-primary pr-3"})],-1),v={class:"col-md-3 col-4 text-center"},m=Object(c["h"])("span",null,[Object(c["h"])("i",{class:"fab fa-kaggle text-primary pr-3"})],-1),g={class:"col-md-3 col-4 text-center"},O=Object(c["h"])("span",null,[Object(c["h"])("i",{class:"fas fa-share-alt text-primary pr-3"})],-1),h=Object(c["h"])("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close Modal"},[Object(c["h"])("span",{class:"text-danger","aria-hidden":"true"},[Object(c["h"])("i",{class:"fas fa-times"})])],-1),j={class:"modal-body position-relative"},y={key:0},w=Object(c["h"])("i",{class:"fas fa-edit"},null,-1),k={key:1},K={class:"modal-title"},x={key:2,class:"row justify-content-center pr-md-5 pr-4 mx-2 pb-3 pt-2"},P={class:"footer pb-md-3 pb-0"},T={class:"modal-footer row mr-3 px-4 pb-2 justify-content-between"},A={key:0,class:"btn-group dropup m-0 ml-md-2 ml-3 pt-md-1"},V=Object(c["h"])("button",{type:"button",class:"btn btn-lg btn-outline-primary d-md-block d-none dropdown-toggle","data-toggle":"dropdown","aria-label":"Dropdown Vault List","aria-haspopup":"true","aria-expanded":"false"}," Add to Vault ",-1),C=Object(c["h"])("button",{type:"button",class:"btn btn-outline-primary d-md-none d-block dropdown-toggle","data-toggle":"dropdown","aria-label":"Dropdown Vault List","aria-haspopup":"true","aria-expanded":"false"}," Add to Vault ",-1),E={key:0,class:"dropdown-menu"},I=Object(c["h"])("b",null,"Add to New Vault",-1),_=Object(c["h"])("div",{class:"dropdown-divider"},null,-1),D={key:1,type:"button",class:"btn btn-lg btn-outline-primary d-md-block d-none dropdown-toggle","data-toggle":"dropdown",disabled:""},S={key:0,class:"text-right text-info p-0 m-0","data-dismiss":"modal"},N={key:1,class:"row justify-content-center"},M=Object(c["h"])("div",{class:"col-12 text-center"},[Object(c["h"])("i",{class:"fas fa-ring fa-spin loading"})],-1);Object(c["s"])();const $=n((e,t,a,$,U,B)=>{const L=Object(c["y"])("Tag"),q=Object(c["y"])("Dropdown"),Y=Object(c["y"])("router-link");return Object(c["r"])(),Object(c["d"])("div",o,[Object(c["h"])("div",r,[void 0!==$.state.activeKeep.creatorId?(Object(c["r"])(),Object(c["d"])("div",s,[$.state.loading?(Object(c["r"])(),Object(c["d"])("div",N,[M])):(Object(c["r"])(),Object(c["d"])("div",i,[Object(c["h"])("div",l,[$.state.activeKeep.creatorId===$.state.account.id?(Object(c["r"])(),Object(c["d"])("button",{key:0,type:"button","aria-label":"Delete Keep",class:"btn btn-outline-danger bg-transparent border-0 btn-overlay font-xl","data-dismiss":"modal",onClick:t[1]||(t[1]=e=>$.deleteKeep($.state.activeKeep))},[u])):Object(c["e"])("",!0),Object(c["h"])("img",{class:"w-100 p-3",src:$.state.activeKeep.img,alt:""},null,8,["src"])]),Object(c["h"])("div",d,[Object(c["h"])("div",p,[Object(c["h"])("div",b,[Object(c["h"])("h4",null,[f,Object(c["g"])(Object(c["A"])($.state.activeKeep.views),1)])]),Object(c["h"])("div",v,[Object(c["h"])("h4",null,[m,Object(c["g"])(Object(c["A"])($.state.activeKeep.keeps),1)])]),Object(c["h"])("div",g,[Object(c["h"])("h4",null,[O,Object(c["g"])(Object(c["A"])($.state.activeKeep.shares),1)])])]),h,Object(c["h"])("div",j,[$.state.activeKeep.creatorId===$.state.account.id?(Object(c["r"])(),Object(c["d"])("div",y,[$.state.activeKeep.creatorId===$.state.account.id&&!0===$.state.edit?(Object(c["r"])(),Object(c["d"])("button",{key:0,type:"button",class:"btn btn-outline-info edit-overlay border-0 font-xl","aria-label":"Edit Keep",onClick:t[2]||(t[2]=(...e)=>$.editKeep&&$.editKeep(...e))},[w])):Object(c["e"])("",!0),Object(c["h"])("h2",{class:"modal-title edit w-75",onClick:t[3]||(t[3]=Object(c["D"])(()=>{},["stop"])),spellcheck:"false",contenteditable:"true",onBlur:t[4]||(t[4]=(...e)=>$.editName&&$.editName(...e))},[Object(c["h"])("u",null,Object(c["A"])($.state.activeKeep.name),1)],32),Object(c["h"])("h3",{class:"edit w-75",onClick:t[5]||(t[5]=Object(c["D"])(()=>{},["stop"])),spellcheck:"false",contenteditable:"true",onBlur:t[6]||(t[6]=(...e)=>$.editDescription&&$.editDescription(...e))},Object(c["A"])($.state.activeKeep.description),33)])):(Object(c["r"])(),Object(c["d"])("div",k,[Object(c["h"])("h2",K,[Object(c["h"])("u",null,Object(c["A"])($.state.activeKeep.name),1)]),Object(c["h"])("h3",null,Object(c["A"])($.state.activeKeep.description),1)])),$.state.keepTags[0]?(Object(c["r"])(),Object(c["d"])("div",x,[(Object(c["r"])(!0),Object(c["d"])(c["a"],null,Object(c["x"])($.state.keepTags,e=>(Object(c["r"])(),Object(c["d"])(L,{key:e.id,"tag-prop":e,"data-dismiss":"modal"},null,8,["tag-prop"]))),128))])):Object(c["e"])("",!0)]),Object(c["h"])("div",P,[Object(c["h"])("div",T,[$.state.user.isAuthenticated?(Object(c["r"])(),Object(c["d"])("div",A,[V,C,$.state.user.isAuthenticated?(Object(c["r"])(),Object(c["d"])("div",E,[Object(c["h"])("li",{class:"dropdown-item","data-dismiss":"modal",onClick:t[7]||(t[7]=e=>$.createVault($.state.activeKeep))},[I]),_,(Object(c["r"])(!0),Object(c["d"])(c["a"],null,Object(c["x"])($.state.vaults,e=>(Object(c["r"])(),Object(c["d"])(q,{key:e.id,"vault-prop":e,"keep-prop":$.state.activeKeep},null,8,["vault-prop","keep-prop"]))),128))])):Object(c["e"])("",!0)])):(Object(c["r"])(),Object(c["d"])("button",D," Add to Vault ")),Object(c["h"])(Y,{to:{name:"Profile",params:{id:$.state.activeKeep.creatorId}}},{default:n(()=>[null!==$.state.activeKeep.creator.picture?(Object(c["r"])(),Object(c["d"])("h4",S,[Object(c["g"])(Object(c["A"])($.state.activeKeep.creator.name.split("@")[0])+" ",1),Object(c["h"])("span",null,[Object(c["h"])("img",{class:"rounded-circle icon ml-2 mr-md-3 mr-2",src:$.state.activeKeep.creator.picture,alt:""},null,8,["src"])])])):Object(c["e"])("",!0)]),_:1},8,["to"])])])])]))])):Object(c["e"])("",!0)])])});var U=a("83fc"),B=a("d10d"),L=a("6c96"),q=a("5d40"),Y=a("3bef"),F={name:"Modal",setup(){const e=Object(c["v"])({edit:!1,loading:Object(c["b"])(()=>U["a"].loading),user:Object(c["b"])(()=>U["a"].user),account:Object(c["b"])(()=>U["a"].account),vaults:Object(c["b"])(()=>U["a"].vaults),keepTags:Object(c["b"])(()=>U["a"].keepTags),activeKeep:Object(c["b"])(()=>U["a"].activeKeep)});return{state:e,async createVault(e){try{await q["a"].vaultModal(),await q["a"].isPrivate(U["a"].newVault),await B["a"].createVault(),await B["a"].addToVault(U["a"].newVault.id,e),q["a"].toast(`Added ${e.name} to your new Vault, ${U["a"].newVault.name}!`,"success")}catch(t){q["a"].toast("Error: "+t,"error")}},async deleteKeep(e){try{await q["a"].confirmAction("Are you sure?",e.name+" will be gone for good!","warning","Delete "+e.name)?(await L["a"].deleteKeep(e.id),await L["a"].getKeeps(e.id),q["a"].toast(e.name+" was deleted!","error")):q["a"].toast(`No worries! ${e.name} is still here!`,"info")}catch(t){q["a"].toast("Error: "+t,"error")}},editName(t){try{e.activeKeep.name=t.target.innerText,e.edit=!0}catch(a){q["a"].toast("Error: "+a,"error")}},editDescription(t){try{e.activeKeep.description=t.target.innerText,e.edit=!0}catch(a){q["a"].toast("Error: "+a,"error")}},async editKeep(){try{await L["a"].editKeep(e.activeKeep),location.reload()}catch(t){q["a"].toast("Error: "+t,"error")}},async addTags(){await q["a"].addTags(),await Y["a"].createTags(),await Y["a"].createKeepTags(e.activeKeep)}}},components:{}};a("ad6e");F.render=$,F.__scopeId="data-v-53f814ba";t["default"]=F},"83fc":function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var c=a("7a23");const n=Object(c["v"])({user:{},account:{},profile:{},vaults:[],allVaults:[],activeVault:{},newVault:{},keeps:[],activeKeep:{},newKeep:{},tags:[],rawTags:[],newTags:[],vaultKeeps:[],keepTags:[],activeTag:{},loading:!0})},"8c3b":function(e,t,a){},"8c89":function(e,t,a){"use strict";a.d(t,"d",(function(){return c})),a.d(t,"b",(function(){return n})),a.d(t,"e",(function(){return o})),a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return s}));const c=window.location.origin.includes("localhost"),n=c?"https://localhost:5001":"",o="samwise.us.auth0.com",r="https://keepr.com",s="BXVt6SrUU8XG8kFnjrGyiVAFeSCYAmWY"},9286:function(e,t,a){"use strict";a("bd7b")},"9d8d":function(e,t,a){"use strict";a.r(t);var c=a("7a23");const n=Object(c["E"])("data-v-32ca7e08");Object(c["u"])("data-v-32ca7e08");const o={class:"navbar navbar-expand-lg navbar-dark bg-secondary"},r={class:"pl-2"},s=Object(c["h"])("i",{class:"fab fa-facebook-f text-info"},null,-1),i=Object(c["h"])("span",{class:"outline-plus"},"ellowship",-1),l=Object(c["h"])("h2",{class:"m-0 p-0"},[Object(c["h"])("i",{class:"fas fa-plus"})],-1),u=Object(c["h"])("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(c["h"])("span",{class:"navbar-toggler-icon"})],-1),d={class:"collapse navbar-collapse",id:"navbarText"},p=Object(c["h"])("ul",{class:"navbar-nav mr-auto"},[Object(c["h"])("li",{class:"nav-item"})],-1),b={class:"navbar-text text-light"},f={key:1,class:"dropdown font-nav"},v={class:"mx-3 outline font-nav"},m=Object(c["h"])("div",{class:"list-group-item list-group-item-action hoverable font-nav"}," Profile ",-1);Object(c["s"])();const g=n((e,t,a,g,O,h)=>{const j=Object(c["y"])("router-link");return Object(c["r"])(),Object(c["d"])("nav",o,[Object(c["h"])(j,{class:"navbar-brand d-flex outline",to:{name:"Home"}},{default:n(()=>[Object(c["h"])("h1",r,[s,i,Object(c["h"])("span",null,[g.user.isAuthenticated?(Object(c["r"])(),Object(c["d"])("button",{key:0,type:"button","aria-label":"Add Keep",class:"btn btn-outline-info bg-transparent border-0 outline-plus p-0 px-1 my-0 ml-2",onClick:t[1]||(t[1]=(...e)=>g.createKeep&&g.createKeep(...e))},[l])):Object(c["e"])("",!0)])])]),_:1}),u,Object(c["h"])("div",d,[p,Object(c["h"])("span",b,[g.user.isAuthenticated?(Object(c["r"])(),Object(c["d"])("div",f,[Object(c["h"])("div",{class:"dropdown-toggle",onClick:t[3]||(t[3]=e=>g.state.dropOpen=!g.state.dropOpen)},[Object(c["h"])("img",{src:g.account.picture,alt:"user photo",height:"40",class:"rounded-circle"},null,8,["src"]),Object(c["h"])("span",v,Object(c["A"])(g.user.name),1)]),Object(c["h"])("div",{class:["dropdown-menu p-0 list-group w-100",{show:g.state.dropOpen}],onClick:t[5]||(t[5]=e=>g.state.dropOpen=!1)},[Object(c["h"])(j,{to:{name:"Profile",params:{id:g.account.id}}},{default:n(()=>[m]),_:1},8,["to"]),Object(c["h"])("div",{class:"list-group-item list-group-item-action hoverable font-nav",onClick:t[4]||(t[4]=(...e)=>g.logout&&g.logout(...e))}," Logout ")],2)])):(Object(c["r"])(),Object(c["d"])("button",{key:0,class:"btn btn-outline-light text-uppercase",onClick:t[2]||(t[2]=(...e)=>g.login&&g.login(...e))}," Login "))])])])});var O=a("8816"),h=a("83fc"),j=a("8c89"),y=a("41cb"),w=a("473f"),k=a("2b20");const K=Object(O["b"])({domain:j["e"],clientId:j["c"],audience:j["a"],onRedirectCallback:e=>{y["a"].push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}});K.on(K.AUTH_EVENTS.AUTHENTICATED,(async function(){Object(k["b"])(K.bearer),h["a"].user=K.user,await w["a"].getAccount()}));var x=a("6c96"),P=a("3bef"),T=a("5d40"),A={name:"Navbar",setup(){const e=Object(c["v"])({dropOpen:!1});return{state:e,user:Object(c["b"])(()=>h["a"].user),account:Object(c["b"])(()=>h["a"].account),async login(){K.loginWithPopup()},async logout(){await K.logout({returnTo:window.location.origin})},async createKeep(){try{await T["a"].keepModal(),await x["a"].createKeep(),h["a"].rawTags[0]&&(await P["a"].createTags(),await P["a"].createKeepTags(h["a"].newKeep)),T["a"].toast(`Your new Keep, ${h["a"].newKeep.name}, was created!`,"success"),await x["a"].getKeeps()}catch(e){T["a"].toast("Error: "+e,"error")}}}}};a("0f80");A.render=g,A.__scopeId="data-v-32ca7e08";t["default"]=A},a2f9:function(e,t,a){var c={"./AboutPage.vue":["478b","chunk-2d0c19e3"],"./AccountPage.vue":["e542","chunk-6e644de2"],"./HomePage.vue":["78a7","chunk-b72a7c3a"],"./ProfilePage.vue":["1a3e","chunk-9a46c246"],"./SearchPage.vue":["3790","chunk-7861189f"],"./VaultPage.vue":["e6f4","chunk-cacf060c"]};function n(e){if(!a.o(c,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=c[e],n=t[0];return a.e(t[1]).then((function(){return a(n)}))}n.keys=function(){return Object.keys(c)},n.id="a2f9",e.exports=n},a9f9:function(e,t,a){"use strict";a("b787")},ad6e:function(e,t,a){"use strict";a("0e58")},af26:function(e,t,a){"use strict";a.r(t);var c=a("7a23");const n=Object(c["E"])("data-v-689457a1");Object(c["u"])("data-v-689457a1");const o={class:"card px-md-2 px-1 pb-md-4 pb-2 position-relative"},r={class:"position-relative"},s={class:"text-overlay text-shadow text-light font-lg"},i={key:0,type:"button","aria-label":"Remove Keep from Vault",class:"btn btn-outline-danger bg-transparent border-0 p-0 m-0 btn-overlay","data-dismiss":"modal",disabled:""},l=Object(c["h"])("i",{class:"fas fa-shield-alt font-lg"},null,-1),u={key:1,type:"button","aria-label":"Remove Keep from Vault",class:"btn btn-outline-info bg-transparent border-0 p-0 m-0 btn-overlay","data-dismiss":"modal",disabled:""},d=Object(c["h"])("i",{class:"fas fa-shield-alt font-lg"},null,-1);Object(c["s"])();const p=n((e,t,a,p,b,f)=>{const v=Object(c["y"])("router-link");return Object(c["r"])(),Object(c["d"])("div",o,[Object(c["h"])(v,{to:{name:"Vault",params:{id:a.cardProp.id}}},{default:n(()=>[Object(c["h"])("div",r,[Object(c["h"])("img",{class:"w-100 box-shadow",alt:"Vault Image",src:a.cardProp.img},null,8,["src"]),Object(c["h"])("h4",s,Object(c["A"])(a.cardProp.name),1)])]),_:1},8,["to"]),a.cardProp.isPrivate?(Object(c["r"])(),Object(c["d"])("button",i,[l])):(Object(c["r"])(),Object(c["d"])("button",u,[d]))])});var b={name:"VaultCard",props:{cardProp:{type:Object,required:!0}},setup(){return{}},components:{}};a("c768");b.render=p,b.__scopeId="data-v-689457a1";t["default"]=b},b787:function(e,t,a){},bd7b:function(e,t,a){},c1ad:function(e,t,a){"use strict";a("8c3b")},c768:function(e,t,a){"use strict";a("5df2")},ccc2:function(e,t,a){var c={"./DropdownComponent.vue":"d824","./KeepCardComponent.vue":"fecc","./KeepComponent.vue":"255a","./ModalComponent.vue":"8169","./ModalComponent.vue.vue":"8169","./TagComponent.vue":"697c","./VaultCardComponent.vue":"af26","./navbar.vue":"9d8d"};function n(e){var t=o(e);return a(t)}function o(e){if(!a.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}n.keys=function(){return Object.keys(c)},n.resolve=o,e.exports=n,n.id="ccc2"},d10d:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var c=a("83fc"),n=a("2b20");class o{async getProfileVaults(e){const t=await n["a"].get(`api/profiles/${e}/vaults`);c["a"].vaults=t.data}async getAllVaults(e){const t=await n["a"].get(`api/profiles/${e}/vaults`);c["a"].allVaults=t.data}async getVaultKeeps(e){const t=await n["a"].get(`api/vaults/${e}/keeps`);c["a"].vaultKeeps=t.data}async setActiveVault(e){const t=await n["a"].get("api/vaults/"+e);c["a"].activeVault=t.data}async addToVault(e,t){const a={vaultId:e,keepId:t.id};await n["a"].post("api/vaultkeeps",a)}async createVault(){const e=await n["a"].post("api/vaults",c["a"].newVault);c["a"].newVault=e.data}async editVault(e){const t=await n["a"].put("api/vaults/"+e.id,e);c["a"].activeVault=t.data}async deleteVault(e){await n["a"].delete("api/vaults/"+e)}async removeFromVault(e){await n["a"].delete("api/vaultkeeps/"+e)}}const r=new o},d824:function(e,t,a){"use strict";a.r(t);var c=a("7a23");const n=Object(c["E"])("data-v-da9c7c12");Object(c["u"])("data-v-da9c7c12");const o={key:0,class:"text-danger"},r={key:1};Object(c["s"])();const s=n((e,t,a,n,s,i)=>a.vaultProp.creatorId===n.state.account.id?(Object(c["r"])(),Object(c["d"])("li",{key:0,class:"dropdown-item","data-dismiss":"modal",onClick:t[1]||(t[1]=e=>n.addToVault(a.vaultProp,a.keepProp))},[a.vaultProp.isPrivate?(Object(c["r"])(),Object(c["d"])("span",o,Object(c["A"])(a.vaultProp.name),1)):(Object(c["r"])(),Object(c["d"])("span",r,Object(c["A"])(a.vaultProp.name),1))])):Object(c["e"])("",!0));var i=a("83fc"),l=a("d10d"),u=a("5d40"),d={name:"Dropdown",props:{vaultProp:{type:Object,required:!0},keepProp:{type:Object,required:!0}},setup(){const e=Object(c["v"])({contains:!1,account:Object(c["b"])(()=>i["a"].account),activeKeep:Object(c["b"])(()=>i["a"].activeKeep)});return Object(c["p"])(async()=>{}),{state:e,async addToVault(t,a){try{await l["a"].getVaultKeeps(t.id),i["a"].vaultKeeps.forEach(c=>{c.keepId===a.id&&(u["a"].toast(`${a.name} was already added to ${t.name}!`,"error"),e.contains=!0)}),!1===e.contains&&(await l["a"].addToVault(t.id,a),u["a"].toast(`Added ${a.name} to ${t.name}!`,"success"))}catch(c){u["a"].toast("Error: "+c,"error")}}}},components:{}};a("ef9b");d.render=s,d.__scopeId="data-v-da9c7c12";t["default"]=d},ef9b:function(e,t,a){"use strict";a("4fa4")},fecc:function(e,t,a){"use strict";a.r(t);var c=a("7a23");const n=Object(c["E"])("data-v-f48eac18");Object(c["u"])("data-v-f48eac18");const o={key:0,class:"card px-md-2 px-1 pb-md-4 pb-2"},r={class:"text-overlay text-shadow text-light font-lg"};Object(c["s"])();const s=n((e,t,a,n,s,i)=>{const l=Object(c["y"])("Modal");return a.cardProp.creatorId===a.profileProp?(Object(c["r"])(),Object(c["d"])("div",o,[Object(c["h"])("div",{class:"position-relative","data-toggle":"modal","data-target":"#keepModal",onClick:t[1]||(t[1]=e=>n.setActiveKeep(a.cardProp.id))},[Object(c["h"])("img",{class:"w-100 box-shadow",alt:"Keep Image",src:a.cardProp.img},null,8,["src"]),Object(c["h"])("h4",r,Object(c["A"])(a.cardProp.name),1)]),void 0!==n.state.activeKeep.creatorId?(Object(c["r"])(),Object(c["d"])(l,{key:0})):Object(c["e"])("",!0)])):Object(c["e"])("",!0)});var i=a("83fc"),l=a("6c96"),u={name:"KeepCard",props:{cardProp:{type:Object,required:!0},profileProp:{type:String,required:!0}},setup(){const e=Object(c["v"])({account:Object(c["b"])(()=>i["a"].account),activeKeep:Object(c["b"])(()=>i["a"].activeKeep)});return{state:e,async setActiveKeep(e){try{i["a"].loading=!0,setTimeout((function(){i["a"].loading=!1}),1100),l["a"].setActiveKeep(e),await l["a"].getKeepTags(e)}catch(t){Notification.toast("Error: "+t,"error")}}}},components:{}};a("c1ad");u.render=s,u.__scopeId="data-v-f48eac18";t["default"]=u}});