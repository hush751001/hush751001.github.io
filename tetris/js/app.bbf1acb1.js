(function(e){function t(t){for(var c,i,a=t[0],s=t[1],l=t[2],f=0,k=[];f<a.length;f++)i=a[f],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&k.push(n[i][0]),n[i]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);u&&u(t);while(k.length)k.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],c=!0,a=1;a<r.length;a++){var s=r[a];0!==n[s]&&(c=!1)}c&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var c={},n={app:0},o=[];function i(t){if(c[t])return c[t].exports;var r=c[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=c,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(r,c,function(t){return e[t]}.bind(null,c));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=s;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"1c36":function(e,t,r){"use strict";var c=r("b94e"),n=r.n(c);n.a},"5c0b":function(e,t,r){"use strict";var c=r("9c0c"),n=r.n(c);n.a},"8d50":function(e,t,r){},"9c0c":function(e,t,r){},a0f4:function(e,t,r){},b94e:function(e,t,r){},bec1:function(e,t,r){"use strict";var c=r("a0f4"),n=r.n(c);n.a},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var c=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},o=[],i=(r("5c0b"),r("2877")),a={},s=Object(i["a"])(a,n,o,!1,null,null,null),l=s.exports,u=r("9483");Object(u["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var f=r("8c4f"),k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"tetris"},[r("div",[e._v("점수 : "+e._s(e.score))]),r("div",{staticClass:"tetris-stage"},[r("board",{attrs:{blocks:e.bgBlockString}}),r("my-block",{attrs:{blocks:e.myBlockString,x:e.curBlockX,y:e.curBlockY}})],1)])},h=[],b=(r("cb29"),r("4160"),r("45fc"),r("d3b7"),r("3ca3"),r("159b"),r("ddb0"),r("96cf"),r("1da1")),d=r("d4ec"),p=r("bee2"),v=r("262e"),y=r("2caf"),g=r("9ab4"),B=r("60a3"),m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"board"},e._l(e.getBlocks,(function(t,c){return r("div",{key:c,staticClass:"horz"},e._l(t,(function(e,t){return r("div",{key:t,staticClass:"block",class:"color-"+e})})),0)})),0)},O=[],w=function(e){Object(v["a"])(r,e);var t=Object(y["a"])(r);function r(){return Object(d["a"])(this,r),t.apply(this,arguments)}return Object(p["a"])(r,[{key:"getBlocks",get:function(){var e=[];try{e=JSON.parse(this.blocks)}catch(t){console.log(t)}return e}}]),r}(B["c"]);Object(g["a"])([Object(B["b"])()],w.prototype,"blocks",void 0),w=Object(g["a"])([B["a"]],w);var j=w,x=j,S=(r("fdc1"),Object(i["a"])(x,m,O,!1,null,"649b8c12",null)),_=S.exports,C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"my-block",style:e.getStyle},e._l(e.getBlocks,(function(t,c){return r("div",{key:c,staticClass:"horz"},e._l(t,(function(e,t){return r("div",{key:t,staticClass:"block",class:"color-"+e})})),0)})),0)},M=[],D=(r("99af"),r("a9e3"),function(e){Object(v["a"])(r,e);var t=Object(y["a"])(r);function r(){var e;return Object(d["a"])(this,r),e=t.apply(this,arguments),e.style="",e}return Object(p["a"])(r,[{key:"mounted",value:function(){console.log(this.blocks)}},{key:"getStyle",get:function(){var e=32*this.x,t=32*this.y;return"transform: translate(".concat(e,"px, ").concat(t,"px);")}},{key:"getBlocks",get:function(){var e=[];try{e=JSON.parse(this.blocks)}catch(t){console.log(t)}return e}}]),r}(B["c"]));Object(g["a"])([Object(B["b"])({type:String})],D.prototype,"blocks",void 0),Object(g["a"])([Object(B["b"])({type:Number})],D.prototype,"x",void 0),Object(g["a"])([Object(B["b"])({type:Number})],D.prototype,"y",void 0),D=Object(g["a"])([B["a"]],D);var N=D,A=N,T=(r("bec1"),Object(i["a"])(A,C,M,!1,null,"760e45a0",null)),P=T.exports,X=16,Y=10,E=8,J=4,G=4;function $(e,t){return new Promise((function(r){var c=setTimeout((function(){r("timeout")}),e);t&&(t.clear=function(){clearTimeout(c),r("stop")})}))}var R=[[[[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]],[[0,0,1,0],[0,0,1,0],[0,0,1,0],[0,0,1,0]],[[0,0,0,0],[0,0,0,0],[1,1,1,1],[0,0,0,0]],[[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0]]],[[[1,1,0,0],[1,1,0,0],[0,0,0,0],[0,0,0,0]]],[[[1,0,0,0],[1,1,0,0],[0,1,0,0],[0,0,0,0]],[[0,1,1,0],[1,1,0,0],[0,0,0,0],[0,0,0,0]]],[[[0,1,0,0],[1,1,0,0],[1,0,0,0],[0,0,0,0]],[[1,1,0,0],[0,1,1,0],[0,0,0,0],[0,0,0,0]]],[[[0,1,0,0],[1,1,0,0],[0,1,0,0],[0,0,0,0]],[[0,1,0,0],[1,1,1,0],[0,0,0,0],[0,0,0,0]],[[0,1,0,0],[0,1,1,0],[0,1,0,0],[0,0,0,0]],[[0,0,0,0],[1,1,1,0],[0,1,0,0],[0,0,0,0]]],[[[1,1,0,0],[0,1,0,0],[0,1,0,0],[0,0,0,0]],[[0,0,1,0],[1,1,1,0],[0,0,0,0],[0,0,0,0]],[[0,1,0,0],[0,1,0,0],[0,1,1,0],[0,0,0,0]],[[0,0,0,0],[1,1,1,0],[1,0,0,0],[0,0,0,0]]],[[[0,1,1,0],[0,1,0,0],[0,1,0,0],[0,0,0,0]],[[0,0,0,0],[1,1,1,0],[0,0,1,0],[0,0,0,0]],[[0,1,0,0],[0,1,0,0],[1,1,0,0],[0,0,0,0]],[[1,0,0,0],[1,1,1,0],[0,0,0,0],[0,0,0,0]]]];function K(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e}var z=function(e){Object(v["a"])(r,e);var t=Object(y["a"])(r);function r(){var e;return Object(d["a"])(this,r),e=t.apply(this,arguments),e.bgBlock=new Array,e.bgBlockString="[]",e.myBlockString="[]",e.timer={},e.score=0,e.curBlockX=0,e.curBlockY=-J,e.curSpeed=500,e}return Object(p["a"])(r,[{key:"startGame",value:function(){var e=this;this.clearBg(),this.score=0,Object(b["a"])(regeneratorRuntime.mark((function t(){var r,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=!0;case 1:if(!r){t.next=18;break}e.curSpeed=1e3,e.newMyBlock(),c=!0;case 5:if(!c){t.next=11;break}return t.next=8,$(e.curSpeed,e.timer);case 8:e.checkCollision(e.curBlockX,e.curBlockY+1,e.curBlockDirection)?(e.curSpeed=1e3,c=!1):e.curBlockY++,t.next=5;break;case 11:if(!e.setMyBlockInBgAndCheckGameOver()){t.next=15;break}r=!1,t.next=16;break;case 15:return t.delegateYield(regeneratorRuntime.mark((function t(){var r,c,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=[],e.bgBlock.forEach((function(e){e.some((function(e){return e===E}))&&r.push(e)})),r.length===X){t.next=8;break}for(c=r.length;c<X;c++)n=new Array(Y),n.fill(E,0,Y),r.unshift(n),e.score++;return e.bgBlock=r,t.next=7,$(300);case 7:e.bgBlockString=JSON.stringify(e.bgBlock);case 8:case"end":return t.stop()}}),t)}))(),"t0",16);case 16:t.next=1;break;case 18:alert("gameover"),e.startGame();case 20:case"end":return t.stop()}}),t)})))()}},{key:"newMyBlock",value:function(){this.curBlockX=Math.floor((Y-G)/2),this.curBlockY=-Math.floor(J/2),this.curBlockType=K(0,R.length-1),this.curBlockDirection=0,this.drawMyBlock(this.curBlockType,this.curBlockDirection)}},{key:"getNextDirection",value:function(e){return e<R[this.curBlockType].length-1?e++:e=0,e}},{key:"nextDirection",value:function(){this.curBlockDirection=this.getNextDirection(this.curBlockDirection),this.drawMyBlock(this.curBlockType,this.curBlockDirection)}},{key:"clearBg",value:function(){for(var e=0;e<X;e++)this.bgBlock[e]=new Array(Y),this.bgBlock[e].fill(E,0,Y);this.bgBlockString=JSON.stringify(this.bgBlock)}},{key:"drawMyBlock",value:function(e,t){for(var r=e+1,c=new Array(J),n=0;n<J;n++){c[n]=new Array(G);for(var o=0;o<G;o++)1===R[e][t][n][o]?c[n][o]=r:c[n][o]=0}this.myBlockString=JSON.stringify(c)}},{key:"mounted",value:function(){this.startGame(),document.addEventListener("keydown",this.handleKeyPress,!1)}},{key:"checkCollision",value:function(e,t,r){for(var c=this.curBlockType,n=new Array(J),o=0;o<J;o++){n[o]=new Array(G);for(var i=0;i<G;i++)if(1===R[c][r][o][i]){if(t+o>=X)return!0;if(e+i<0||e+i>=Y)return!0;if(t+o<0)continue;if(this.bgBlock[t+o][e+i]!==E)return!0}}return!1}},{key:"handleKeyPress",value:function(e){switch(console.log(e.keyCode),e.keyCode){case 40:case 32:this.curSpeed=10,this.timer.clear&&this.timer.clear();break;case 37:this.checkCollision(this.curBlockX-1,this.curBlockY,this.curBlockDirection)||this.curBlockX--;break;case 38:this.checkCollision(this.curBlockX,this.curBlockY,this.getNextDirection(this.curBlockDirection))||this.nextDirection();break;case 39:this.checkCollision(this.curBlockX+1,this.curBlockY,this.curBlockDirection)||this.curBlockX++;break}console.log("move: ",this.curBlockX,this.curBlockY)}},{key:"setMyBlockInBgAndCheckGameOver",value:function(){for(var e=this.curBlockX,t=this.curBlockY,r=this.curBlockType,c=r+1,n=this.curBlockDirection,o=0;o<J;o++)for(var i=0;i<G;i++)if(1===R[r][n][o][i]){if(t+o<0)return!0;this.bgBlock[t+o][e+i]=c}this.bgBlockString=JSON.stringify(this.bgBlock)}},{key:"beforeDestroy",value:function(){document.removeEventListener("keydown",this.handleKeyPress,!1)}}]),r}(c["a"]);z=Object(g["a"])([Object(B["a"])({name:"tetris",components:{Board:_,MyBlock:P}})],z);var F=z,I=F,L=(r("1c36"),Object(i["a"])(I,k,h,!1,null,"d879c818",null)),q=L.exports;c["a"].use(f["a"]);var H=[{path:"/",name:"Tetris",component:q}],Q=new f["a"]({routes:H}),U=Q,V=r("2f62");c["a"].use(V["a"]);var W=new V["a"].Store({state:{},mutations:{},actions:{},modules:{}});c["a"].config.productionTip=!1,new c["a"]({router:U,store:W,render:function(e){return e(l)}}).$mount("#app")},fdc1:function(e,t,r){"use strict";var c=r("8d50"),n=r.n(c);n.a}});
//# sourceMappingURL=app.bbf1acb1.js.map