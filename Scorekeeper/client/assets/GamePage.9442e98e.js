import{k as f,u as G,D as y,c as m,a as r,o as c,b as d,d as e,t as x,F as _,B as k,e as l,s as p,z as B}from"./vendor.bbfce40b.js";import{_ as C,A as n,g,l as u,P as h}from"./index.74f11a8d.js";import{s as v}from"./SessionsService.8140dc36.js";const E={setup(){const i=f(),o=G();return y(async()=>{try{n.activeGame=await g.getGameById(i.params.id),await v.getGamesSessions(i.params.id),await g.getGames()}catch(s){u.error(s),h.toast(s.message,"error")}}),{sessions:m(()=>n.sessions),game:m(()=>n.activeGame),goTo(s){o.push({name:"Session",params:{id:s}})},async newSession(){try{const s={gameId:n.activeGame.id},t=await v.addSession(s);o.push({name:"Session",params:{id:t.id}})}catch(s){u.error(s),h.toast(s.message,"error")}}}}},j={class:"container-fluid"},F={class:"row"},N={class:"col-12 p-2 d-flex justify-content-between"},M={class:"text-center"},P=e("i",{class:"mdi mdi-pencil selectable text-warning me-4",title:"Edit Game","data-bs-toggle":"modal","data-bs-target":"#edit-game"},null,-1),R={class:"row"},T=e("div",{class:"col-6"},"Game Rules",-1),V={class:"col-6 bg-dark p-3"},A=e("h4",null,"Game History",-1),D=["onClick"],I=B("Edit Game?");function z(i,o,s,t,H,L){const S=r("Session"),b=r("GameEditForm"),w=r("Modal");return c(),d(_,null,[e("div",j,[e("div",F,[e("div",N,[e("button",{class:"btn btn-primary",onClick:o[0]||(o[0]=(...a)=>t.newSession&&t.newSession(...a))},"New Session"),e("div",M,[e("h2",null,x(t.game.title),1)]),P])]),e("div",R,[T,e("div",V,[A,(c(!0),d(_,null,k(t.sessions,a=>(c(),d("div",{onClick:q=>t.goTo(a.id),class:"rounded bg-white text-dark p-1 m-2 selectable",key:a.id},[l(S,{session:a},null,8,["session"])],8,D))),128))])])]),l(w,{id:"edit-game"},{title:p(()=>[I]),body:p(()=>[l(b)]),_:1})],64)}var Q=C(E,[["render",z]]);export{Q as default};
