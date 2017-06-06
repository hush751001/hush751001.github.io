"use strict";function clearPlayground(){var o,e;for(o=0;o<TEN;o++)for(playground[o]=[],e=0;e<TEN;e++)playground[o][e]=PLAYGROUND_COLOR_INDEX;score=0,$(".score span").text(score)}function drawBackground(){clearPlayground(),backgroundBlock=new Block(PLAYGROUND_COLOR_INDEX,PLAYGROUND_TYPE_INDEX),$(".bg").html(backgroundBlock.makeHtmlString())}function isValid(o,e,r){var t,a;for(t=0;t<r.width;t++)for(a=0;a<r.height;a++)if("X"!=r.layout[a][t]){if(e+a>=TEN||o+t>=TEN)continue;if(playground[e+a][o+t]!=PLAYGROUND_COLOR_INDEX)return!1}return!0}function makeRemainBlock(){$(".footer").html('<div class="remain-block remain-block0"></div><div class="remain-block remain-block1"></div><div class="remain-block remain-block2"></div>');for(var o=0;o<3;o++){var e=new Block(parseInt(Math.random()*PLAYGROUND_COLOR_INDEX,10),parseInt(Math.random()*PLAYGROUND_TYPE_INDEX,10));$(".remain-block"+o).html(e.makeHtmlString()).data("block",e)}var r;isMobile()&&(r={top:130,left:50}),$(".remain-block").draggable({cursor:"move",cursorAt:r,drag:function(){var o=$(".bg").offset(),e=$(".bg").width(),r=$(this).find(".horz:eq(0)").offset(),t=$(this).data("block");t.valid=void 0;var a=(t.layout,t.color,t.height),i=t.width,n=e/TEN,l=n/2,c=parseInt((l+r.left-o.left)/n,10),d=parseInt((l+r.top-o.top)/n,10);if(!(r.left-o.left<-l||c+i>TEN||r.top-o.top<-l||d+a>TEN))return isValid(c,d,t)?(t.x=c,t.y=d,t.valid=!0,!0):void 0},revertDuration:200,revert:function(o){if(!o)return!0;var e=o.data("dropped");return o.removeData("dropped"),!e}})}function resetDivColor(o,e,r,t){t=void 0!==t?t:300,setTimeout(function(){$(".bg .horz").eq(e).children(".block").eq(o).attr("class","block color-"+r)},t)}function removeLines(){var o,e,r,t,a,i,n=0;for(r=0;r<TEN;r++){for(i=a=!0,t=0;t<TEN;t++)i&&playground[r][t]==PLAYGROUND_COLOR_INDEX&&(i=!1),a&&playground[t][r]==PLAYGROUND_COLOR_INDEX&&(a=!1);if(i){for(o=0;o<TEN;o++)playground[r][o]=PLAYGROUND_COLOR_INDEX,resetDivColor(o,r,PLAYGROUND_COLOR_INDEX);n++}if(a){for(e=0;e<TEN;e++)playground[e][r]=PLAYGROUND_COLOR_INDEX,resetDivColor(r,e,PLAYGROUND_COLOR_INDEX);n++}}n>0&&(score+=scoreWeight[n-1])}function checkGameover(){var o=getHiddenRemainBlock(),e=0;o.each(function(){var o,r,t=$(this).data("block");for(o=0;o<TEN-t.width;o++)for(r=0;r<TEN-t.height;r++)if(isValid(o,r,t))return;e++}),o.length==e&&setTimeout(function(){$(".game-over").addClass("game-over-on"),$(".footer").empty()},500)}function getHiddenRemainBlock(){return $(".remain-block").filter(function(){return"hidden"!=$(this).css("visibility")})}function print(){}function isMobile(){return"ontouchstart"in document}var TEN=10,scoreWeight=[10,30,60,100,1e3,1e3],blockTypes=[[[1]],[[1,1]],[[1],[1]],[["X",1],[1,1]],[[1,"X"],[1,1]],[[1,1],[1,"X"]],[[1,1],["X",1]],[[1,1],[1,1]],[[1,1,1]],[[1],[1],[1]],[[1,1,1],["X","X",1],["X","X",1]],[[1,1,1],[1,"X","X"],[1,"X","X"]],[["X","X",1],["X","X",1],[1,1,1]],[[1,"X","X"],[1,"X","X"],[1,1,1]],[[1,1,1],[1,1,1],[1,1,1]],[[1,1,1,1]],[[1],[1],[1],[1]]],playground=[];blockTypes.push(playground);var PLAYGROUND_TYPE_INDEX=blockTypes.length-1,PLAYGROUND_COLOR_INDEX=6,score,Block=function(o,e){this.color=o,this.type=e,this.layout=blockTypes[this.type],this.height=this.layout.length,this.width=this.layout[0].length};Block.prototype.makeHtmlString=function(){var o,e,r=this.layout,t="";for(o=0;o<r.length;o++){for(t+='<div class="horz">',e=0;e<r[o].length;e++)"X"!=r[o][e]?t+='<div class="block color-'+this.color+'"></div>':t+='<div class="block color-x"></div>';t+="</div>"}return t};var backgroundBlock;$(function(){drawBackground(),$(".bg").droppable({tolerance:isMobile()?"touch":"pointer",accept:".remain-block",classes:{"ui-droppable-active":"ui-stat-active","ui-droppable-hover":"ui-stat-hover"},drop:function(o,e){var r,t;if(e.draggable&&0!=e.draggable.length){var a=e.draggable.data("block");if(a.valid){for(r=0;r<a.width;r++)for(t=0;t<a.height;t++)1==a.layout[t][r]&&(playground[a.y+t][a.x+r]=a.color,resetDivColor(a.x+r,a.y+t,a.color,0),score++);e.draggable.css("visibility","hidden"),removeLines(),0==getHiddenRemainBlock().length&&makeRemainBlock(),a.valid=void 0,e.draggable.addClass("dropped"),$(this).data("dropped",!0),$(".score span").text(score),checkGameover()}return!0}}}),makeRemainBlock(),$(".game-over button").on("click",function(o){drawBackground(),makeRemainBlock(),$(".game-over").removeClass("game-over-on")})}),$(document).on("touchmove",function(o){o.preventDefault()});