"use strict";(self.webpackChunkassignment8_routing=self.webpackChunkassignment8_routing||[]).push([[22],{5022:function(n,t,e){e.r(t),e.d(t,{createSwipeBackGesture:function(){return a}});var r=e(1811),i=e(9507),u=e(7909),a=function(n,t,e,a,o){var c=n.ownerDocument.defaultView,s=(0,i.i)(n),f=function(n){return s?-n.deltaX:n.deltaX};return(0,u.createGesture)({el:n,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(n){return function(n){var t=n.startX;return s?t>=c.innerWidth-50:t<=50}(n)&&t()},onStart:e,onMove:function(n){var t=f(n)/c.innerWidth;a(t)},onEnd:function(n){var t=f(n),e=c.innerWidth,i=t/e,u=function(n){return s?-n.velocityX:n.velocityX}(n),a=u>=0&&(u>.2||t>e/2),h=(a?1-i:i)*e,d=0;if(h>5){var l=h/Math.abs(u);d=Math.min(l,540)}o(a,i<=0?.01:(0,r.h)(0,i,.9999),d)}})}}}]);
//# sourceMappingURL=22.550e8efd.chunk.js.map