webpackJsonp([5],{0:function(e,t,n){(function(e){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(12),l=t(c),s=n(7),f=t(s),p=n(1),d=t(p),m=n(11),v=t(m),h=n(10),y=n(131),g=t(y),b=n(133),w=t(b),E=n(20),_=t(E);n(73),n(74);var P=n(15),O=t(P),x=O["default"].service,T=function(t){function n(){o(this,n);var e=i(this,Object.getPrototypeOf(n).call(this));return e.state={loading:!1,deviceList:[],myDeviceNum:0,otherDeviceNum:0,otherDeviceList:[],visible:!1},e}return a(n,t),u(n,[{key:"componentDidMount",value:function(){var t=this;this.getList(),e(document).on("swipeLeft",".list-item",function(e){(0,_["default"])(this).addClass("translation")}),e(document).on("swipeRight",".list-item",function(e){(0,_["default"])(this).removeClass("translation")}),e(document).on("click",".list-item",function(e){(0,_["default"])(this).removeClass("translation")}),e(document).on("click",".delete",function(e){var n=(h.Modal.confirm,(0,_["default"])(this).attr("data-imei"));t.deleteDevice(n)})}},{key:"deleteDevice",value:function(e){var t=this;l["default"].request({url:x.deldevice,type:"get",data:{imei:e},success:function(e){t.getList()},error:function(e){h.message.error(e.err_msg)}})}},{key:"getList",value:function(){var e=this;e.showLoading(),l["default"].request({url:x.devicelist,type:"get",data:{},success:function(t){e.closeLoading(),e.state.deviceList=t.my_device||[],e.state.otherDeviceList=t.other_device||[],e.state.myDeviceNum=t.my_device_num,e.state.otherDeviceNum=t.other_device_num,e.forceUpdate()},error:function(t){e.closeLoading(),h.message.error(t.err_msg)}})}},{key:"render",value:function(){var e=this.state,t=e.deviceList,n=(e.otherDeviceList,e.myDeviceNum,e.otherDeviceNum,r(e,["deviceList","otherDeviceList","myDeviceNum","otherDeviceNum"]),t.map(function(e,t){var n="./device.html?imei="+e.imei+"&n="+e.name,r="./alarm.html?imei="+e.imei;return d["default"].createElement("li",{className:"list-item",key:t},d["default"].createElement(h.Row,{type:"flex",justify:"middle"},d["default"].createElement(h.Col,{span:5},d["default"].createElement("a",{href:n}," ",e.name," ")),d["default"].createElement(h.Col,{span:5},d["default"].createElement(w["default"],{type:"gps"})),d["default"].createElement(h.Col,{span:4},d["default"].createElement(w["default"],{type:"gprs",status:"off"})),d["default"].createElement(h.Col,{span:5},d["default"].createElement(h.Switch,{defaultChecked:!1})),d["default"].createElement(h.Col,{className:"alarm",span:5},d["default"].createElement("a",{href:r}))),d["default"].createElement(h.Icon,{className:"delete","data-imei":e.imei,type:"cross-circle-o"}))}));return d["default"].createElement("div",{className:"main"},d["default"].createElement(g["default"],{onAdd:this.addDevice}),d["default"].createElement("div",{className:"thead"},d["default"].createElement(h.Row,{type:"flex",justify:"middle"},d["default"].createElement(h.Col,{span:5},"Device"),d["default"].createElement(h.Col,{span:5},"GSM"),d["default"].createElement(h.Col,{span:4},"Status"),d["default"].createElement(h.Col,{span:5},"GPS"),d["default"].createElement(h.Col,{span:5},"Alarm"))),d["default"].createElement(h.Spin,{spinning:this.state.loading},d["default"].createElement("div",{className:"device-list"},d["default"].createElement("ul",null,n))))}}]),n}(f["default"]);v["default"].render(d["default"].createElement(T,null),document.getElementById("react_content"))}).call(t,n(29))},7:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),l=(r(c),function(e){function t(){o(this,t);var e=i(this,Object.getPrototypeOf(t).call(this));return e.state={loading:!1},e}return a(t,e),u(t,[{key:"showLoading",value:function(){this.state.loading=!0,this.forceUpdate()}},{key:"closeLoading",value:function(){this.state.loading=!1,this.forceUpdate()}}]),t}(c.Component));t["default"]=l,e.exports=t["default"]},73:function(e,t,n){(function(e){"use strict";!function(e){function t(e){return e._zid||(e._zid=p++)}function n(e,n,i,a){if(n=r(n),n.ns)var u=o(n.ns);return(h[t(e)]||[]).filter(function(e){return e&&(!n.e||e.e==n.e)&&(!n.ns||u.test(e.ns))&&(!i||t(e.fn)===t(i))&&(!a||e.sel==a)})}function r(e){var t=(""+e).split(".");return{e:t[0],ns:t.slice(1).sort().join(" ")}}function o(e){return new RegExp("(?:^| )"+e.replace(" "," .* ?")+"(?: |$)")}function i(e,t){return e.del&&!g&&e.e in b||!!t}function a(e){return w[e]||g&&b[e]||e}function u(n,o,u,c,s,p,d){var m=t(n),v=h[m]||(h[m]=[]);o.split(/\s/).forEach(function(t){if("ready"==t)return e(document).ready(u);var o=r(t);o.fn=u,o.sel=s,o.e in w&&(u=function(t){var n=t.relatedTarget;return!n||n!==this&&!e.contains(this,n)?o.fn.apply(this,arguments):void 0}),o.del=p;var m=p||u;o.proxy=function(e){if(e=l(e),!e.isImmediatePropagationStopped()){e.data=c;var t=m.apply(n,e._args==f?[e]:[e].concat(e._args));return t===!1&&(e.preventDefault(),e.stopPropagation()),t}},o.i=v.length,v.push(o),"addEventListener"in n&&n.addEventListener(a(o.e),o.proxy,i(o,d))})}function c(e,r,o,u,c){var l=t(e);(r||"").split(/\s/).forEach(function(t){n(e,t,o,u).forEach(function(t){delete h[l][t.i],"removeEventListener"in e&&e.removeEventListener(a(t.e),t.proxy,i(t,c))})})}function l(t,n){return!n&&t.isDefaultPrevented||(n||(n=t),e.each(O,function(e,r){var o=n[e];t[e]=function(){return this[r]=E,o&&o.apply(n,arguments)},t[r]=_}),(n.defaultPrevented!==f?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(t.isDefaultPrevented=E)),t}function s(e){var t,n={originalEvent:e};for(t in e)P.test(t)||e[t]===f||(n[t]=e[t]);return l(n,e)}var f,p=1,d=Array.prototype.slice,m=e.isFunction,v=function(e){return"string"==typeof e},h={},y={},g="onfocusin"in window,b={focus:"focusin",blur:"focusout"},w={mouseenter:"mouseover",mouseleave:"mouseout"};y.click=y.mousedown=y.mouseup=y.mousemove="MouseEvents",e.event={add:u,remove:c},e.proxy=function(n,r){var o=2 in arguments&&d.call(arguments,2);if(m(n)){var i=function(){return n.apply(r,o?o.concat(d.call(arguments)):arguments)};return i._zid=t(n),i}if(v(r))return o?(o.unshift(n[r],n),e.proxy.apply(null,o)):e.proxy(n[r],n);throw new TypeError("expected function")},e.fn.bind=function(e,t,n){return this.on(e,t,n)},e.fn.unbind=function(e,t){return this.off(e,t)},e.fn.one=function(e,t,n,r){return this.on(e,t,n,r,1)};var E=function(){return!0},_=function(){return!1},P=/^([A-Z]|returnValue$|layer[XY]$)/,O={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};e.fn.delegate=function(e,t,n){return this.on(t,e,n)},e.fn.undelegate=function(e,t,n){return this.off(t,e,n)},e.fn.live=function(t,n){return e(document.body).delegate(this.selector,t,n),this},e.fn.die=function(t,n){return e(document.body).undelegate(this.selector,t,n),this},e.fn.on=function(t,n,r,o,i){var a,l,p=this;return t&&!v(t)?(e.each(t,function(e,t){p.on(e,n,r,t,i)}),p):(v(n)||m(o)||o===!1||(o=r,r=n,n=f),(m(r)||r===!1)&&(o=r,r=f),o===!1&&(o=_),p.each(function(f,p){i&&(a=function(e){return c(p,e.type,o),o.apply(this,arguments)}),n&&(l=function(t){var r,i=e(t.target).closest(n,p).get(0);return i&&i!==p?(r=e.extend(s(t),{currentTarget:i,liveFired:p}),(a||o).apply(i,[r].concat(d.call(arguments,1)))):void 0}),u(p,t,o,r,n,l||a)}))},e.fn.off=function(t,n,r){var o=this;return t&&!v(t)?(e.each(t,function(e,t){o.off(e,n,t)}),o):(v(n)||m(r)||r===!1||(r=n,n=f),r===!1&&(r=_),o.each(function(){c(this,t,r,n)}))},e.fn.trigger=function(t,n){return t=v(t)||e.isPlainObject(t)?e.Event(t):l(t),t._args=n,this.each(function(){t.type in b&&"function"==typeof this[t.type]?this[t.type]():"dispatchEvent"in this?this.dispatchEvent(t):e(this).triggerHandler(t,n)})},e.fn.triggerHandler=function(t,r){var o,i;return this.each(function(a,u){o=s(v(t)?e.Event(t):t),o._args=r,o.target=u,e.each(n(u,t.type||t),function(e,t){return i=t.proxy(o),o.isImmediatePropagationStopped()?!1:void 0})}),i},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t){e.fn[t]=function(e){return 0 in arguments?this.bind(t,e):this.trigger(t)}}),e.Event=function(e,t){v(e)||(t=e,e=t.type);var n=document.createEvent(y[e]||"Events"),r=!0;if(t)for(var o in t)"bubbles"==o?r=!!t[o]:n[o]=t[o];return n.initEvent(e,r,!0),l(n)}}(e)}).call(t,n(29))},74:function(e,t,n){(function(e){"use strict";!function(e){function t(e,t,n,r){return Math.abs(e-t)>=Math.abs(n-r)?e-t>0?"Left":"Right":n-r>0?"Up":"Down"}function n(){s=null,p.last&&(p.el.trigger("longTap"),p={})}function r(){s&&clearTimeout(s),s=null}function o(){u&&clearTimeout(u),c&&clearTimeout(c),l&&clearTimeout(l),s&&clearTimeout(s),u=c=l=s=null,p={}}function i(e){return("touch"==e.pointerType||e.pointerType==e.MSPOINTER_TYPE_TOUCH)&&e.isPrimary}function a(e,t){return e.type=="pointer"+t||e.type.toLowerCase()=="mspointer"+t}var u,c,l,s,f,p={},d=750;e(document).ready(function(){var m,v,h,y,g=0,b=0;"MSGesture"in window&&(f=new MSGesture,f.target=document.body),e(document).bind("MSGestureEnd",function(e){var t=e.velocityX>1?"Right":e.velocityX<-1?"Left":e.velocityY>1?"Down":e.velocityY<-1?"Up":null;t&&(p.el.trigger("swipe"),p.el.trigger("swipe"+t))}).on("touchstart MSPointerDown pointerdown",function(t){(y=a(t,"down"))&&!i(t)||(h=y?t:t.touches[0],t.touches&&1===t.touches.length&&p.x2&&(p.x2=void 0,p.y2=void 0),m=Date.now(),v=m-(p.last||m),p.el=e("tagName"in h.target?h.target:h.target.parentNode),u&&clearTimeout(u),p.x1=h.pageX,p.y1=h.pageY,v>0&&250>=v&&(p.isDoubleTap=!0),p.last=m,s=setTimeout(n,d),f&&y&&f.addPointer(t.pointerId))}).on("touchmove MSPointerMove pointermove",function(e){(y=a(e,"move"))&&!i(e)||(h=y?e:e.touches[0],r(),p.x2=h.pageX,p.y2=h.pageY,g+=Math.abs(p.x1-p.x2),b+=Math.abs(p.y1-p.y2))}).on("touchend MSPointerUp pointerup",function(n){(y=a(n,"up"))&&!i(n)||(r(),p.x2&&Math.abs(p.x1-p.x2)>30||p.y2&&Math.abs(p.y1-p.y2)>30?l=setTimeout(function(){p.el.trigger("swipe"),p.el.trigger("swipe"+t(p.x1,p.x2,p.y1,p.y2)),p={}},0):"last"in p&&(30>g&&30>b?c=setTimeout(function(){var t=e.Event("tap");t.cancelTouch=o,p.el.trigger(t),p.isDoubleTap?(p.el&&p.el.trigger("doubleTap"),p={}):u=setTimeout(function(){u=null,p.el&&p.el.trigger("singleTap"),p={}},250)},0):p={}),g=b=0)}).on("touchcancel MSPointerCancel pointercancel",o),e(window).on("scroll",o)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(t){e.fn[t]=function(e){return this.on(t,e)}})}(e)}).call(t,n(29))},131:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(12),l=(r(c),n(1)),s=r(l);n(10);n(3);var f=function(e){function t(){o(this,t);var e=i(this,Object.getPrototypeOf(t).call(this));return e.displayName="HeadMain",e}return a(t,e),u(t,[{key:"render",value:function(){return s["default"].createElement("header",{className:"head"},s["default"].createElement("h2",null,s["default"].createElement("a",{className:"setting",href:"./setting.html"},s["default"].createElement("span",null)),s["default"].createElement("a",{className:"add-device",href:"./add_device.html"},s["default"].createElement("span",null))))}}]),t}(l.Component);t["default"]=f,e.exports=t["default"]},133:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,s,f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=n(1),d=r(p),m=n(5),v=r(m);n(3);var h=(s=l=function(e){function t(){a(this,t);var e=u(this,Object.getPrototypeOf(t).call(this));return e.displayName="SIcon",e}return c(t,e),f(t,[{key:"render",value:function(){var e,t=this.props,n=t.className,r=t.prefixCls,a=t.type,u=t.status,c=(i(t,["className","prefixCls","type","status"]),(0,v["default"])((e={},o(e,r,!0),o(e,r+"-"+a,a),o(e,r+"-"+a+"-"+u,u),o(e,n,n),e)));return d["default"].createElement("i",{className:c})}}]),t}(p.Component),l.defaultProps={prefixCls:"sicon"},s);t["default"]=h,e.exports=t["default"]}});