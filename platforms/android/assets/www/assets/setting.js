webpackJsonp([10],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(11),f=r(c),s=n(7),p=r(s),d=n(1),h=r(d),b=n(12),y=r(b),m=(n(10),n(6)),O=r(m),w=n(25),v=r(w),g=n(15),j=r(g),_=j["default"].service,E=function(e){function t(){o(this,t);var e=a(this,Object.getPrototypeOf(t).call(this));if(e.state={loading:!1},e.signOut=e.signOut.bind(e),"function"!=typeof e.signOut)throw new TypeError('Value of "this.signOut" violates contract, expected () => any got '+(null===e.signOut?"null":"object"===i(e.signOut)&&e.signOut.constructor?e.signOut.constructor.name||"[Unknown Object]":i(e.signOut)));return e}return l(t,e),u(t,[{key:"signOut",value:function(){f["default"].request({url:_.logout,type:"get",data:{},success:function(e){window.location.href="./index.html"},error:function(e){message.error(e.err_msg)}})}},{key:"render",value:function(){return h["default"].createElement("div",{className:"setting "},h["default"].createElement(O["default"],{title:""}),h["default"].createElement(v["default"],{className:"mt5",title:"Profile",type:"multiple",shape:"forward",href:"./profile.html"}),h["default"].createElement(v["default"],{title:"General",type:"multiple",shape:"forward",href:"./about.html"}),h["default"].createElement(v["default"],{className:"mb5",title:"About Us",type:"multiple",shape:"forward",href:"./about.html"}),h["default"].createElement(v["default"],{className:"none",title:"Sign Out",type:"single",shape:"forward",icon:"right",click:this.signOut}))}}]),t}(p["default"]);y["default"].render(h["default"].createElement(E,null),document.getElementById("react_content"))},6:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c,f,s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=n(1),d=r(p),h=n(5),b=r(h);n(4);var y=(f=c=function(e){function t(){return l(this,t),i(this,Object.getPrototypeOf(t).call(this))}return u(t,e),s(t,[{key:"handleClick",value:function(){window.history.go(-1)}},{key:"render",value:function(){var e,t,n=this.props,r=n.className,l=n.prefixCls,i=n.bcls,u=n.onAdd,c=(a(n,["className","prefixCls","bcls","onAdd"]),(0,b["default"])((e={},o(e,l,!0),o(e,r,r),e))),f=(0,b["default"])({none:i,header_goback:!0});return u&&(t=d["default"].createElement("i",{className:"add",onClick:u})),d["default"].createElement("header",{className:c},d["default"].createElement("div",{className:f,onClick:this.handleClick.bind(this)},d["default"].createElement("span",null)),d["default"].createElement("h2",null,this.props.title),t)}}]),t}(p.Component),c.defaultProps={prefixCls:"head",title:""},f);t["default"]=y,e.exports=t["default"]},7:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),c=(r(u),function(e){function t(){o(this,t);var e=a(this,Object.getPrototypeOf(t).call(this));return e.state={loading:!1},e}return l(t,e),i(t,[{key:"showLoading",value:function(){this.state.loading=!0,this.forceUpdate()}},{key:"closeLoading",value:function(){this.state.loading=!1,this.forceUpdate()}}]),t}(u.Component));t["default"]=c,e.exports=t["default"]},25:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var c,f,s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=n(1),d=r(p),h=n(10),b=n(5),y=r(b);n(4);var m=(f=c=function(e){function t(){l(this,t);var e=i(this,Object.getPrototypeOf(t).call(this));return e.onchange=function(e){console.log(e)},e}return u(t,e),s(t,[{key:"handleClick",value:function(){this.props.href&&(window.location.href=this.props.href),this.props.click&&this.props.click.call(this)}},{key:"render",value:function(){var e,t=this.props,n=t.type,r=t.shape,l=t.title,i=t.className,u=t.prefixCls,c=t.val,f=(t.href,a(t,["type","shape","title","className","prefixCls","val","href"]),(0,y["default"])((e={},o(e,u,!0),o(e,u+"-"+n,n),o(e,u+"-"+r,"forward"==r),o(e,i,i),e)));return d["default"].createElement("p",{className:f,onClick:this.handleClick.bind(this)},l,d["default"].createElement("span",{className:"val"},c),"switch"==r?d["default"].createElement(h.Switch,{defaultChecked:!1,onChange:this.onChange}):null)}}]),t}(p.Component),c.defaultProps={prefixCls:"heading"},f);t["default"]=m,e.exports=t["default"]}});