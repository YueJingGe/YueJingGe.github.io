webpackJsonp([0],[,,,,function(t,e,a){a(63);var n=a(0)(a(38),a(91),"data-v-ee3eb63c",null);t.exports=n.exports},,,,,,function(t,e,a){"use strict";var n=a(2),s=new n.a;e.a=s},,,function(t,e,a){"use strict";var n=a(2),s=a(93),o=a(77),r=a.n(o),i=a(75),c=a.n(i),u=a(76),l=a.n(u),f=a(78),d=a.n(f);n.a.use(s.a),e.a=new s.a({routes:[{path:"/",component:r.a},{path:"/category",component:c.a},{path:"/category/:game/:id",component:l.a},{path:"/user",component:d.a}]})},function(t,e,a){"use strict";function n(t){var e=parseInt(t);if(e<1e4)return e;var e=e/1e4;return(e=e.toFixed(2))+"万"}a.d(e,"a",function(){return n})},function(t,e,a){a(56);var n=a(0)(a(33),a(84),"data-v-6166214c",null);t.exports=n.exports},,,,,,,,,,,,,,,,,,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(73),s=a.n(n),o=a(10);e.default={name:"app",data:function(){return{showMenu:!1,aniType:""}},components:{SideMenu:s.a},mounted:function(){o.a.$on("openMenu",function(){this.showMenu=!0}.bind(this))},watch:{$route:function(t,e){var a=t.path.split("/").length-1,n=e.path.split("/").length-1;this.aniType=a>n?"pageIn":a<n?"pageOut":""}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["cateItem"],methods:{cateClick:function(){location.href="#/category/"+this.cateItem.game_name+"/"+this.cateItem.cate_id}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(67),s=a.n(n);e.default={props:["cateList"],components:{CateItem:s.a}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["roomMsg"],methods:{refresh:function(){window.open(this.roomMsg.url)}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(69),s=a.n(n);e.default={props:["roomMsg","dataState"],components:{CateRoomItem:s.a},methods:{roomScroll:function(t){t.target.scrollTop>=t.target.scrollHeight-t.target.clientHeight-100&&this.$emit("requestMore")}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(10);e.default={methods:{menuClick:function(){n.a.$emit("openMenu")}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["room"],methods:{openLive:function(){window.open(this.room.url)}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(71),s=a.n(n);e.default={props:["rooms","dataState"],components:{RoomItem:s.a},methods:{listScroll:function(t){t.target.scrollHeight-t.target.clientHeight-100<=t.target.scrollTop&&this.$emit("requestMore")}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{closeClick:function(){this.$emit("close")}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{goback:function(){history.back()}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(68),s=a.n(n);e.default={data:function(){return{cateList:[]}},components:{CateList:s.a},mounted:function(){this.requestCate()},methods:{requestCate:function(){var t=this;this.$ajax.get("/douyu/api/RoomApi/game").then(function(e){t.cateList=e.data.data})}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(74),s=a.n(n),o=a(70),r=a.n(o);e.default={data:function(){return{roomMsg:[],dataState:"normal"}},components:{SubNavbar:s.a,CateRoomList:r.a},mounted:function(){this.requestRoomMsg()},methods:{requestRoomMsg:function(){var t=this;if("loading"!=this.dataState){this.dataState="loading";var e="/douyu/api/RoomApi/live/"+this.$route.params.id;this.$ajax.get(e,{params:{offset:Math.floor(this.roomMsg.length/30)}}).then(function(e){t.roomMsg=t.roomMsg.concat(e.data.data),t.dataState="success"},function(){this.dataState="fail"})}}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(72),s=a.n(n);e.default={data:function(){return{list:[],dataState:"normal"}},components:{RoomList:s.a},mounted:function(){this.requestList()},methods:{requestList:function(){var t=this;"loading"!=this.dataState&&(this.dataState="loading",this.$ajax.get("/douyu/api/RoomApi/live",{params:{offset:Math.floor(this.list.length/30)}}).then(function(e){t.list=t.list.concat(e.data.data),t.dataState="success"},function(){t.dataState="fail"}))}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(4),s=a.n(n);e.default={components:{Navbar:s.a}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(2),s=a(15),o=a.n(s),r=a(13),i=a(4),c=a.n(i),u=a(12),l=a.n(u),f=a(14);n.a.config.productionTip=!1,n.a.component("Navbar",c.a),n.a.prototype.$ajax=l.a,n.a.filter("numFormat",f.a),new n.a({el:"#app",router:r.a,template:"<App/>",components:{App:o.a}});var d=document.documentElement.clientWidth;document.documentElement.style.fontSize=d/32+"px",window.onresize=function(){var t=document.documentElement.clientWidth;document.documentElement.style.fontSize=t/32+"px"}},,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e,a){a(53);var n=a(0)(a(34),a(81),"data-v-5ccf4454",null);t.exports=n.exports},function(t,e,a){a(57);var n=a(0)(a(35),a(85),"data-v-66d4bc5f",null);t.exports=n.exports},function(t,e,a){a(58);var n=a(0)(a(36),a(86),"data-v-77ffe1cf",null);t.exports=n.exports},function(t,e,a){a(64);var n=a(0)(a(37),a(92),"data-v-fbf54c4c",null);t.exports=n.exports},function(t,e,a){a(54);var n=a(0)(a(39),a(82),"data-v-5d240440",null);t.exports=n.exports},function(t,e,a){a(51);var n=a(0)(a(40),a(79),"data-v-4919142a",null);t.exports=n.exports},function(t,e,a){a(55);var n=a(0)(a(41),a(83),"data-v-5f689ab0",null);t.exports=n.exports},function(t,e,a){a(52);var n=a(0)(a(42),a(80),"data-v-5b1a508e",null);t.exports=n.exports},function(t,e,a){a(62);var n=a(0)(a(43),a(90),null,null);t.exports=n.exports},function(t,e,a){a(60);var n=a(0)(a(44),a(88),"data-v-85258f16",null);t.exports=n.exports},function(t,e,a){a(61);var n=a(0)(a(45),a(89),"data-v-93f43bd0",null);t.exports=n.exports},function(t,e,a){a(59);var n=a(0)(a(46),a(87),"data-v-79c2f9f8",null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"root",on:{scroll:t.listScroll}},["loading"==t.dataState?a("p",{staticStyle:{"text-align":"center"}},[a("span",{staticClass:"fa fa-refresh fa-spin fa-3x"})]):t._e(),t._v(" "),"fail"==t.dataState?a("p",[t._v("\n        网络出问题了\n    ")]):t._e(),t._v(" "),a("div",{staticClass:"list"},t._l(t.rooms,function(t,e){return a("RoomItem",{key:e,attrs:{room:t}})})),t._v(" "),t.rooms.length>0?a("p",[a("span",{staticClass:"fa fa-spinner fa-spin fa-3x"})]):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"root"},[a("span",{staticClass:"fa fa-arrow-left back-btn",on:{click:t.goback}}),t._v(" "),a("span",{staticClass:"title"},[t._t("default")],2),t._v(" "),a("span",{staticClass:"fa fa-user-o user-btn"})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"root"},[a("div",{staticClass:"cate-item",on:{click:t.cateClick}},[a("img",{attrs:{src:t.cateItem.game_icon,alt:""}}),t._v(" "),a("h6",[t._v(t._s(t.cateItem.game_name))])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"root",on:{click:t.openLive}},[a("img",{attrs:{src:t.room.room_src,alt:""}}),t._v(" "),a("h6",[a("span",{staticClass:"fa fa-desktop"}),t._v(" "+t._s(t.room.room_name))]),t._v(" "),a("span",{staticClass:"nickname"},[t._v(t._s(t.room.nickname))]),t._v(" "),a("span",{staticClass:"online fa fa-user"},[t._v(" "+t._s(t._f("numFormat")(t.room.online)))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"root",on:{click:t.closeClick}},[a("div",{staticClass:"header"}),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"menu"},[a("ul",[a("li",[a("router-link",{staticClass:"clear-fix",attrs:{to:"/"}},[a("span",[t._v("首页")]),t._v(" "),a("span",{staticClass:"fa fa-angle-right fa-2x"})])],1),t._v(" "),a("li",[a("router-link",{staticClass:"clear-fix",attrs:{to:"/category"}},[a("span",[t._v("全部分类")]),t._v(" "),a("span",{staticClass:"fa fa-angle-right  fa-2x"})])],1),t._v(" "),a("li",[a("router-link",{staticClass:"clear-fix",attrs:{to:""}},[a("span",[t._v("推荐")]),t._v(" "),a("span",{staticClass:"fa fa-angle-right fa-2x"})])],1),t._v(" "),a("li",[a("router-link",{staticClass:"clear-fix",attrs:{to:"/user"}},[a("span",[t._v("个人中心")]),t._v(" "),a("span",{staticClass:"fa fa-angle-right fa-2x"})])],1)])]),t._v(" "),a("div",{staticClass:"blank-box"})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("transition",{attrs:{name:"slideLeft"}},[a("SideMenu",{directives:[{name:"show",rawName:"v-show",value:t.showMenu,expression:"showMenu"}],on:{close:function(e){t.showMenu=!1}}})],1),t._v(" "),a("transition",{attrs:{name:t.aniType}},[a("router-view")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"root"},t._l(t.cateList,function(t,e){return a("CateItem",{key:e,attrs:{cateItem:t}})}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main",on:{click:t.refresh}},[a("img",{attrs:{src:t.roomMsg.room_src,alt:""}}),t._v(" "),a("div",{staticClass:"room-detial"},[a("p",{attrs:{calss:"room-name"}},[t._v(t._s(t.roomMsg.room_name))]),t._v(" "),a("p",[a("span",{staticClass:"fa fa-user"}),t._v(" "+t._s(t.roomMsg.nickname))]),t._v(" "),a("p",[a("span",{staticClass:"fa fa-eye"}),t._v(" "+t._s(t._f("numFormat")(t.roomMsg.online)))])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Navbar",[t._v("个人中心")])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"root"},[a("SubNavbar",[t._v(t._s(t.$route.params.game))]),t._v(" "),a("CateRoomList",{attrs:{roomMsg:t.roomMsg,dataState:t.dataState},on:{requestMore:t.requestRoomMsg}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Navbar",[t._v("首页")]),t._v(" "),a("RoomList",{attrs:{rooms:t.list,dataState:t.dataState},on:{requestMore:t.requestList}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Navbar",[t._v("全部分类")]),t._v(" "),a("CateList",{attrs:{cateList:t.cateList}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"root"},[a("span",{staticClass:"fa fa-align-justify menu-btn",on:{click:t.menuClick}}),t._v(" "),a("span",{staticClass:"title"},[t._t("default")],2),t._v(" "),a("span",{staticClass:"fa fa-user-o user-btn"})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"root",on:{scroll:t.roomScroll}},["loading"==t.dataState?a("p",{staticStyle:{"text-align":"center"}},[a("span",{staticClass:"fa fa-refresh fa-spin fa-3x"})]):t._e(),t._v(" "),"fail"==t.dataState?a("p",[t._v("\n        网络出问题了\n    ")]):t._e(),t._v(" "),t._l(t.roomMsg,function(t,e){return a("CateRoomItem",{key:e,attrs:{roomMsg:t}})}),t._v(" "),t.roomMsg.length>0?a("p",[a("span",{staticClass:"fa fa-spinner fa-spin fa-3x"})]):t._e()],2)},staticRenderFns:[]}}],[47]);
//# sourceMappingURL=app.641ac617e7b7c7f2f616.js.map