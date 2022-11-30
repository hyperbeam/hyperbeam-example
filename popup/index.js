{const e=function(){return this||globalThis}(),{Boolean:t,Error:n,Object:a,Promise:o,document:s,window:i}=e,{hasOwnProperty:l,toString:r}={},c=a.call.bind(a.call),d=!e.chrome.app;(()=>{var e,l={2610:(e,n,l)=>{"use strict";l(2993);var r=l(3293),u=l(432),p=l(287),m=l(3057),g=l(5310),x=l(7311),f=(l(5517),l(6252)),b=l(9963),v=l(3577);const h=["data-failure-reason"],C={class:"flex menu-buttons"},k=[(0,f._)("img",{src:"/public/images/icon128.png"},null,-1)],w=["textContent"],y=["data-message","tabIndex"],E=["data-message","tabIndex"],S=["data-message","tabIndex"],_={key:0,class:"menu"},I={class:"menu-item menu-area menu-find"},M=["href","data-message","tabIndex"],D=(0,f.Uk)("/"),j={key:1,class:"failure-reason"},T=["textContent"],F=["textContent"],$=["data-type"],U=["tabIndex","onClick"],R=["textContent","data-totals"],O=["tabIndex","data-message","onFocus","onKeydown","onClick"],z=["src"],q=["textContent","data-upd","onClick","onContextmenu","onMousedown"],A={class:"submenu-buttons"},P=["tabIndex","onClick","title"],B=["tabIndex","onClick"],Z={key:0,class:"excludes-menu flex flex-col"},K=["onUpdate:modelValue","rows"],N=["textContent","onClick"],V=["textContent","onClick"],W=["textContent"],H=(0,f._)("ul",{class:"monospace-font mt-1"},[(0,f._)("li",null,"https://www.foo.com/path/*bar*"),(0,f._)("li",null,"*://www.foo.com/*"),(0,f._)("li",null,"*://*.foo.com/*")],-1),J={class:"submenu-commands"},L=["tabIndex",".CMD","data-message"],Y=["textContent"],G={key:2,class:"failure-reason"},X=["textContent"],Q=["textContent"],ee=["textContent"],te=["tabIndex","textContent"],ne={class:"message"},ae=["textContent"],oe={key:4,class:"extras-menu",ref:"extrasMenu"},se=["href","textContent"],ie=["textContent"],le=["textContent"],re=["textContent"];function ce(e,t){var n;const a=(0,f.up)("icon"),o=(0,f.up)("tooltip");return(0,f.wg)(),(0,f.iD)("div",{class:"page-popup",onClick:t[11]||(t[11]=t=>e.activeExtras&&e.toggleExtras(null)),onClickCapture:t[12]||(t[12]=(0,b.iM)((...t)=>e.onOpenUrl&&e.onOpenUrl(...t),["prevent"])),onContextmenu:t[13]||(t[13]=t=>e.activeExtras&&(e.toggleExtras(null),t.preventDefault())),onMouseenterCapture:t[14]||(t[14]=(...t)=>e.delegateMouseEnter&&e.delegateMouseEnter(...t)),onMouseleaveCapture:t[15]||(t[15]=(...t)=>e.delegateMouseLeave&&e.delegateMouseLeave(...t)),onFocusCapture:t[16]||(t[16]=(...t)=>e.updateMessage&&e.updateMessage(...t)),"data-failure-reason":e.failureReason},[(0,f._)("div",C,[(0,f._)("div",{class:(0,v.C_)(["logo",{disabled:!e.options.isApplied}])},k,2),(0,f._)("div",{class:(0,v.C_)(["flex-1 ext-name",{disabled:!e.options.isApplied}]),textContent:(0,v.zw)(e.name)},null,10,w),(0,f._)("span",{class:(0,v.C_)(["menu-area",{disabled:!e.options.isApplied}]),"data-message":e.options.isApplied?e.i18n("menuScriptEnabled"):e.i18n("menuScriptDisabled"),tabIndex:e.tabIndex,onClick:t[0]||(t[0]=(...t)=>e.onToggle&&e.onToggle(...t))},[(0,f.Wm)(a,{name:e.getSymbolCheck(e.options.isApplied)},null,8,["name"])],10,y),(0,f._)("span",{class:"menu-area","data-message":e.i18n("menuDashboard"),tabIndex:e.tabIndex,onClick:t[1]||(t[1]=(...t)=>e.onManage&&e.onManage(...t))},[(0,f.Wm)(a,{name:"cog"})],8,E),(0,f._)("span",{class:"menu-area","data-message":e.i18n("menuNewScript"),tabIndex:e.tabIndex,onClick:t[2]||(t[2]=(...t)=>e.onCreateScript&&e.onCreateScript(...t))},[(0,f.Wm)(a,{name:"plus"})],8,S)]),e.store.injectable?(0,f.wy)(((0,f.wg)(),(0,f.iD)("div",_,[(0,f._)("div",I,[((0,f.wg)(!0),(0,f.iD)(f.HY,null,(0,f.Ko)(e.findUrls,(t,n,o)=>((0,f.wg)(),(0,f.iD)(f.HY,{key:t},[(0,f._)("a",{target:"_blank",class:(0,v.C_)({ellipsis:!o,"mr-1":!o,"ml-1":o}),href:t,"data-message":t.split("://")[1],tabIndex:e.tabIndex},[o?(0,f.kq)("",!0):((0,f.wg)(),(0,f.j4)(a,{key:0,name:"search"})),(0,f.Uk)((0,v.zw)(n),1)],10,M),o?(0,f.kq)("",!0):((0,f.wg)(),(0,f.iD)(f.HY,{key:0},[D],64))],64))),128))])],512)),[[b.F8,e.store.domain]]):(0,f.kq)("",!0),e.failureReasonText?((0,f.wg)(),(0,f.iD)("div",j,[e.injectionScopes[0]&&!e.options.isApplied?((0,f.wg)(),(0,f.j4)(o,{key:0,content:e.i18n("labelAutoReloadCurrentTabDisabled"),class:"reload-hint",align:"start",placement:"bottom"},{default:(0,f.w5)(()=>[(0,f.Wm)(a,{name:"info"})]),_:1},8,["content"])):(0,f.kq)("",!0),(0,f._)("span",{textContent:(0,v.zw)(e.failureReasonText)},null,8,T),e.store.blacklisted?((0,f.wg)(),(0,f.iD)("code",{key:1,textContent:(0,v.zw)(e.store.blacklisted),class:"ellipsis inline-block"},null,8,F)):(0,f.kq)("",!0)])):(0,f.kq)("",!0),((0,f.wg)(!0),(0,f.iD)(f.HY,null,(0,f.Ko)(e.injectionScopes,n=>((0,f.wg)(),(0,f.iD)("div",{class:(0,v.C_)(["menu menu-scripts",{expand:e.activeMenu===n.name,"block-scroll":e.activeExtras}]),"data-type":n.name,key:n.name},[(0,f._)("div",{class:"menu-item menu-area menu-group",tabIndex:e.tabIndex,onClick:t=>e.toggleMenu(n.name)},[(0,f.Wm)(a,{name:"arrow",class:"icon-collapse"}),(0,f._)("div",{class:"flex-auto",textContent:(0,v.zw)(n.title),"data-totals":n.totals},null,8,R)],8,U),(0,f._)("div",{class:"submenu",ref_for:!0,ref:"scriptList",focusme:""},[((0,f.wg)(!0),(0,f.iD)(f.HY,null,(0,f.Ko)(n.list,(n,o)=>((0,f.wg)(),(0,f.iD)("div",{key:o,class:(0,v.C_)([{disabled:!n.data.config.enabled,failed:n.data.failed,removed:n.data.config.removed,runs:n.data.runs,"extras-shown":e.activeExtras===n,"excludes-shown":n.excludesValue},"script"])},[(0,f._)("div",{class:"menu-item menu-area",tabIndex:e.tabIndex,"data-message":n.name,onFocus:t=>e.focusedItem=n,onKeydown:[(0,b.D2)((0,b.iM)(t=>e.onEditScript(n),["exact","stop"]),["enter"]),(0,b.D2)((0,b.iM)(t=>e.onToggleScript(n),["exact","stop"]),["space"])],onClick:t=>e.onToggleScript(n)},[(0,f._)("img",{class:"script-icon",src:n.data.safeIcon},null,8,z),(0,f.Wm)(a,{name:e.getSymbolCheck(n.data.config.enabled)},null,8,["name"]),(0,f._)("div",{class:"script-name flex-auto ellipsis",textContent:(0,v.zw)(n.name),"data-upd":n.upd,onClick:(0,b.iM)(t=>e.onEditScript(n),["ctrl","exact","stop"]),onContextmenu:(0,b.iM)(t=>e.onEditScript(n),["exact","stop"]),onMousedown:(0,b.iM)(t=>e.onEditScript(n),["middle","exact","stop"])},null,40,q)],40,O),(0,f.wy)((0,f._)("div",A,[(0,f._)("div",{class:"submenu-button",tabIndex:e.tabIndex,onClick:t=>e.onEditScript(n),title:e.i18n("buttonEditClickHint")},[(0,f.Wm)(a,{name:"code"})],8,P),(0,f._)("div",{class:"submenu-button",tabIndex:e.tabIndex,onClick:(0,b.iM)(t=>e.toggleExtras(n,t),["stop"])},[(0,f.Wm)(a,{name:"more"})],8,B)],512),[[b.F8,e.showButtons(n)]]),null!=n.excludesValue?((0,f.wg)(),(0,f.iD)("div",Z,[(0,f.wy)((0,f._)("textarea",{"onUpdate:modelValue":e=>n.excludesValue=e,spellcheck:"false",rows:e.calcRows(n.excludesValue)},null,8,K),[[b.nr,n.excludesValue]]),(0,f._)("div",null,[(0,f._)("button",{textContent:(0,v.zw)(e.i18n("buttonOK")),onClick:t=>e.onExcludeSave(n)},null,8,N),(0,f._)("button",{textContent:(0,v.zw)(e.i18n("buttonCancel")),onClick:t=>e.onExcludeClose(n)},null,8,V),(0,f._)("details",null,[(0,f._)("summary",null,[(0,f.Wm)(a,{name:"info"})]),(0,f._)("small",null,[(0,f._)("span",{textContent:(0,v.zw)(e.i18n("menuExcludeHint"))},null,8,W),H])])])])):(0,f.kq)("",!0),(0,f._)("div",J,[((0,f.wg)(!0),(0,f.iD)(f.HY,null,(0,f.Ko)(e.store.commands[n.data.props.id],(o,s)=>((0,f.wg)(),(0,f.iD)("div",{class:"menu-item menu-area",key:s,tabIndex:e.tabIndex,".CMD":{id:n.data.props.id,cap:o},"data-message":o,onMousedown:t[3]||(t[3]=(...t)=>e.onCommand&&e.onCommand(...t)),onMouseup:t[4]||(t[4]=(...t)=>e.onCommand&&e.onCommand(...t)),onKeydown:[t[5]||(t[5]=(0,b.D2)((...t)=>e.onCommand&&e.onCommand(...t),["enter"])),t[6]||(t[6]=(0,b.D2)((...t)=>e.onCommand&&e.onCommand(...t),["space"]))]},[(0,f.Wm)(a,{name:"command"}),(0,f._)("div",{class:"flex-auto ellipsis",textContent:(0,v.zw)(o)},null,8,Y)],40,L))),128))])],2))),128))],512)],10,$))),128)),e.store.injectionFailure?((0,f.wg)(),(0,f.iD)("div",G,[(0,f._)("div",{textContent:(0,v.zw)(e.i18n("menuInjectionFailed"))},null,8,X),e.store.injectionFailure.fixable?((0,f.wg)(),(0,f.iD)("a",{key:0,textContent:(0,v.zw)(e.i18n("menuInjectionFailedFix")),href:"#",onClick:t[7]||(t[7]=(0,b.iM)((...t)=>e.onInjectionFailureFix&&e.onInjectionFailureFix(...t),["prevent"]))},null,8,Q)):(0,f.kq)("",!0)])):(0,f.kq)("",!0),null!=(n=e.store.currentTab)&&n.incognito?((0,f.wg)(),(0,f.iD)("div",{key:3,class:"incognito",textContent:(0,v.zw)(e.i18n("msgIncognitoChanges"))},null,8,ee)):(0,f.kq)("",!0),(0,f._)("footer",null,[(0,f._)("a",{href:"https://violentmonkey.github.io/",target:"_blank",tabIndex:e.tabIndex,textContent:(0,v.zw)(e.i18n("visitWebsite"))},null,8,te)]),(0,f.wy)((0,f._)("div",ne,[(0,f._)("div",{textContent:(0,v.zw)(e.message)},null,8,ae)],512),[[b.F8,e.message]]),e.activeExtras?((0,f.wg)(),(0,f.iD)("div",oe,[e.activeExtras.home?((0,f.wg)(),(0,f.iD)("a",{key:0,tabindex:"0",href:e.activeExtras.home,textContent:(0,v.zw)(e.i18n("buttonHome")),rel:"noopener noreferrer",target:"_blank"},null,8,se)):(0,f.kq)("",!0),(0,f._)("div",{textContent:(0,v.zw)(e.i18n("menuExclude")),tabindex:"0",onClick:t[8]||(t[8]=(...t)=>e.onExclude&&e.onExclude(...t))},null,8,ie),(0,f._)("div",{textContent:(0,v.zw)(e.activeExtras.data.config.removed?e.i18n("buttonRestore"):e.i18n("buttonRemove")),tabindex:"0",onClick:t[9]||(t[9]=(...t)=>e.onRemoveScript&&e.onRemoveScript(...t))},null,8,le),!e.activeExtras.data.config.removed&&e.canUpdate(e.activeExtras.data)?((0,f.wg)(),(0,f.iD)("div",{key:1,textContent:(0,v.zw)(e.i18n("buttonUpdate")),tabindex:"0",onClick:t[10]||(t[10]=(...t)=>e.onUpdateScript&&e.onUpdateScript(...t))},null,8,re)):(0,f.kq)("",!0)],512)):(0,f.kq)("",!0)],40,h)}var de=l(7462),ue=l(2262),pe=l(3824),me=l(4017),ge=l(6930),xe=l(8250);const fe=(0,ue.qj)({scripts:[],frameScripts:[],scriptIds:[],commands:[],domain:"",injectionFailure:null,injectable:!0,blacklisted:!1}),be={init(e=100){this.ready=new o(t=>{this.resolve=t,setTimeout(t,e)})}},ve=browser.runtime.getManifest(),he=`${ve.name} ${ve.version}`,Ce=".script";let ke;const we=(0,ue.qj)({isApplied:me.Z.get("isApplied"),filtersPopup:me.Z.get("filtersPopup")||{}});function ye(...e){return(t,n)=>{for(let a=0;a<e.length;a++){const o=e[a],s=o(t),i=o(n);if(s<i)return-1;if(s>i)return 1}return 0}}me.Z.hook(e=>{"isApplied"in e&&(we.isApplied=e.isApplied),"filtersPopup"in e&&(we.filtersPopup=(0,de.Z)({},we.filtersPopup,e.filtersPopup))});const Ee={components:{Icon:ge.Z,Tooltip:pe.Z},data:()=>({store:fe,options:we,activeMenu:"scripts",activeExtras:null,focusBug:!1,message:null,focusedItem:null,name:he}),computed:{injectionScopes(){const{sort:e,enabledFirst:n,hideDisabled:a}=this.options.filtersPopup,o="alpha"===e||n,{injectable:s}=fe,i="group"===a;return[s&&["scripts",(0,r.ag)("menuMatchedScripts"),i||null],s&&i&&["disabled",(0,r.ag)("menuMatchedDisabledScripts"),!1],["frameScripts",(0,r.ag)("menuMatchedFrameScripts")]].filter(t).map(([t,s,i])=>{let l=fe[t]||fe.scripts;null!=i&&(l=l.filter(e=>!e.config.enabled==!i));const c=l.length,d=null==i?l.reduce((e,t)=>e+t.config.enabled,0):c;return"hide"!==a&&!0!==a||(l=l.filter(e=>e.config.enabled)),l=l.map((a,s)=>{const i=(0,r.pV)(a);return{id:`${t}/${a.props.id}`,name:i,data:a,home:(0,r.t$)(a),key:o&&`${n&&+!a.config.enabled}${"alpha"===e?i.toLowerCase():`${1e6+s}`.slice(1)}`,excludesValue:null,upd:null}}),o&&l.sort((e,t)=>e.key<t.key?-1:e.key>t.key),c&&{name:t,title:s,list:l,totals:d<c?`${d} / ${c}`:`${c}`}}).filter(t)},failureReason:()=>[!fe.injectable&&"noninjectable",fe.blacklisted&&"blacklisted",!1===we.isApplied&&"scripts-disabled"].filter(t).join(" "),failureReasonText:()=>!fe.injectable&&(0,r.ag)("failureReasonNoninjectable")||fe.blacklisted&&(0,r.ag)("failureReasonBlacklisted")||!1===we.isApplied&&(0,r.ag)("menuScriptDisabled")||"",findUrls(){const e=encodeURIComponent(fe.domain);return{[`${(0,r.ag)("menuFindScripts")} (GF)`]:`https://greasyfork.org/scripts/by-site/${e}`,OUJS:`https://openuserjs.org/?q=${e}`}},tabIndex(){return this.activeExtras?-1:0}},methods:{canUpdate:r.TZ,toggleMenu(e){this.activeMenu=this.activeMenu===e?null:e},toggleExtras(e,t){this.activeExtras=this.activeExtras===e?null:e,xe.$J.setContext("activeExtras",this.activeExtras),this.activeExtras&&(e.el=t.target.closest(Ce),this.$nextTick(()=>{const{extrasMenu:e}=this.$refs;e.style.top=`${Math.min(i.innerHeight-e.getBoundingClientRect().height,(t.currentTarget||t.target).getBoundingClientRect().top+16)}px`}))},getSymbolCheck:e=>"toggle-"+(e?"on":"off"),onToggle(){me.Z.set("isApplied",we.isApplied=!we.isApplied),this.checkReload()},onManage(){browser.runtime.openOptionsPage(),i.close()},onOpenUrl(e){const t=e.target.closest("a[href][target=_blank]");t&&((0,r.NB)("TabOpen",{url:t.href}),i.close())},onEditScript(e){(0,r.NB)("OpenEditor",e.data.props.id),i.close()},onCommand(e){const{type:t,currentTarget:n}=e;"mousedown"===t?(ke=n,e.preventDefault()):"keydown"!==t&&ke!==n||((0,r.Cm)(fe.currentTab.id,"Command",(0,de.Z)({},n.CMD,{evt:(0,g.zr)(e,["type","button","shiftKey","altKey","ctrlKey","metaKey","key","keyCode","code"])})),i.close())},onToggleScript(e){const{data:t}=e,n=!t.config.enabled;(0,r.NB)("UpdateScriptInfo",{id:t.props.id,config:{enabled:n}}).then(()=>{t.config.enabled=n,this.checkReload()})},checkReload(){me.Z.get("autoReload")&&(browser.tabs.reload(fe.currentTab.id),fe.scriptIds.length=0,fe.scripts.length=0,fe.frameScripts.length=0,be.init())},async onCreateScript(){(0,r.NB)("OpenEditor"),i.close()},async onInjectionFailureFix(){me.Z.set("defaultInjectInto",u.eT),await(0,r.dL)(100),await browser.tabs.reload(),i.close()},onRemoveScript(){const{config:e,props:{id:t}}=this.activeExtras.data,n=+!e.removed;e.removed=n,(0,r.NB)("MarkRemoved",{id:t,removed:n})},async onUpdateScript(){const e=this.activeExtras,t=(0,r.ag)("msgCheckingForUpdate");e.upd!==t&&(e.upd=t,e.upd=await(0,r.NB)("CheckUpdate",e.data.props.id)?(0,r.ag)("msgUpdated"):(0,r.ag)("msgNoUpdate"))},onExclude(){const e=this.activeExtras;e.excludesValue=[...e.data.custom.excludeMatch||[],`${e.data.pageUrl.split("#")[0]}*`].join("\n"),this.$nextTick(()=>{e.el.querySelector("textarea").focus()})},onExcludeClose(e){e.excludesValue=null,this.focus(e)},async onExcludeSave(e){await(0,r.NB)("UpdateScriptInfo",{id:e.data.props.id,custom:{excludeMatch:e.excludesValue.split("\n").map(e=>e.trim()).filter(t)}}),this.onExcludeClose(e),this.checkReload()},navigate(e){var t;const{activeElement:n}=s,a=Array.from(this.$el.querySelectorAll('[tabindex="0"]')).map(e=>({el:e,rect:e.getBoundingClientRect()})).filter(({rect:e})=>e.width&&e.height);a.sort(ye(e=>e.rect.top,e=>e.rect.left));let o=a.findIndex(({el:e})=>e===n);const i=(e,t)=>{for(let n=o+e;n>=0&&n<a.length;n+=e)if(t(a[o],a[n]))return n};if(o<0)o=0;else if("u"===e||"d"===e){const t="u"===e?-1:1;if(o=i(t,(e,n)=>(e.rect.top-n.rect.top)*t<0),"u"===e)for(;o>0&&a[o-1].rect.top===a[o].rect.top;)o-=1}else{const t="l"===e?-1:1;o=i(t,(e,n)=>(e.rect.left-n.rect.left)*t<0)}null==(t=a[o])||t.el.focus()},focus(e){var t,n;null==e||null==(t=e.el)||null==(n=t.querySelector(".menu-area"))||n.focus()},delegateMouseEnter(e){const{target:t}=e;t.tabIndex>=0&&t.focus()},delegateMouseLeave(e){const{target:t}=e;t!==s.activeElement||(0,xe.u7)(t)||t.blur()},updateMessage(){var e;this.message=(null==(e=s.activeElement)?void 0:e.dataset.message)||""},showButtons(e){var t,n;return(null==(t=this.activeExtras)?void 0:t.id)===e.id||(null==(n=this.focusedItem)?void 0:n.id)===e.id||this.focusBug}},mounted(){c(x.wO,this),xe.$J.enable(),this.disposeList=[xe.$J.register("escape",()=>{var e;const t=this.activeExtras;t?(this.toggleExtras(null),this.focus(t)):null!=(e=s.activeElement)&&e.value?s.activeElement.blur():i.close()}),...d?[xe.$J.register("tab",()=>{(0,xe.nk)(1)}),xe.$J.register("s-tab",()=>{(0,xe.nk)(-1)})]:[],...["up","down","left","right"].map(e=>xe.$J.register(e,this.navigate.bind(this,e[0]),{condition:"!inputFocus"})),xe.$J.register("e",()=>{this.onEditScript(this.focusedItem)},{condition:"!inputFocus"})]},activated(){this.focusBug=!s.hasFocus()},beforeUnmount(){var e;xe.$J.disable(),null==(e=this.disposeList)||e.forEach(e=>{e()})}},Se=(0,l(3744).Z)(Ee,[["render",ce]]);be.init(),(0,x.sY)(Se),a.assign(p.Z,{async SetPopup(e,t){if(fe.currentTab&&fe.currentTab.id!==t.tab.id)return;const n=0===t.frameId;n||await be.ready;const o=e.ids.filter(e=>!fe.scriptIds.includes(e));if(fe.scriptIds.push(...o),n&&(be.resolve(),fe.commands=c(g.Xw,e.menus,a.keys),fe.injectable=!0),o.length){var s;const i=fe[n?"scripts":"frameScripts"],l=(null==(s=e.scripts)?void 0:s.filter(({props:{id:e}})=>o.includes(e)))||a.assign(e,await(0,r.gj)("GetData",{ids:o})).scripts;l.forEach(n=>{(0,m.d)(n,e);const{id:a}=n.props;n.runs=e.runningIds.includes(a),n.pageUrl=t.url,e.failedIds.includes(a)&&(n.failed=!0,fe.injectionFailure||(fe.injectionFailure={fixable:e.injectInto===u.pS}))}),i.push(...l)}}}),(0,r.gj)("CachePop","SetPopup").then(e=>{c(g.zx,e,e=>p.Z.SetPopup(...e))}),null!=CSS.supports&&CSS.supports("list-style-type","disclosure-open")||s.styleSheets[0].insertRule(".excludes-menu ::-webkit-details-marker {display:none}"),o.all([(0,r.gj)("GetTabDomain"),browser.tabs.executeScript({code:"1",runAt:"document_start"}).catch(()=>[])]).then(async([{tab:e,domain:t},[n]])=>{fe.currentTab=e,fe.domain=t,browser.runtime.connect({name:`${e.id}`}),n?fe.blacklisted=await(0,r.gj)("TestBlacklist",e.url):fe.injectable=!1})},6291:(e,t,o)=>{var s={"./arrow.svg":7864,"./author.svg":6263,"./code.svg":4237,"./cog.svg":8527,"./command.svg":6337,"./filter.svg":1691,"./home.svg":6447,"./info.svg":6396,"./more.svg":485,"./plus.svg":336,"./question.svg":934,"./refresh.svg":1727,"./search.svg":2574,"./toggle-off.svg":3882,"./toggle-on.svg":6276,"./trash.svg":2981,"./undo.svg":418};function i(e){var t=l(e);return o(t)}function l(e){if(!o.o(s,e)){var t=new n("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}i.keys=()=>a.keys(s),i.resolve=l,e.exports=i,i.id=6291},7462:(e,t,n)=>{"use strict";function o(){return o=a.assign?a.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)a.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},o.apply(this,arguments)}n.d(t,{Z:()=>o})}},r={};function u(e){var t=r[e];if(void 0!==t)return t.exports;var n=r[e]={exports:{}};return l[e].call(n.exports,n,n.exports,u),n.exports}u.m=l,e=[],u.O=(t,n,o,s)=>{if(!n){var i=1/0;for(d=0;d<e.length;d++){for(var[n,o,s]=e[d],l=!0,r=0;r<n.length;r++)(!1&s||i>=s)&&a.keys(u.O).every(e=>u.O[e](n[r]))?n.splice(r--,1):(l=!1,s<i&&(i=s));if(l){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[n,o,s]},u.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return u.d(t,{a:t}),t},u.d=(e,t)=>{for(var n in t)u.o(t,n)&&!u.o(e,n)&&a.defineProperty(e,n,{enumerable:!0,get:t[n]})},u.o=(e,t)=>a.prototype.hasOwnProperty.call(e,t),u.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&a.defineProperty(e,Symbol.toStringTag,{value:"Module"}),a.defineProperty(e,"__esModule",{value:!0})},u.j=382,(()=>{var e={382:0};u.O.j=t=>0===e[t];var t=(t,n)=>{var a,o,[s,i,l]=n,r=0;if(s.some(t=>0!==e[t])){for(a in i)u.o(i,a)&&(u.m[a]=i[a]);if(l)var c=l(u)}for(t&&t(n);r<s.length;r++)o=s[r],u.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return u.O(c)},n=self.webpackChunkviolentmonkey=self.webpackChunkviolentmonkey||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var p=u.O(void 0,[84],()=>u(2610));p=u.O(p)})()}