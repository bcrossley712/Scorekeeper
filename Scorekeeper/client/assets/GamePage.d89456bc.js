import{m as G,u as k,D as x,c as d,a as l,o as n,b as i,d as e,n as _,t as u,F as g,B as C,e as m,w as p,f as B}from"./vendor.5a51e4b1.js";import{_ as E,A as r,g as h,l as v,P as S}from"./index.2d804195.js";import{s as w}from"./SessionsService.1537df99.js";const N={setup(){const c=G(),o=k();return x(async()=>{try{r.activeGame=await h.getGameById(c.params.id),await w.getGamesSessions(c.params.id),await h.getGames()}catch(s){v.error(s),S.toast(s.message,"error")}}),{sessions:d(()=>r.sessions),game:d(()=>r.activeGame),user:d(()=>r.user),goTo(s){o.push({name:"Session",params:{id:s}})},async newSession(){try{const s={gameId:r.activeGame.id},t=await w.addSession(s);o.push({name:"Session",params:{id:t.id}})}catch(s){v.error(s),S.toast(s.message,"error")}}}}},j={class:"container-fluid"},A={class:"row"},F={class:"col-12 p-2 d-flex justify-content-between"},V={class:"text-center"},M={key:1,class:"mdi mdi-pencil selectable text-warning me-4",title:"Edit Game","data-bs-toggle":"modal","data-bs-target":"#edit-game"},P={class:"row"},R={class:"col-12 col-md-6"},T=e("h6",null,"Game Rules",-1),D={class:"col-12 col-md-6 bg-dark p-3"},I=e("h4",null,"Game History",-1),H=["onClick"],L=B("Edit Game?");function q(c,o,s,t,z,J){const b=l("Session"),y=l("GameEditForm"),f=l("Modal");return n(),i(g,null,[e("div",j,[e("div",A,[e("div",F,[t.user.isAuthenticated?(n(),i("button",{key:0,class:"btn btn-primary",onClick:o[0]||(o[0]=(...a)=>t.newSession&&t.newSession(...a))}," New Session ")):_("",!0),e("div",V,[e("h2",null,u(t.game.title),1)]),t.user.isAuthenticated?(n(),i("i",M)):_("",!0)])]),e("div",P,[e("div",R,[T,e("p",null,u(t.game.scoring),1)]),e("div",D,[I,(n(!0),i(g,null,C(t.sessions,a=>(n(),i("div",{onClick:K=>t.goTo(a.id),class:"rounded bg-white text-dark p-1 m-2 selectable",key:a.id},[m(b,{session:a},null,8,["session"])],8,H))),128))])])]),m(f,{id:"edit-game"},{title:p(()=>[L]),body:p(()=>[m(y)]),_:1})],64)}var W=E(N,[["render",q]]);export{W as default};
