import{u,D as g,c as v,a as n,o,b as d,d as e,F as r,B as b,e as l,s as i,x as h,y as f,z as x}from"./vendor.bbfce40b.js";import{_ as w,g as y,A as m}from"./index.a8b9ad1d.js";const G={setup(){const a=u();return g(async()=>{await y.getGames()}),{games:v(()=>m.games),goTo(s){m.activeGame=s,a.push({name:"Game",params:{id:s.id}})}}}},A=a=>(h("data-v-214a2854"),a=a(),f(),a),k={class:"container-fluid"},S=A(()=>e("div",{class:"row"},[e("div",{class:"col-12 p-2 d-flex justify-content-between"},[e("h3",null,"What game will we play?!"),e("button",{class:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#add-game"}," Add Game ")])],-1)),B={class:"row px-2"},C=["onClick","src","alt"],F=x("Add New Game");function I(a,s,N,c,j,M){const _=n("GameAddForm"),p=n("Modal");return o(),d(r,null,[e("div",k,[S,e("div",B,[(o(!0),d(r,null,b(c.games,t=>(o(),d("div",{class:"col-12 col-md-3 p-2",key:t.id},[e("img",{onClick:T=>c.goTo(t),class:"img-cover selectable",src:t.image,alt:t.title+" image"},null,8,C)]))),128))])]),l(p,{id:"add-game"},{title:i(()=>[F]),body:i(()=>[l(_)]),_:1})],64)}var H=w(G,[["render",I],["__scopeId","data-v-214a2854"]]);export{H as default};
