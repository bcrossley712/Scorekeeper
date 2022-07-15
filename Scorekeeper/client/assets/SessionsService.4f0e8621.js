import{a as i,l as n,A as a}from"./index.a179b739.js";class d{async getGamesSessions(e){const s=await i.get(`api/games/${e}/sessions`);n.log("[getGamesSessions]",s.data),a.sessions=s.data.reverse()}async getSessionById(e){const s=await i.get(`api/sessions/${e}`);return n.log("[getSessionById]",s.data),a.activeSession=s.data,s.data}async addSession(e){const s=await i.post("api/sessions",e);return n.log("[addSession]",s.data),a.sessions=[...a.sessions,s.data],s.data}async archiveSession(e){const s=a.sessions.findIndex(o=>o.id==e.id),t=await i.put(`api/sessions/${e.id}`,e);n.log("[archiveSession]",t.data),a.sessions.splice(s,1,t.data)}async deleteSession(e){const s=a.sessions.findIndex(o=>o.id==e),t=await i.delete(`api/sessions/${e}`);n.log("[deleteSession]",t.data),a.sessions.splice(s,1)}}const S=new d;export{S as s};
