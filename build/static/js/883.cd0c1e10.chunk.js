/*! For license information please see 883.cd0c1e10.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkChatty_iOS=self.webpackChunkChatty_iOS||[]).push([[883],{883:(e,t,n)=>{n.d(t,{c:()=>v});var i=n(811),o=n(437);let a;const r=e=>(e.forEach((e=>{for(const t in e)if(e.hasOwnProperty(t)){const n=e[t];if("easing"===t){e["animation-timing-function"]=n,delete e[t]}else{const i=s(t);i!==t&&(e[i]=n,delete e[t])}}})),e),s=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l=e=>{if(void 0===a){const t=void 0!==e.style.animationName,n=void 0!==e.style.webkitAnimationName;a=!t&&n?"-webkit-":""}return a},f=(e,t,n)=>{const i=t.startsWith("animation")?l(e):"";e.style.setProperty(i+t,n)},d=(e,t)=>{const n=t.startsWith("animation")?l(e):"";e.style.removeProperty(n+t)},c=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map((e=>{const t=e.offset,n=[];for(const i in e)e.hasOwnProperty(i)&&"offset"!==i&&n.push(`${i}: ${e[i]};`);return`${100*t}% { ${n.join(" ")} }`})).join(" ")},m=[],h=e=>{let t=m.indexOf(e);return t<0&&(t=m.push(e)-1),`ion-animation-${t}`},u=(e,t,n)=>{var i;const o=(e=>{const t=void 0!==e.getRootNode?e.getRootNode():e;return t.head||t})(n),a=l(n),r=o.querySelector("#"+e);if(r)return r;const s=(null!==(i=n.ownerDocument)&&void 0!==i?i:document).createElement("style");return s.id=e,s.textContent=`@${a}keyframes ${e} { ${t} } @${a}keyframes ${e}-alt { ${t} }`,o.appendChild(s),s},g=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;if(void 0!==t){const n=Array.isArray(t)?t:[t];return[...e,...n]}return e},v=e=>{let t,n,a,s,l,m,v,p,y,E,$,A,C,b=[],w=[],k=[],S=!1,T={},D=[],L=[],O={},P=0,R=!1,F=!1,N=!0,W=!1,K=!0,x=!1;const I=e,j=[],M=[],_=[],q=[],z=[],Z=[],B=[],G=[],H=[],J=[],Q="function"===typeof AnimationEffect||void 0!==o.w&&"function"===typeof o.w.AnimationEffect,U="function"===typeof Element&&"function"===typeof Element.prototype.animate&&Q,V=()=>J,X=e=>{te(),e&&ne()},Y=(e,t)=>(((null===t||void 0===t?void 0:t.oneTimeCallback)?M:j).push({c:e,o:t}),C),ee=()=>(j.length=0,M.length=0,C),te=()=>{if(U)J.forEach((e=>{e.cancel()})),J.length=0;else{const e=_.slice();(0,i.r)((()=>{e.forEach((e=>{d(e,"animation-name"),d(e,"animation-duration"),d(e,"animation-timing-function"),d(e,"animation-iteration-count"),d(e,"animation-delay"),d(e,"animation-play-state"),d(e,"animation-fill-mode"),d(e,"animation-direction")}))}))}},ne=()=>{z.forEach((e=>{(null===e||void 0===e?void 0:e.parentNode)&&e.parentNode.removeChild(e)})),z.length=0},ie=()=>void 0!==l?l:v?v.getFill():"both",oe=()=>void 0!==y?y:void 0!==m?m:v?v.getDirection():"normal",ae=()=>R?"linear":void 0!==a?a:v?v.getEasing():"linear",re=()=>F?0:void 0!==E?E:void 0!==n?n:v?v.getDuration():0,se=()=>void 0!==s?s:v?v.getIterations():1,le=()=>void 0!==$?$:void 0!==t?t:v?v.getDelay():0,fe=e=>{U?V().forEach((t=>{if(t.effect.setKeyframes)t.effect.setKeyframes(e);else{const n=new KeyframeEffect(t.effect.target,e,t.effect.getTiming());t.effect=n}})):me()},de=()=>{Z.forEach((e=>e())),B.forEach((e=>e()));const e=w,t=k,n=T;_.forEach((i=>{const o=i.classList;e.forEach((e=>o.add(e))),t.forEach((e=>o.remove(e)));for(const e in n)n.hasOwnProperty(e)&&f(i,e,n[e])}))},ce=()=>{0!==P&&(P--,0===P&&((()=>{Ae(),G.forEach((e=>e())),H.forEach((e=>e()));const e=N?1:0,t=D,n=L,i=O;_.forEach((e=>{const o=e.classList;t.forEach((e=>o.add(e))),n.forEach((e=>o.remove(e)));for(const t in i)i.hasOwnProperty(t)&&f(e,t,i[t])})),j.forEach((t=>t.c(e,C))),M.forEach((t=>t.c(e,C))),M.length=0,K=!0,N&&(W=!0),N=!0})(),v&&v.animationFinish()))},me=function(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];ne();const n=r(b);_.forEach((o=>{if(n.length>0){const a=c(n);A=void 0!==e?e:h(a);const r=u(A,a,o);z.push(r),f(o,"animation-duration",`${re()}ms`),f(o,"animation-timing-function",ae()),f(o,"animation-delay",`${le()}ms`),f(o,"animation-fill-mode",ie()),f(o,"animation-direction",oe());const s=se()===1/0?"infinite":se().toString();f(o,"animation-iteration-count",s),f(o,"animation-play-state","paused"),t&&f(o,"animation-name",`${r.id}-alt`),(0,i.r)((()=>{f(o,"animation-name",r.id||null)}))}}))},he=()=>{_.forEach((e=>{const t=e.animate(b,{id:I,delay:le(),duration:re(),easing:ae(),iterations:se(),fill:ie(),direction:oe()});t.pause(),J.push(t)})),J.length>0&&(J[0].onfinish=()=>{ce()})},ue=function(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];de(),b.length>0&&(U?he():me(e)),S=!0},ge=e=>{if(e=Math.min(Math.max(e,0),.9999),U)J.forEach((t=>{t.currentTime=t.effect.getComputedTiming().delay+re()*e,t.pause()}));else{const t=`-${re()*e}ms`;_.forEach((e=>{b.length>0&&(f(e,"animation-delay",t),f(e,"animation-play-state","paused"))}))}},ve=e=>{J.forEach((e=>{e.effect.updateTiming({delay:le(),duration:re(),easing:ae(),iterations:se(),fill:ie(),direction:oe()})})),void 0!==e&&ge(e)},pe=function(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;(0,i.r)((()=>{_.forEach((n=>{f(n,"animation-name",A||null),f(n,"animation-duration",`${re()}ms`),f(n,"animation-timing-function",ae()),f(n,"animation-delay",void 0!==t?`-${t*re()}ms`:`${le()}ms`),f(n,"animation-fill-mode",ie()||null),f(n,"animation-direction",oe()||null);const o=se()===1/0?"infinite":se().toString();f(n,"animation-iteration-count",o),e&&f(n,"animation-name",`${A}-alt`),(0,i.r)((()=>{f(n,"animation-name",A||null)}))}))}))},ye=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2?arguments[2]:void 0;return e&&q.forEach((i=>{i.update(e,t,n)})),U?ve(n):pe(t,n),C},Ee=()=>{S&&(U?J.forEach((e=>{e.pause()})):_.forEach((e=>{f(e,"animation-play-state","paused")})),x=!0)},$e=()=>{p=void 0,ce()},Ae=()=>{p&&clearTimeout(p)},Ce=()=>{_.forEach((e=>{d(e,"animation-duration"),d(e,"animation-delay"),d(e,"animation-play-state")}))},be=e=>new Promise((t=>{(null===e||void 0===e?void 0:e.sync)&&(F=!0,Y((()=>F=!1),{oneTimeCallback:!0})),S||ue(),W&&(U?(ge(0),ve()):pe(),W=!1),K&&(P=q.length+1,K=!1),Y((()=>t()),{oneTimeCallback:!0}),q.forEach((e=>{e.play()})),U?(J.forEach((e=>{e.play()})),0!==b.length&&0!==_.length||ce()):(()=>{if(Ae(),(0,i.r)((()=>{_.forEach((e=>{b.length>0&&f(e,"animation-play-state","running")}))})),0===b.length||0===_.length)ce();else{const e=le()||0,t=re()||0,n=se()||1;isFinite(n)&&(p=setTimeout($e,e+t*n+100)),((e,t)=>{let n;const i={passive:!0},o=()=>{n&&n()},a=n=>{e===n.target&&(o(),t(n))};e&&(e.addEventListener("webkitAnimationEnd",a,i),e.addEventListener("animationend",a,i),n=()=>{e.removeEventListener("webkitAnimationEnd",a,i),e.removeEventListener("animationend",a,i)})})(_[0],(()=>{Ae(),(0,i.r)((()=>{Ce(),(0,i.r)(ce)}))}))}})(),x=!1})),we=(e,t)=>{const n=b[0];return void 0===n||void 0!==n.offset&&0!==n.offset?b=[{offset:0,[e]:t},...b]:n[e]=t,C};return C={parentAnimation:v,elements:_,childAnimations:q,id:I,animationFinish:ce,from:we,to:(e,t)=>{const n=b[b.length-1];return void 0===n||void 0!==n.offset&&1!==n.offset?b=[...b,{offset:1,[e]:t}]:n[e]=t,C},fromTo:(e,t,n)=>we(e,t).to(e,n),parent:e=>(v=e,C),play:be,pause:()=>(q.forEach((e=>{e.pause()})),Ee(),C),stop:()=>{q.forEach((e=>{e.stop()})),S&&(te(),S=!1),R=!1,F=!1,K=!0,y=void 0,E=void 0,$=void 0,P=0,W=!1,N=!0,x=!1},destroy:e=>(q.forEach((t=>{t.destroy(e)})),X(e),_.length=0,q.length=0,b.length=0,ee(),S=!1,K=!0,C),keyframes:e=>{const t=b!==e;return b=e,t&&fe(b),C},addAnimation:e=>{if(null!=e)if(Array.isArray(e))for(const t of e)t.parent(C),q.push(t);else e.parent(C),q.push(e);return C},addElement:e=>{if(null!=e)if(1===e.nodeType)_.push(e);else if(e.length>=0)for(let t=0;t<e.length;t++)_.push(e[t]);else console.error("Invalid addElement value");return C},update:ye,fill:e=>(l=e,ye(!0),C),direction:e=>(m=e,ye(!0),C),iterations:e=>(s=e,ye(!0),C),duration:e=>(U||0!==e||(e=1),n=e,ye(!0),C),easing:e=>(a=e,ye(!0),C),delay:e=>(t=e,ye(!0),C),getWebAnimations:V,getKeyframes:()=>b,getFill:ie,getDirection:oe,getDelay:le,getIterations:se,getEasing:ae,getDuration:re,afterAddRead:e=>(G.push(e),C),afterAddWrite:e=>(H.push(e),C),afterClearStyles:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];for(const t of e)O[t]="";return C},afterStyles:function(){return O=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},C},afterRemoveClass:e=>(L=g(L,e),C),afterAddClass:e=>(D=g(D,e),C),beforeAddRead:e=>(Z.push(e),C),beforeAddWrite:e=>(B.push(e),C),beforeClearStyles:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];for(const t of e)T[t]="";return C},beforeStyles:function(){return T=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},C},beforeRemoveClass:e=>(k=g(k,e),C),beforeAddClass:e=>(w=g(w,e),C),onFinish:Y,isRunning:()=>0!==P&&!x,progressStart:function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;return q.forEach((n=>{n.progressStart(e,t)})),Ee(),R=e,S||ue(),ye(!1,!0,t),C},progressStep:e=>(q.forEach((t=>{t.progressStep(e)})),ge(e),C),progressEnd:(e,t,n)=>(R=!1,q.forEach((i=>{i.progressEnd(e,t,n)})),void 0!==n&&(E=n),W=!1,N=!0,0===e?(y="reverse"===oe()?"normal":"reverse","reverse"===y&&(N=!1),U?(ye(),ge(1-t)):($=(1-t)*re()*-1,ye(!1,!1))):1===e&&(U?(ye(),ge(t)):($=t*re()*-1,ye(!1,!1))),void 0!==e&&(Y((()=>{E=void 0,y=void 0,$=void 0}),{oneTimeCallback:!0}),v||be()),C)}}}}]);
//# sourceMappingURL=883.cd0c1e10.chunk.js.map