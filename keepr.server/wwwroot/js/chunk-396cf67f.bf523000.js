(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-396cf67f"],{"1a3e":function(t,e,a){"use strict";a.r(e);var l=a("7a23");const c=Object(l["E"])("data-v-b28c30b2");Object(l["u"])("data-v-b28c30b2");const s={key:0,class:"profile container-fluid py-md-4 py-2 px-md-5 px-4"},i={id:"profile-info",class:"row justify-content-center"},o={class:"col-md-2 col-5 pt-md-4 pt-3"},r=Object(l["h"])("i",{class:"fas fa-edit"},null,-1),n={class:"col-md-10 col-7 pt-md-5"},b={key:0},u={key:0,class:"font-xxl"},d={key:1,class:"font-xxl text-danger"},p={key:1,class:"font-xxl"},j={class:"font-lg"},O={class:"font-lg"},f={id:"add-vault",class:"row justify-content-start pt-md-5 pt-3 pl-2"},h={class:"col"},m={class:"font-xl"},v={key:0},g=Object(l["h"])("i",{class:"fas fa-shield-alt"},null,-1),w=Object(l["h"])("u",null,"Public Vaults",-1),y={key:1},k=Object(l["h"])("i",{class:"fas fa-shield-alt"},null,-1),P=Object(l["h"])("u",null,"Private Vaults",-1),V={key:2},x=Object(l["h"])("u",null,"Vaults",-1),K=Object(l["h"])("i",{class:"fas fa-plus"},null,-1),A={id:"vaults",class:"card-columns"},T={id:"add-keep",class:"row justify-content-start pt-md-4 pt-3 pl-2"},C={class:"col"},S={class:"font-xl"},E=Object(l["h"])("u",null,"Keeps",-1),G=Object(l["h"])("i",{class:"fas fa-plus"},null,-1),Y={id:"keeps",class:"card-columns"},I={key:1,class:"loading container-fluid pt-5"},J=Object(l["h"])("div",{class:"row justify-content-center"},[Object(l["h"])("div",{class:"col text-center pt-5"},[Object(l["h"])("i",{class:"fas fa-ring fa-spin font-xxl"})])],-1);Object(l["s"])();const M=c((t,e,a,c,M,N)=>{const $=Object(l["y"])("VaultCard"),_=Object(l["y"])("KeepCard");return c.state.loading?(Object(l["r"])(),Object(l["d"])("div",I,[J])):(Object(l["r"])(),Object(l["d"])("div",s,[Object(l["h"])("div",i,[Object(l["h"])("div",o,[c.state.profile.id===c.state.account.id?(Object(l["r"])(),Object(l["d"])("button",{key:0,type:"button",class:"btn btn-outline-info btn-overlay font-md","aria-label":"Edit Profile",onClick:e[1]||(e[1]=(...t)=>c.editProfile&&c.editProfile(...t))},[r])):Object(l["e"])("",!0),Object(l["h"])("img",{class:"rounded-circle profile",src:c.state.profile.picture,loading:"lazy",draggable:"false",alt:""},null,8,["src"])]),Object(l["h"])("div",n,["Smeagol"===c.state.profile.name?(Object(l["r"])(),Object(l["d"])("div",b,["Smeagol"===c.state.smeagol?(Object(l["r"])(),Object(l["d"])("h2",u,[Object(l["h"])("u",null,Object(l["A"])(c.state.smeagol),1)])):Object(l["e"])("",!0),"Gollum"===c.state.smeagol?(Object(l["r"])(),Object(l["d"])("h2",d,[Object(l["h"])("u",null,[Object(l["h"])("i",null,Object(l["A"])(c.state.smeagol),1)])])):Object(l["e"])("",!0)])):(Object(l["r"])(),Object(l["d"])("h2",p,[Object(l["h"])("u",null,Object(l["A"])(c.state.profile.name.split("@")[0]),1)])),Object(l["h"])("h3",j," Vaults: "+Object(l["A"])(c.state.allVaults.length),1),Object(l["h"])("h3",O," Keeps: "+Object(l["A"])(c.state.keeps.length),1)])]),Object(l["h"])("div",f,[Object(l["h"])("div",h,[Object(l["h"])("h4",m,[c.state.profile.id===c.state.account.id&&!1===c.state.private?(Object(l["r"])(),Object(l["d"])("span",v,[Object(l["h"])("button",{type:"button","aria-label":"Public or Private",class:"btn btn-outline-info bg-transparent border-0 font-lg pt-0 px-2 mr-4",onClick:e[2]||(e[2]=t=>c.showPrivates(!0))},[g]),w])):Object(l["e"])("",!0),c.state.profile.id===c.state.account.id&&!0===c.state.private?(Object(l["r"])(),Object(l["d"])("span",y,[Object(l["h"])("button",{type:"button","aria-label":"Public or Private",class:"btn btn-outline-danger bg-transparent border-0 font-lg pt-0 px-2 mr-4",onClick:e[3]||(e[3]=t=>c.showPrivates(!1))},[k]),P])):c.state.profile.id!==c.state.account.id?(Object(l["r"])(),Object(l["d"])("span",V,[x])):Object(l["e"])("",!0),Object(l["h"])("span",null,[c.state.profile.id===c.state.account.id?(Object(l["r"])(),Object(l["d"])("button",{key:0,type:"button","aria-label":"Add Vault",class:"btn btn-outline-info bg-transparent border-0 font-lg pt-0 px-2 ml-4",onClick:e[4]||(e[4]=(...t)=>c.createVault&&c.createVault(...t))},[K])):Object(l["e"])("",!0)])])])]),Object(l["h"])("div",A,[(Object(l["r"])(!0),Object(l["d"])(l["a"],null,Object(l["x"])(c.state.vaults,t=>(Object(l["r"])(),Object(l["d"])($,{key:t.id,"card-prop":t,"profile-prop":c.route.params.id},null,8,["card-prop","profile-prop"]))),128))]),Object(l["h"])("div",T,[Object(l["h"])("div",C,[Object(l["h"])("h4",S,[E,Object(l["h"])("span",null,[c.state.profile.id===c.state.account.id?(Object(l["r"])(),Object(l["d"])("button",{key:0,type:"button","aria-label":"Add Keep",class:"btn btn-outline-info bg-transparent border-0 font-lg py-0 px-2 ml-3",onClick:e[5]||(e[5]=(...t)=>c.createKeep&&c.createKeep(...t))},[G])):Object(l["e"])("",!0)])])])]),Object(l["h"])("div",Y,[(Object(l["r"])(!0),Object(l["d"])(l["a"],null,Object(l["x"])(c.state.keeps,t=>(Object(l["r"])(),Object(l["d"])(_,{key:t.id,"card-prop":t,"profile-prop":c.route.params.id},null,8,["card-prop","profile-prop"]))),128))])]))});var N=a("83fc"),$=a("d10d"),_=a("6c96"),z=a("3bef"),q=a("473f"),B=a("5d40"),D=a("6c02"),F={name:"Profile",setup(){const t=Object(D["c"])(),e=Object(l["v"])({loading:!0,private:!1,smeagol:"Smeagol",profile:Object(l["b"])(()=>N["a"].profile),account:Object(l["b"])(()=>N["a"].account),keeps:Object(l["b"])(()=>N["a"].keeps),vaults:Object(l["b"])(()=>N["a"].vaults),allVaults:Object(l["b"])(()=>N["a"].allVaults)});return Object(l["p"])(async()=>{try{setTimeout((function(){e.loading=!1}),900),await q["a"].getProfile(t.params.id),await _["a"].getProfileKeeps(t.params.id),await $["a"].getAllVaults(t.params.id),await $["a"].getProfileVaults(t.params.id),N["a"].vaults=e.vaults.filter(t=>!t.isPrivate),"Smeagol"===e.profile.name&&(setTimeout((function(){e.smeagol="Gollum",setTimeout((function(){e.smeagol="Smeagol"}),1e3)}),1200),setInterval(()=>{setTimeout((function(){e.smeagol="Gollum",setTimeout((function(){e.smeagol="Smeagol"}),1e3)}),1200)},3360))}catch(a){B["a"].toast("Error: "+a,"error")}}),{route:t,state:e,async createVault(){try{await B["a"].vaultModal(),await B["a"].isPrivate(N["a"].newVault),await $["a"].createVault(),B["a"].toast(`Your new Vault, ${N["a"].newVault.name}, was created!`,"success"),await $["a"].getProfileVaults(t.params.id),N["a"].vaults=e.vaults.filter(t=>!t.isPrivate)}catch(a){B["a"].toast("Error: "+a,"error")}},async createKeep(){try{await B["a"].keepModal(),await _["a"].createKeep(),N["a"].rawTags[0]&&(await z["a"].createTags(),await z["a"].createKeepTags(N["a"].newKeep)),B["a"].toast(`Your new Keep, ${N["a"].newKeep.name}, was created!`,"success"),await _["a"].getProfileKeeps(t.params.id)}catch(e){B["a"].toast("Error: "+e,"error")}},async editProfile(){await B["a"].editAccount(),await q["a"].editAccount(N["a"].account),B["a"].toast("Your profile was updated!","success")},async showPrivates(t){await $["a"].getProfileVaults(e.account.id),t?(N["a"].vaults=e.vaults.filter(t=>t.isPrivate),B["a"].toast("Now showing your Private Vaults","warning")):(N["a"].vaults=e.vaults.filter(t=>!t.isPrivate),B["a"].toast("Now showing your Public Vaults","info")),e.private=t}}}};a("2209");F.render=M,F.__scopeId="data-v-b28c30b2";e["default"]=F},2209:function(t,e,a){"use strict";a("949a")},"949a":function(t,e,a){}}]);