(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[11],{104:function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"a",(function(){return s}))},56:function(e,t,n){"use strict";function o(e){var t,n,r="";if("string"===typeof e||"number"===typeof e)r+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(r&&(r+=" "),r+=t);return r}},93:function(e,t,n){},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return _})),n.d(t,"b",(function(){return U}));var o=n(0),r=n.n(o),s=n(56),a=n(15);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function c(e){return"number"===typeof e&&!isNaN(e)}function u(e){return"boolean"===typeof e}function l(e){return"string"===typeof e}function d(e){return"function"===typeof e}function f(e){return l(e)||d(e)?e:null}function p(e){return 0===e||e}var g=!("undefined"===typeof window||!window.document||!window.document.createElement);function m(e){return Object(o.isValidElement)(e)||l(e)||d(e)||c(e)}var v={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},b={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default",DARK:"dark"};function y(e){var t=e.enter,n=e.exit,s=e.appendPosition,a=void 0!==s&&s,i=e.collapse,c=void 0===i||i,u=e.collapseDuration,l=void 0===u?300:u;return function(e){var s=e.children,i=e.position,u=e.preventExitTransition,d=e.done,f=e.nodeRef,p=e.isIn,g=a?t+"--"+i:t,m=a?n+"--"+i:n,v=Object(o.useRef)(),b=Object(o.useRef)(0);function y(){var e=f.current;e.removeEventListener("animationend",y),0===b.current&&(e.className=v.current)}function O(){var e=f.current;e.removeEventListener("animationend",O),c?function(e,t,n){void 0===n&&(n=300);var o=e.scrollHeight,r=e.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all "+n+"ms",requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(t,n)}))}))}(e,d,l):d()}return Object(o.useLayoutEffect)((function(){!function(){var e=f.current;v.current=e.className,e.className+=" "+g,e.addEventListener("animationend",y)}()}),[]),Object(o.useEffect)((function(){p||(u?O():function(){b.current=1;var e=f.current;e.className+=" "+m,e.addEventListener("animationend",O)}())}),[p]),r.a.createElement(r.a.Fragment,null,s)}}var O={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){for(var t=this,n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];this.list.has(e)&&this.list.get(e).forEach((function(n){var r=setTimeout((function(){n.apply(void 0,o)}),0);t.emitQueue.has(e)||t.emitQueue.set(e,[]),t.emitQueue.get(e).push(r)}))}};function h(e,t){void 0===t&&(t=!1);var n=Object(o.useRef)(e);return Object(o.useEffect)((function(){t&&(n.current=e)})),n.current}function T(e,t){switch(t.type){case 0:return[].concat(e,[t.toastId]).filter((function(e){return e!==t.staleId}));case 1:return p(t.toastId)?e.filter((function(e){return e!==t.toastId})):[]}}function E(e){var t=Object(o.useReducer)((function(e){return e+1}),0)[1],n=Object(o.useReducer)(T,[]),r=n[0],s=n[1],a=Object(o.useRef)(null),i=h(0),g=h([]),v=h({}),b=h({toastKey:1,displayedToast:0,props:e,containerId:null,isToastActive:y,getToast:function(e){return v[e]||null}});function y(e){return-1!==r.indexOf(e)}function E(e){var t=e.containerId;!b.props.limit||t&&b.containerId!==t||(i-=g.length,g=[])}function j(e){s({type:1,toastId:e})}function I(){var e=g.shift();P(e.toastContent,e.toastProps,e.staleId)}function C(e,n){var r=n.delay,s=n.staleId,y=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(n,["delay","staleId"]);if(m(e)&&!function(e){var t=e.containerId,n=e.toastId,o=e.updateId;return!!(!a.current||b.props.enableMultiContainer&&t!==b.props.containerId||v[n]&&null==o)}(y)){var O=y.toastId,h=y.updateId,T=b.props,E=function(){return j(O)},C=null==y.updateId;C&&i++;var R,w,N={toastId:O,updateId:h,isIn:!1,key:y.key||b.toastKey++,type:y.type,closeToast:E,closeButton:y.closeButton,rtl:T.rtl,position:y.position||T.position,transition:y.transition||T.transition,className:f(y.className||T.toastClassName),bodyClassName:f(y.bodyClassName||T.bodyClassName),style:y.style||T.toastStyle,bodyStyle:y.bodyStyle||T.bodyStyle,onClick:y.onClick||T.onClick,pauseOnHover:u(y.pauseOnHover)?y.pauseOnHover:T.pauseOnHover,pauseOnFocusLoss:u(y.pauseOnFocusLoss)?y.pauseOnFocusLoss:T.pauseOnFocusLoss,draggable:u(y.draggable)?y.draggable:T.draggable,draggablePercent:c(y.draggablePercent)?y.draggablePercent:T.draggablePercent,draggableDirection:y.draggableDirection||T.draggableDirection,closeOnClick:u(y.closeOnClick)?y.closeOnClick:T.closeOnClick,progressClassName:f(y.progressClassName||T.progressClassName),progressStyle:y.progressStyle||T.progressStyle,autoClose:(R=y.autoClose,w=T.autoClose,!1===R||c(R)&&R>0?R:w),hideProgressBar:u(y.hideProgressBar)?y.hideProgressBar:T.hideProgressBar,progress:y.progress,role:l(y.role)?y.role:T.role,deleteToast:function(){!function(e){delete v[e];var n=g.length;(i=p(e)?i-1:i-b.displayedToast)<0&&(i=0);if(n>0){var o=p(e)?1:b.props.limit;if(1===n||1===o)b.displayedToast++,I();else{var r=o>n?n:o;b.displayedToast=r;for(var s=0;s<r;s++)I()}}else t()}(O)}};d(y.onOpen)&&(N.onOpen=y.onOpen),d(y.onClose)&&(N.onClose=y.onClose),"y"===N.draggableDirection&&80===N.draggablePercent&&(N.draggablePercent*=1.5);var _=T.closeButton;!1===y.closeButton||m(y.closeButton)?_=y.closeButton:!0===y.closeButton&&(_=!m(T.closeButton)||T.closeButton),N.closeButton=_;var L=e;Object(o.isValidElement)(e)&&!l(e.type)?L=Object(o.cloneElement)(e,{closeToast:E,toastProps:N}):d(e)&&(L=e({closeToast:E,toastProps:N})),T.limit&&T.limit>0&&i>T.limit&&C?g.push({toastContent:L,toastProps:N,staleId:s}):c(r)&&r>0?setTimeout((function(){P(L,N,s)}),r):P(L,N,s)}}function P(e,t,n){var o=t.toastId;n&&delete v[n],v[o]={content:e,props:t},s({type:0,toastId:o,staleId:n})}return Object(o.useEffect)((function(){return b.containerId=e.containerId,O.cancelEmit(3).on(0,C).on(1,(function(e){return a.current&&j(e)})).on(5,E).emit(2,b),function(){return O.emit(3,b)}}),[]),Object(o.useEffect)((function(){b.isToastActive=y,b.displayedToast=r.length,O.emit(4,r.length,e.containerId)}),[r]),Object(o.useEffect)((function(){b.props=e})),{getToastToRender:function(t){for(var n={},o=e.newestOnTop?Object.keys(v).reverse():Object.keys(v),r=0;r<o.length;r++){var s=v[o[r]],a=s.props.position;n[a]||(n[a]=[]),n[a].push(s)}return Object.keys(n).map((function(e){return t(e,n[e])}))},collection:v,containerRef:a,isToastActive:y}}function j(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function I(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function C(e){var t=Object(o.useState)(!0),n=t[0],r=t[1],s=Object(o.useState)(!1),a=s[0],i=s[1],c=Object(o.useRef)(null),u=h({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null}),l=h(e,!0),f=e.autoClose,p=e.pauseOnHover,g=e.closeToast,m=e.onClick,v=e.closeOnClick;function b(t){if(e.draggable){var n=c.current;u.canCloseOnClick=!0,u.canDrag=!0,u.boundingRect=n.getBoundingClientRect(),n.style.transition="",u.x=j(t.nativeEvent),u.y=I(t.nativeEvent),"x"===e.draggableDirection?(u.start=u.x,u.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(u.start=u.y,u.removalDistance=n.offsetHeight*(e.draggablePercent/100))}}function y(){if(u.boundingRect){var t=u.boundingRect,n=t.top,o=t.bottom,r=t.left,s=t.right;e.pauseOnHover&&u.x>=r&&u.x<=s&&u.y>=n&&u.y<=o?T():O()}}function O(){r(!0)}function T(){r(!1)}function E(t){if(u.canDrag){t.preventDefault();var o=c.current;n&&T(),u.x=j(t),u.y=I(t),"x"===e.draggableDirection?u.delta=u.x-u.start:u.delta=u.y-u.start,u.start!==u.x&&(u.canCloseOnClick=!1),o.style.transform="translate"+e.draggableDirection+"("+u.delta+"px)",o.style.opacity=""+(1-Math.abs(u.delta/u.removalDistance))}}function C(){var t=c.current;if(u.canDrag){if(u.canDrag=!1,Math.abs(u.delta)>u.removalDistance)return i(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate"+e.draggableDirection+"(0)",t.style.opacity="1"}}Object(o.useEffect)((function(){return d(e.onOpen)&&e.onOpen(Object(o.isValidElement)(e.children)&&e.children.props),function(){d(l.onClose)&&l.onClose(Object(o.isValidElement)(l.children)&&l.children.props)}}),[]),Object(o.useEffect)((function(){return e.draggable&&(document.addEventListener("mousemove",E),document.addEventListener("mouseup",C),document.addEventListener("touchmove",E),document.addEventListener("touchend",C)),function(){e.draggable&&(document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",C),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",C))}}),[e.draggable]),Object(o.useEffect)((function(){return e.pauseOnFocusLoss&&function(){document.hasFocus()||T();window.addEventListener("focus",O),window.addEventListener("blur",T)}(),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",O),window.removeEventListener("blur",T))}}),[e.pauseOnFocusLoss]);var P={onMouseDown:b,onTouchStart:b,onMouseUp:y,onTouchEnd:y};return f&&p&&(P.onMouseEnter=T,P.onMouseLeave=O),v&&(P.onClick=function(e){m&&m(e),u.canCloseOnClick&&g()}),{playToast:O,pauseToast:T,isRunning:n,preventExitTransition:a,toastRef:c,eventHandlers:P}}function P(e){var t=e.closeToast,n=e.type,r=e.ariaLabel,s=void 0===r?"close":r;return Object(o.createElement)("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":s},Object(o.createElement)("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},Object(o.createElement)("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function R(e){var t,n,r=e.delay,a=e.isRunning,c=e.closeToast,u=e.type,l=e.hide,f=e.className,p=e.style,g=e.controlledProgress,m=e.progress,v=e.rtl,b=e.isIn,y=i({},p,{animationDuration:r+"ms",animationPlayState:a?"running":"paused",opacity:l?0:1});g&&(y.transform="scaleX("+m+")");var O=Object(s.a)("Toastify__progress-bar",g?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar--"+u,((t={})["Toastify__progress-bar--rtl"]=v,t)),h=d(f)?f({rtl:v,type:u,defaultClassName:O}):Object(s.a)(O,f),T=((n={})[g&&m>=1?"onTransitionEnd":"onAnimationEnd"]=g&&m<1?null:function(){b&&c()},n);return Object(o.createElement)("div",Object.assign({role:"progressbar","aria-hidden":l?"true":"false","aria-label":"notification timer",className:h,style:y},T))}R.defaultProps={type:b.DEFAULT,hide:!1};var w=function(e){var t,n=C(e),r=n.isRunning,a=n.preventExitTransition,i=n.toastRef,c=n.eventHandlers,u=e.closeButton,l=e.children,f=e.autoClose,p=e.onClick,g=e.type,m=e.hideProgressBar,v=e.closeToast,b=e.transition,y=e.position,O=e.className,h=e.style,T=e.bodyClassName,E=e.bodyStyle,j=e.progressClassName,I=e.progressStyle,P=e.updateId,w=e.role,N=e.progress,_=e.rtl,L=e.toastId,k=e.deleteToast,D=e.isIn,B=Object(s.a)("Toastify__toast","Toastify__toast--"+g,((t={})["Toastify__toast--rtl"]=_,t)),x=d(O)?O({rtl:_,position:y,type:g,defaultClassName:B}):Object(s.a)(B,O),S=!!N;return Object(o.createElement)(b,{isIn:D,done:k,position:y,preventExitTransition:a,nodeRef:i},Object(o.createElement)("div",Object.assign({id:L,onClick:p,className:x},c,{style:h,ref:i}),Object(o.createElement)("div",Object.assign({},D&&{role:w},{className:d(T)?T({type:g}):Object(s.a)("Toastify__toast-body",T),style:E}),l),function(e){if(e){var t={closeToast:v,type:g};return d(e)?e(t):Object(o.isValidElement)(e)?Object(o.cloneElement)(e,t):void 0}}(u),(f||S)&&Object(o.createElement)(R,Object.assign({},P&&!S?{key:"pb-"+P}:{},{rtl:_,delay:f,isRunning:r,isIn:D,closeToast:v,hide:m,type:g,style:I,className:j,controlledProgress:S,progress:N}))))},N=y({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),_=function(e){var t=E(e),n=t.getToastToRender,r=t.containerRef,a=t.isToastActive,c=e.className,u=e.style,l=e.rtl,p=e.containerId;function g(e){var t,n=Object(s.a)("Toastify__toast-container","Toastify__toast-container--"+e,((t={})["Toastify__toast-container--rtl"]=l,t));return d(c)?c({position:e,rtl:l,defaultClassName:n}):Object(s.a)(n,f(c))}return Object(o.createElement)("div",{ref:r,className:"Toastify",id:p},n((function(e,t){var n=0===t.length?i({},u,{pointerEvents:"none"}):i({},u);return Object(o.createElement)("div",{className:g(e),style:n,key:"container-"+e},t.map((function(e){var t=e.content,n=e.props;return Object(o.createElement)(w,Object.assign({},n,{isIn:a(n.toastId),key:"toast-"+n.key,closeButton:!0===n.closeButton?P:n.closeButton}),t)})))})))};_.defaultProps={position:v.TOP_RIGHT,transition:N,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:P,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert"};var L,k,D,B=new Map,x=[],S=!1;function A(){return Math.random().toString(36).substr(2,9)}function F(e){return e&&(l(e.toastId)||c(e.toastId))?e.toastId:A()}function H(e,t){return B.size>0?O.emit(0,e,t):(x.push({content:e,options:t}),S&&g&&(S=!1,k=document.createElement("div"),document.body.appendChild(k),Object(a.render)(Object(o.createElement)(_,Object.assign({},D)),k))),t.toastId}function M(e,t){return i({},t,{type:t&&t.type||e,toastId:F(t)})}var Q=function(e){return function(t,n){return H(t,M(e,n))}},U=function(e,t){return H(e,M(b.DEFAULT,t))};U.success=Q(b.SUCCESS),U.info=Q(b.INFO),U.error=Q(b.ERROR),U.warning=Q(b.WARNING),U.dark=Q(b.DARK),U.warn=U.warning,U.dismiss=function(e){return O.emit(1,e)},U.clearWaitingQueue=function(e){return void 0===e&&(e={}),O.emit(5,e)},U.isActive=function(e){var t=!1;return B.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},U.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,o=B.get(n||L);return o?o.getToast(e):null}(e,t);if(n){var o=n.props,r=n.content,s=i({},o,t,{toastId:t.toastId||e,updateId:A()});s.toastId!==e&&(s.staleId=e);var a=s.render||r;delete s.render,H(a,s)}}),0)},U.done=function(e){U.update(e,{progress:1})},U.onChange=function(e){return d(e)&&O.on(4,e),function(){d(e)&&O.off(4,e)}},U.configure=function(e){void 0===e&&(e={}),S=!0,D=e},U.POSITION=v,U.TYPE=b,O.on(2,(function(e){L=e.containerId||e,B.set(L,e),x.forEach((function(e){O.emit(0,e.content,e.options)})),x=[]})).on(3,(function(e){B.delete(e.containerId||e),0===B.size&&O.off(0).off(1).off(5),g&&k&&document.body.removeChild(k)}))}}]);
//# sourceMappingURL=11.63454145.chunk.js.map