import './polyfills.server.mjs';
import{o as t,p as o}from"./chunk-3BX64D3K.mjs";var a=o("restaurant"),n=t(a,e=>e.restaurants),l=e=>t(n,r=>r.find(s=>s.id===+e)?.menus||[]),u=t(a,e=>e.loading),d=t(a,e=>e.error),i=e=>t(n,r=>r.find(s=>s.id===+e)?.name||[]);export{n as a,l as b,u as c,d,i as e};
