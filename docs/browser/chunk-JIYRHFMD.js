import{a as X}from"./chunk-QB3V3KC3.js";import{a as z,c as $}from"./chunk-ECZQLQQL.js";import{a as H,b as J,c as K,d as Q,e as W}from"./chunk-SNGUZNMA.js";import{b as Y,c as Z,i as tt}from"./chunk-O62AUNJF.js";import{B as A,C as R,D as M,E as N,F as V,G as L,H as U,I as q,W as G,c as j}from"./chunk-E55XPUGU.js";import{Ab as w,Bb as v,Da as k,Db as y,Eb as x,La as P,Na as m,Oa as f,_b as B,ac as D,bc as I,db as u,dc as F,fb as l,fc as C,jb as o,kb as n,lb as s,ma as _,mb as S,ob as d,qb as E,tb as T,va as b,wa as O,yb as c,zb as g}from"./chunk-SJ7RQTWP.js";function at(i,e){i&1&&(o(0,"div",8),c(1,"Unavailable"),n())}var et=(()=>{let e=class e{constructor(){this.addItem=new k}handleAdd(){this.item&&this.addItem.emit(this.item)}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=_({type:e,selectors:[["app-item"]],inputs:{item:"item"},outputs:{addItem:"addItem"},standalone:!0,features:[v],decls:17,vars:6,consts:[[1,"item-card"],[1,"display"],["mat-card-image","",3,"src","alt"],[1,"description"],[1,"price"],[3,"click"],["src","./assets/add.svg","alt","add",1,"add-icon"],["class","unavailable-overlay",4,"ngIf"],[1,"unavailable-overlay"]],template:function(a,t){a&1&&(o(0,"mat-card",0)(1,"div",1)(2,"div"),s(3,"img",2),n(),o(4,"div")(5,"mat-card-content")(6,"h2"),c(7),n(),o(8,"p",3),c(9),n(),o(10,"p",4),c(11),n()()(),o(12,"div")(13,"mat-card-actions")(14,"div",5),d("click",function(){return t.item!=null&&t.item.availability?t.handleAdd():""}),s(15,"img",6),n()()()(),u(16,at,2,0,"div",7),n()),a&2&&(m(3),T("alt",t.item==null?null:t.item.thumbnail),l("src",t.item==null?null:t.item.thumbnail,P),m(4),g(t.item==null?null:t.item.name),m(2),g(t.item==null?null:t.item.description),m(2),w("",t.item==null?null:t.item.price," EGP"),m(5),l("ngIf",!(t.item!=null&&t.item.availability)))},dependencies:[C,I,q,N,L,V,U,Y,M],styles:[".item-card[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;justify-content:space-between;color:#fff;background:#000000d6}.item-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:Inter-Regular;font-size:16px;line-height:19.36px;text-align:left}.item-card[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-family:Inter-Regular;font-size:11px;line-height:13.31px;text-align:left}.item-card[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{font-family:Inter-Regular;font-size:16px;line-height:19.36px;text-align:left}.item-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:150px;object-fit:cover}.item-card[_ngcontent-%COMP%]   .unavailable-overlay[_ngcontent-%COMP%]{position:absolute;inset:0;background:#00000080;color:#fff;display:flex;align-items:center;padding-left:62px;font-size:1.2em;pointer-events:none;font-family:Inter-Meduim;font-size:12px;line-height:14.52px;text-align:left}.item-card[_ngcontent-%COMP%]{box-shadow:0 4px 4px #00000040}.display[_ngcontent-%COMP%]{display:flex;align-items:center;padding:16px;justify-content:space-between}mat-card-actions[_ngcontent-%COMP%]{padding-top:119px}"],changeDetection:0});let i=e;return i})();function ot(i,e){if(i&1){let p=S();o(0,"app-item",10),d("addItem",function(a){b(p);let t=E(2);return O(t.addToCart(a))}),n()}if(i&2){let p=e.$implicit;l("item",p)}}function rt(i,e){if(i&1&&(o(0,"div",8),u(1,ot,1,1,"app-item",9),n()),i&2){let p=e.ngIf;m(),l("ngForOf",p)}}var Bt=(()=>{let e=class e{constructor(r,a,t,h){this.route=r,this.store=a,this.location=t,this.router=h,this.name=""}ngOnInit(){let r=this.route.snapshot.paramMap.get("menuId");this.name=this.route.snapshot.paramMap.get("name")||"",r&&(this.store.dispatch(X({menuId:r})),this.items$=this.store.select(K),this.cartItems$=this.store.select(tt),this.loading$=this.store.select(Q),this.error$=this.store.select(W))}goBack(){this.location.back()}addToCart(r){r.id&&this.store.dispatch(Z({cartItem:{item:r,quantity:1}}))}checkout(){this.router.navigate(["cart"])}};e.\u0275fac=function(a){return new(a||e)(f(z),f(G),f(B),f($))},e.\u0275cmp=_({type:e,selectors:[["app-items-screen"]],standalone:!0,features:[v],decls:11,vars:7,consts:[["color","primary"],[3,"click"],["src","./assets/back.svg","alt","back",1,"back-icon"],[1,"title"],[1,"spacer"],["mat-icon-button","","matBadgeColor","warn",3,"click","matBadge"],["src","./assets/cart.svg","alt","cart",1,"cart-icon"],["class","items",4,"ngIf"],[1,"items"],[3,"item","addItem",4,"ngFor","ngForOf"],[3,"addItem","item"]],template:function(a,t){a&1&&(o(0,"mat-toolbar",0)(1,"div",1),d("click",function(){return t.goBack()}),s(2,"img",2),n(),o(3,"span",3),c(4),n(),s(5,"span",4),o(6,"button",5),y(7,"async"),d("click",function(){return t.checkout()}),s(8,"img",6),n()(),u(9,rt,2,1,"div",7),y(10,"async")),a&2&&(m(4),g(t.name),m(2),l("matBadge",x(7,3,t.cartItems$)),m(3),l("ngIf",x(10,5,t.items$)))},dependencies:[C,D,I,F,j,R,A,M,J,H,et],styles:[".items[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px;padding:10px}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.back-icon[_ngcontent-%COMP%]{padding-right:22px;width:24px;height:24px}.title[_ngcontent-%COMP%]{font-family:Inter-Semi-Bold;font-size:20px;line-height:24.2px;text-align:left}button[_ngcontent-%COMP%]{border:0;background-color:transparent}"],changeDetection:0});let i=e;return i})();export{Bt as ItemsComponent};
