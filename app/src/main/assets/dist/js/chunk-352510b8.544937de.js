(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-352510b8"],{"0bd1":function(t,e,i){"use strict";i("bb94")},2427:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-app-bar",{attrs:{dense:"",flat:"",color:"white",app:""}},[i("v-app-bar-title",{staticClass:"text-caption"},[t._v("阅读时长"),i("span",{staticClass:"text-h6"},[t._v("0")]),t._v("小时")]),i("v-spacer"),i("v-btn",{staticClass:"mr-3",attrs:{text:"",icon:"",small:""}},[i("v-icon",[t._v(t._s(t.icon.mdiMagnify))])],1),i("v-menu",{attrs:{bottom:"",left:"","offset-y":"","close-on-click":"","close-on-content-click":"",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,s=e.attrs;return[i("v-btn",t._g(t._b({attrs:{icon:"",small:""}},"v-btn",s,!1),n),[i("v-icon",{attrs:{small:""}},[t._v(t._s(t.icon.mdiDotsVertical))])],1)]}}])},[i("v-list",{attrs:{dense:""}},[i("v-list-item",{attrs:{dense:""},on:{click:t.openBook}},[t._v("打开书籍")]),i("v-list-item",{attrs:{dense:""},on:{click:t.openDir}},[t._v("打开文件夹")])],1)],1)],1),i("v-main",[i("v-row",[t.gid?t._l(t.findGroup(t.gid).data,(function(t){return i("v-col",{key:t["book_path"],attrs:{cols:"4",sm:"4",md:"3",lg:"2"}},[i("book-card",{attrs:{book:t}})],1)})):t._l(t.BookList,(function(t){return i("v-col",{key:t.gid||t.book_path,attrs:{cols:"4",sm:"4",md:"3",lg:"2"}},[t.gid?i("book-group-card",{attrs:{books:t}}):i("book-card",{attrs:{book:t}})],1)}))],2)],1)],1)},s=[],o=(i("7db0"),i("5530")),a=i("402c"),r=i("2f62"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{on:{click:function(e){return t.loadBook(t.book)}}},[i("v-card",{attrs:{ripple:""}},[i("v-img",{attrs:{"aspect-ratio":2/3,src:t.coverCache[t.book["book_cover"]]},scopedSlots:t._u([{key:"placeholder",fn:function(){return[i("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[i("v-progress-circular",{attrs:{indeterminate:"",color:"blue-grey lighten-3"}})],1)]},proxy:!0}])})],1),i("div",{staticClass:"book-name-wrapper"},[i("div",{staticClass:"pa-0 d-flex book-name"},[i("div",{staticClass:"d-flex fill-height flex-column justify-center"},[i("div",{staticClass:"category-text"},[t._v(" "+t._s(t.book["book_title"])+" ")])])]),i("div",{staticClass:"book-info"},[t._v("已读0%")])])],1)},l=[],h=i("ae39"),d={name:"BookCard",props:{book:Object},computed:Object(o["a"])({},Object(r["c"])(["coverCache"])),methods:{loadBook:h["e"]},created:function(){Object(h["d"])(this.book["book_cover"],this.book["book_path"])}},u=d,f=(i("d09e"),i("2877")),p=i("6544"),v=i.n(p),m=i("b0af"),g=(i("a15b"),i("a9e3"),i("8a79"),i("2ca0"),i("53ca"));i("8efc");function b(t,e){var i=e.modifiers||{},n=e.value,s="object"===Object(g["a"])(n)?n:{handler:n,options:{}},o=s.handler,a=s.options,r=new IntersectionObserver((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;if(t._observe){if(o&&(!i.quiet||t._observe.init)){var s=Boolean(e.find((function(t){return t.isIntersecting})));o(e,n,s)}t._observe.init&&i.once?S(t):t._observe.init=!0}}),a);t._observe={init:!1,observer:r},r.observe(t)}function S(t){t._observe&&(t._observe.observer.unobserve(t),delete t._observe)}var O={inserted:b,unbind:S},y=O,x=(i("36a7"),i("24b2")),w=i("58df"),k=Object(w["a"])(x["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),C=k,_=i("7560"),T=i("d9f7"),j=i("d9bd"),A="undefined"!==typeof window&&"IntersectionObserver"in window,B=Object(w["a"])(C,_["a"]).extend({name:"v-img",directives:{intersect:y},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(g["a"])(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,i){if(!A||i||this.eager){if(this.normalisedSrc.lazySrc){var n=new Image;n.src=this.normalisedSrc.lazySrc,this.pollForSize(n,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch((function(e){Object(j["c"])("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},e.onerror=this.onError,this.hasError=!1,e.src=this.normalisedSrc.src,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=function n(){var s=t.naturalHeight,o=t.naturalWidth;s||o?(e.naturalWidth=o,e.calculatedAspectRatio=o/s):t.complete||!e.isLoading||e.hasError||null==i||setTimeout(n,i)};n()},genContent:function(){var t=C.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=C.options.render.call(this,t),i=Object(T["a"])(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:A?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}}),$=i("490a"),I=i("0fd9"),L=Object(f["a"])(u,c,l,!1,null,"6cc93556",null),W=L.exports;v()(L,{VCard:m["a"],VImg:B,VProgressCircular:$["a"],VRow:I["a"]});var H=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("router-link",{tag:"component",attrs:{to:{name:"Bookshelf",params:{gid:t.books.gid}},tag:"div"}},[i("v-card",{attrs:{ripple:"",tile:""}},[i("v-responsive",{attrs:{"aspect-ratio":2/3}},[i("div",{staticClass:"image-wrapper"},[i("div",{staticClass:"image-content"},[i("div",{staticClass:"d-flex flex-wrap fill-height"},t._l(t.books.data.slice(0,4),(function(e){return i("div",{key:e["book_cover"],staticClass:"image"},[i("v-card",{attrs:{flat:""}},[i("v-img",{attrs:{"aspect-ratio":2/3,src:t.coverCache[e["book_cover"]]},scopedSlots:t._u([{key:"placeholder",fn:function(){return[i("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[i("v-progress-circular",{attrs:{indeterminate:"",color:"blue-grey lighten-3"}})],1)]},proxy:!0}],null,!0)})],1)],1)})),0)])])])],1),i("div",{staticClass:"book-name-wrapper"},[i("div",{staticClass:"pa-0 d-flex book-name"},[i("div",{staticClass:"d-flex fill-height flex-column justify-center"},[i("div",{staticClass:"category-text"},[t._v(" "+t._s(t.books["group_name"])+" ")])])]),i("div",{staticClass:"book-info"},[t._v("共"+t._s(t.books.data.length)+"本")])])],1)},E=[],R=(i("4160"),i("fb6a"),i("159b"),{name:"BookGroupCard",props:{books:Object},methods:{loadBook:h["e"]},computed:Object(o["a"])({},Object(r["c"])(["coverCache"])),created:function(){this.books.data.slice(0,4).forEach((function(t,e){Object(h["d"])(t["book_cover"],t["book_path"])}))}}),M=R,P=(i("679a"),Object(f["a"])(M,H,E,!1,null,"3cf6ce51",null)),z=P.exports;v()(P,{VCard:m["a"],VImg:B,VProgressCircular:$["a"],VResponsive:k,VRow:I["a"]});var N={name:"Bookshelf",components:{BookGroupCard:z,BookCard:W},data:function(){return{showMoveDialog:!1,showGroupEditDialog:!1,icon:a["b"]}},props:{gid:{type:String,default:null}},computed:Object(o["a"])(Object(o["a"])({},Object(r["c"])(["BookList","findGroup"])),{},{books:function(){var t=this;return this.BookList.find((function(e){return e.gid===t.gid}))}}),methods:{openBook:function(){var t;console.log("从文件管理器选择一本书并打开书籍"),null===(t=window.device)||void 0===t||t.openBook()},openDir:function(){var t;console.log("从文件管理器导入一个文件夹"),null===(t=window.device)||void 0===t||t.openDir()}},activated:function(){console.log("activated")}},D=N,F=(i("0bd1"),i("e68a"),i("c7cd"),i("8b0d"),i("0481"),i("4069"),i("3835")),V=(i("5e23"),i("8dd9")),Y=i("80d2"),q=V["a"].extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:function(){return{isExtended:!1}},computed:{computedHeight:function(){var t=this.computedContentHeight;if(!this.isExtended)return t;var e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight:function(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes:function(){return Object(o["a"])(Object(o["a"])({},V["a"].options.computed.classes.call(this)),{},{"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent})},isCollapsed:function(){return this.collapse},isProminent:function(){return this.prominent},styles:function(){return Object(o["a"])(Object(o["a"])({},this.measurableStyles),{},{height:Object(Y["f"])(this.computedHeight)})}},created:function(){var t=this,e=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];e.forEach((function(e){var i=Object(F["a"])(e,2),n=i[0],s=i[1];t.$attrs.hasOwnProperty(n)&&Object(j["a"])(n,s,t)}))},methods:{genBackground:function(){var t={height:Object(Y["f"])(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(B,{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(Y["f"])(this.computedContentHeight)}},Object(Y["m"])(this))},genExtension:function(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(Y["f"])(this.extensionHeight)}},Object(Y["m"])(this,"extension"))}},render:function(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;var e=[this.genContent()],i=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,i,e)}});function X(t,e){var i=e.modifiers||{},n=i.self,s=void 0!==n&&n,o=e.value,a="object"===Object(g["a"])(o)&&o.options||{passive:!0},r="function"===typeof o||"handleEvent"in o?o:o.handler,c=s?t:e.arg?document.querySelector(e.arg):window;c&&(c.addEventListener("scroll",r,a),t._onScroll={handler:r,options:a,target:s?void 0:c})}function U(t){if(t._onScroll){var e=t._onScroll,i=e.handler,n=e.options,s=e.target,o=void 0===s?t:s;o.removeEventListener("scroll",i,n),delete t._onScroll}}var J={inserted:X,unbind:U},G=J,K=i("fe6c");function Z(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(w["a"])(Object(K["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}var Q=i("2b0e"),tt=Q["a"].extend({name:"scrollable",directives:{Scroll:J},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:function(){return{currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}},computed:{canScroll:function(){return"undefined"!==typeof window},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp:function(){this.savedScroll=this.savedScroll||this.currentScroll},isActive:function(){this.savedScroll=0}},mounted:function(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||Object(j["c"])("Unable to locate element with identifier ".concat(this.scrollTarget),this))},methods:{onScroll:function(){var t=this;this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((function(){Math.abs(t.currentScroll-t.savedScroll)>t.computedScrollThreshold&&t.thresholdMet()})))},thresholdMet:function(){}}}),et=i("d10f"),it=i("f2e7"),nt=Object(w["a"])(q,tt,et["a"],it["a"],Z("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"])),st=nt.extend({name:"v-app-bar",directives:{Scroll:G},provide:function(){return{VAppBar:this}},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data:function(){return{isActive:this.value}},computed:{applicationProperty:function(){return this.bottom?"bottom":"top"},canScroll:function(){return tt.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes:function(){return Object(o["a"])(Object(o["a"])({},q.options.computed.classes.call(this)),{},{"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll})},scrollRatio:function(){var t=this.computedScrollThreshold;return Math.max((t-this.currentScroll)/t,0)},computedContentHeight:function(){if(!this.shrinkOnScroll)return q.options.computed.computedContentHeight.call(this);var t=this.dense?48:56,e=this.computedOriginalHeight;return t+(e-t)*this.scrollRatio},computedFontSize:function(){if(this.isProminent){var t=1.25,e=1.5;return t+(e-t)*this.scrollRatio}},computedLeft:function(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop:function(){return this.app?this.$vuetify.application.bar:0},computedOpacity:function(){if(this.fadeImgOnScroll)return this.scrollRatio},computedOriginalHeight:function(){var t=q.options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight:function(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform:function(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;var t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow:function(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed:function(){return this.collapseOnScroll?this.currentScroll>0:q.options.computed.isCollapsed.call(this)},isProminent:function(){return q.options.computed.isProminent.call(this)||this.shrinkOnScroll},styles:function(){return Object(o["a"])(Object(o["a"])({},q.options.computed.styles.call(this)),{},{fontSize:Object(Y["f"])(this.computedFontSize,"rem"),marginTop:Object(Y["f"])(this.computedMarginTop),transform:"translateY(".concat(Object(Y["f"])(this.computedTransform),")"),left:Object(Y["f"])(this.computedLeft),right:Object(Y["f"])(this.computedRight)})}},watch:{canScroll:"onScroll",computedTransform:function(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll:function(t){this.isActive=!t||0!==this.currentScroll}},created:function(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground:function(){var t=q.options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication:function(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet:function(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render:function(t){var e=q.options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}}),ot=i("3206"),at=i("0246"),rt=Object(ot["a"])("VAppBar","v-app-bar-title","v-app-bar"),ct=rt.extend().extend({name:"v-app-bar-title",data:function(){return{contentWidth:0,left:0,width:0}},watch:{"$vuetify.breakpoint.width":"updateDimensions"},computed:{styles:function(){if(!this.contentWidth)return{};var t=this.width,e=this.contentWidth,i=Object(at["easeInOutCubic"])(Math.min(1,1.5*this.VAppBar.scrollRatio));return{width:Object(Y["f"])(t+(e-t)*i),visibility:this.VAppBar.scrollRatio?"visible":"hidden"}}},mounted:function(){this.updateDimensions()},methods:{updateDimensions:function(){var t=this.$refs.placeholder.getBoundingClientRect();this.width=t.width,this.left=t.left,this.contentWidth=this.$refs.content.scrollWidth}},render:function(t){return t("div",{class:"v-toolbar__title v-app-bar-title"},[t("div",{class:"v-app-bar-title__content",style:this.styles,ref:"content"},[this.$slots.default]),t("div",{class:"v-app-bar-title__placeholder",style:{visibility:this.VAppBar.scrollRatio?"hidden":"visible"},ref:"placeholder"},[this.$slots.default])])}}),lt=i("8336"),ht=(i("caad"),i("13d5"),i("45fc"),i("4ec9"),i("b64b"),i("d3b7"),i("ac1f"),i("3ca3"),i("5319"),i("ddb0"),i("ade3")),dt=(i("4b85"),["sm","md","lg","xl"]),ut=function(){return dt.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),ft=function(){return dt.reduce((function(t,e){return t["offset"+Object(Y["w"])(e)]={type:[String,Number],default:null},t}),{})}(),pt=function(){return dt.reduce((function(t,e){return t["order"+Object(Y["w"])(e)]={type:[String,Number],default:null},t}),{})}(),vt={col:Object.keys(ut),offset:Object.keys(ft),order:Object.keys(pt)};function mt(t,e,i){var n=t;if(null!=i&&!1!==i){if(e){var s=e.replace(t,"");n+="-".concat(s)}return"col"!==t||""!==i&&!0!==i?(n+="-".concat(i),n.toLowerCase()):n.toLowerCase()}}var gt=new Map,bt=Q["a"].extend({name:"v-col",functional:!0,props:Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])({cols:{type:[Boolean,String,Number],default:!1}},ut),{},{offset:{type:[String,Number],default:null}},ft),{},{order:{type:[String,Number],default:null}},pt),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var i=e.props,n=e.data,s=e.children,o=(e.parent,"");for(var a in i)o+=String(i[a]);var r=gt.get(o);return r||function(){var t,e;for(e in r=[],vt)vt[e].forEach((function(t){var n=i[t],s=mt(e,t,n);s&&r.push(s)}));var n=r.some((function(t){return t.startsWith("col-")}));r.push((t={col:!n||!i.cols},Object(ht["a"])(t,"col-".concat(i.cols),i.cols),Object(ht["a"])(t,"offset-".concat(i.offset),i.offset),Object(ht["a"])(t,"order-".concat(i.order),i.order),Object(ht["a"])(t,"align-self-".concat(i.alignSelf),i.alignSelf),t)),gt.set(o,r)}(),t(i.tag,Object(T["a"])(n,{class:r}),s)}});i("99af"),i("4de4"),i("20f6"),i("498a");function St(t){return Q["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,i){var n=i.props,s=i.data,o=i.children;s.staticClass="".concat(t," ").concat(s.staticClass||"").trim();var a=s.attrs;if(a){s.attrs={};var r=Object.keys(a).filter((function(t){if("slot"===t)return!1;var e=a[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}));r.length&&(s.staticClass+=" ".concat(r.join(" ")))}return n.id&&(s.domProps=s.domProps||{},s.domProps.id=n.id),e(n.tag,s,o)}})}var Ot=St("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var i,n=e.props,s=e.data,o=e.children,a=s.attrs;return a&&(s.attrs={},i=Object.keys(a).filter((function(t){if("slot"===t)return!1;var e=a[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}))),n.id&&(s.domProps=s.domProps||{},s.domProps.id=n.id),t(n.tag,Object(T["a"])(s,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(i||[])}),o)}}),yt=i("132d"),xt=i("8860"),wt=i("da13"),kt=(i("bd0c"),et["a"].extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles:function(){var t=this.$vuetify.application,e=t.bar,i=t.top,n=t.right,s=t.footer,o=t.insetFooter,a=t.bottom,r=t.left;return{paddingTop:"".concat(i+e,"px"),paddingRight:"".concat(n,"px"),paddingBottom:"".concat(s+o+a,"px"),paddingLeft:"".concat(r,"px")}}},render:function(t){var e={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,e,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}})),Ct=(i("a630"),i("c975"),i("2532"),i("2909")),_t=(i("ee6f"),i("480e")),Tt=i("4ad4"),jt=i("16b7"),At=i("b848"),Bt=i("75eb"),$t=i("21be"),It=Object(w["a"])($t["a"],K["a"],Tt["a"]),Lt=It.extend().extend({name:"menuable",props:{allowOverflow:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[Number,String],default:"auto"},minWidth:[Number,String],nudgeBottom:{type:[Number,String],default:0},nudgeLeft:{type:[Number,String],default:0},nudgeRight:{type:[Number,String],default:0},nudgeTop:{type:[Number,String],default:0},nudgeWidth:{type:[Number,String],default:0},offsetOverflow:Boolean,openOnClick:Boolean,positionX:{type:Number,default:null},positionY:{type:Number,default:null},zIndex:{type:[Number,String],default:null}},data:function(){return{absoluteX:0,absoluteY:0,activatedBy:null,activatorFixed:!1,dimensions:{activator:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0,offsetLeft:0},content:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0}},hasJustFocused:!1,hasWindow:!1,inputActivator:!1,isContentActive:!1,pageWidth:0,pageYOffset:0,stackClass:"v-menu__content--active",stackMinZIndex:6}},computed:{computedLeft:function(){var t=this.dimensions.activator,e=this.dimensions.content,i=(!1!==this.attach?t.offsetLeft:t.left)||0,n=Math.max(t.width,e.width),s=0;if(s+=this.left?i-(n-t.width):i,this.offsetX){var o=isNaN(Number(this.maxWidth))?t.width:Math.min(t.width,Number(this.maxWidth));s+=this.left?-o:t.width}return this.nudgeLeft&&(s-=parseInt(this.nudgeLeft)),this.nudgeRight&&(s+=parseInt(this.nudgeRight)),s},computedTop:function(){var t=this.dimensions.activator,e=this.dimensions.content,i=0;return this.top&&(i+=t.height-e.height),!1!==this.attach?i+=t.offsetTop:i+=t.top+this.pageYOffset,this.offsetY&&(i+=this.top?-t.height:t.height),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),i},hasActivator:function(){return!!this.$slots.activator||!!this.$scopedSlots.activator||!!this.activator||!!this.inputActivator}},watch:{disabled:function(t){t&&this.callDeactivate()},isActive:function(t){this.disabled||(t?this.callActivate():this.callDeactivate())},positionX:"updateDimensions",positionY:"updateDimensions"},beforeMount:function(){this.hasWindow="undefined"!==typeof window},methods:{absolutePosition:function(){return{offsetTop:0,offsetLeft:0,scrollHeight:0,top:this.positionY||this.absoluteY,bottom:this.positionY||this.absoluteY,left:this.positionX||this.absoluteX,right:this.positionX||this.absoluteX,height:0,width:0}},activate:function(){},calcLeft:function(t){return Object(Y["f"])(!1!==this.attach?this.computedLeft:this.calcXOverflow(this.computedLeft,t))},calcTop:function(){return Object(Y["f"])(!1!==this.attach?this.computedTop:this.calcYOverflow(this.computedTop))},calcXOverflow:function(t,e){var i=t+e-this.pageWidth+12;return t=(!this.left||this.right)&&i>0?Math.max(t-i,0):Math.max(t,12),t+this.getOffsetLeft()},calcYOverflow:function(t){var e=this.getInnerHeight(),i=this.pageYOffset+e,n=this.dimensions.activator,s=this.dimensions.content.height,o=t+s,a=i<o;return a&&this.offsetOverflow&&n.top>s?t=this.pageYOffset+(n.top-s):a&&!this.allowOverflow?t=i-s-12:t<this.pageYOffset&&!this.allowOverflow&&(t=this.pageYOffset+12),t<12?12:t},callActivate:function(){this.hasWindow&&this.activate()},callDeactivate:function(){this.isContentActive=!1,this.deactivate()},checkForPageYOffset:function(){this.hasWindow&&(this.pageYOffset=this.activatorFixed?0:this.getOffsetTop())},checkActivatorFixed:function(){if(!1===this.attach){var t=this.getActivator();while(t){if("fixed"===window.getComputedStyle(t).position)return void(this.activatorFixed=!0);t=t.offsetParent}this.activatorFixed=!1}},deactivate:function(){},genActivatorListeners:function(){var t=this,e=Tt["a"].options.methods.genActivatorListeners.call(this),i=e.click;return e.click=function(e){t.openOnClick&&i&&i(e),t.absoluteX=e.clientX,t.absoluteY=e.clientY},e},getInnerHeight:function(){return this.hasWindow?window.innerHeight||document.documentElement.clientHeight:0},getOffsetLeft:function(){return this.hasWindow?window.pageXOffset||document.documentElement.scrollLeft:0},getOffsetTop:function(){return this.hasWindow?window.pageYOffset||document.documentElement.scrollTop:0},getRoundedBoundedClientRect:function(t){var e=t.getBoundingClientRect();return{top:Math.round(e.top),left:Math.round(e.left),bottom:Math.round(e.bottom),right:Math.round(e.right),width:Math.round(e.width),height:Math.round(e.height)}},measure:function(t){if(!t||!this.hasWindow)return null;var e=this.getRoundedBoundedClientRect(t);if(!1!==this.attach){var i=window.getComputedStyle(t);e.left=parseInt(i.marginLeft),e.top=parseInt(i.marginTop)}return e},sneakPeek:function(t){var e=this;requestAnimationFrame((function(){var i=e.$refs.content;i&&"none"===i.style.display?(i.style.display="inline-block",t(),i.style.display="none"):t()}))},startTransition:function(){var t=this;return new Promise((function(e){return requestAnimationFrame((function(){t.isContentActive=t.hasJustFocused=t.isActive,e()}))}))},updateDimensions:function(){var t=this;this.hasWindow="undefined"!==typeof window,this.checkActivatorFixed(),this.checkForPageYOffset(),this.pageWidth=document.documentElement.clientWidth;var e={activator:Object(o["a"])({},this.dimensions.activator),content:Object(o["a"])({},this.dimensions.content)};if(!this.hasActivator||this.absolute)e.activator=this.absolutePosition();else{var i=this.getActivator();if(!i)return;e.activator=this.measure(i),e.activator.offsetLeft=i.offsetLeft,!1!==this.attach?e.activator.offsetTop=i.offsetTop:e.activator.offsetTop=0}this.sneakPeek((function(){t.$refs.content&&(e.content=t.measure(t.$refs.content)),t.dimensions=e}))}}}),Wt=i("e4d3"),Ht=i("a236"),Et=i("a293"),Rt=i("dc22"),Mt=Object(w["a"])(At["a"],jt["a"],Bt["a"],Lt,Wt["a"],Ht["a"],it["a"],_["a"]),Pt=Mt.extend({name:"v-menu",directives:{ClickOutside:Et["a"],Resize:Rt["a"]},provide:function(){return{isInMenu:!0,theme:this.theme}},props:{auto:Boolean,closeOnClick:{type:Boolean,default:!0},closeOnContentClick:{type:Boolean,default:!0},disabled:Boolean,disableKeys:Boolean,maxHeight:{type:[Number,String],default:"auto"},offsetX:Boolean,offsetY:Boolean,openOnClick:{type:Boolean,default:!0},openOnHover:Boolean,origin:{type:String,default:"top left"},transition:{type:[Boolean,String],default:"v-menu-transition"}},data:function(){return{calculatedTopAuto:0,defaultOffset:8,hasJustFocused:!1,listIndex:-1,resizeTimeout:0,selectedIndex:null,tiles:[]}},computed:{activeTile:function(){return this.tiles[this.listIndex]},calculatedLeft:function(){var t=Math.max(this.dimensions.content.width,parseFloat(this.calculatedMinWidth));return this.auto?Object(Y["f"])(this.calcXOverflow(this.calcLeftAuto(),t))||"0":this.calcLeft(t)||"0"},calculatedMaxHeight:function(){var t=this.auto?"200px":Object(Y["f"])(this.maxHeight);return t||"0"},calculatedMaxWidth:function(){return Object(Y["f"])(this.maxWidth)||"0"},calculatedMinWidth:function(){if(this.minWidth)return Object(Y["f"])(this.minWidth)||"0";var t=Math.min(this.dimensions.activator.width+Number(this.nudgeWidth)+(this.auto?16:0),Math.max(this.pageWidth-24,0)),e=isNaN(parseInt(this.calculatedMaxWidth))?t:parseInt(this.calculatedMaxWidth);return Object(Y["f"])(Math.min(e,t))||"0"},calculatedTop:function(){var t=this.auto?Object(Y["f"])(this.calcYOverflow(this.calculatedTopAuto)):this.calcTop();return t||"0"},hasClickableTiles:function(){return Boolean(this.tiles.find((function(t){return t.tabIndex>-1})))},styles:function(){return{maxHeight:this.calculatedMaxHeight,minWidth:this.calculatedMinWidth,maxWidth:this.calculatedMaxWidth,top:this.calculatedTop,left:this.calculatedLeft,transformOrigin:this.origin,zIndex:this.zIndex||this.activeZIndex}}},watch:{isActive:function(t){t||(this.listIndex=-1)},isContentActive:function(t){this.hasJustFocused=t},listIndex:function(t,e){if(t in this.tiles){var i=this.tiles[t];i.classList.add("v-list-item--highlighted"),this.$refs.content.scrollTop=i.offsetTop-i.clientHeight}e in this.tiles&&this.tiles[e].classList.remove("v-list-item--highlighted")}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(j["e"])("full-width",this)},mounted:function(){this.isActive&&this.callActivate()},methods:{activate:function(){var t=this;this.updateDimensions(),requestAnimationFrame((function(){t.startTransition().then((function(){t.$refs.content&&(t.calculatedTopAuto=t.calcTopAuto(),t.auto&&(t.$refs.content.scrollTop=t.calcScrollPosition()))}))}))},calcScrollPosition:function(){var t=this.$refs.content,e=t.querySelector(".v-list-item--active"),i=t.scrollHeight-t.offsetHeight;return e?Math.min(i,Math.max(0,e.offsetTop-t.offsetHeight/2+e.offsetHeight/2)):t.scrollTop},calcLeftAuto:function(){return parseInt(this.dimensions.activator.left-2*this.defaultOffset)},calcTopAuto:function(){var t=this.$refs.content,e=t.querySelector(".v-list-item--active");if(e||(this.selectedIndex=null),this.offsetY||!e)return this.computedTop;this.selectedIndex=Array.from(this.tiles).indexOf(e);var i=e.offsetTop-this.calcScrollPosition(),n=t.querySelector(".v-list-item").offsetTop;return this.computedTop-i-n-1},changeListIndex:function(t){if(this.getTiles(),this.isActive&&this.hasClickableTiles)if(t.keyCode!==Y["q"].tab){if(t.keyCode===Y["q"].down)this.nextTile();else if(t.keyCode===Y["q"].up)this.prevTile();else if(t.keyCode===Y["q"].end)this.lastTile();else if(t.keyCode===Y["q"].home)this.firstTile();else{if(t.keyCode!==Y["q"].enter||-1===this.listIndex)return;this.tiles[this.listIndex].click()}t.preventDefault()}else this.isActive=!1},closeConditional:function(t){var e=t.target;return this.isActive&&!this._isDestroyed&&this.closeOnClick&&!this.$refs.content.contains(e)},genActivatorAttributes:function(){var t=Tt["a"].options.methods.genActivatorAttributes.call(this);return this.activeTile&&this.activeTile.id?Object(o["a"])(Object(o["a"])({},t),{},{"aria-activedescendant":this.activeTile.id}):t},genActivatorListeners:function(){var t=Lt.options.methods.genActivatorListeners.call(this);return this.disableKeys||(t.keydown=this.onKeyDown),t},genTransition:function(){var t=this.genContent();return this.transition?this.$createElement("transition",{props:{name:this.transition}},[t]):t},genDirectives:function(){var t=this,e=[{name:"show",value:this.isContentActive}];return!this.openOnHover&&this.closeOnClick&&e.push({name:"click-outside",value:{handler:function(){t.isActive=!1},closeConditional:this.closeConditional,include:function(){return[t.$el].concat(Object(Ct["a"])(t.getOpenDependentElements()))}}}),e},genContent:function(){var t=this,e={attrs:Object(o["a"])(Object(o["a"])({},this.getScopeIdAttrs()),{},{role:"role"in this.$attrs?this.$attrs.role:"menu"}),staticClass:"v-menu__content",class:Object(o["a"])(Object(o["a"])(Object(o["a"])({},this.rootThemeClasses),this.roundedClasses),{},Object(ht["a"])({"v-menu__content--auto":this.auto,"v-menu__content--fixed":this.activatorFixed,menuable__content__active:this.isActive},this.contentClass.trim(),!0)),style:this.styles,directives:this.genDirectives(),ref:"content",on:{click:function(e){var i=e.target;i.getAttribute("disabled")||t.closeOnContentClick&&(t.isActive=!1)},keydown:this.onKeyDown}};return this.$listeners.scroll&&(e.on=e.on||{},e.on.scroll=this.$listeners.scroll),!this.disabled&&this.openOnHover&&(e.on=e.on||{},e.on.mouseenter=this.mouseEnterHandler),this.openOnHover&&(e.on=e.on||{},e.on.mouseleave=this.mouseLeaveHandler),this.$createElement("div",e,this.getContentSlot())},getTiles:function(){this.$refs.content&&(this.tiles=Array.from(this.$refs.content.querySelectorAll(".v-list-item")))},mouseEnterHandler:function(){var t=this;this.runDelay("open",(function(){t.hasJustFocused||(t.hasJustFocused=!0)}))},mouseLeaveHandler:function(t){var e=this;this.runDelay("close",(function(){e.$refs.content.contains(t.relatedTarget)||requestAnimationFrame((function(){e.isActive=!1,e.callDeactivate()}))}))},nextTile:function(){var t=this.tiles[this.listIndex+1];if(!t){if(!this.tiles.length)return;return this.listIndex=-1,void this.nextTile()}this.listIndex++,-1===t.tabIndex&&this.nextTile()},prevTile:function(){var t=this.tiles[this.listIndex-1];if(!t){if(!this.tiles.length)return;return this.listIndex=this.tiles.length,void this.prevTile()}this.listIndex--,-1===t.tabIndex&&this.prevTile()},lastTile:function(){var t=this.tiles[this.tiles.length-1];t&&(this.listIndex=this.tiles.length-1,-1===t.tabIndex&&this.prevTile())},firstTile:function(){var t=this.tiles[0];t&&(this.listIndex=0,-1===t.tabIndex&&this.nextTile())},onKeyDown:function(t){var e=this;if(t.keyCode===Y["q"].esc){setTimeout((function(){e.isActive=!1}));var i=this.getActivator();this.$nextTick((function(){return i&&i.focus()}))}else!this.isActive&&[Y["q"].up,Y["q"].down].includes(t.keyCode)&&(this.isActive=!0);this.$nextTick((function(){return e.changeListIndex(t)}))},onResize:function(){this.isActive&&(this.$refs.content.offsetWidth,this.updateDimensions(),clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.updateDimensions,100))}},render:function(t){var e=this,i={staticClass:"v-menu",class:{"v-menu--attached":""===this.attach||!0===this.attach||"attach"===this.attach},directives:[{arg:"500",name:"resize",value:this.onResize}]};return t("div",i,[!this.activator&&this.genActivator(),this.showLazyContent((function(){return[e.$createElement(_t["a"],{props:{root:!0,light:e.light,dark:e.dark}},[e.genTransition()])]}))])}}),zt=i("2fa4"),Nt=Object(f["a"])(D,n,s,!1,null,"2b5c56a2",null);e["default"]=Nt.exports;v()(Nt,{VAppBar:st,VAppBarTitle:ct,VBtn:lt["a"],VCol:bt,VContainer:Ot,VIcon:yt["a"],VList:xt["a"],VListItem:wt["a"],VMain:kt,VMenu:Pt,VRow:I["a"],VSpacer:zt["a"]})},"36a7":function(t,e,i){},"4f4b":function(t,e,i){},"5e23":function(t,e,i){},"679a":function(t,e,i){"use strict";i("4f4b")},"8b0d":function(t,e,i){},"8efc":function(t,e,i){},bb94:function(t,e,i){},bd0c:function(t,e,i){},cf1b:function(t,e,i){},d09e:function(t,e,i){"use strict";i("d294")},d294:function(t,e,i){},e68a:function(t,e,i){"use strict";i("cf1b")},ee6f:function(t,e,i){}}]);