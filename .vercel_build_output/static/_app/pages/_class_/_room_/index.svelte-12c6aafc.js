var tt=Object.defineProperty;var Re=Object.getOwnPropertySymbols;var ot=Object.prototype.hasOwnProperty,rt=Object.prototype.propertyIsEnumerable;var ve=(n,e,t)=>e in n?tt(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,ne=(n,e)=>{for(var t in e||(e={}))ot.call(e,t)&&ve(n,t,e[t]);if(Re)for(var t of Re(e))rt.call(e,t)&&ve(n,t,e[t]);return n};import{S as H,i as q,s as X,G as se,H as le,I as ae,J as ie,x as p,u as k,T as nt,O as M,M as ce,ab as Se,aa as Pe,af as st,ag as lt,ah as at,P as it,ai as ct,aj as Ae,D as W,A as me,ak as ut,al as Ie,j as U,m as C,o as F,v as N,V as Y,k as V,n as z,f as D,r as B,w as j,a2 as ft,d as g,t as G,g as J,am as K,an as Q,a as L,b as $,a7 as _e,K as ue,e as Z,c as x,ao as fe,ap as Le,X as $e,a9 as Ee,ac as we,ad as dt,l as ee,ae as ht,aq as Ue,ar as Ce,as as mt,at as _t,au as Fe,av as pt,aw as de,ax as te,L as ye}from"../../../chunks/vendor-6cbcc546.js";import{f as gt,a as Ne}from"../../../chunks/database-07664a5b.js";import{d as We,r as pe,u as Me,b as De,c as Te,a as Be}from"../../../chunks/store-f9fd671f.js";import{d as ge,a as je,p as bt,c as kt,l as Ve}from"../../../chunks/canvas-dc2dc66e.js";import{g as $t}from"../../../chunks/navigation-51f4a605.js";import"../../../chunks/singletons-12a22614.js";const wt=n=>({boardDoc:n&4,isFetchingStrokes:n&2,strokesArray:n&1}),ze=n=>({boardDoc:n[2],fetchStrokes:n[3],listenToStrokes:n[4],isFetchingStrokes:n[1],strokesArray:n[0],handleNewlyDrawnStroke:n[5],deleteAllStrokesFromDb:n[6]});function yt(n){let e;const t=n[9].default,o=se(t,n,n[8],ze);return{c(){o&&o.c()},l(r){o&&o.l(r)},m(r,s){o&&o.m(r,s),e=!0},p(r,[s]){o&&o.p&&(!e||s&263)&&le(o,t,r,r[8],e?ie(t,r[8],s,wt):ae(r[8]),ze)},i(r){e||(p(o,r),e=!0)},o(r){k(o,r),e=!1},d(r){o&&o.d(r)}}}function Oe(n){const e=ne({id:n.id},n.data());return e.startTime=0,e.endTime=0,n.data().isErasing||(e.endTime+=.5),e}function Dt(n,e,t){let{$$slots:o={},$$scope:r}=e,{dbPath:s}=e,c,u=!1,l,a;const i=nt(M(),`${s}/strokes`),f=ce(M(),s);Se(f,_=>{t(2,l=ne({id:_.id},_.data()))}),Pe(()=>{a&&a()});async function d(){t(1,u=!0),t(0,c=await gt(s+"/strokes"))}async function h(){t(1,u=!0);const _=st(i,lt("timestamp"));a=Se(_,async w=>{w.docChanges().filter(T=>T.type==="removed").length>0?(t(0,c=[]),await at(),w.docs.length>0&&w.docs.forEach(T=>{c.push(Oe(T))})):(c||(t(1,u=!1),t(0,c=[])),w.docs.length===c.length||w.docChanges().filter(T=>T.type==="added").forEach(T=>{t(0,c=[...c,Oe(T.doc)])}))})}function y(_){c.push(_);try{it(ce(M(),`${s}/strokes/${_.id}`),ne({timestamp:ct()},_))}catch(w){alert(w)}}async function P(){const _=[];let w=Ae(M()),S=0;for(const T of c){S>=500&&(_.push(w.commit()),w=Ae(M()),S=0);const I=ce(M(),`${s}/strokes/${T.id}`);w.delete(I),S+=1}_.push(w.commit()),console.log("number of strokes =",c.length),console.log("number of batches to be deleted =",S),await Promise.all(_)}return n.$$set=_=>{"dbPath"in _&&t(7,s=_.dbPath),"$$scope"in _&&t(8,r=_.$$scope)},[c,u,l,d,h,y,P,s,r,o]}class Tt extends H{constructor(e){super();q(this,e,Dt,yt,X,{dbPath:7})}}const Rt=n=>({currentTime:n&1}),He=n=>({startRecording:n[1],stopRecording:n[2],currentTime:n[0]});function vt(n){let e;const t=n[4].default,o=se(t,n,n[3],He);return{c(){o&&o.c()},l(r){o&&o.l(r)},m(r,s){o&&o.m(r,s),e=!0},p(r,[s]){o&&o.p&&(!e||s&9)&&le(o,t,r,r[3],e?ie(t,r[3],s,Rt):ae(r[3]),He)},i(r){e||(p(o,r),e=!0)},o(r){k(o,r),e=!1},d(r){o&&o.d(r)}}}function St(n,e,t){let o;W(n,We,d=>t(7,o=d));let{$$slots:r={},$$scope:s}=e,c=0,u;me(()=>{window.MediaRecorder=ut});const l=Ie();let a=null;function i(){return new Promise(async d=>{if(!o){const y=await navigator.mediaDevices.getUserMedia({audio:!0});We.set(y)}const h=o.clone();a=new MediaRecorder(h),a.start(),u=setInterval(()=>t(0,c+=.1),100),l("record-start"),pe.set("mid_record"),d()})}function f(){return new Promise((d,h)=>{clearTimeout(u),pe.set("post_record"),a.addEventListener("dataavailable",y=>{const P=y.data;l("record-end",{audioBlob:P}),d(),pe.set("pre_record")}),a.stop();for(const y of a.stream.getTracks())y.stop()})}return n.$$set=d=>{"$$scope"in d&&t(3,s=d.$$scope)},[c,i,f,s,r]}class Pt extends H{constructor(e){super();q(this,e,St,vt,X,{})}}function qe(n,e,t){const o=n.slice();return o[5]=e[t],o}function At(n){let e,t,o,r,s,c,u,l;return{c(){e=K("svg"),t=K("g"),o=K("path"),r=K("polygon"),c=K("path"),u=K("path"),this.h()},l(a){e=Q(a,"svg",{preserveAspectRatio:!0,version:!0,id:!0,xmlns:!0,"xmlns:xlink":!0,x:!0,y:!0,width:!0,height:!0,":viewbox":!0,style:!0,"xml:space":!0});var i=L(e);t=Q(i,"g",{});var f=L(t);o=Q(f,"path",{d:!0}),L(o).forEach(g),r=Q(f,"polygon",{style:!0,points:!0}),L(r).forEach(g),c=Q(f,"path",{style:!0,d:!0}),L(c).forEach(g),u=Q(f,"path",{style:!0,d:!0}),L(u).forEach(g),f.forEach(g),i.forEach(g),this.h()},h(){$(o,"d",`M0,0v72.377c0,1.588,0.234,3.169,0.698,4.706l45.416,150.032C46.633,228.828,48.212,230,50,230s3.367-1.172,3.886-2.883\r
          L99.31,77.079c0.457-1.525,0.69-3.108,0.69-4.702V0.002`),$(r,"style",s=`fill: ${n[5]};`),$(r,"points","50,211.978 38.879,175.24 61.122,175.24"),_e(c,"fill","#424242"),$(c,"d",`M63.581,167.118H36.42L8.765,75.761l10.924-9.63l12.5,11.015c1.54,1.353,3.835,1.35,5.375-0.002\r
            l12.468-11.007l12.464,11.005c1.54,1.357,3.839,1.357,5.377,0l12.465-11.005l10.9,9.623L63.581,167.118z`),$(u,"style",l=`fill: ${n[5]};`),$(u,"d",`M91.878,0v65.486l-8.852-7.813c-1.539-1.353-3.838-1.354-5.377,0.002L65.185,68.679L52.72,57.674\r
            c-1.539-1.356-3.838-1.354-5.377-0.002L34.871,68.683L22.375,57.67c-0.769-0.676-1.725-1.013-2.685-1.013\r
            c-0.959,0-1.919,0.339-2.685,1.013L8.121,65.5L8.098,0.024L91.878,0z`),$(e,"preserveAspectRatio","none"),$(e,"version","1.1"),$(e,"id","Layer_1"),$(e,"xmlns","http://www.w3.org/2000/svg"),$(e,"xmlns:xlink","http://www.w3.org/1999/xlink"),$(e,"x","0px"),$(e,"y","0px"),$(e,"width","16px"),$(e,"height","35px"),$(e,":viewbox","`0 0 100 230`"),_e(e,"enable-background","new 0 0 100 230"),$(e,"xml:space","preserve")},m(a,i){D(a,e,i),ue(e,t),ue(t,o),ue(t,r),ue(t,c),ue(t,u)},p(a,i){i&1&&s!==(s=`fill: ${a[5]};`)&&$(r,"style",s),i&1&&l!==(l=`fill: ${a[5]};`)&&$(u,"style",l)},d(a){a&&g(e)}}}function Xe(n){let e,t;function o(){return n[2](n[5])}return e=new Y({props:{$$slots:{default:[At]},$$scope:{ctx:n}}}),e.$on("click",o),{c(){U(e.$$.fragment)},l(r){C(e.$$.fragment,r)},m(r,s){F(e,r,s),t=!0},p(r,s){n=r;const c={};s&17&&(c.$$scope={dirty:s,ctx:n}),e.$set(c)},i(r){t||(p(e.$$.fragment,r),t=!0)},o(r){k(e.$$.fragment,r),t=!1},d(r){N(e,r)}}}function It(n){let e;return{c(){e=G("Eraser")},l(t){e=J(t,"Eraser")},m(t,o){D(t,e,o)},d(t){t&&g(e)}}}function Lt(n){let e,t,o,r,s=n[0].pencilColors,c=[];for(let i=0;i<s.length;i+=1)c[i]=Xe(qe(n,s,i));const u=i=>k(c[i],1,1,()=>{c[i]=null});t=new Y({props:{$$slots:{default:[It]},$$scope:{ctx:n}}}),t.$on("click",n[3]);const l=n[1].default,a=se(l,n,n[4],null);return{c(){for(let i=0;i<c.length;i+=1)c[i].c();e=V(),U(t.$$.fragment),o=V(),a&&a.c()},l(i){for(let f=0;f<c.length;f+=1)c[f].l(i);e=z(i),C(t.$$.fragment,i),o=z(i),a&&a.l(i)},m(i,f){for(let d=0;d<c.length;d+=1)c[d].m(i,f);D(i,e,f),F(t,i,f),D(i,o,f),a&&a.m(i,f),r=!0},p(i,[f]){if(f&1){s=i[0].pencilColors;let h;for(h=0;h<s.length;h+=1){const y=qe(i,s,h);c[h]?(c[h].p(y,f),p(c[h],1)):(c[h]=Xe(y),c[h].c(),p(c[h],1),c[h].m(e.parentNode,e))}for(B(),h=s.length;h<c.length;h+=1)u(h);j()}const d={};f&16&&(d.$$scope={dirty:f,ctx:i}),t.$set(d),a&&a.p&&(!r||f&16)&&le(a,l,i,i[4],r?ie(l,i[4],f,null):ae(i[4]),null)},i(i){if(!r){for(let f=0;f<s.length;f+=1)p(c[f]);p(t.$$.fragment,i),p(a,i),r=!0}},o(i){c=c.filter(Boolean);for(let f=0;f<c.length;f+=1)k(c[f]);k(t.$$.fragment,i),k(a,i),r=!1},d(i){ft(c,i),i&&g(e),N(t,i),i&&g(o),a&&a.d(i)}}}function Et(n,e,t){let o;W(n,Me,l=>t(0,o=l));let{$$slots:r={},$$scope:s}=e;const c=l=>De.set({type:"pencil",color:l,lineWidth:3}),u=()=>De.set({type:"eraser",color:"",lineWidth:40});return n.$$set=l=>{"$$scope"in l&&t(4,s=l.$$scope)},[o,r,c,u,s]}class Ut extends H{constructor(e){super();q(this,e,Et,Lt,X,{})}}function Ye(){const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let e="";for(let t=0;t<20;t++)e+=n.charAt(Math.floor(Math.random()*n.length));return e}function Ct(n){let e;const t=n[11].default,o=se(t,n,n[13],null);return{c(){o&&o.c()},l(r){o&&o.l(r)},m(r,s){o&&o.m(r,s),e=!0},p(r,s){o&&o.p&&(!e||s&8192)&&le(o,t,r,r[13],e?ie(t,r[13],s,null):ae(r[13]),null)},i(r){e||(p(o,r),e=!0)},o(r){k(o,r),e=!1},d(r){o&&o.d(r)}}}function Ft(n){let e,t,o,r,s,c,u;return e=new Ut({props:{$$slots:{default:[Ct]},$$scope:{ctx:n}}}),{c(){U(e.$$.fragment),t=V(),o=Z("canvas"),this.h()},l(l){C(e.$$.fragment,l),t=z(l),o=x(l,"CANVAS",{style:!0});var a=L(o);a.forEach(g),this.h()},h(){$(o,"style",r=`background-color: #2e3131; width: ${n[2]}; height: ${n[1]}`)},m(l,a){F(e,l,a),D(l,t,a),D(l,o,a),n[12](o),s=!0,c||(u=[fe(o,"touchstart",n[3]),fe(o,"touchmove",n[4]),fe(o,"touchend",n[5])],c=!0)},p(l,[a]){const i={};a&8192&&(i.$$scope={dirty:a,ctx:l}),e.$set(i),(!s||a&6&&r!==(r=`background-color: #2e3131; width: ${l[2]}; height: ${l[1]}`))&&$(o,"style",r)},i(l){s||(p(e.$$.fragment,l),s=!0)},o(l){k(e.$$.fragment,l),s=!1},d(l){N(e,l),l&&g(t),l&&g(o),n[12](null),c=!1,Le(u)}}}function Nt(n){return(n.endTime-n.startTime)/n.points.length}function Wt(n,e,t){let o,r,s;W(n,De,m=>t(17,o=m)),W(n,Te,m=>t(1,r=m)),W(n,Be,m=>t(2,s=m));let{$$slots:c={},$$scope:u}=e,{strokesArray:l}=e,{currentTime:a=0}=e;const i=Ie();let f,d=[],h,y=!1,P={x:-1,y:-1},_={points:[]},w;me(()=>{t(8,f=h.getContext("2d"))});function S(m){m.touches.length>1||(m.touches[0].touchType,he(m,{isInitialContact:!0}))}function T(m){if(!!y){if(m.touches.length>1){console.log("touchmove ignored: only 1 finger allowed");return}m.touches[0].touchType,he(m,{isInitialContact:!1})}}function I(m){!y||m.touches.length>0||(m.changedTouches[0].touchType,b(_),y=!1)}function oe(m){y=!0,P={x:-1,y:-1},_={strokeNumber:l.length+1,startTime:Number(a.toFixed(1)),color:o.color,lineWidth:o.lineWidth,isErasing:o.type==="eraser",points:[],sessionID:"123"}}function he(m,{isInitialContact:A}){m.preventDefault(),A&&oe();const E=v(m);be(m,E)}function be(m,A){_.points.push({unitX:parseFloat(A.x/h.width).toFixed(4),unitY:parseFloat(A.y/h.height).toFixed(4)}),P.x!==-1&&P.y!==-1&&je([R(P),R(A)],1,o.type==="eraser",f,o.color,o.lineWidth,h),P=A}function b(m){m.endTime=Number(a.toFixed(1)),m.id=Ye(),d.push(m),i("stroke-drawn",{newStroke:m})}function v(m){const{left:A,top:E}=h.getBoundingClientRect();return{x:m.touches[0].pageX-A-window.scrollX,y:m.touches[0].pageY-E-window.scrollY}}function R({x:m,y:A}){return{unitX:m/h.width,unitY:A/h.height}}function re(){f.clearRect(0,0,h.scrollWidth,h.scrollHeight)}function ke(m){$e[m?"unshift":"push"](()=>{h=m,t(0,h),t(8,f),t(2,s),t(1,r),t(6,l)})}return n.$$set=m=>{"strokesArray"in m&&t(6,l=m.strokesArray),"currentTime"in m&&t(7,a=m.currentTime),"$$scope"in m&&t(13,u=m.$$scope)},n.$$.update=()=>{if(n.$$.dirty&327&&f){t(0,h.width=s,h),t(0,h.height=r,h);for(const m of l)ge(m,null,f,h)}if(n.$$.dirty&1857&&f){let m=d.length,A=l.length;if(m!==A)if(m<A)if(m===0){for(const E of l)ge(E,null,f,h);t(9,d=[...l])}else for(let E=m;E<A;E++){const O=l[E];ge(O,O.startTime!==O.endTime?Nt(O):null,f,h),d.push(O)}else{let E=function(){re(),t(9,d=[]),P={x:-1,y:-1};for(const et of l)ge(et,null,f,h)};(function(){console.log("debounced board reset"),w&&clearTimeout(w),t(10,w=setTimeout(E,1e3))})()}}},[h,r,s,S,T,I,l,a,f,d,w,c,ke,u]}class Mt extends H{constructor(e){super();q(this,e,Wt,Ft,X,{strokesArray:6,currentTime:7})}}function Bt(n){let e,t,o,r,s,c,u,l,a;const i=n[10].default,f=se(i,n,n[9],null);return{c(){f&&f.c(),e=V(),t=Z("canvas"),r=V(),s=Z("audio"),this.h()},l(d){f&&f.l(d),e=z(d),t=x(d,"CANVAS",{style:!0});var h=L(t);h.forEach(g),r=z(d),s=x(d,"AUDIO",{src:!0,style:!0});var y=L(s);y.forEach(g),this.h()},h(){$(t,"style",o=`background-color: #2e3131; width: ${n[3]}; height: ${n[2]}`),Ee(s.src,c=n[0])||$(s,"src",c),s.controls=!0,_e(s,"width","100%")},m(d,h){f&&f.m(d,h),D(d,e,h),D(d,t,h),n[11](t),D(d,r,h),D(d,s,h),n[12](s),u=!0,l||(a=[fe(s,"play",n[5]),fe(s,"seeking",n[6])],l=!0)},p(d,[h]){f&&f.p&&(!u||h&512)&&le(f,i,d,d[9],u?ie(i,d[9],h,null):ae(d[9]),null),(!u||h&12&&o!==(o=`background-color: #2e3131; width: ${d[3]}; height: ${d[2]}`))&&$(t,"style",o),(!u||h&1&&!Ee(s.src,c=d[0]))&&$(s,"src",c)},i(d){u||(p(f,d),u=!0)},o(d){k(f,d),u=!1},d(d){f&&f.d(d),d&&g(e),d&&g(t),n[11](null),d&&g(r),d&&g(s),n[12](null),l=!1,Le(a)}}}let jt=1;function Vt(n){return(n.endTime-n.startTime)/n.points.length}function zt(n,e,t){let o,r;W(n,Te,b=>t(2,o=b)),W(n,Be,b=>t(3,r=b));let{$$slots:s={},$$scope:c}=e,{strokesArray:u}=e,{audioDownloadURL:l}=e,a,i=0,f,d,h,y;Pe(()=>{y&&clearTimeout(y)}),me(()=>{t(8,d=f.getContext("2d"));const b=[];for(let v=0;v<u.length;v++)for(let R=1;R<u[v].points.length;R++){const re={strokeIndex:v,pointIndex:R};b.push(ne({startTime:P(re)},re))}a=b.sort((v,R)=>v.startTime-R.startTime)});function P({strokeIndex:b,pointIndex:v}){const R=u[b];return R.startTime+(v-1)*Vt(R)}function _(){i=0,d.clearRect(0,0,r,o),w()}function w(){if(!!h&&(S(),i<a.length)){const b=a[i],v=1e3*(b.startTime-h.currentTime);y=setTimeout(w,v/jt)}}function S(){if(!h)return;const b=a[i];(!b||b.startTime>h.currentTime)&&(d.clearRect(0,0,f.width,f.height),i=0),T()}function T(){const{currentTime:b}=h;for(let v=i;v<a.length;v++){const R=a[v];if(R.startTime>b)break;I(R),i+=1}}function I({strokeIndex:b,pointIndex:v}){const R=u[b],ke=R.lineWidth*(f.scrollWidth/1e3);je(R.points,v,R.isErasing,d,R.color,ke,f)}function oe(){return new Promise(async b=>{y?(i=0,S()):T(),b()})}function he(b){$e[b?"unshift":"push"](()=>{f=b,t(4,f),t(8,d),t(1,h),t(3,r),t(2,o)})}function be(b){$e[b?"unshift":"push"](()=>{h=b,t(1,h)})}return n.$$set=b=>{"strokesArray"in b&&t(7,u=b.strokesArray),"audioDownloadURL"in b&&t(0,l=b.audioDownloadURL),"$$scope"in b&&t(9,c=b.$$scope)},n.$$.update=()=>{n.$$.dirty&270&&d&&h&&(t(4,f.width=r,f),t(4,f.height=o,f),oe())},[l,h,o,r,f,_,S,u,d,c,s,he,be]}class Ot extends H{constructor(e){super();q(this,e,zt,Bt,X,{strokesArray:7,audioDownloadURL:0})}}function Ge(n,e,t){const o=n.slice();return o[15]=e[t],o}function Je(n){let e,t=[],o=new Map,r,s,c,u,l=n[0].blackboards;const a=i=>i[15];for(let i=0;i<l.length;i+=1){let f=Ge(n,l,i),d=a(f);o.set(d,t[i]=xe(d,f))}return{c(){e=Z("div");for(let i=0;i<t.length;i+=1)t[i].c();this.h()},l(i){e=x(i,"DIV",{style:!0});var f=L(e);for(let d=0;d<t.length;d+=1)t[d].l(f);f.forEach(g),this.h()},h(){_e(e,"height","100vh")},m(i,f){D(i,e,f);for(let d=0;d<t.length;d+=1)t[d].m(e,null);s=!0,c||(u=we(r=bt.call(null,e,"main-content")),c=!0)},p(i,f){f&257687615&&(l=i[0].blackboards,B(),t=dt(t,f,a,1,i,l,o,e,ht,xe,null,Ge),j())},i(i){if(!s){for(let f=0;f<l.length;f+=1)p(t[f]);s=!0}},o(i){for(let f=0;f<t.length;f+=1)k(t[f]);s=!1},d(i){i&&g(e);for(let f=0;f<t.length;f+=1)t[f].d();c=!1,u()}}}function Ke(n){let e,t,o,r;const s=[qt,Ht],c=[];function u(l,a){return l[18].audioDownloadURL?0:1}return e=u(n),t=c[e]=s[e](n),{c(){t.c(),o=ee()},l(l){t.l(l),o=ee()},m(l,a){c[e].m(l,a),D(l,o,a),r=!0},p(l,a){let i=e;e=u(l),e===i?c[e].p(l,a):(B(),k(c[i],1,1,()=>{c[i]=null}),j(),t=c[e],t?t.p(l,a):(t=c[e]=s[e](l),t.c()),p(t,1),t.m(o.parentNode,o))},i(l){r||(p(t),r=!0)},o(l){k(t),r=!1},d(l){c[e].d(l),l&&g(o)}}}function Ht(n){let e,t,o,r,s,c,u=n[22]&&Qe(n);return{c(){e=Z("div"),u&&u.c(),this.h()},l(l){e=x(l,"DIV",{style:!0});var a=L(e);u&&u.l(a),a.forEach(g),this.h()},h(){$(e,"style",t=`width: 100%; height: ${n[1]+80}px`)},m(l,a){D(l,e,a),u&&u.m(e,null),r=!0,s||(c=we(o=Ve.call(null,e,n[20])),s=!0)},p(l,a){l[22]?u?(u.p(l,a),a&4194304&&p(u,1)):(u=Qe(l),u.c(),p(u,1),u.m(e,null)):u&&(B(),k(u,1,1,()=>{u=null}),j()),(!r||a&2&&t!==(t=`width: 100%; height: ${l[1]+80}px`))&&$(e,"style",t),o&&te(o.update)&&a&1048576&&o.update.call(null,l[20])},i(l){r||(p(u),r=!0)},o(l){k(u),r=!1},d(l){l&&g(e),u&&u.d(),s=!1,c()}}}function qt(n){let e,t,o,r,s,c,u=n[22]&&Ze(n);return{c(){e=Z("div"),u&&u.c(),this.h()},l(l){e=x(l,"DIV",{style:!0});var a=L(e);u&&u.l(a),a.forEach(g),this.h()},h(){$(e,"style",t=`width: 100%; height: ${n[1]+80}px`)},m(l,a){D(l,e,a),u&&u.m(e,null),r=!0,s||(c=we(o=Ve.call(null,e,n[19])),s=!0)},p(l,a){l[22]?u?(u.p(l,a),a&4194304&&p(u,1)):(u=Ze(l),u.c(),p(u,1),u.m(e,null)):u&&(B(),k(u,1,1,()=>{u=null}),j()),(!r||a&2&&t!==(t=`width: 100%; height: ${l[1]+80}px`))&&$(e,"style",t),o&&te(o.update)&&a&524288&&o.update.call(null,l[19])},i(l){r||(p(u),r=!0)},o(l){k(u),r=!1},d(l){l&&g(e),u&&u.d(),s=!1,c()}}}function Qe(n){let e,t;function o(...r){return n[9](n[15],...r)}return e=new Pt({props:{$$slots:{default:[xt,({startRecording:r,stopRecording:s,currentTime:c})=>({25:r,26:s,27:c}),({startRecording:r,stopRecording:s,currentTime:c})=>(r?33554432:0)|(s?67108864:0)|(c?134217728:0)]},$$scope:{ctx:n}}}),e.$on("record-end",o),{c(){U(e.$$.fragment)},l(r){C(e.$$.fragment,r)},m(r,s){F(e,r,s),t=!0},p(r,s){n=r;const c={};s&524288004&&(c.$$scope={dirty:s,ctx:n}),e.$set(c)},i(r){t||(p(e.$$.fragment,r),t=!0)},o(r){k(e.$$.fragment,r),t=!1},d(r){N(e,r)}}}function Xt(n){let e;return{c(){e=G("Uploading...")},l(t){e=J(t,"Uploading...")},m(t,o){D(t,e,o)},p:ye,i:ye,o:ye,d(t){t&&g(e)}}}function Yt(n){let e,t;return e=new Y({props:{$$slots:{default:[Jt]},$$scope:{ctx:n}}}),e.$on("click",function(){te(n[26])&&n[26].apply(this,arguments)}),{c(){U(e.$$.fragment)},l(o){C(e.$$.fragment,o)},m(o,r){F(e,o,r),t=!0},p(o,r){n=o;const s={};r&268435456&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(o){t||(p(e.$$.fragment,o),t=!0)},o(o){k(e.$$.fragment,o),t=!1},d(o){N(e,o)}}}function Gt(n){let e,t;return e=new Y({props:{$$slots:{default:[Kt]},$$scope:{ctx:n}}}),e.$on("click",function(){te(n[25])&&n[25].apply(this,arguments)}),{c(){U(e.$$.fragment)},l(o){C(e.$$.fragment,o)},m(o,r){F(e,o,r),t=!0},p(o,r){n=o;const s={};r&268435456&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(o){t||(p(e.$$.fragment,o),t=!0)},o(o){k(e.$$.fragment,o),t=!1},d(o){N(e,o)}}}function Jt(n){let e;return{c(){e=G("Stop")},l(t){e=J(t,"Stop")},m(t,o){D(t,e,o)},d(t){t&&g(e)}}}function Kt(n){let e;return{c(){e=G("Record")},l(t){e=J(t,"Record")},m(t,o){D(t,e,o)},d(t){t&&g(e)}}}function Qt(n){let e;return{c(){e=G("Wipe board")},l(t){e=J(t,"Wipe board")},m(t,o){D(t,e,o)},d(t){t&&g(e)}}}function Zt(n){let e,t,o,r,s;const c=[Gt,Yt,Xt],u=[];function l(a,i){return a[2]==="pre_record"?0:a[2]==="mid_record"?1:2}return e=l(n),t=u[e]=c[e](n),r=new Y({props:{$$slots:{default:[Qt]},$$scope:{ctx:n}}}),r.$on("click",function(){te(n[24])&&n[24].apply(this,arguments)}),{c(){t.c(),o=V(),U(r.$$.fragment)},l(a){t.l(a),o=z(a),C(r.$$.fragment,a)},m(a,i){u[e].m(a,i),D(a,o,i),F(r,a,i),s=!0},p(a,i){n=a;let f=e;e=l(n),e===f?u[e].p(n,i):(B(),k(u[f],1,1,()=>{u[f]=null}),j(),t=u[e],t?t.p(n,i):(t=u[e]=c[e](n),t.c()),p(t,1),t.m(o.parentNode,o));const d={};i&268435456&&(d.$$scope={dirty:i,ctx:n}),r.$set(d)},i(a){s||(p(t),p(r.$$.fragment,a),s=!0)},o(a){k(t),k(r.$$.fragment,a),s=!1},d(a){u[e].d(a),a&&g(o),N(r,a)}}}function xt(n){let e,t;function o(...r){return n[8](n[23],...r)}return e=new Mt({props:{strokesArray:n[22],currentTime:n[27],$$slots:{default:[Zt]},$$scope:{ctx:n}}}),e.$on("stroke-drawn",o),{c(){U(e.$$.fragment)},l(r){C(e.$$.fragment,r)},m(r,s){F(e,r,s),t=!0},p(r,s){n=r;const c={};s&4194304&&(c.strokesArray=n[22]),s&134217728&&(c.currentTime=n[27]),s&385875972&&(c.$$scope={dirty:s,ctx:n}),e.$set(c)},i(r){t||(p(e.$$.fragment,r),t=!0)},o(r){k(e.$$.fragment,r),t=!1},d(r){N(e,r)}}}function Ze(n){let e,t;return e=new Ot({props:{strokesArray:n[22],audioDownloadURL:n[18].audioDownloadURL,$$slots:{default:[to]},$$scope:{ctx:n}}}),{c(){U(e.$$.fragment)},l(o){C(e.$$.fragment,o)},m(o,r){F(e,o,r),t=!0},p(o,r){const s={};r&4194304&&(s.strokesArray=o[22]),r&262144&&(s.audioDownloadURL=o[18].audioDownloadURL),r&268697600&&(s.$$scope={dirty:r,ctx:o}),e.$set(s)},i(o){t||(p(e.$$.fragment,o),t=!0)},o(o){k(e.$$.fragment,o),t=!1},d(o){N(e,o)}}}function eo(n){let e;return{c(){e=G("Revert to board")},l(t){e=J(t,"Revert to board")},m(t,o){D(t,e,o)},d(t){t&&g(e)}}}function to(n){let e,t;return e=new Y({props:{$$slots:{default:[eo]},$$scope:{ctx:n}}}),e.$on("click",function(){te(n[5](n[18]))&&n[5](n[18]).apply(this,arguments)}),{c(){U(e.$$.fragment)},l(o){C(e.$$.fragment,o)},m(o,r){F(e,o,r),t=!0},p(o,r){n=o;const s={};r&268435456&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(o){t||(p(e.$$.fragment,o),t=!0)},o(o){k(e.$$.fragment,o),t=!1},d(o){N(e,o)}}}function oo(n){let e,t,o=n[18]&&Ke(n);return{c(){o&&o.c(),e=V()},l(r){o&&o.l(r),e=z(r)},m(r,s){o&&o.m(r,s),D(r,e,s),t=!0},p(r,s){r[18]?o?(o.p(r,s),s&262144&&p(o,1)):(o=Ke(r),o.c(),p(o,1),o.m(e.parentNode,e)):o&&(B(),k(o,1,1,()=>{o=null}),j())},i(r){t||(p(o),t=!0)},o(r){k(o),t=!1},d(r){o&&o.d(r),r&&g(e)}}}function xe(n,e){let t,o,r;return o=new Tt({props:{dbPath:e[3]+e[15],$$slots:{default:[oo,({boardDoc:s,fetchStrokes:c,listenToStrokes:u,isFetchingStrokes:l,strokesArray:a,handleNewlyDrawnStroke:i,deleteAllStrokesFromDb:f})=>({18:s,19:c,20:u,21:l,22:a,23:i,24:f}),({boardDoc:s,fetchStrokes:c,listenToStrokes:u,isFetchingStrokes:l,strokesArray:a,handleNewlyDrawnStroke:i,deleteAllStrokesFromDb:f})=>(s?262144:0)|(c?524288:0)|(u?1048576:0)|(l?2097152:0)|(a?4194304:0)|(i?8388608:0)|(f?16777216:0)]},$$scope:{ctx:e}}}),{key:n,first:null,c(){t=ee(),U(o.$$.fragment),this.h()},l(s){t=ee(),C(o.$$.fragment,s),this.h()},h(){this.first=t},m(s,c){D(s,t,c),F(o,s,c),r=!0},p(s,c){e=s;const u={};c&1&&(u.dbPath=e[3]+e[15]),c&291241991&&(u.$$scope={dirty:c,ctx:e}),o.$set(u)},i(s){r||(p(o.$$.fragment,s),r=!0)},o(s){k(o.$$.fragment,s),r=!1},d(s){s&&g(t),N(o,s)}}}function ro(n){let e,t,o=n[0]&&Je(n);return{c(){o&&o.c(),e=ee()},l(r){o&&o.l(r),e=ee()},m(r,s){o&&o.m(r,s),D(r,e,s),t=!0},p(r,[s]){r[0]?o?(o.p(r,s),s&1&&p(o,1)):(o=Je(r),o.c(),p(o,1),o.m(e.parentNode,e)):o&&(B(),k(o,1,1,()=>{o=null}),j())},i(r){t||(p(o),t=!0)},o(r){k(o),t=!1},d(r){o&&o.d(r),r&&g(e)}}}function ho({page:n}){return{props:{classID:n.params.class,roomID:n.params.room}}}function no(n,e,t){let o,r,s;W(n,Me,_=>t(12,o=_)),W(n,Te,_=>t(1,r=_)),W(n,pe,_=>t(2,s=_));let{classID:c}=e,{roomID:u}=e,l;const a=`classes/${c}/blackboards/`,i=`classes/${c}/rooms/`;o.uid||(console.log("redirecting to tutorial"),$t("/")),me(async()=>{t(0,l=await Ne(i+u));const _=kt();_.width+50,_.height+50});async function f(){t(0,l=await Ne(i+u))}async function d(_,w){console.log("saveVideo(), audioBlob =",_);const S=Ue(),T=Ce(S,`audio/${Ye()}`);await mt(T,_);const I=await _t(T),oe=ce(M(),a+w);await Fe(oe,{creatorUID:o.uid,creatorPhoneNumber:o.phoneNumber,date:new Date().toISOString(),audioDownloadURL:I,audioRefFullPath:T.fullPath}),console.log("updated doc =",{creatorUID:o.uid,creatorPhoneNumber:o.phoneNumber,date:new Date().toISOString(),audioDownloadURL:I,audioRefFullPath:T.fullPath})}async function h({id:_,audioRefFullPath:w}){const S=ce(M(),a+_),T=Ce(Ue(),w),I=[];I.push(pt(T)),I.push(Fe(S,{creator:de(),creatorPhoneNumber:de(),date:de(),audioDownloadURL:de(),audioRefFullPath:de()})),await Promise.all(I)}const y=(_,w)=>_(w.detail.newStroke),P=(_,w)=>d(w.detail.audioBlob,_);return n.$$set=_=>{"classID"in _&&t(6,c=_.classID),"roomID"in _&&t(7,u=_.roomID)},n.$$.update=()=>{n.$$.dirty&128&&f()},[l,r,s,a,d,h,c,u,y,P]}class mo extends H{constructor(e){super();q(this,e,no,ro,X,{classID:6,roomID:7})}}export{mo as default,ho as load};
