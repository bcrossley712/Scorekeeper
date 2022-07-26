import{a as t,l as o,A as i,p as c}from"./index.92fda446.js";class S{async getGamesSessions(s){const e=await t.get(`api/games/${s}/sessions`);o.log("[getGamesSessions]",e.data),i.sessions=e.data.reverse()}async getSessionById(s){const e=await t.get(`api/sessions/${s}`);return o.log("[getSessionById]",e.data),i.activeSession=e.data,e.data}async addSession(s){const e=await t.post("api/sessions",s);return o.log("[addSession]",e.data),i.sessions=[...i.sessions,e.data],e.data}async archiveSession(s){await c.getSessionsPlayers(s.id);const e=i.players;let n=null;s.game.lowScoreWins?e.forEach(a=>{n==null||a.totalScore<n?(n=a.totalScore,s.winner=a.name):a.totalScore==n&&(s.winner=s.winner+`, ${a.name}`)}):e.forEach(a=>{n==null||a.totalScore>n?(n=a.totalScore,s.winner=a.name):a.totalScore==n&&(s.winner=s.winner+`, ${a.name}`)});const r=i.sessions.findIndex(a=>a.id==s.id),l=await t.put(`api/sessions/${s.id}`,s);o.log("[archiveSession]",l.data),i.sessions.splice(r,1,l.data)}async deleteSession(s){const e=i.sessions.findIndex(r=>r.id==s),n=await t.delete(`api/sessions/${s}`);o.log("[deleteSession]",n.data),i.sessions.splice(e,1)}}const w=new S;export{w as s};
