(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cb884a12"],{"25c3":function(t,e,s){},"287d":function(t,e,s){},"43d3":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"palyMv",style:{height:t.screenHeight+"px"}},[s("div",{staticClass:"header"},[s("span",{staticClass:"iconfont icon-arrowLeft",on:{click:t.back}}),s("span",{staticClass:"iconfont icon-MV"}),t._m(0)]),s("div",{staticClass:"video"},[s("video",{attrs:{id:"video",autoplay:"",controls:"",preload:"",src:t.mvUrl,height:"230",width:"100%"}}),t._m(1)]),s("div",{staticClass:"icon"},[s("span",{staticClass:"iconfont icon-dianzan1"}),s("br"),s("span",[t._v(t._s(t.likedCount))]),s("br"),s("span",{staticClass:"iconfont icon-pinglun1"}),s("br"),s("span",[t._v(t._s(t.commentCount))]),s("br"),s("span",{staticClass:"iconfont icon-fenxiang2"}),s("br"),s("span",[t._v(t._s(t.shareCount))]),s("br"),t._m(2),s("span",[t._v("收藏")])]),s("div",{staticClass:"info"},[s("div",{staticClass:"auther"},[s("img",{staticClass:"avator",attrs:{src:t.avatarUrl+"?param=100y100",alt:""}}),t._v("  "),s("p",{staticClass:"artistName"},[t._v(t._s(t.mvInfo.artistName))])]),s("br"),s("p",{staticClass:"name"},[t._v(t._s(t.mvInfo.name))]),s("br"),s("span",{staticClass:"count"},[t._v(t._s(t.mvInfo.playCount)+"次观看")])]),s("div",{staticClass:"divider"}),s("div",{staticClass:"footer"},[s("span",{staticClass:"iconfont icon-xin"}),s("p",{staticClass:"name2"},[t._v(t._s(t.mvInfo.name)+"-"+t._s(t.mvInfo.artistName))])])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"right"},[s("span",{staticClass:"iconfont icon-xiaoping"}),s("span",{staticClass:"iconfont icon-liebiao-dian"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"fz"},[s("span",{staticClass:"iconfont icon-fanzhuanpingmu"}),s("br")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"iconfont icon-tianjiashoucang"},[s("br")])}],i=s("1da1"),r=(s("96cf"),s("fd5d")),c=s("ff51"),o=s("08de"),l={data:function(){return{screenHeight:"",avatarUrl:"",mvInfo:[],shareCount:"",commentCount:"",likedCount:"",mvUrl:"",isSend:!1}},mounted:function(){window.onresize=function(){this.screenHeight=window.screen.height},this.mvInfo=this.$store.state.palyMvInfo},methods:{getData:function(){this.getUserAvatar(),this.getMVInfoData(),this.getMVUrlData()},back:function(){this.$store.state.showPlayMv=!1,this.$bus.$emit("closeModle"),this.isSend=!0,this.$store.state.showControlBar=!0},getUserAvatar:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var s,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(o["a"])(t.mvInfo.id);case 3:s=e.sent,n=s.data,t.avatarUrl=n.profile.avatarUrl,e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log("用户头像请求失败，已启用默认头像"),t.avatarUrl="https://img0.baidu.com/it/u=797324285,1943411797&fm=26&fmt=auto&gp=0.jpg";case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()},getMVInfoData:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(r["a"])(t.mvInfo.id);case 2:s=e.sent,t.likedCount=Object(c["b"])(s.data.likedCount),t.commentCount=Object(c["b"])(s.data.commentCount),t.shareCount=Object(c["b"])(s.data.shareCount);case 6:case"end":return e.stop()}}),e)})))()},getMVUrlData:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(r["c"])(t.mvInfo.id);case 2:s=e.sent,t.mvUrl=s.data.data.url;case 4:case"end":return e.stop()}}),e)})))()}},beforeDestroy:function(){},computed:{isPlayMv:function(){return this.$store.state.showPlayMv}},watch:{isPlayMv:function(){if(this.mvInfo=this.$store.state.palyMvInfo,!this.$store.state.showPlayMv){var t=document.querySelector("#video");t.pause()}}}},u=l,d=(s("fb13"),s("2877")),f=Object(d["a"])(u,n,a,!1,null,"3c4719a4",null);e["a"]=f.exports},"72e4":function(t,e,s){"use strict";s("bb5d")},"7fae":function(t,e,s){},"89c7":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"search"},[s("van-search",{attrs:{shape:"round",placeholder:"请输入搜索关键词"},on:{click:t.toSearch}}),s("span",{staticClass:"iconfont icon-yuyin"})],1),s("banner"),s("div",{staticClass:"nvabar",on:{click:t.nvaClick}},[s("div",{staticClass:"item"},[t._m(0),s("span",{staticClass:"titel"},[t._v("每日推荐")]),s("span",{staticClass:"day"},[t._v(t._s(t.day))])]),t._m(1),t._m(2),t._m(3),t._m(4)]),s("recommend",{staticClass:"recommend"}),s("newSongs"),s("MV"),s("hotSinger")],1)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"icon"},[s("i",{staticClass:"iconfont icon-a-rili"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"item"},[s("div",{staticClass:"icon"},[s("i",{staticClass:"iconfont icon-diantai"})]),s("span",{staticClass:"titel"},[t._v("私人FM")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"item"},[s("div",{staticClass:"icon"},[s("i",{staticClass:"iconfont icon-gedan"})]),s("span",{staticClass:"titel"},[t._v("歌单")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"item"},[s("div",{staticClass:"icon"},[s("i",{staticClass:"iconfont icon-paixingban"})]),s("span",{staticClass:"titel"},[t._v("排行榜")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"item"},[s("div",{staticClass:"icon"},[s("i",{staticClass:"iconfont icon-zhibobofangshexiangjitianxianmianxing"})]),s("span",{staticClass:"titel"},[t._v("直播")])])}],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"banner"},[s("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:3e3,"indicator-color":"white"}},t._l(t.imgList,(function(e,n){return s("van-swipe-item",{key:n},[s("van-image",{attrs:{src:e.pic}}),s("div",{staticClass:"typeTitle",style:{background:"blue"===e.titleColor?"#326ef8":e.titleColor}},[s("span",[t._v(t._s(e.typeTitle))])])],1)})),1)],1)},r=[],c=s("1da1"),o=(s("96cf"),s("8b77")),l={data:function(){return{imgList:[]}},created:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var s,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(s=JSON.parse(localStorage.getItem("imgList")),!s){e.next=5;break}t.imgList=s,e.next=10;break;case 5:return e.next=7,Object(o["a"])(1);case 7:n=e.sent,t.imgList=n.data.banners,localStorage.setItem("imgList",JSON.stringify(t.imgList));case 10:case"end":return e.stop()}}),e)})))()}},u=l,d=(s("dc67"),s("2877")),f=Object(d["a"])(u,i,r,!1,null,null,null),v=f.exports,m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"recommend"},[s("div",{staticClass:"title"},[s("span",{staticClass:"text"},[t._v("推荐歌单")]),s("van-button",{attrs:{round:"",type:"default"},on:{click:t.toMore}},[t._v("更多 >")])],1),s("div",{staticClass:"content"},t._l(t.recommendList,(function(e){return s("div",{key:e.id,staticClass:"item",on:{click:function(s){return t.toPlayListDetail(e.id)}}},[s("img",{attrs:{src:e.picUrl+"?param=150y150"}}),s("br"),s("span",{staticClass:"text"},[t._v(t._s(e.name1))]),s("br"),s("span",{staticClass:"text"},[t._v(t._s(e.name2))]),s("span",{staticClass:"iconfont icon-caret-right"},[t._v(t._s(e.playCount))])])})),0)])},h=[],p=s("b85c"),b=(s("b0c0"),s("ff51")),g={data:function(){return{recommendList:[]}},mounted:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var s,n,a,i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(s=JSON.parse(localStorage.getItem("recommendList")),!s){e.next=5;break}t.recommendList=s,e.next=11;break;case 5:return e.next=7,Object(o["e"])(10);case 7:n=e.sent,a=Object(p["a"])(n.data.result);try{for(a.s();!(i=a.n()).done;)r=i.value,t.recommendList.push({id:r.id,name1:r.name.substr(0,8),name2:r.name.substr(9,r.name.length),picUrl:r.picUrl,playCount:Object(b["b"])(r.playCount)})}catch(c){a.e(c)}finally{a.f()}localStorage.setItem("recommendList",JSON.stringify(t.recommendList));case 11:case"end":return e.stop()}}),e)})))()},methods:{toMore:function(){this.$router.push("/discover/recommendMore")},toPlayListDetail:function(t){this.$router.push({path:"/recommendMore/playListDetail",query:{id:t}})}}},C=g,y=(s("72e4"),Object(d["a"])(C,m,h,!1,null,"65094cd2",null)),_=y.exports,w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"newSongs"},[s("div",{staticClass:"title"},[s("span",{staticClass:"text"},[t._v("新歌速递")]),s("van-button",{attrs:{round:"",type:"default"},on:{click:t.toMore}},[t._v("更多 >")])],1),s("van-swipe",{attrs:{loop:!1,"show-indicators":!1,width:300}},t._l(3,(function(e,n){return s("van-swipe-item",{key:e},[s("el-card",{staticClass:"box-card"},t._l(t.newSongs[n],(function(e,a){return s("div",{key:e.id,staticClass:"items"},[s("div",{staticClass:"left",on:{click:function(s){return t.playThis(e.id,n,a)}}},[s("img",{attrs:{src:e.picUrl+"?param=100y100"}}),s("div",{staticClass:"name"},[s("p",[t._v(t._s(e.name))]),s("p",[t._v(t._s(e.artists))])])])])})),0)],1)})),1)],1)},S=[],$=(s("fb6a"),{data:function(){return{newSongsList:[],hasClcikMusicId:""}},created:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var s,n,a,i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(s=JSON.parse(localStorage.getItem("newSongsList")),!s){e.next=5;break}t.newSongsList=s,e.next=11;break;case 5:return e.next=7,Object(o["d"])(0);case 7:n=e.sent,a=Object(p["a"])(n.data.data);try{for(a.s();!(i=a.n()).done;)r=i.value,t.newSongsList.push({id:r.id,name:r.name,artists:r.artists[0].name,picUrl:r.album.picUrl})}catch(c){a.e(c)}finally{a.f()}localStorage.setItem("newSongsList",JSON.stringify(t.newSongsList.slice(0,9)));case 11:case"end":return e.stop()}}),e)})))()},methods:{group:function(t,e){var s=0,n=[];while(s<t.length)n.push(t.slice(s,s+=e));return n},playThis:function(t,e,s){var n=Object(b["a"])(this.$store.state.playList,"id",t);if(-1!=n){if(this.hasClcikMusicId==t)return this.$store.state.isPlaying=!0,this.$bus.$emit("handlePlay"),void(this.hasClcikMusicId="");this.$bus.$emit("receiveMusicId",t,n)}else{var a=this.$store.state.playList.length;this.$store.state.playList.push(this.newSongs[e][s]),this.$bus.$emit("receiveMusicId",t,a)}this.hasClcikMusicId=t},toMore:function(){this.$router.push("/discover/newSongsMore")}},computed:{newSongs:function(){return this.group(this.newSongsList,3)}}}),x=$,M=(s("d112"),Object(d["a"])(x,w,S,!1,null,"2ffae7df",null)),k=M.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"MV"},[s("div",{staticClass:"title"},[s("span",{staticClass:"text"},[t._v("最新MV")]),s("van-button",{attrs:{round:"",type:"default"},on:{click:t.toMore}},[t._v("更多 >")])],1),s("div",{staticClass:"content"},t._l(t.mvList,(function(e,n){return s("el-card",{key:e.id,attrs:{"body-style":{padding:"0px"}}},[s("img",{staticClass:"image",attrs:{src:e.cover+"?param=200y200"}}),s("span",{staticClass:"iconfont icon-caret-right"},[t._v(t._s(e.playCount))]),s("span",{staticClass:"iconfont icon-bofang",on:{click:function(e){return t.playMv(n)}}}),s("div",{staticClass:"name"},[s("span",[t._v(t._s(e.name))]),s("br"),s("span",{staticClass:"auther"},[t._v(t._s(e.artistName))])])])})),1),s("van-popup",{style:{height:"100%",width:"100%"},model:{value:t.$store.state.showPlayMv,callback:function(e){t.$set(t.$store.state,"showPlayMv",e)},expression:"$store.state.showPlayMv"}},[t.$store.state.showPlayMv?s("playMv",{ref:"getData"}):t._e()],1)],1)},L=[],j=s("43d3"),I={components:{playMv:j["a"]},data:function(){return{mvList:[],topOffset:""}},mounted:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var s,n,a,i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.$bus.$on("closeModle",t.closeModle),s=JSON.parse(localStorage.getItem("mvList")),!s){e.next=6;break}t.mvList=s,e.next=12;break;case 6:return e.next=8,Object(o["c"])("",10);case 8:n=e.sent,a=Object(p["a"])(n.data.data);try{for(a.s();!(i=a.n()).done;)r=i.value,t.mvList.push({id:r.id,name:r.name,cover:r.cover,artistName:r.artistName,playCount:Object(b["b"])(r.playCount)})}catch(c){a.e(c)}finally{a.f()}localStorage.setItem("mvList",JSON.stringify(t.mvList));case 12:case"end":return e.stop()}}),e)})))()},methods:{toMore:function(){this.$router.push("/discover/MvTopMore")},playMv:function(t){var e=this;this.$store.state.isPlaying=!0,this.$bus.$emit("handlePlay"),this.$store.state.palyMvInfo=this.mvList[t],this.$store.state.showPlayMv=!0,this.stopBodyScroll(!0),setTimeout((function(){e.$refs.getData.getData()}),1500),document.body.addEventListener("touchmove",this.bodyScroll,{passive:!1}),document.querySelector("body").style.position="fixed",document.querySelector("body").style.width="100%",this.$store.state.showControlBar=!1},bodyScroll:function(t){t.preventDefault()},stopBodyScroll:function(t){var e=document.querySelector("body");t?(this.topOffset=window.scrollY,e.style.position="fixed",e.style.top=-this.topOffset+"px"):(e.style.position="",window.scrollTo(0,this.topOffset))},closeModle:function(){this.stopBodyScroll(!1),document.body.removeEventListener("touchmove",this.bodyScroll,{passive:!1}),document.querySelector("body").style.position="initial",document.querySelector("body").style.height="auto"}}},U=I,D=(s("9cf6"),Object(d["a"])(U,O,L,!1,null,"1e33ba30",null)),E=D.exports,N=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hotSinger"},[s("div",{staticClass:"title"},[s("span",{staticClass:"text"},[t._v("热门歌手")]),s("van-button",{attrs:{round:"",type:"default"},on:{click:t.toMore}},[t._v("更多 >")])],1),s("div",{staticClass:"content"},[t._l(t.hotSingerList,(function(e){return s("el-card",{key:e.id,staticClass:"box-card"},[s("img",{attrs:{src:e.picUrl+"?param=200y200"},on:{click:function(s){return t.toDetail(e.id)}}}),s("br"),s("span",{staticClass:"name"},[t._v(t._s(e.name))])])})),t._m(0)],2)])},P=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer"},[s("span",[t._v("~ ~ 已经到底啦")])])}],R={data:function(){return{hotSingerList:[]}},created:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var s,n,a,i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(s=JSON.parse(localStorage.getItem("hotSingerList")),!s){e.next=5;break}t.hotSingerList=s,e.next=11;break;case 5:return e.next=7,Object(o["b"])(9);case 7:n=e.sent,a=Object(p["a"])(n.data.artists);try{for(a.s();!(i=a.n()).done;)r=i.value,t.hotSingerList.push({id:r.id,name:r.name,picUrl:r.img1v1Url})}catch(c){a.e(c)}finally{a.f()}localStorage.setItem("hotSingerList",JSON.stringify(t.hotSingerList));case 11:case"end":return e.stop()}}),e)})))()},methods:{toMore:function(){this.$router.push("/discover/singerTopMore")},toDetail:function(t){this.$store.state.singerId=t,this.$router.push("/discover/singerTopMore/singerDetailMore")}}},J=R,T=(s("e932"),Object(d["a"])(J,N,P,!1,null,"2407884a",null)),V=T.exports,q={components:{banner:v,recommend:_,newSongs:k,MV:E,hotSinger:V},data:function(){return{day:""}},mounted:function(){this.getDay()},methods:{getDay:function(){var t=new Date,e={date:t.getDate()};this.day=e.date>10?e.date:"0"+e.date},toSearch:function(){this.$router.push("/search")},nvaClick:function(){this.$toast("功能暂未开发")}}},z=q,B=(s("ec61"),Object(d["a"])(z,n,a,!1,null,"859675e8",null));e["default"]=B.exports},"9cf6":function(t,e,s){"use strict";s("c79c")},bb5d:function(t,e,s){},c79c:function(t,e,s){},d112:function(t,e,s){"use strict";s("dbec")},dbec:function(t,e,s){},dc67:function(t,e,s){"use strict";s("287d")},e932:function(t,e,s){"use strict";s("7fae")},ec61:function(t,e,s){"use strict";s("25c3")},ee7c:function(t,e,s){},fb13:function(t,e,s){"use strict";s("ee7c")},fd5d:function(t,e,s){"use strict";s.d(e,"b",(function(){return a})),s.d(e,"a",(function(){return i})),s.d(e,"c",(function(){return r}));var n=s("23a8");function a(t,e,s){return Object(n["a"])({url:"/top/mv",params:{area:t,limit:e,offset:s}})}function i(t){return Object(n["a"])({url:"/mv/detail/info",params:{mvid:t}})}function r(t){return Object(n["a"])({url:"/mv/url",params:{id:t}})}}}]);
//# sourceMappingURL=chunk-cb884a12.96bcd481.js.map