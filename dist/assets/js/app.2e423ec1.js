(function(t){function e(e){for(var o,s,a=e[0],c=e[1],l=e[2],d=0,h=[];d<a.length;d++)s=a[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&h.push(n[s][0]),n[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(h.length)h.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],o=!0,a=1;a<r.length;a++){var c=r[a];0!==n[c]&&(o=!1)}o&&(i.splice(e--,1),t=s(s.s=r[0]))}return t}var o={},n={app:0},i=[];function s(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=o,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(r,o,function(e){return t[e]}.bind(null,o));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=c;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0025":function(t,e,r){},1935:function(t,e,r){"use strict";r("e806")},"30db":function(t,e,r){"use strict";r("0025")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:["wrapper",t.darkMode?"dark":""]},[r("span",{class:["theme-btn",t.darkMode?"active":""],on:{click:function(e){return t.$store.dispatch("setDarkMode")}}}),r("div",{staticClass:"wrapper-content"},[r("section",[r("div",{staticClass:"container"},[r("NewNote"),r("div",{staticClass:"note-header"},[r("h1",[t._v(t._s(t.title))]),r("Search"),r("div",{staticClass:"icons"},[r("svg",{class:{grid:!t.grid},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},on:{click:function(e){return t.$store.dispatch("setGrid")}}},[r("rect",{attrs:{x:"3",y:"3",width:"7",height:"7"}}),r("rect",{attrs:{x:"14",y:"3",width:"7",height:"7"}}),r("rect",{attrs:{x:"14",y:"14",width:"7",height:"7"}}),r("rect",{attrs:{x:"3",y:"14",width:"7",height:"7"}})]),r("svg",{class:{grid:t.grid},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},on:{click:function(e){return t.$store.dispatch("setGrid")}}},[r("line",{attrs:{x1:"8",y1:"6",x2:"21",y2:"6"}}),r("line",{attrs:{x1:"8",y1:"12",x2:"21",y2:"12"}}),r("line",{attrs:{x1:"8",y1:"18",x2:"21",y2:"18"}}),r("line",{attrs:{x1:"3",y1:"6",x2:"3",y2:"6"}}),r("line",{attrs:{x1:"3",y1:"12",x2:"3",y2:"12"}}),r("line",{attrs:{x1:"3",y1:"18",x2:"3",y2:"18"}})])])],1),r("Notes",{attrs:{notes:t.notesFilter}}),r("Modal",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}]})],1)])])])},i=[],s=(r("498a"),r("4de4"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"new-note"},[t.message?r("p",{staticClass:"error__message"},[t._v(t._s(t.message))]):t._e(),r("label",[t._v(" Title ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),r("label",[t._v(" Description ")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.descr,expression:"descr"}],domProps:{value:t.descr},on:{input:function(e){e.target.composing||(t.descr=e.target.value)}}}),r("p",{staticStyle:{"margin-top":"20px"}},[t._v("Приоритет")]),r("div",{staticClass:"priority"},t._l(t.priority,(function(e,o){return r("label",{key:o},[r("input",{attrs:{type:"radio",name:"priority"},domProps:{value:e.value,checked:e.checked},on:{click:function(e){return t.changePriority(o)}}}),r("span",[t._v(t._s(e.title))])])})),0),r("button",{staticClass:"btn btnPrimary",on:{click:t.addNote}},[t._v("new note")])])}),a=[],c=(r("7db0"),{props:{},data:function(){return{priority:this.$store.getters.getPriority,title:"",descr:"",message:null}},created:function(){},methods:{changePriority:function(t){this.$store.dispatch("changePriority",t)},addNote:function(){if(""!==this.title&&""!==this.descr){var t=this.priority.find((function(t){return 1==t.checked})).value,e={title:this.title,descr:this.descr,date:new Date(Date.now()).toLocaleString(),priority:t};this.$store.dispatch("pushNote",e),this.title="",this.descr="",this.changePriority(0),this.message=null}else this.message="Все поля должны быть заполнены"}}}),l=c,u=(r("72c7"),r("2877")),d=Object(u["a"])(l,s,a,!1,null,null,null),h=d.exports,p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"notes"},t._l(t.notes,(function(e,o){return r("div",{key:o,class:["note",e.priority,t.grid?"full":""],on:{click:function(e){return t.sendObj(o)}}},[r("div",{staticClass:"note-header"},[r("p",{staticClass:"note-title"},[t._v(t._s(e.title))]),r("p",{staticClass:"note-remove",staticStyle:{cursor:"pointer"},on:{click:function(e){return e.stopPropagation(),t.removeNote(o)}}},[t._v("X")])]),r("div",{staticClass:"note-body"},[r("p",[t._v(t._s(e.descr))]),r("span",[t._v(t._s(e.date))])])])})),0)},f=[],m={props:{notes:{type:Array,required:!0}},computed:{grid:function(){return this.$store.getters.getGrid}},methods:{removeNote:function(t){var e=this.notes[t];this.$store.dispatch("removeNote",e)},sendObj:function(t){var e={title:this.notes[t].title,descr:this.notes[t].descr,priority:this.notes[t].priority};this.$store.dispatch("setModalObj",e),this.$store.dispatch("setModal"),this.$store.dispatch("updateCurrentItem",e)}}},v=m,g=(r("1935"),Object(u["a"])(v,p,f,!1,null,null,null)),y=g.exports,w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper__search"},[r("div",{staticClass:"search"},[r("div",{staticClass:"search-icon"},[r("svg",{staticClass:"feather feather-search",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[r("circle",{attrs:{cx:"11",cy:"11",r:"8"}}),r("line",{attrs:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}})])])]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text"},domProps:{value:t.search},on:{input:[function(e){e.target.composing||(t.search=e.target.value)},t.searchMethod]}})])},b=[],_=(r("ac1f"),r("841c"),{props:{},data:function(){return{search:""}},methods:{searchMethod:function(){this.$store.dispatch("setSearch",this.search)}}}),k=_,x=(r("6218"),Object(u["a"])(k,w,b,!1,null,"61bceb67",null)),M=x.exports,N=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition",{attrs:{name:"show"}},[r("div",{staticClass:"modal",on:{click:function(e){return t.$store.dispatch("setModal")}}},[r("div",{staticClass:"modal__content",on:{click:function(t){t.stopPropagation()}}},[r("span",{staticClass:"modal__close",on:{click:function(e){return t.$store.dispatch("setModal")}}},[t._v("X")]),r("form",{staticClass:"modal__form",on:{submit:function(e){return e.preventDefault(),t.changeNote.apply(null,arguments)}}},[r("label",[t._v(" Title ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",required:""},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),r("label",[t._v(" Description ")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.descr,expression:"descr"}],attrs:{required:""},domProps:{value:t.descr},on:{input:function(e){e.target.composing||(t.descr=e.target.value)}}}),r("button",{staticClass:"btn btnPrimary"},[t._v(" change note ")])])])])])},$=[],j={computed:{title:{get:function(){return this.$store.getters.getModalObj.title},set:function(t){this.$store.dispatch("setModalObj",{title:t})}},descr:{get:function(){return this.$store.getters.getModalObj.descr},set:function(t){this.$store.dispatch("setModalObj",{descr:t})}},getModalObj:function(){return this.$store.getters.getModalObj},getCurrentItem:function(){return this.$store.getters.getCurrentItem}},methods:{changeNote:function(){var t={title:this.title,descr:this.descr,date:new Date(Date.now()).toLocaleString()};this.$store.dispatch("updateNote",t),this.$store.dispatch("setModal")}}},C=j,O=(r("30db"),Object(u["a"])(C,N,$,!1,null,null,null)),P=O.exports,S={components:{NewNote:h,Notes:y,Search:M,Modal:P},computed:{title:function(){return this.$store.getters.getTitle},notesFilter:function(){var t=this.$store.getters.getNotes,e=this.$store.getters.getSearch;if(!e)return t;e=e.trim().toLowerCase();var r=t.filter((function(t){if(-1!=t.title.toLocaleString().indexOf(e))return t}));return r},grid:function(){return this.$store.getters.getGrid},showModal:function(){return this.$store.getters.getModal},darkMode:function(){return this.$store.getters.getDarkMode}},watch:{},methods:{}},D=S,G=(r("5c0b"),Object(u["a"])(D,n,i,!1,null,null,null)),I=G.exports,E=(r("c1c3"),r("2f62")),T=(r("159b"),r("a434"),{state:{title:"Notes App",search:"",showModal:!1,showGrid:!1,darkMode:!1,modalObj:{title:"",descr:""},currentItem:0,notes:[{title:"first note",descr:"description for First note",date:new Date(Date.now()).toLocaleString(),priority:"simple"},{title:"second note",descr:"description for Second note",date:new Date(Date.now()).toLocaleString(),priority:"medium"},{title:"third note",descr:"description for Third note",date:new Date(Date.now()).toLocaleString(),priority:"hard"}],priority:[{value:"simple",title:"Обычный",checked:!0},{value:"medium",title:"Средний",checked:!1},{value:"hard",title:"Высокий",checked:!1}]},mutations:{changePriority:function(t,e){t.priority.forEach((function(t){t.checked=!1})),t.priority[e].checked=!0},pushNote:function(t,e){t.notes.push(e)},removeNote:function(t,e){t.notes.forEach((function(r,o){r.title==e.title&&r.descr==e.descr&&r.date==e.date&&r.priority==e.priority&&t.notes.splice(o,1)}))},updateNote:function(t,e){for(var r in e)t.notes[t.currentItem][r]=e[r]},updateCurrentItem:function(t,e){t.notes.forEach((function(r,o){r.title==e.title&&r.descr==e.descr&&r.priority==e.priority&&(t.currentItem=o)}))},setSearch:function(t,e){t.search=e},setGrid:function(t){t.showGrid=!t.showGrid},setModal:function(t){t.showModal=!t.showModal},setModalObj:function(t,e){for(var r in e)t.modalObj[r]=e[r]},setDarkMode:function(t){t.darkMode=!t.darkMode}},actions:{changePriority:function(t,e){var r=t.commit;r("changePriority",e)},pushNote:function(t,e){var r=t.commit;r("pushNote",e)},removeNote:function(t,e){var r=t.commit;r("removeNote",e)},setSearch:function(t,e){var r=t.commit;r("setSearch",e)},setGrid:function(t){var e=t.commit;e("setGrid")},setModal:function(t){var e=t.commit;e("setModal")},setModalObj:function(t,e){var r=t.commit;r("setModalObj",e)},updateNote:function(t,e){var r=t.commit;r("updateNote",e)},updateCurrentItem:function(t,e){var r=t.commit;r("updateCurrentItem",e)},setDarkMode:function(t){var e=t.commit;e("setDarkMode")}},getters:{getTitle:function(t){return t.title},getPriority:function(t){return t.priority},getNotes:function(t){return t.notes},getSearch:function(t){return t.search},getGrid:function(t){return t.showGrid},getModal:function(t){return t.showModal},getModalObj:function(t){return t.modalObj},getCurrentNote:function(t){return t.currentItem},getDarkMode:function(t){return t.darkMode}}});o["a"].use(E["a"]);var L=new E["a"].Store({modules:[T]});o["a"].config.productionTip=!1,new o["a"]({store:L,render:function(t){return t(I)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";r("9c0c")},6218:function(t,e,r){"use strict";r("cb93")},"72c7":function(t,e,r){"use strict";r("e5f2")},"9c0c":function(t,e,r){},c1c3:function(t,e,r){},cb93:function(t,e,r){},e5f2:function(t,e,r){},e806:function(t,e,r){}});