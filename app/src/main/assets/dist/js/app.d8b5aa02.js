(function(e){function t(t){for(var o,r,c=t[0],u=t[1],d=t[2],f=0,s=[];f<c.length;f++)r=c[f],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&s.push(a[r][0]),a[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);l&&l(t);while(s.length)s.shift()();return i.push.apply(i,d||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(o=!1)}o&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},a={app:0},i=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-054df1a0":"8523d9e1","chunk-25b26ed8":"b663e86f","chunk-2c101352":"8da96901","chunk-2d21a3d2":"f1ca31f7"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-054df1a0":1,"chunk-25b26ed8":1,"chunk-2c101352":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-054df1a0":"01ec36f6","chunk-25b26ed8":"eca4fc17","chunk-2c101352":"8a4b9ab2","chunk-2d21a3d2":"31d6cfe0"}[e]+".css",a=u.p+o,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var d=i[c],f=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(f===o||f===a))return t()}var s=document.getElementsByTagName("style");for(c=0;c<s.length;c++){d=s[c],f=d.getAttribute("data-href");if(f===o||f===a)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],l.parentNode.removeChild(l),n(i)},l.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(l)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=i);var d,f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=c(e);var s=new Error;d=function(t){f.onerror=f.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",s.name="ChunkLoadError",s.type=o,s.request=r,n[1](s)}a[e]=void 0}};var l=setTimeout((function(){d({type:"timeout",target:f})}),12e4);f.onerror=f.onload=d,document.head.appendChild(f)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],f=d.push.bind(d);d.push=t,d=d.slice();for(var s=0;s<d.length;s++)t(d[s]);var l=f;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"402c":function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var o=n("2b0e"),r=n("f309"),a=n("0fd9"),i=n("94ed");o["a"].use(r["a"],{components:{VRow:a["a"]}}),t["a"]=new r["a"]({icons:{iconfont:"mdiSvg"}});var c={mdiArrowLeft:i["a"],mdiMagnify:i["e"],mdiFormatSize:i["d"],mdiFormatListBulleted:i["c"],mdiWhiteBalanceSunny:i["f"],mdiDotsVertical:i["b"]}},4260:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return i}));n("a15b"),n("d3b7"),n("4d63"),n("ac1f"),n("25f0"),n("5319"),n("1276");function o(e){return(e||"").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}function r(e,t){/(y+)/.test(t)&&(t=t.replace(RegExp.$1,"".concat(e.getFullYear()).substr(4-RegExp.$1.length)));var n={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getMilliseconds()};for(var o in n)if(new RegExp("(".concat(o,")")).test(t)){var r="".concat(n[o]),a=r.length;"s+"==o&&a--,t=t.replace(RegExp.$1,1===RegExp.$1.length?r:"00".concat(r).substr(a))}return t}function a(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0,n="x"==e?t:3&t|8;return n.toString(16)}))}function i(e){var t=window.location.href.split("#")[0].split("/");return t[t.length-1]=e,t.join("/")}},4360:function(e,t,n){"use strict";var o=n("2b0e"),r=n("2f62"),a=(n("99af"),n("c740"),n("c975"),n("ac1f"),n("1276"),n("3835")),i=n("ae39"),c=n("4260"),u=n("402c"),d=n("d4ec"),f=n("bee2"),s=function(){function e(){Object(d["a"])(this,e)}return Object(f["a"])(e,null,[{key:"read",value:function(e){try{return JSON.parse(window.localStorage.getItem(e))}catch(t){console.log(t)}return null}},{key:"write",value:function(e,t){try{null==t?localStorage.removeItem(e):localStorage.setItem(e,JSON.stringify(t))}catch(n){console.log(n)}}}]),e}(),l=n("8f8f"),p=n("d7c6"),g=n.n(p),A=n("92e7"),v=n.n(A),h="LightNovel_Reading_Bg_Setting",m="LightNovel_Reading_Bg_Custom",k="Reading_FontSize",S={state:{book:null,rendition:null,bookName:null,cover:null,navigation:null,metadata:null,bookAvailable:!1,readProgress:0,section:1,menuShow:!1,fontSettingShow:!1,bgSettingShow:!1,sidebarShow:!1,fontSize:s.read(k)||16,readingCustomBg:s.read(m)||null,readingBgSetting:s.read(h)||"none"},getters:{readSection:function(e){var t,n;return e.navigation?null===(t=e.navigation[e.section-1])||void 0===t?void 0:t.label:null===(n=e.metadata)||void 0===n?void 0:n.title},section:function(e){return e.section},fontSize:function(e){return e.fontSize},fontSettingShow:function(e){return e.fontSettingShow},book:function(e){return e.book},menuShow:function(e){return e.menuShow},sidebarShow:function(e){return e.sidebarShow},bgSettingShow:function(e){return e.bgSettingShow},bookAvailable:function(e){return e.bookAvailable},navigation:function(e){return e.navigation},readingCustomBg:function(e){return e.readingCustomBg},readingBgSetting:function(e){return e.readingBgSetting}},mutations:{updateBookName:function(e,t){e.bookName=t},updateFontSize:function(e,t){e.fontSize=t,e.book.rendition.themes.fontSize(t+"px"),s.write(k,t)},updateFontSettingShow:function(e,t){e.fontSettingShow=t},updateBook:function(e,t){e.book=t},updateRendition:function(e,t){e.rendition=t},updateCover:function(e,t){e.cover=t},updateNavigation:function(e,t){e.navigation=t},updateMetadata:function(e,t){e.metadata=t},updateBookAvailable:function(e,t){e.bookAvailable=t},updateReadProgress:function(e,t){e.readProgress=t},updateSection:function(e,t){e.section=t},updateMenuShow:function(e,t){e.menuShow=t},updateBgSettingShow:function(e,t){e.bgSettingShow=t},updateSidebarShow:function(e,t){e.sidebarShow=t},updateReadingCustomBg:function(e,t){var n=t.value,o=void 0===n?null:n;e.readingCustomBg=o,x(e),s.write(m,o)},updateReadingBgSetting:function(e,t){var n=t.setting,o=void 0===n?"none":n;e.readingBgSetting=o,x(e),s.write(h,o)}},actions:{refreshLocation:function(e,t){var n=e.commit,o=e.state,r=Object(a["a"])(t,3),c=r[0],u=r[1],d=r[2],f=void 0===d||d,s=o.book.rendition.currentLocation();if(console.log(s),s&&s.start){var p=s.start.cfi;if(f&&Object(i["f"])(o.bookName,p),o.bookAvailable){if(c)for(var g=new l["a"](s.end.cfi),A=0,v=!0,h=function(e){var t=o.navigation[e],r=t.href;if(-1!==r.indexOf("#")&&(r=r.split("#")[0]),t.cfi)A=g.compare(t.cfi,g);else{var a=o.book.spine.spineItems.findIndex((function(e){return e.href===r}));A=a>g.spinePos?1:-1}if(v){if(v=!1,1===A)return n("updateSection",0),"break"}else if(e===o.navigation.length-1&&n("updateSection",e+1),1===A)return n("updateSection",e),"break"},m=0;m<o.navigation.length;++m){var k=h(m);if("break"===k)break}u&&n("updateReadProgress",Math.floor(1e3*s.start.percentage))}}},display:function(e,t){e.commit;var n=e.state;return n.book.rendition.display(t)},getRendition:function(e,t){var n=e.commit,o=e.state,r=t.element,a=t.option,c=o.book.renderTo(r,a);return n("updateRendition",c),c.themes.fontSize(o.fontSize+"px"),c.themes.override("--read-padding",i["b"]+20+"px"),x(o),c}},modules:{}};function b(e,t,n){var o=(299*e+587*t+114*n)/1e3;return o>=125?"dark":"light"}function x(e){switch(e.readingBgSetting){case"custom":var t=e.readingCustomBg,n=t.r,o=t.g,r=t.b,a=t.a,i="light"===b(n,o,r)?"rgba(255,255,255,0.7)":"";e.rendition.themes.override("--color",i),document.documentElement.style.setProperty("--bg-img","rgba(".concat(n,",").concat(o,",").concat(r,",").concat(a,")"));break;case"paper":document.documentElement.style.setProperty("--bg-img","url(".concat(u["a"].framework.theme.dark?v.a:Object(c["b"])(g.a),") repeat")),e.rendition.themes.override("--color",u["a"].framework.theme.dark?"rgba(255,255,255,0.7)":"");break;default:e.rendition.themes.override("--color",""),document.documentElement.style.setProperty("--bg-img","")}}n("4de4"),n("7db0"),n("d81d"),n("b0c0"),n("d3b7"),n("96cf");var B=n("1da1"),w=n("5530"),y=n("2909"),O=n("6821"),L=n.n(O),j=n("1fb5"),R=n("a211"),E="EBookReader_BOOK",J={state:{list:s.read(E)||[],coverCache:{}},getters:{localBookExist:function(e,t){return t.allGroup.length>0||t.allList.length>0},BookList:function(e){return e.list},hasGroup:function(e,t){return function(e){return null===e||!!t.BookList.find((function(t){return t.gid===e}))}},groupTitleExist:function(e,t){return function(e,n){var o=Object(c["d"])(e);return 0===o.length||!!t.BookList.find((function(e){return e.gid!==n&&e.book_title===o}))}},cacheTitleExist:function(e,t){return function(e,n){var o=Object(c["d"])(e);return 0===o.length||(!!t.allGroup.find((function(e){return e.gid!==n&&e.data.title===o}))||!!t.BookListCache.find((function(e){return!e.bid&&e.gid!==n&&e.data.title===o})))}},hasBook:function(e,t){return function(e){return!!t.BookList.find((function(t){return t.gid?!!t.data.find((function(t){return t.book_path===e})):t.book_path===e}))}},findBook:function(e,t){return function(e){return t.allList.find((function(t){return t.book_path===e}))}},findGroup:function(e,t){return function(e){return t.BookList.find((function(t){return t.gid===e}))}},mapList:function(e,t){return function(e){return{list:t.allList.filter((function(t){return!!e.find((function(e){var n=e.bid,o=e.gid;return t.bid===n||!n&&t.gid===o}))})),group:t.allGroup.filter((function(t){return!!e.find((function(e){var n=e.bid,o=e.gid;return!n&&t.gid===o}))}))}}},coverCache:function(e){return e.coverCache}},mutations:{updateBookList:function(e,t){e.list=t||[],s.write(E,e.list)},updateCoverCache:function(e,t){o["a"].set(e.coverCache,t.name,t.data)}},actions:{addBookGroup:function(e,t){var n=e.commit,o=e.getters;e.dispatch;if(o.groupTitleExist(t.group_name))return!1;var r=[t].concat(Object(y["a"])(o.BookList));return n("updateBookList",r),!0},removeBookGroup:function(e,t){var n=e.commit,o=e.getters;e.dispatch;Array.isArray(t)||(t=[t]);var r=o.allGroup.filter((function(e){return!t.find((function(t){return t.gid===e.gid}))}));return n("updateBookGroup",r),!0},updateBookGroup:function(e,t){var n=e.commit,o=e.getters;e.dispatch;Array.isArray(t)||(t=[t]);var r=o.allGroup.map((function(e){var n=t.find((function(t){return t.gid===e.gid}));return n&&!o.groupTitleExist(n.data.title,n.gid)?Object(w["a"])(Object(w["a"])(Object(w["a"])({},e),n),{},{last_update_time:Object(c["a"])(new Date,"yyyy-MM-dd hh:mm:sss"),data:Object(w["a"])(Object(w["a"])({},e.data),n.data)}):e}));return n("updateBookGroup",r),!0},addToBook:function(e,t){var n=e.commit,o=e.getters,r=(e.dispatch,[t].concat(Object(y["a"])(o.BookList)));return n("updateBookList",r),!0},removeFromBook:function(e,t){var n=e.commit,o=e.getters;e.dispatch;Array.isArray(t)||(t=[t]);var r=o.allList.filter((function(e){return!t.find((function(t){return t.bid===e.bid}))}));return n("updateBookList",r),!0},saveBookList:function(e){var t=e.state;s.write(E,t.list)}}};window.addToBook=function(e,t){if(!C.getters.hasBook(e)){var n=new Date,o={book_title:t,book_path:e,add_time:"".concat(n.getFullYear(),"-").concat(n.getMonth()+1,"-").concat(n.getDate()),book_cover:L()(t)};C.dispatch("addToBook",o)}},window.addToBooks=function(e,t){var n={};n.gid=Object(c["c"])(),n.group_name=e,n.data=JSON.parse(t),C.dispatch("addBookGroup",n)},window.readFileResult=function(e,t,n){switch(e){case 0:n=Object(j["toByteArray"])(n);var o=new R["a"];o.open(n.buffer).then(Object(B["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.loaded.cover;case 2:return n=e.sent,e.next=5,o.archive.getBase64(n||"/OEBPS/Images/cover.jpg");case 5:r=e.sent,new Promise((function(){device.saveFile(t,"Pictures",r)})),C.commit("updateCoverCache",{name:t,data:r});case 8:case"end":return e.stop()}}),e)}))));break;case 1:C.commit("updateCoverCache",{name:t,data:"data:image/jpeg;base64,"+n});break}},o["a"].use(r["a"]);var C=t["a"]=new r["a"].Store({state:{},mutations:{},actions:{},modules:{read:S,book:J}})},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("navigation",[n("v-app",[n("router-view")],1)],1)},a=[],i=(n("5c0b"),n("2877")),c=n("6544"),u=n.n(c),d=n("7496"),f={},s=Object(i["a"])(f,r,a,!1,null,null,null),l=s.exports;u()(s,{VApp:d["a"]});var p=n("402c"),g=(n("d3b7"),n("8c4f"));o["a"].use(g["a"]);var A=[{path:"/read/:uri?/:name?",name:"Read",component:function(){return Promise.all([n.e("chunk-054df1a0"),n.e("chunk-2c101352")]).then(n.bind(null,"c844"))},props:!0},{path:"/",name:"Home",redirect:"/bookshelf",component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))},children:[{path:"bookshelf/:gid?",name:"Bookshelf",component:function(){return Promise.all([n.e("chunk-054df1a0"),n.e("chunk-25b26ed8")]).then(n.bind(null,"2427"))},props:!0}]}],v=new g["a"]({routes:A,scrollBehavior:function(e,t,n){return n||{x:0,y:0}}}),h=v,m=n("4360"),k=n("6944"),S=n.n(k),b=(n("0808"),n("1e96"));o["a"].config.productionTip=!1,o["a"].use(S.a,{defaultOptions:{navbar:!1}}),o["a"].use(b["a"],{router:h}),new o["a"]({vuetify:p["a"],router:h,store:m["a"],render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"92e7":function(e,t){e.exports="data:image/jpeg;base64,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"},"9c0c":function(e,t,n){},ae39:function(e,t,n){"use strict";n.d(t,"g",(function(){return c})),n.d(t,"c",(function(){return u})),n.d(t,"f",(function(){return d})),n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return l})),n.d(t,"e",(function(){return g}));n("99af"),n("d81d"),n("d3b7"),n("2ca0"),n("96cf"),n("1da1");var o,r,a=n("2909"),i=(n("1fb5"),n("a211"),n("6821"),n("4360"));n("402c"),n("92e7"),n("d7c6");function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:160,n=new Date;return function(){var o=this,r=arguments,a=new Date-0;a-n>=t&&(e.apply(o,r),n=a)}}function u(e){var t;return(t=[]).concat.apply(t,Object(a["a"])(e.map((function(e){var t;return(t=[]).concat.apply(t,[e].concat(Object(a["a"])(u(e.subitems))))}))))}function d(e,t){var n=JSON.parse(localStorage.getItem("Reading_Record")||"{}");n[e]||(n[e]={}),n[e].cfi=t,localStorage.setItem("Reading_Record",JSON.stringify(n))}function f(e){var t,n=JSON.parse(localStorage.getItem("Reading_Record")||"{}");return null===(t=n[e])||void 0===t?void 0:t.cfi}var s=null===(o=window.device)||void 0===o?void 0:o.getExternalFilesDir("Pictures"),l=((null===(r=window.device)||void 0===r?void 0:r.getStatusBarHeight())||0)/window.devicePixelRatio;document.documentElement.style.setProperty("--status-bar-height",l+"px");var p={};function g(e,t){return p[t]?p[t]:new Promise((function(n,o){i["a"].getters.coverCache[e]&&n(),e.startsWith("http")&&(i["a"].commit("updateCoverCache",{name:e,data:e}),n());var r=s+"/"+e;if(window.device)if(device.fileExits(r))if("file://"!==window.location.origin)device.readFileAsync(1,e,r),n();else{var a="file://"+r;i["a"].commit("updateCoverCache",{name:e,data:a}),n(a)}else p[t]=this,device.readFileAsync(0,e,t),n();else{var c="file://"+r;i["a"].commit("updateCoverCache",{name:e,data:c}),n()}}))}},d7c6:function(e,t,n){e.exports=n.p+"img/bg-paper.b2c90955.jpg"}});