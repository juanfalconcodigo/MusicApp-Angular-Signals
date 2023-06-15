import{a as C}from"./chunk-QNR3ELEJ.js";import{d as S,o as k,s as q}from"./chunk-EMXZKZCC.js";import{$ as b,Ab as U,Ba as o,Bb as v,Ga as h,Ja as g,Ka as d,La as n,Ma as a,Na as m,Oa as I,Pa as z,Qa as Q,Sa as D,Ta as f,Va as c,Wa as $,Xa as p,Z as u,Za as F,ab as y,da as E,eb as j,fa as P,fb as A,ga as R,gb as L,l as M,ma as x,q as w,z as O,za as T,zb as V}from"./chunk-O55RYIK3.js";import"./chunk-OC64LIZX.js";var H=["back"];function G(r,i){if(r&1&&(I(0),m(1,"img",7),n(2,"div",8),m(3,"i",9),a(),z()),r&2){let l=f();o(1),d("src",l.artistSelected.picture_medium,x)}}function J(r,i){if(r&1&&(n(0,"div",10)(1,"h2",11),c(2),a(),n(3,"div",12)(4,"h3",13),c(5),a(),n(6,"span",14),c(7),a()(),n(8,"h4",15),c(9," Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia impedit ut blanditiis et est eum illum unde quibusdam sed vero beatae aspernatur accusamus. "),a(),n(10,"div",16)(11,"button",17)(12,"span",18),c(13,"Reproducir"),a()(),n(14,"button",19)(15,"span",20),c(16,"Seguir"),a()()()()),r&2){let l=f();o(2),$(l.artistSelected.name),o(3),p("Lo mejor de ",l.artistSelected.name,""),o(2),p("",l.artistSelected.nb_fan," seguidores")}}var N=(()=>{let i=class{ngOnInit(){let e=this;e.$subscriptionMusicSelected=e.store.select("music").pipe(w(t=>t.artist),O(t=>t?e._apiService.getArtist(t.id):M(null))).subscribe(t=>{console.log("[SELECTED-ARTIST]",t),e.artistSelected=t,e.artistSelected&&e.backRef&&(e.renderer.setStyle(e.backRef.nativeElement,"mix-blend-mode","normal"),e.dataTheme().theme=="primary"&&e.renderer.setStyle(e.backRef.nativeElement,"background",`linear-gradient(0deg, rgba(167, 0, 0, 0.7), rgba(167, 0, 0, 0.7)), url(${e.artistSelected.picture_big})`),e.dataTheme().theme=="dark"&&e.renderer.setStyle(e.backRef.nativeElement,"background",`linear-gradient(0deg, rgb(226 219 219 / 70%), rgb(104 70 70 / 70%)), url(${e.artistSelected.picture_big})`),e.renderer.setStyle(e.backRef.nativeElement,"transform","matrix(-1, 0, 0, 1, 0, 0)"),e.renderer.setStyle(e.backRef.nativeElement,"background-repeat","no-repeat"),e.renderer.setStyle(e.backRef.nativeElement,"background-position","center"),e.renderer.setStyle(e.backRef.nativeElement,"background-size","cover"))})}constructor(){this.artistSelected=null,this.$subscriptionMusicSelected=null,this.store=u(k),this._apiService=u(C),this.renderer=u(T),this.dataTheme=S(this.store.select("themeApp"));let e=this;h(()=>{if(console.log("[THEME-DETAIL]",e.dataTheme()),!e.backRef)return;let t=e.artistSelected?`, url(${e.artistSelected.picture_big})`:"";e.dataTheme().theme=="primary"&&e.renderer.setStyle(e.backRef.nativeElement,"background",`linear-gradient(0deg, rgba(167, 0, 0, 0.7), rgba(167, 0, 0, 0.7))${t}`),e.dataTheme().theme=="dark"&&e.renderer.setStyle(e.backRef.nativeElement,"background",`linear-gradient(0deg, rgba(226, 219, 219, 0.7), rgba(104,70, 70,0.7))${t}`),e.renderer.setStyle(e.backRef.nativeElement,"mix-blend-mode","normal"),e.renderer.setStyle(e.backRef.nativeElement,"transform","matrix(-1, 0, 0, 1, 0, 0)"),e.renderer.setStyle(e.backRef.nativeElement,"background-repeat","no-repeat"),e.renderer.setStyle(e.backRef.nativeElement,"background-position","center"),e.renderer.setStyle(e.backRef.nativeElement,"background-size","cover")},{allowSignalWrites:!0})}ngAfterViewInit(){let e=this;e.renderer.setStyle(e.backRef.nativeElement,"opacity","0.5")}ngOnDestroy(){let e=this;e.$subscriptionMusicSelected&&e.$subscriptionMusicSelected.unsubscribe()}},r=i;return(()=>{i.\u0275fac=function(t){return new(t||i)}})(),(()=>{i.\u0275cmp=b({type:i,selectors:[["app-music-detail"]],viewQuery:function(t,s){if(t&1&&A(H,5),t&2){let _;j(_=L())&&(s.backRef=_.first)}},standalone:!0,features:[F([C]),y],decls:7,vars:2,consts:[[1,"music-detail-container"],[1,"music-detail-container__image"],[4,"ngIf"],[1,"music-detail-container__detail"],[1,"music-detail-container__detail-back"],["back",""],["class","music-detail-container__detail-root",4,"ngIf"],["alt","Image Artist",1,"image-fit",3,"src"],[1,"music-detail-container__image-back"],["aria-hidden","true",1,"fa","fa-play","fa-4x","icon-play"],[1,"music-detail-container__detail-root"],[1,"music-detail-container__detail-title"],[1,"music-detail-container__detail-follow"],[1,"music-detail-container__detail-f-detail"],[1,"music-detail-container__detail-f-number"],[1,"music-detail-container__detail-description"],[1,"music-detail-container__detail-buttons"],[1,"music-detail-container__detail-button","music-detail-container__detail-buttons-play"],[1,"btn-text-inner","btn-text-inner__play"],[1,"music-detail-container__detail-button","music-detail-container__detail-buttons-follow"],[1,"btn-text-inner","btn-text-inner__follow"]],template:function(t,s){t&1&&(n(0,"div",0)(1,"div",1),g(2,G,4,1,"ng-container",2),a(),n(3,"div",3),m(4,"div",4,5),g(6,J,17,3,"div",6),a()()),t&2&&(o(2),d("ngIf",s.artistSelected),o(4),d("ngIf",s.artistSelected))},dependencies:[v,U],styles:[".music-detail-container[_ngcontent-%COMP%]{width:100%;height:250px;display:grid;grid-template-columns:28% auto;grid-template-rows:250px}.music-detail-container__image[_ngcontent-%COMP%]{width:100%;height:100%;position:relative}.music-detail-container__image-back[_ngcontent-%COMP%]{position:absolute;inset:0;display:flex;justify-content:center;align-items:center;background-color:#0101014d}.music-detail-container__detail[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:40px 21px 15px 30px;position:relative}.music-detail-container__detail-back[_ngcontent-%COMP%]{position:absolute;inset:0}.music-detail-container__detail-root[_ngcontent-%COMP%]{z-index:99}.music-detail-container__detail-title[_ngcontent-%COMP%]{font-family:Quicksand;font-style:normal;font-weight:700;font-size:22px;line-height:28px;color:#fff}.music-detail-container__detail-follow[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center;gap:16px}.music-detail-container__detail-f-detail[_ngcontent-%COMP%]{font-family:Quicksand;font-style:normal;font-weight:400;font-size:14px;line-height:18px;color:#fff}.music-detail-container__detail-f-number[_ngcontent-%COMP%]{font-family:Quicksand;font-style:normal;font-weight:400;font-size:10px;line-height:12px;color:#662323}.music-detail-container__detail-description[_ngcontent-%COMP%]{margin:20px 0 50px;font-family:Quicksand;font-style:normal;font-weight:400;font-size:12px;line-height:20px;color:#fff;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.music-detail-container__detail-buttons[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center;gap:20px}.music-detail-container__detail-buttons-play[_ngcontent-%COMP%]{background:var(--bg-content-btn);border-radius:100px;border:none}.music-detail-container__detail-buttons-follow[_ngcontent-%COMP%]{background:transparent;border:1px solid var(--bg-content-btn);border-radius:100px}.music-detail-container__detail-button[_ngcontent-%COMP%]{width:117px;height:31px;display:flex;justify-content:center;align-items:center}.btn-text-inner[_ngcontent-%COMP%]{font-family:Quicksand;font-style:normal;font-weight:400;font-size:14px;line-height:18px}.btn-text-inner__play[_ngcontent-%COMP%]{color:var(--bg-color)}.btn-text-inner__follow[_ngcontent-%COMP%]{color:var(--bg-content-btn)}@media only screen and (max-width: 620px){.music-detail-container[_ngcontent-%COMP%]{display:flex}.music-detail-container__image[_ngcontent-%COMP%]{display:none}.music-detail-container__detail-description[_ngcontent-%COMP%]{margin:10px 0 20px}.music-detail-container__detail-buttons[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start;gap:10px}}"]})})(),r})();function K(r,i){if(r&1){let l=Q();n(0,"div",6),D("click",function(){let s=P(l).$implicit,_=f();return R(_.changeStateMusic(s))}),n(1,"div",7),m(2,"img",8),n(3,"div",9),m(4,"i",10),a()(),n(5,"div")(6,"h4",11),c(7),a()(),n(8,"h5",12),c(9),a()()}if(r&2){let l=i.$implicit;o(2),d("src",l.album.cover_medium,x),o(5),p("",l.title," "),o(2),p("",l.artist.name," ")}}var ge=(()=>{let i=class{constructor(){this.store=u(k),this.results=S(this.store.select("songs")),this.songs=E([]);let e=this;h(()=>{console.log("[RESULTS]",e.results());let t=e.results();t&&t.results&&e.songs.set(t.results)},{allowSignalWrites:!0})}changeStateMusic(e){this.store.dispatch(q({id:e.id,singer:e.artist.name,song:e.title,image:e.album.cover_medium,audio:e.preview,artist:e.artist,album:e.album}))}},r=i;return(()=>{i.\u0275fac=function(t){return new(t||i)}})(),(()=>{i.\u0275cmp=b({type:i,selectors:[["app-main"]],standalone:!0,features:[y],decls:8,vars:1,consts:[[1,"main-container"],[1,"main-container__content-music-detail"],[1,"main-container__content-results"],[1,"main-container__content-results-title"],[1,"main-container__content-results-items"],["class","main-container__content-item",3,"click",4,"ngFor","ngForOf"],[1,"main-container__content-item",3,"click"],[1,"main-container__content-item-image"],["alt","Image song",1,"image-fit",3,"src"],[1,"main-container__content-item-image-back"],["aria-hidden","true",1,"fa","fa-play","fa-2x","icon-play"],[1,"main-container__content-item-title","text-validate-length"],[1,"main-container__content-item-artist","text-validate-length"]],template:function(t,s){t&1&&(n(0,"div",0)(1,"div",1),m(2,"app-music-detail"),a(),n(3,"div",2)(4,"h3",3),c(5,"Resultados"),a(),n(6,"div",4),g(7,K,10,3,"div",5),a()()()),t&2&&(o(7),d("ngForOf",s.songs()))},dependencies:[v,V,N],styles:[".main-container__content-music-detail[_ngcontent-%COMP%]{width:100%;height:auto;padding-right:40px}.main-container__content-results[_ngcontent-%COMP%]{width:100%;height:auto;display:flex;flex-direction:column;gap:20px;padding-right:40px}.main-container__content-results-title[_ngcontent-%COMP%]{font-family:Quicksand;font-style:normal;font-weight:700;font-size:22px;line-height:28px;color:var(--title-color)}.main-container__content-results-items[_ngcontent-%COMP%]{box-sizing:border-box;width:100%;height:auto;display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:auto;gap:20px 22px}.main-container__content-item[_ngcontent-%COMP%]{width:auto;height:206px;cursor:pointer}.main-container__content-item-image[_ngcontent-%COMP%]{width:100%;height:160px;position:relative}.main-container__content-item-image-back[_ngcontent-%COMP%]{position:absolute;inset:0;display:flex;justify-content:center;align-items:center;background-color:#0101014d}.main-container__content-item-title[_ngcontent-%COMP%]{margin-top:6px;font-family:Quicksand;font-style:normal;font-weight:700;font-size:14px;line-height:18px;color:var(--color-item-title)}.main-container__content-item-artist[_ngcontent-%COMP%]{font-family:Quicksand;font-style:normal;font-weight:400;font-size:12px;line-height:15px;color:var(--color-item-subtitle)}@media only screen and (max-width: 980px){.main-container__content-results-items[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}}@media only screen and (max-width: 700px){.main-container__content-results-items[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media only screen and (max-width: 500px){.main-container__content-results-items[_ngcontent-%COMP%]{grid-template-columns:1fr}}"]})})(),r})();export{ge as MainComponent};
