import{a as s,t as o}from"./chunk-EMXZKZCC.js";import{U as a,Y as n}from"./chunk-O55RYIK3.js";var l=(()=>{let t=class{constructor(e){this.http=e,this.apiUrl=o.apiUrl,this.apiKey=o.apiKey,this.apiHost=o.apiHost,this.pathRoot=`${location.protocol+"//"+location.host+"/api"}`}getSearch(e){let i=this;return i.http.get(`${i.apiUrl}search?q=${e}`)}getArtist(e){let i=this;return i.http.get(`${i.apiUrl}artist/${e}`)}},r=t;return(()=>{t.\u0275fac=function(i){return new(i||t)(n(s))}})(),(()=>{t.\u0275prov=a({token:t,factory:t.\u0275fac})})(),r})();export{l as a};