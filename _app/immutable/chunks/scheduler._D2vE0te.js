function x(){}function k(t,n){for(const e in n)t[e]=n[e];return t}function w(t){return t()}function M(){return Object.create(null)}function j(t){t.forEach(w)}function S(t){return typeof t=="function"}function F(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function P(t){return Object.keys(t).length===0}function E(t,...n){if(t==null){for(const o of n)o(void 0);return x}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function U(t,n,e){t.$$.on_destroy.push(E(n,e))}function A(t,n,e,o){if(t){const r=g(t,n,e,o);return t[0](r)}}function g(t,n,e,o){return t[1]&&o?k(e.ctx.slice(),t[1](o(n))):e.ctx}function B(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const l=[],f=Math.max(n.dirty.length,r.length);for(let u=0;u<f;u+=1)l[u]=n.dirty[u]|r[u];return l}return n.dirty|r}return n.dirty}function C(t,n,e,o,r,l){if(r){const f=g(n,e,o,l);t.p(f,r)}}function D(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}function G(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function H(t,n){const e={};n=new Set(n);for(const o in t)!n.has(o)&&o[0]!=="$"&&(e[o]=t[o]);return e}let a;function _(t){a=t}function m(){if(!a)throw new Error("Function called outside component initialization");return a}function I(t){m().$$.on_mount.push(t)}function J(t){m().$$.after_update.push(t)}const i=[],p=[];let s=[];const b=[],y=Promise.resolve();let h=!1;function v(){h||(h=!0,y.then(q))}function K(){return v(),y}function O(t){s.push(t)}const d=new Set;let c=0;function q(){if(c!==0)return;const t=a;do{try{for(;c<i.length;){const n=i[c];c++,_(n),z(n.$$)}}catch(n){throw i.length=0,c=0,n}for(_(null),i.length=0,c=0;p.length;)p.pop()();for(let n=0;n<s.length;n+=1){const e=s[n];d.has(e)||(d.add(e),e())}s.length=0}while(i.length);for(;b.length;)b.pop()();h=!1,d.clear(),_(t)}function z(t){if(t.fragment!==null){t.update(),j(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function L(t){const n=[],e=[];s.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),s=n}export{A as a,B as b,U as c,J as d,p as e,k as f,D as g,H as h,G as i,M as j,q as k,S as l,P as m,x as n,I as o,O as p,L as q,j as r,F as s,K as t,C as u,a as v,_ as w,w as x,i as y,v as z};
