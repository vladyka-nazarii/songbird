(()=>{"use strict";var t,e,n,a,r={99:(t,e,n)=>{n.d(e,{Z:()=>i});var a=n(81),r=n.n(a),s=n(645),c=n.n(s)()(r());c.push([t.id,"body{background-color:#d3d3d3}.garage-container{margin:20px 0}.garage{margin:0;padding:0;list-style:none}.track{margin-top:10px}.garage-controls{display:flex;align-items:center;gap:5px}.road{display:flex;justify-content:space-between;width:100%;height:54px;border-bottom:dotted 2px green}.launch{display:flex}.car-controls{align-self:center}.car{position:relative;width:160px;height:60px}.car-image{position:absolute;width:100%;height:100%}.rear-wheel,.front-wheel{position:absolute;width:30%;height:42%;top:51%;left:8.5%;transform-origin:center}.front-wheel{left:63%}.flag{width:50px;margin-right:160px}.winners-table{width:50%;border:solid 1px #000;border-radius:5px;border-spacing:0;font-size:24px;margin:20px 0}.winners-table td{text-align:center;border-top:solid 1px #000;border-right:solid 1px #000;padding:0}.winners-table th{border-right:solid 1px #000;padding:0}.winners-table tr td:last-child,.winners-table tr th:last-child{border-right:none}.winners-table .sorting-button{cursor:pointer}.winner-car{min-width:80px}.modal{position:absolute;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;width:600px;height:300px;background-color:rgba(127,255,212,.3);border-radius:20px;font-size:38px;top:50vh;left:50vw;transform:translateX(-50%) translateY(-50%);padding:20px}.modal .winner-car{width:300px}.hide{display:none}",""]);const i=c},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",a=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),a&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),a&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,a,r,s){"string"==typeof t&&(t=[[null,t,void 0]]);var c={};if(a)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(c[o]=!0)}for(var d=0;d<t.length;d++){var l=[].concat(t[d]);a&&c[l[0]]||(void 0!==s&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=s),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},273:(t,e,n)=>{var a=n(379),r=n.n(a),s=n(795),c=n.n(s),i=n(569),o=n.n(i),d=n(565),l=n.n(d),u=n(216),h=n.n(u),m=n(589),p=n.n(m),y=n(99),g={};g.styleTagTransform=p(),g.setAttributes=l(),g.insert=o().bind(null,"head"),g.domAPI=c(),g.insertStyleElement=h(),r()(y.Z,g),y.Z&&y.Z.locals&&y.Z.locals},379:t=>{var e=[];function n(t){for(var n=-1,a=0;a<e.length;a++)if(e[a].identifier===t){n=a;break}return n}function a(t,a){for(var s={},c=[],i=0;i<t.length;i++){var o=t[i],d=a.base?o[0]+a.base:o[0],l=s[d]||0,u="".concat(d," ").concat(l);s[d]=l+1;var h=n(u),m={css:o[1],media:o[2],sourceMap:o[3],supports:o[4],layer:o[5]};if(-1!==h)e[h].references++,e[h].updater(m);else{var p=r(m,a);a.byIndex=i,e.splice(i,0,{identifier:u,updater:p,references:1})}c.push(u)}return c}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var s=a(t=t||[],r=r||{});return function(t){t=t||[];for(var c=0;c<s.length;c++){var i=n(s[c]);e[i].references--}for(var o=a(t,r),d=0;d<s.length;d++){var l=n(s[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}s=o}}},569:t=>{var e={};t.exports=function(t,n){var a=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,r&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleTagTransform(a,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},198:(t,e,n)=>{n.d(e,{SR:()=>s,nS:()=>r,s3:()=>c});const a="http://localhost:3000",r=`${a}/garage`,s=`${a}/engine`,c=`${a}/winners`},639:(t,e,n)=>{n.d(e,{Bo:()=>o,DT:()=>c,Rn:()=>r,oX:()=>s,tD:()=>i});var a=n(198);const r=async(t,e)=>{let n=await fetch(a.nS);return t&&e&&(n=await fetch(`${a.nS}?_page=${t}&_limit=${e}`)),{items:await n.json(),count:n.headers.get("X-Total-Count")}},s=async t=>(await fetch(`${a.nS}/${t}`)).json(),c=async t=>(await fetch(a.nS,{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}})).json(),i=async t=>(await fetch(`${a.nS}/${t}`,{method:"DELETE"})).json(),o=async(t,e)=>(await fetch(`${a.nS}/${t}`,{method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})).json()},506:(t,e,n)=>{n.d(e,{Ag:()=>c,p6:()=>r,yQ:()=>s});var a=n(198);const r=async t=>(await fetch(`${a.SR}?id=${t}&status=started`,{method:"PATCH"})).json(),s=async t=>(await fetch(`${a.SR}?id=${t}&status=stopped`,{method:"PATCH"})).json(),c=async t=>{const e=await fetch(`${a.SR}?id=${t}&status=drive`,{method:"PATCH"}).catch();return 200!==e.status?{success:!1}:{...await e.json()}}},677:(t,e,n)=>{n.d(e,{AV:()=>i,BS:()=>c,ix:()=>s});var a=n(198),r=n(639);const s=async(t,e,n,s)=>{const c=await fetch(`${a.s3}${((t,e)=>t&&e?`?_page=${t}&_limit=${e}`:"")(t,e)}${((t,e)=>t&&e?`&_sort=${t}&_order=${e}`:"")(n,s)}`),i=await c.json();return{items:await Promise.all(i.map((async t=>({...t,car:await(0,r.oX)(t.id)})))),count:c.headers.get("X-Total-Count")}},c=async t=>(await fetch(`${a.s3}/${t}`,{method:"DELETE"})).json(),i=async(t,e)=>{const n=await(async t=>(await fetch(`${a.s3}/${t}`)).status)(t);if(404===n)await(async t=>(await fetch(a.s3,{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}})).json())({id:t,wins:1,time:e});else{const n=await(async t=>(await fetch(`${a.s3}/${t}`)).json())(t);await(async(t,e)=>(await fetch(`${a.s3}/${t}`,{method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})).json())(t,{id:t,wins:n.wins+1,time:e<n.time?e:n.time})}}},607:(t,e,n)=>{n.a(t,(async(t,e)=>{try{var a=n(307),r=n(50),s=n(628),c=(n(273),n(284)),i=t([a,r,c]);[a,r,c]=i.then?(await i)():i,(0,a.X)(),(0,c.Q)(s.GV.CarsPage,s.Si.CarsCount,s.cd.Cars),(0,r.o)(),e()}catch(t){e(t)}}))},628:(t,e,n)=>{var a,r,s,c,i,o,d,l,u,h;n.d(e,{G7:()=>c,GV:()=>d,Ii:()=>h,Il:()=>u,KM:()=>r,PE:()=>s,Si:()=>l,T3:()=>o,cd:()=>i,sg:()=>a}),function(t){t.Wins="wins",t.Time="time"}(a||(a={})),function(t){t.ByAsc="ASC",t.ByDesc="DESC"}(r||(r={})),function(t){t.ByWins="wins",t.ByTime="time"}(s||(s={})),function(t){t.Garage="garage",t.Winners="winners"}(c||(c={})),function(t){t[t.Cars=7]="Cars",t[t.Winners=10]="Winners"}(i||(i={})),function(t){t[t.First=1]="First"}(o||(o={})),function(t){t.CarsPage="carsPage",t.WinnersPage="winnersPage"}(d||(d={})),function(t){t.CarsCount="carsCount",t.WinnersCount="winnersCount"}(l||(l={})),function(t){t[t.Max=255]="Max"}(u||(u={})),function(t){t[t.Number=100]="Number"}(h||(h={}))},50:(t,e,n)=>{n.a(t,(async(t,a)=>{try{n.d(e,{o:()=>p});var r=n(981),s=n(716),c=n(429),i=n(502),o=n(465),d=n(207),l=n(270),u=n(140),h=n(143),m=t([r,s,c,i,o,d,l,u,h]);[r,s,c,i,o,d,l,u,h]=m.then?(await m)():m;const p=()=>{(0,i.k)(),(0,i.L)(),(0,r.h)(),(0,h.V)(),(0,d.H)(),(0,l._)(),(0,c.Z)(),(0,s.P)(),(0,o.r)(),(0,u.x)()};a()}catch(t){a(t)}}))},981:(t,e,n)=>{n.a(t,(async(t,a)=>{try{n.d(e,{h:()=>i});var r=n(639),s=n(498),c=t([s]);s=(c.then?(await c)():c)[0];const i=()=>{document.querySelector("#create-submit").addEventListener("click",(async t=>{const e=document.querySelector("#create-name"),n=document.querySelector("#create-color");t.preventDefault(),await(0,r.DT)({name:e.value,color:n.value}),await(0,s.A)(),e.value="",n.value="#ffffff"}))};a()}catch(t){a(t)}}))},716:(t,e,n)=>{n.a(t,(async(t,a)=>{try{n.d(e,{P:()=>g});var r=n(639),s=n(506),c=n(677),i=n(962),o=n(498),d=n(729),l=n(201),u=t([i,o,d,l]);[i,o,d,l]=u.then?(await u)():u;const h=async t=>{const e=+t.id.replace("remove-car-","");await(0,r.tD)(e),await(0,o.A)(),i.h.winners.find((t=>t.id===e))&&(await(0,c.BS)(e),await(0,d.a)())},m=async t=>{const e=document.querySelector("#update-name"),n=document.querySelector("#update-color"),a=document.querySelector("#update-submit"),r=+t.id.replace("select-car-",""),s=i.h.cars.find((t=>t.id===r));e.disabled=!1,e.value=s?s.name:"",n.disabled=!1,n.value=s?s.color:"",a.disabled=!1,a.name=`${r}`},p=async t=>{const e=t,n=+e.id.replace("start-engine-car-",""),a=document.querySelector(`#stop-engine-car-${n}`);e.disabled=!0,i.h.animationStop=i.h.animationStop.filter((t=>t!==n)),i.h.animationReset=i.h.animationReset.filter((t=>t!==n));const{velocity:r,distance:c}=await(0,s.p6)(n);(0,l.gr)(n,(0,l.Np)(),c/r),a.disabled=!1,(await(0,s.Ag)(n)).success||i.h.animationStop.push(n)},y=async t=>{const e=t,n=+e.id.replace("stop-engine-car-",""),a=document.querySelector(`#start-engine-car-${n}`);e.disabled=!0,await(0,s.yQ)(n),i.h.animationReset.push(n),(0,l.zj)(n),a.disabled=!1},g=()=>{document.querySelector(".garage-container").addEventListener("click",(async t=>{const e=t.target;e.classList.contains("remove-button")&&h(e),e.classList.contains("select-button")&&m(e),e.classList.contains("start-engine-button")&&p(e),e.classList.contains("stop-engine-button")&&y(e)}))};a()}catch(t){a(t)}}))},429:(t,e,n)=>{n.a(t,(async(t,a)=>{try{n.d(e,{Z:()=>o});var r=n(628),s=n(493),c=n(498),i=t([c]);c=(i.then?(await i)():i)[0];const o=()=>{document.querySelector("#generate").addEventListener("click",(async()=>{(0,s.g)(r.Ii.Number),await(0,c.A)()}))};a()}catch(t){a(t)}}))},502:(t,e,n)=>{n.a(t,(async(t,a)=>{try{n.d(e,{L:()=>d,k:()=>o});var r=n(962),s=n(628),c=n(284),i=t([r,c]);[r,c]=i.then?(await i)():i;const o=()=>{document.querySelector("#garage-menu").addEventListener("click",(()=>{const t=document.querySelector(".garage-view"),e=document.querySelector(".garage-container"),n=document.querySelector(".winners-container");t.classList.remove("hide"),e.classList.remove("hide"),n.classList.add("hide"),r.h.view=s.G7.Garage,(0,c.Q)(s.GV.CarsPage,s.Si.CarsCount,s.cd.Cars)}))},d=()=>{document.querySelector("#winners-menu").addEventListener("click",(()=>{const t=document.querySelector(".garage-view"),e=document.querySelector(".garage-container"),n=document.querySelector(".winners-container");t.classList.add("hide"),e.classList.add("hide"),n.classList.remove("hide"),r.h.view=s.G7.Winners,(0,c.Q)(s.GV.WinnersPage,s.Si.WinnersCount,s.cd.Winners)}))};a()}catch(t){a(t)}}))},465:(t,e,n)=>{n.a(t,(async(t,a)=>{try{n.d(e,{r:()=>l});var r=n(628),s=n(962),c=n(498),i=n(729),o=n(284),d=t([s,c,i,o]);[s,c,i,o]=d.then?(await d)():d;const l=()=>{document.querySelector(".pagination").addEventListener("click",(async t=>{const e=t.target;s.h.view===r.G7.Garage?("prev"===e.id?s.h.carsPage-=1:s.h.carsPage+=1,await(0,c.A)()):("prev"===e.id?s.h.winnersPage-=1:s.h.winnersPage+=1,await(0,i.a)(),(0,o.Q)(r.GV.WinnersPage,r.Si.WinnersCount,r.cd.Winners))}))};a()}catch(t){a(t)}}))},207:(t,e,n)=>{n.a(t,(async(t,a)=>{try{n.d(e,{H:()=>u});var r=n(506),s=n(677),c=n(729),i=n(201),o=n(423),d=n(962),l=t([c,i,o,d]);[c,i,o,d]=l.then?(await l)():l;const u=()=>{const t=document.querySelector("#race");t.addEventListener("click",(async()=>{const e=document.querySelector("#reset"),n=document.querySelectorAll(".start-engine-button"),a=(new Date).getTime();t.disabled=!0,n.forEach((t=>t.disabled=!0)),d.h.animationStop=[],d.h.animationReset=[],d.h.winner=void 0,d.h.cars.forEach((async t=>{const{velocity:e,distance:n}=await(0,r.p6)(t.id);(0,i.gr)(t.id,(0,i.Np)(),n/e);const l=await(0,r.Ag)(t.id);if(l.success){if(!d.h.winner){const e=Math.round(((new Date).getTime()-a)/10)/100;d.h.winner={id:t.id,time:e},await(0,s.AV)(t.id,e),await(0,c.a)(),(0,o.K)(t.id,e)}}else l.success||d.h.animationStop.push(t.id)})),e.disabled=!1}))};a()}catch(t){a(t)}}))},270:(t,e,n)=>{n.a(t,(async(t,a)=>{try{n.d(e,{_:()=>o});var r=n(506),s=n(201),c=n(962),i=t([s,c]);[s,c]=i.then?(await i)():i;const o=()=>{const t=document.querySelector("#reset");t.addEventListener("click",(async()=>{const e=document.querySelector("#race"),n=document.querySelectorAll(".start-engine-button");t.disabled=!0,c.h.cars.forEach((async t=>{await(0,r.yQ)(t.id),c.h.animationReset.push(t.id),(0,s.zj)(t.id)})),e.disabled=!1,n.forEach((t=>t.disabled=!1))}))};a()}catch(t){a(t)}}))},140:(t,e,n)=>{n.a(t,(async(t,a)=>{try{n.d(e,{x:()=>o});var r=n(628),s=n(729),c=n(962),i=t([s,c]);[s,c]=i.then?(await i)():i;const o=()=>{document.querySelector(".winners-container").addEventListener("click",(async t=>{const e=t.target;e.id!==r.sg.Wins&&e.id!==r.sg.Time||(e.id===r.sg.Wins?c.h.sortBy=r.PE.ByWins:c.h.sortBy=r.PE.ByTime,c.h.sortOrder===r.KM.ByAsc?c.h.sortOrder=r.KM.ByDesc:(c.h.sortOrder,r.KM.ByDesc,c.h.sortOrder=r.KM.ByAsc),await(0,s.a)())}))};a()}catch(t){a(t)}}))},143:(t,e,n)=>{n.a(t,(async(t,a)=>{try{n.d(e,{V:()=>o});var r=n(639),s=n(498),c=n(729),i=t([s,c]);[s,c]=i.then?(await i)():i;const o=()=>{document.querySelector("#update-submit").addEventListener("click",(async t=>{const e=t.target,n=document.querySelector("#update-name"),a=document.querySelector("#update-color"),i=+e.name;t.preventDefault(),await(0,r.Bo)(i,{name:n.value,color:a.value}),await(0,s.A)(),await(0,c.a)(),n.value="",n.disabled=!0,a.value="#ffffff",a.disabled=!0,e.disabled=!0}))};a()}catch(t){a(t)}}))},518:(t,e,n)=>{n.d(e,{O:()=>a});const a=()=>'\n  <div class="garage-view">\n  <div>\n    <form class="form" name="create">\n      <input type="text" name="name" id="create-name">\n      <input type="color" name="color" id="create-color" value="#ffffff">\n      <button class="button" id="create-submit" type="submit">Create</button>\n    </form>\n    <form class="form" name="update">\n      <input type="text" name="name" id="update-name" disabled>\n      <input type="color" name="color" id="update-color" value="#ffffff" disabled>\n      <button class="button" id="update-submit" type="submit" disabled>Update</button>\n    </form>\n  </div>\n  <div class="race-control">\n    <button class="button" id="race">Race</button>\n    <button class="button" id="reset" disabled>Reset</button>\n    <button class="button" id="generate">Generate</button>\n  </div>\n  </div>\n  '},504:(t,e,n)=>{n.a(t,(async(t,a)=>{try{n.d(e,{O:()=>i});var r=n(962),s=n(563),c=t([r]);r=(c.then?(await c)():c)[0];const i=()=>`\n  <h1>Garage (${r.h.carsCount})</h1>\n  <h2>Page #${r.h.carsPage}</h2>\n  <ul class="garage">\n    ${r.h.cars.map((t=>`<li class="track">${(0,s.d)(t.id,t.name,t.color,!1)}</li>`)).join("")}\n  </ul>\n  `;a()}catch(t){a(t)}}))},14:(t,e,n)=>{n.d(e,{g:()=>a});const a=()=>'\n  <div class="menu">\n    <button class="button menu" id="garage-menu">To Garage</button>\n    <button class="button menu" id="winners-menu">To Winners</button>\n  </div>\n  '},307:(t,e,n)=>{n.a(t,(async(t,a)=>{try{n.d(e,{X:()=>l});var r=n(504),s=n(518),c=n(14),i=n(776),o=n(928),d=t([r,o]);[r,o]=d.then?(await d)():d;const l=()=>{document.body.innerHTML=`\n    ${(0,c.g)()}\n    ${(0,s.O)()}\n    <div class="garage-container">\n      ${(0,r.O)()}\n    </div>\n    <div class="winners-container hide">\n      ${(0,o.V)()}\n    </div>\n    ${(0,i.f)()}\n  `};a()}catch(t){a(t)}}))},776:(t,e,n)=>{n.d(e,{f:()=>a});const a=()=>'\n  <div class="pagination">\n    <button class="button pagination" id="prev" disabled>Prev</button>\n    <button class="button pagination" id="next" disabled>Next</button>\n  </div>\n  <div class="modal hide"></div>\n  '},181:(t,e,n)=>{n.d(e,{Aw:()=>a,dq:()=>r,pI:()=>s,xA:()=>c});const a=(t,e)=>`\n  <button class="icon start-engine-button" id="start-engine-car-${t}" ${e?"disabled":""}>Start</button>\n  <button class="icon stop-engine-button"  id="stop-engine-car-${t}" ${e?"":"disabled"}>Stop</button>\n  `,r=(t,e)=>`\n  <button class="button select-button" id="select-car-${t}">Select</button>\n  <button class="button remove-button" id="remove-car-${t}">Remove</button>\n  <span class="car-name">${e}</span>\n  `,s=(t,e)=>`\n  <svg width="700pt" height="250pt" class="car-image" version="1.1" viewBox="0 200 700 250" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <g>\n      <path d="m649.54 318s-17.086-20.496-41.68-22.539c0 0-95.645-5.4688-137.31-15.035l-91.543-51.23s-31.43-14.344-103.16-7.5117c0 0-94.965 6.1602-235.01 77.203 0 0-25.277 17.766-25.277 31.422v45.094s0.68359 5.4531 9.5586 9.5586l75.832 17.086s-8.1914-81.984 66.266-81.984c0 0 43.727-0.68359 58.07 51.934v30.055s-1.3594 8.8828 8.8906 8.8828h240.47s8.207 0.67578 8.207-9.5664c0 0-6.1367-81.293 62.859-81.293 0 0 62.16-1.3672 62.16 75.148 0 0-0.35156 7.1719 5.8008 7.1719 0 0 52.258-3.4141 70.699-17.422v-48.504c-0.011718-0.027344-11.633-18.469-34.84-18.469zm-624.92 17.25c0-13.672 28.352-31.941 28.352-31.941 15.695-5.707 37.754 0 37.754 0-5.3086 31.41-66.105 31.941-66.105 31.941zm163.44-52.445c-37.574 0-32.105-7.1719-32.105-7.1719-2.2461-6.9688 39.66-19.578 68.531-27.371v34.535h-36.426zm93.598 39.496h-16.395c-3.1094 0-5.6406-1.5469-5.6406-3.4609 0-1.9062 2.5195-3.4531 5.6406-3.4531h16.395c3.1094 0 5.6406 1.5469 5.6406 3.4531 0 1.9023-2.5273 3.4609-5.6406 3.4609zm-47.414-39.496v-37.125c9.8945-2.5742 16.668-4.1992 16.668-4.1992 80.957-19.469 124 2.7305 124 2.7305l65.246 38.594zm370.11 20.836c15.75-2.1094 38.875 18.812 38.875 18.812-35.574 5.0664-38.875-18.812-38.875-18.812z"\n      fill="${e}"/>\n    </g>\n  </svg>\n  <svg class="rear-wheel" id="rear-wheel-${t}" width="150pt" height="150pt" version="1.1" viewBox="110 328 110 110" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <g>\n      <path d="m164.57 329c-29.711 0-53.793 24.035-53.793 53.77 0 29.664 24.078 53.754 53.793 53.754 29.695 0 53.777-24.07 53.777-53.754-0.003906-29.734-24.082-53.785-53.777-53.77zm-0.007812 62.316c-4.7383 0-8.5547-3.8281-8.5547-8.5547 0-4.7305 3.8203-8.5625 8.5547-8.5625 4.7227 0 8.5391 3.8281 8.5391 8.5625 0 4.7109-3.8086 8.5547-8.5391 8.5547zm8.0977-22.727c-1.1914-0.68359-2.4648-1.2148-3.8281-1.5859v-11.875c4.543 0.69922 8.7031 2.4414 12.25 5.0391zm-12.391-1.5781c-1.4297 0.39062-2.7773 0.95703-4.0273 1.6953l-8.3828-8.3828c3.5781-2.6758 7.793-4.4805 12.414-5.1953zm-9.9883 7.8242c-0.63672 1.1367-1.1367 2.3555-1.4922 3.6484h-11.852c0.68359-4.4648 2.3789-8.5703 4.9062-12.086zm-1.4922 12.211c0.36719 1.3516 0.90234 2.6289 1.5938 3.8203l-8.4141 8.4062c-2.5898-3.5391-4.3398-7.6914-5.0391-12.227zm7.6445 9.8672c1.1992 0.68359 2.4727 1.2227 3.8359 1.5938v11.875c-4.543-0.69922-8.7031-2.4492-12.25-5.0547zm12.398 1.6055c1.293-0.35156 2.4961-0.84766 3.6406-1.4844l8.4375 8.4453c-3.5078 2.5352-7.6133 4.2305-12.078 4.9141zm9.7852-7.4531c0.73828-1.2461 1.3086-2.5898 1.6953-4.0273h11.859c-0.70703 4.6133-2.5117 8.8281-5.1797 12.406zm1.6953-12.586c-0.36719-1.3672-0.91016-2.6523-1.5938-3.8438l8.4141-8.4141c2.5977 3.5547 4.3477 7.7148 5.0391 12.258z"/>\n    </g>\n    </svg>\n  <svg class="front-wheel" id="front-wheel-${t}" width="150pt" height="150pt" version="1.1" viewBox="110 328 110 110" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <g>\n      <path d="m164.57 329c-29.711 0-53.793 24.035-53.793 53.77 0 29.664 24.078 53.754 53.793 53.754 29.695 0 53.777-24.07 53.777-53.754-0.003906-29.734-24.082-53.785-53.777-53.77zm-0.007812 62.316c-4.7383 0-8.5547-3.8281-8.5547-8.5547 0-4.7305 3.8203-8.5625 8.5547-8.5625 4.7227 0 8.5391 3.8281 8.5391 8.5625 0 4.7109-3.8086 8.5547-8.5391 8.5547zm8.0977-22.727c-1.1914-0.68359-2.4648-1.2148-3.8281-1.5859v-11.875c4.543 0.69922 8.7031 2.4414 12.25 5.0391zm-12.391-1.5781c-1.4297 0.39062-2.7773 0.95703-4.0273 1.6953l-8.3828-8.3828c3.5781-2.6758 7.793-4.4805 12.414-5.1953zm-9.9883 7.8242c-0.63672 1.1367-1.1367 2.3555-1.4922 3.6484h-11.852c0.68359-4.4648 2.3789-8.5703 4.9062-12.086zm-1.4922 12.211c0.36719 1.3516 0.90234 2.6289 1.5938 3.8203l-8.4141 8.4062c-2.5898-3.5391-4.3398-7.6914-5.0391-12.227zm7.6445 9.8672c1.1992 0.68359 2.4727 1.2227 3.8359 1.5938v11.875c-4.543-0.69922-8.7031-2.4492-12.25-5.0547zm12.398 1.6055c1.293-0.35156 2.4961-0.84766 3.6406-1.4844l8.4375 8.4453c-3.5078 2.5352-7.6133 4.2305-12.078 4.9141zm9.7852-7.4531c0.73828-1.2461 1.3086-2.5898 1.6953-4.0273h11.859c-0.70703 4.6133-2.5117 8.8281-5.1797 12.406zm1.6953-12.586c-0.36719-1.3672-0.91016-2.6523-1.5938-3.8438l8.4141-8.4141c2.5977 3.5547 4.3477 7.7148 5.0391 12.258z"/>\n    </g>\n  </svg>\n  `,c=t=>`\n<div class="winner-car">\n  <svg version="1.1" viewBox="0 200 700 250" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <g>\n      <path d="m649.54 318s-17.086-20.496-41.68-22.539c0 0-95.645-5.4688-137.31-15.035l-91.543-51.23s-31.43-14.344-103.16-7.5117c0 0-94.965 6.1602-235.01 77.203 0 0-25.277 17.766-25.277 31.422v45.094s0.68359 5.4531 9.5586 9.5586l75.832 17.086s-8.1914-81.984 66.266-81.984c0 0 43.727-0.68359 58.07 51.934v30.055s-1.3594 8.8828 8.8906 8.8828h240.47s8.207 0.67578 8.207-9.5664c0 0-6.1367-81.293 62.859-81.293 0 0 62.16-1.3672 62.16 75.148 0 0-0.35156 7.1719 5.8008 7.1719 0 0 52.258-3.4141 70.699-17.422v-48.504c-0.011718-0.027344-11.633-18.469-34.84-18.469zm-624.92 17.25c0-13.672 28.352-31.941 28.352-31.941 15.695-5.707 37.754 0 37.754 0-5.3086 31.41-66.105 31.941-66.105 31.941zm163.44-52.445c-37.574 0-32.105-7.1719-32.105-7.1719-2.2461-6.9688 39.66-19.578 68.531-27.371v34.535h-36.426zm93.598 39.496h-16.395c-3.1094 0-5.6406-1.5469-5.6406-3.4609 0-1.9062 2.5195-3.4531 5.6406-3.4531h16.395c3.1094 0 5.6406 1.5469 5.6406 3.4531 0 1.9023-2.5273 3.4609-5.6406 3.4609zm-47.414-39.496v-37.125c9.8945-2.5742 16.668-4.1992 16.668-4.1992 80.957-19.469 124 2.7305 124 2.7305l65.246 38.594zm370.11 20.836c15.75-2.1094 38.875 18.812 38.875 18.812-35.574 5.0664-38.875-18.812-38.875-18.812z"\n      fill="${t}"/>\n      <path d="m164.57 329c-29.711 0-53.793 24.035-53.793 53.77 0 29.664 24.078 53.754 53.793 53.754 29.695 0 53.777-24.07 53.777-53.754-0.003906-29.734-24.082-53.785-53.777-53.77zm-0.007812 62.316c-4.7383 0-8.5547-3.8281-8.5547-8.5547 0-4.7305 3.8203-8.5625 8.5547-8.5625 4.7227 0 8.5391 3.8281 8.5391 8.5625 0 4.7109-3.8086 8.5547-8.5391 8.5547zm8.0977-22.727c-1.1914-0.68359-2.4648-1.2148-3.8281-1.5859v-11.875c4.543 0.69922 8.7031 2.4414 12.25 5.0391zm-12.391-1.5781c-1.4297 0.39062-2.7773 0.95703-4.0273 1.6953l-8.3828-8.3828c3.5781-2.6758 7.793-4.4805 12.414-5.1953zm-9.9883 7.8242c-0.63672 1.1367-1.1367 2.3555-1.4922 3.6484h-11.852c0.68359-4.4648 2.3789-8.5703 4.9062-12.086zm-1.4922 12.211c0.36719 1.3516 0.90234 2.6289 1.5938 3.8203l-8.4141 8.4062c-2.5898-3.5391-4.3398-7.6914-5.0391-12.227zm7.6445 9.8672c1.1992 0.68359 2.4727 1.2227 3.8359 1.5938v11.875c-4.543-0.69922-8.7031-2.4492-12.25-5.0547zm12.398 1.6055c1.293-0.35156 2.4961-0.84766 3.6406-1.4844l8.4375 8.4453c-3.5078 2.5352-7.6133 4.2305-12.078 4.9141zm9.7852-7.4531c0.73828-1.2461 1.3086-2.5898 1.6953-4.0273h11.859c-0.70703 4.6133-2.5117 8.8281-5.1797 12.406zm1.6953-12.586c-0.36719-1.3672-0.91016-2.6523-1.5938-3.8438l8.4141-8.4141c2.5977 3.5547 4.3477 7.7148 5.0391 12.258z"/>\n      <path d="m545.68 329c-29.703 0-53.785 24.035-53.785 53.77 0 29.664 24.078 53.754 53.785 53.754 29.688 0 53.77-24.07 53.77-53.754 0-29.734-24.074-53.785-53.77-53.77zm-0.007813 62.316c-4.7383 0-8.5547-3.8281-8.5547-8.5547 0-4.7305 3.8125-8.5625 8.5547-8.5625 4.7227 0 8.5391 3.8281 8.5391 8.5625 0.003906 4.7109-3.8086 8.5547-8.5391 8.5547zm8.0977-22.727c-1.1914-0.68359-2.4648-1.2148-3.8281-1.5859v-11.875c4.543 0.69922 8.7031 2.4414 12.242 5.0391zm-12.391-1.5781c-1.4375 0.39062-2.7773 0.95703-4.0273 1.6953l-8.3828-8.3828c3.5781-2.6758 7.8008-4.4805 12.414-5.1953zm-9.9844 7.8242c-0.63672 1.1367-1.1367 2.3555-1.4922 3.6484h-11.852c0.69141-4.4648 2.3867-8.5703 4.9062-12.086zm-1.4883 12.211c0.36719 1.3516 0.89453 2.6289 1.5859 3.8203l-8.4062 8.4062c-2.5977-3.5391-4.3477-7.6914-5.0391-12.227zm7.6406 9.8672c1.1992 0.68359 2.4727 1.2227 3.8359 1.5938v11.875c-4.543-0.69922-8.7031-2.4492-12.25-5.0547zm12.395 1.6055c1.293-0.35156 2.4961-0.84766 3.6406-1.4844l8.4375 8.4453c-3.5 2.5352-7.6133 4.2305-12.078 4.9141zm9.7852-7.4531c0.73828-1.2461 1.3086-2.5898 1.7031-4.0273h11.852c-0.70703 4.6133-2.5117 8.8281-5.1797 12.406zm1.7031-12.586c-0.375-1.3672-0.91016-2.6523-1.5938-3.8438l8.4062-8.4141c2.5977 3.5547 4.3477 7.7148 5.0391 12.258z"/>\n    </g>\n  </svg>\n  </div>\n  `},563:(t,e,n)=>{n.d(e,{d:()=>r});var a=n(181);const r=(t,e,n,r)=>`\n  <div class="garage-controls">\n    ${(0,a.dq)(t,e)}\n  </div>\n  <div class="road">\n    <div class="launch">\n      <div class="car-controls">\n        ${(0,a.Aw)(t,r)}\n      </div>\n      <div class="car" id="car-${t}">\n        ${(0,a.pI)(t,n)}\n      </div>\n    </div>\n    <img class="flag" src="./flag.png" alt="finish">\n  </div>\n  `},928:(t,e,n)=>{n.a(t,(async(t,a)=>{try{n.d(e,{V:()=>o});var r=n(527),s=n(962),c=n(181),i=t([r,s]);[r,s]=i.then?(await i)():i;const o=()=>`\n  <h1>Winners (${s.h.winnersCount})</h1>\n  <h2>Page #${s.h.winnersPage}</h2>\n  <table class="winners-table">\n  <tr>\n    <th>Number</th>\n    <th>Car</th>\n    <th>Name</th>\n    <th class="sorting-button" id="wins">Wins</th>\n    <th class="sorting-button" id="time">Best time (seconds)</th>\n  </tr>\n  ${s.h.winners.map(((t,e)=>`\n      <tr>\n        <td>${e+1}</td>\n        <td>${(0,c.xA)((0,r.g)(t.id).color)}</td>\n        <td>${(0,r.g)(t.id).name}</td>\n        <td>${t.wins}</td>\n        <td>${t.time}</td>\n      </tr>\n    `)).join("")}\n  </table>\n  `;a()}catch(t){a(t)}}))},498:(t,e,n)=>{n.a(t,(async(t,a)=>{try{n.d(e,{A:()=>l});var r=n(639),s=n(628),c=n(504),i=n(962),o=n(284),d=t([c,i,o]);[c,i,o]=d.then?(await d)():d;const l=async()=>{const t=document.querySelector(".garage-container"),{items:e}=await(0,r.Rn)(),{items:n,count:a}=await(0,r.Rn)(i.h.carsPage,s.cd.Cars);if(i.h.allCars=e,i.h.cars=n,i.h.carsCount=a,i.h.carsCount&&Math.ceil(+i.h.carsCount/s.cd.Cars)<i.h.carsPage&&1!==i.h.carsPage){i.h.carsPage-=1;const{items:t}=await(0,r.Rn)(),{items:e,count:n}=await(0,r.Rn)(i.h.carsPage,s.cd.Cars);i.h.allCars=t,i.h.cars=e,i.h.carsCount=n}t.innerHTML=(0,c.O)(),(0,o.Q)(s.GV.CarsPage,s.Si.CarsCount,s.cd.Cars)};a()}catch(t){a(t)}}))},284:(t,e,n)=>{n.a(t,(async(t,a)=>{try{n.d(e,{Q:()=>i});var r=n(628),s=n(962),c=t([s]);s=(c.then?(await c)():c)[0];const i=(t,e,n)=>{const a=document.querySelector("#prev"),c=document.querySelector("#next"),i=s.h[e];s.h[t]!==r.T3.First?a.disabled=!1:a.disabled=!0,i&&(s.h[t]*n<+i?c.disabled=!1:c.disabled=!0)};a()}catch(t){a(t)}}))},729:(t,e,n)=>{n.a(t,(async(t,a)=>{try{n.d(e,{a:()=>d});var r=n(677),s=n(628),c=n(928),i=n(962),o=t([c,i]);[c,i]=o.then?(await o)():o;const d=async()=>{const t=document.querySelector(".winners-container"),{items:e,count:n}=await(0,r.ix)(i.h.winnersPage,s.cd.Winners,i.h.sortBy,i.h.sortOrder);i.h.winners=e,i.h.winnersCount=n,t.innerHTML=(0,c.V)()};a()}catch(t){a(t)}}))},201:(t,e,n)=>{n.a(t,(async(t,a)=>{try{n.d(e,{Np:()=>c,gr:()=>o,zj:()=>i});var r=n(962),s=t([r]);r=(s.then?(await s)():s)[0];const c=()=>{const t=document.querySelector(".road"),e=document.querySelector(".launch");return t.clientWidth-e.clientWidth},i=t=>{const e=document.querySelector(`#car-${t}`),n=document.querySelector(`#front-wheel-${t}`),a=document.querySelector(`#rear-wheel-${t}`);e.style.transition=n.style.transform=a.style.transform="0s",e.style.transform="translateX(0px)",n.style.transform=a.style.transform="rotate(0deg)"},o=(t,e,n)=>{const a=document.querySelector(`#car-${t}`),s=document.querySelector(`#front-wheel-${t}`),c=document.querySelector(`#rear-wheel-${t}`);a.style.transition=s.style.transition=c.style.transition="ease-out 0.3s";let o=0,d=0;const l=n/1e3*60,u=e/l,h=e/77.5*360/l,m=()=>{if(o+=u,d+=h,a.style.transform=`translateX(${o}px)`,s.style.transform=c.style.transform=`rotate(${d}deg)`,o<e){const e=requestAnimationFrame(m);r.h.animationStop.includes(t)&&cancelAnimationFrame(e),r.h.animationReset.includes(t)&&(cancelAnimationFrame(e),i(t))}};m()};a()}catch(t){a(t)}}))},527:(t,e,n)=>{n.a(t,(async(t,a)=>{try{n.d(e,{g:()=>c});var r=n(962),s=t([r]);r=(s.then?(await s)():s)[0];const c=t=>({name:r.h.allCars.find((e=>e.id===t))?.name,color:r.h.allCars.find((e=>e.id===t))?.color});a()}catch(t){a(t)}}))},493:(t,e,n)=>{n.d(e,{g:()=>o});var a=n(639),r=n(628);const s=()=>{const t=()=>Math.round(Math.random()*r.Il.Max).toString(16);return`#${t()}${t()}${t()}`},c=["Acura","Alfa Romeo","Aston Martin","Audi","Bentley","BMW","Bugatti","Buick","Cadillac","Chevrolet","Chrysler","Dodge","Ferrari","Fiat","Ford","Genesis","Honda","Hummer","Hyundai","Infiniti","Jaguar","Jeep","Kia","Land Rover","Lamborghini","Lexus","Lincoln","Maserati","Mazda","Mercedes-Benz","Nissan","Porsche","Rolls-Royce","Tesla","Toyota","Volkswagen","Volvo"],i=["A4","A5","A6","A7","A8","Q5","Q7","Q8","Model 3","Model X","Model Y","Model S","X1","X2","X3","X4","X5","X6","X7","M3","M5","M8","Mustang","F-150","Fiesta","Focus","Mondeo","Escape","Edge","Explorer","911","Panamera","Macan","Cayen"],o=t=>{(t=>{const e=[];for(let r=0;r<t;r++)e.push({name:(n=c,a=i,n[Math.round(Math.random()*n.length-1)]+" "+a[Math.round(Math.random()*a.length-1)]),color:s()});var n,a;return e})(t).forEach((async t=>(0,a.DT)(t)))}},423:(t,e,n)=>{n.a(t,(async(t,a)=>{try{n.d(e,{K:()=>i});var r=n(181),s=n(527),c=t([s]);s=(c.then?(await c)():c)[0];const i=(t,e)=>{const n=document.querySelector(".modal"),a=document.createElement("p"),c=document.createElement("div");a.innerText=`Winner!\n  ${(0,s.g)(t).name}\n  ${e} sec`,c.innerHTML=(0,r.xA)((0,s.g)(t).color),n.innerHTML="",n.appendChild(a),n.appendChild(c),n.classList.remove("hide"),setTimeout((()=>n.classList.add("hide")),5e3)};a()}catch(t){a(t)}}))},962:(t,e,n)=>{n.a(t,(async(t,a)=>{try{n.d(e,{h:()=>u});var r=n(639),s=n(677),c=n(628);const{items:t}=await(0,r.Rn)(),{items:i,count:o}=await(0,r.Rn)(c.T3.First,c.cd.Cars),{items:d,count:l}=await(0,s.ix)(c.T3.First,c.cd.Winners),u={allCars:t,carsPage:c.T3.First,cars:i,carsCount:o,winnersPage:c.T3.First,winners:d,winnersCount:l,view:c.G7.Garage,sortBy:void 0,sortOrder:void 0,selectedID:void 0,animationStop:[],animationReset:[],winner:void 0};a()}catch(t){a(t)}}),1)}},s={};function c(t){var e=s[t];if(void 0!==e)return e.exports;var n=s[t]={id:t,exports:{}};return r[t](n,n.exports,c),n.exports}t="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",e="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",n="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",a=t=>{t&&!t.d&&(t.d=1,t.forEach((t=>t.r--)),t.forEach((t=>t.r--?t.r++:t())))},c.a=(r,s,c)=>{var i;c&&((i=[]).d=1);var o,d,l,u=new Set,h=r.exports,m=new Promise(((t,e)=>{l=e,d=t}));m[e]=h,m[t]=t=>(i&&t(i),u.forEach(t),m.catch((t=>{}))),r.exports=m,s((r=>{var s;o=(r=>r.map((r=>{if(null!==r&&"object"==typeof r){if(r[t])return r;if(r.then){var s=[];s.d=0,r.then((t=>{c[e]=t,a(s)}),(t=>{c[n]=t,a(s)}));var c={};return c[t]=t=>t(s),c}}var i={};return i[t]=t=>{},i[e]=r,i})))(r);var c=()=>o.map((t=>{if(t[n])throw t[n];return t[e]})),d=new Promise((e=>{(s=()=>e(c)).r=0;var n=t=>t!==i&&!u.has(t)&&(u.add(t),t&&!t.d&&(s.r++,t.push(s)));o.map((e=>e[t](n)))}));return s.r?d:c()}),(t=>(t?l(m[n]=t):d(h),a(i)))),i&&(i.d=0)},c.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return c.d(e,{a:e}),e},c.d=(t,e)=>{for(var n in e)c.o(e,n)&&!c.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},c.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),c.nc=void 0,c(607)})();