var W=Object.defineProperty;var J=(l,t,e)=>t in l?W(l,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[t]=e;var O=(l,t,e)=>(J(l,typeof t!="symbol"?t+"":t,e),e);import{s as I,n as $}from"../chunks/scheduler.Ce_0Mfso.js";import{S as y,i as D,e as g,c as x,y as V,o as h,g as H,d as m,s as S,u as k,a as w,f as C,v as M,h as p,w as A,n as E,l as T,x as L,t as N,b as q,j as z,q as Q,m as X,z as Y}from"../chunks/index.Bpd-_tn8.js";import{e as U}from"../chunks/each.D6YF6ztN.js";function Z(l){let t,e='<img src="/assets/picture.png" alt="" class="object-cover z-[2] max-h-[70vh] rounded-lg"/>';return{c(){t=g("div"),t.innerHTML=e,this.h()},l(s){t=x(s,"DIV",{class:!0,"data-svelte-h":!0}),V(t)!=="svelte-1qqmwnh"&&(t.innerHTML=e),this.h()},h(){h(t,"class","relative shadow-2xl w-96 grid gap-6 place-items-center")},m(s,n){H(s,t,n)},p:$,i:$,o:$,d(s){s&&m(t)}}}class tt extends y{constructor(t){super(),D(this,t,null,Z,I,{})}}function et(l){let t,e,s=`<h2 class="font-semibold text-4xl sm:text:5xl md:text-6xl"><span class="poppins text-violet-400">Calvin</span> Kwan
			<br/>
			Full Stack <span class="poppins text-violet-400">Developer</span></h2> <p class="text-base sm:text-lg md:text-xl">I am more <span class="text-violet-400">focused</span> on backend development using
			Python(Flask) and Java(Spring Boot). I also have some
			<span class="text-violet-400">experiences</span> in PHP (Laravel).</p> <a href="mailto:ckw28502@gmail.com" target="_blank" class="blue-shadow mx-auto lg:mr-auto text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950"><div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div> <h3 class="relative z-9">Contact me →</h3></a>`,n,c,u;return c=new tt({}),{c(){t=g("section"),e=g("div"),e.innerHTML=s,n=S(),k(c.$$.fragment),this.h()},l(r){t=x(r,"SECTION",{id:!0,class:!0});var a=w(t);e=x(a,"DIV",{class:!0,"data-svelte-h":!0}),V(e)!=="svelte-1hmoaq8"&&(e.innerHTML=s),n=C(a),M(c.$$.fragment,a),a.forEach(m),this.h()},h(){h(e,"class","flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"),h(t,"id","intro"),h(t,"class","grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14")},m(r,a){H(r,t,a),p(t,e),p(t,n),A(c,t,null),u=!0},p:$,i(r){u||(E(c.$$.fragment,r),u=!0)},o(r){T(c.$$.fragment,r),u=!1},d(r){r&&m(t),L(c)}}}class st extends y{constructor(t){super(),D(this,t,null,et,I,{})}}function at(l){let t,e='<div class="flex flex-col gap-2 text-center"><h3 class="text-lg sm:text-xl md:text-2xl">My proud <span class="poppins text-violet-400">innovations</span></h3></div>';return{c(){t=g("section"),t.innerHTML=e,this.h()},l(s){t=x(s,"SECTION",{id:!0,class:!0,"data-svelte-h":!0}),V(t)!=="svelte-qfqm60"&&(t.innerHTML=e),this.h()},h(){h(t,"id","projects"),h(t,"class","py-20 lg:py-32 flex flex-col gap-24")},m(s,n){H(s,t,n)},p:$,i:$,o:$,d(s){s&&m(t)}}}class lt extends y{constructor(t){super(),D(this,t,null,at,I,{})}}class nt{constructor(t,e,s){O(this,"id");O(this,"title");O(this,"description");this.id=t,this.title=e,this.description=s}getId(){return this.id}getTitle(){return this.title}getDescription(){return this.description}}const rt=[{title:"DOUBLE DEGREE STUDENT",description:"I am a student from iSTTS (institut Sains dan Teknologi Terpadu Surabaya) in Indonesia who partake a double degree program to continue my pursuit of knowledge in Fontys, Netherlands."},{title:"EAGER TO LEARN",description:"I am fascinated in the world of software development. Whenever I found something interesting, I always try to find out about it. This trait of mine is often triggered during every software development project I was in."},{title:"DESKTOP, WEB, AND MOBILE DEVELOPER",description:"Even though I mostly participate on web application project (full stack), I also learned how to make a desktop application and mobile application"}];function ot(){return rt.map((l,t)=>new nt(t+1,l.title,l.description))}const it={convertAboutDataToAboutModel:ot};function ct(l){let t,e,s,n=l[0].getId()+"",c,u,r,a,d=l[0].getTitle()+"",i,f,o,v=l[0].getDescription()+"",P;return{c(){t=g("div"),e=g("p"),s=N("0"),c=N(n),u=S(),r=g("div"),a=g("h3"),i=N(d),f=S(),o=g("p"),P=N(v),this.h()},l(_){t=x(_,"DIV",{class:!0});var b=w(t);e=x(b,"P",{class:!0});var B=w(e);s=q(B,"0"),c=q(B,n),B.forEach(m),u=C(b),r=x(b,"DIV",{class:!0});var j=w(r);a=x(j,"H3",{class:!0});var R=w(a);i=q(R,d),R.forEach(m),f=C(j),o=x(j,"P",{});var F=w(o);P=q(F,v),F.forEach(m),j.forEach(m),b.forEach(m),this.h()},h(){h(e,"class","poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold self-center"),h(a,"class","text-2xl sm:text-3xl md:text-5xl"),h(r,"class","flex flex-col gap-6 sm:gap-8"),h(t,"class","flex gap-6 sm:gap-8")},m(_,b){H(_,t,b),p(t,e),p(e,s),p(e,c),p(t,u),p(t,r),p(r,a),p(a,i),p(r,f),p(r,o),p(o,P)},p(_,[b]){b&1&&n!==(n=_[0].getId()+"")&&z(c,n),b&1&&d!==(d=_[0].getTitle()+"")&&z(i,d),b&1&&v!==(v=_[0].getDescription()+"")&&z(P,v)},i:$,o:$,d(_){_&&m(t)}}}function ut(l,t,e){let{about:s}=t;return l.$$set=n=>{"about"in n&&e(0,s=n.about)},[s]}class ft extends y{constructor(t){super(),D(this,t,ut,ct,I,{about:0})}}function G(l,t,e){const s=l.slice();return s[1]=t[e],s}function K(l){let t,e;return t=new ft({props:{about:l[1]}}),{c(){k(t.$$.fragment)},l(s){M(t.$$.fragment,s)},m(s,n){A(t,s,n),e=!0},p:$,i(s){e||(E(t.$$.fragment,s),e=!0)},o(s){T(t.$$.fragment,s),e=!1},d(s){L(t,s)}}}function pt(l){let t,e,s='<h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl py"><span class="poppins text-violet-400">ABOUT</span> ME</h3>',n,c,u,r=U(l[0]),a=[];for(let i=0;i<r.length;i+=1)a[i]=K(G(l,r,i));const d=i=>T(a[i],1,1,()=>{a[i]=null});return{c(){t=g("section"),e=g("div"),e.innerHTML=s,n=S(),c=g("div");for(let i=0;i<a.length;i+=1)a[i].c();this.h()},l(i){t=x(i,"SECTION",{id:!0,class:!0});var f=w(t);e=x(f,"DIV",{class:!0,"data-svelte-h":!0}),V(e)!=="svelte-1klj819"&&(e.innerHTML=s),n=C(f),c=x(f,"DIV",{class:!0});var o=w(c);for(let v=0;v<a.length;v+=1)a[v].l(o);o.forEach(m),f.forEach(m),this.h()},h(){h(e,"class","flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"),h(c,"class","flex flex-col gap-20 w-full mx-auto max-w-[800px]"),h(t,"id","about"),h(t,"class","py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative")},m(i,f){H(i,t,f),p(t,e),p(t,n),p(t,c);for(let o=0;o<a.length;o+=1)a[o]&&a[o].m(c,null);u=!0},p(i,[f]){if(f&1){r=U(i[0]);let o;for(o=0;o<r.length;o+=1){const v=G(i,r,o);a[o]?(a[o].p(v,f),E(a[o],1)):(a[o]=K(v),a[o].c(),E(a[o],1),a[o].m(c,null))}for(Q(),o=r.length;o<a.length;o+=1)d(o);X()}},i(i){if(!u){for(let f=0;f<r.length;f+=1)E(a[f]);u=!0}},o(i){a=a.filter(Boolean);for(let f=0;f<a.length;f+=1)T(a[f]);u=!1},d(i){i&&m(t),Y(a,i)}}}function dt(l){return[it.convertAboutDataToAboutModel()]}class mt extends y{constructor(t){super(),D(this,t,dt,pt,I,{})}}function ht(l){let t,e,s,n,c,u,r;return e=new st({}),n=new lt({}),u=new mt({}),{c(){t=g("main"),k(e.$$.fragment),s=S(),k(n.$$.fragment),c=S(),k(u.$$.fragment),this.h()},l(a){t=x(a,"MAIN",{class:!0});var d=w(t);M(e.$$.fragment,d),s=C(d),M(n.$$.fragment,d),c=C(d),M(u.$$.fragment,d),d.forEach(m),this.h()},h(){h(t,"class","flex flex-col flex-1 p-4")},m(a,d){H(a,t,d),A(e,t,null),p(t,s),A(n,t,null),p(t,c),A(u,t,null),r=!0},p:$,i(a){r||(E(e.$$.fragment,a),E(n.$$.fragment,a),E(u.$$.fragment,a),r=!0)},o(a){T(e.$$.fragment,a),T(n.$$.fragment,a),T(u.$$.fragment,a),r=!1},d(a){a&&m(t),L(e),L(n),L(u)}}}class gt extends y{constructor(t){super(),D(this,t,null,ht,I,{})}}function xt(l){let t,e;return t=new gt({}),{c(){k(t.$$.fragment)},l(s){M(t.$$.fragment,s)},m(s,n){A(t,s,n),e=!0},p:$,i(s){e||(E(t.$$.fragment,s),e=!0)},o(s){T(t.$$.fragment,s),e=!1},d(s){L(t,s)}}}class wt extends y{constructor(t){super(),D(this,t,null,xt,I,{})}}export{wt as component};