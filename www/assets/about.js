webpackJsonp([8],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(13);var u=n(2),c=r(u),f=n(11),s=r(f),p=(n(8),n(6)),d=r(p),h=n(19),b=r(h),y=n(14),m=r(y),w=n(15),v=(r(w),function(e){function t(){return o(this,t),a(this,Object.getPrototypeOf(t).call(this))}return l(t,e),i(t,[{key:"handleClick",value:function(){window.location.href="./main.html"}},{key:"render",value:function(){return c["default"].createElement("div",{className:"setting "},c["default"].createElement(d["default"],{title:"About Us"}),c["default"].createElement(m["default"],{type:"black",version:"V1.0.1"}),c["default"].createElement(b["default"],{className:"mt5",title:"About Us",type:"multiple",shape:"forward",href:"./profile.html"}),c["default"].createElement(b["default"],{title:"General",type:"About Us",shape:"forward"}))}}]),t}(u.Component));s["default"].render(c["default"].createElement(v,null),document.getElementById("react_content"))},6:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c,f,s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=n(2),d=r(p),h=n(7),b=r(h);n(5);var y=(f=c=function(e){function t(){return l(this,t),i(this,Object.getPrototypeOf(t).call(this))}return u(t,e),s(t,[{key:"handleClick",value:function(){window.history.go(-1)}},{key:"render",value:function(){var e,t=this.props,n=t.className,r=t.prefixCls,l=t.bcls,i=(a(t,["className","prefixCls","bcls"]),(0,b["default"])((e={},o(e,r,!0),o(e,n,n),e))),u=(0,b["default"])({none:l,header_goback:!0});return d["default"].createElement("header",{className:i},d["default"].createElement("div",{className:u,onClick:this.handleClick.bind(this)},d["default"].createElement("span",null)),d["default"].createElement("h2",null,this.props.title))}}]),t}(p.Component),c.defaultProps={prefixCls:"head",title:""},f);t["default"]=y,e.exports=t["default"]},19:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var c,f,s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=n(2),d=r(p),h=n(8),b=n(7),y=r(b);n(5);var m=(f=c=function(e){function t(){l(this,t);var e=i(this,Object.getPrototypeOf(t).call(this));return e.onchange=function(e){console.log(e)},e}return u(t,e),s(t,[{key:"handleClick",value:function(){this.props.href&&(window.location.href=this.props.href)}},{key:"render",value:function(){var e,t=this.props,n=t.type,r=t.shape,l=t.title,i=t.className,u=t.prefixCls,c=(t.href,a(t,["type","shape","title","className","prefixCls","href"]),(0,y["default"])((e={},o(e,u,!0),o(e,u+"-"+n,n),o(e,u+"-"+r,"forward"==r),o(e,i,i),e)));return d["default"].createElement("p",{className:c,onClick:this.handleClick.bind(this)},l,"switch"==r?d["default"].createElement(h.Switch,{defaultChecked:!1,onChange:this.onChange}):null)}}]),t}(p.Component),c.defaultProps={prefixCls:"heading"},f);t["default"]=m,e.exports=t["default"]}});