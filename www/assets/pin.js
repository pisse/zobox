webpackJsonp([15],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(11);var u=n(1),c=r(u),f=n(10),s=r(f),p=(n(8),n(6)),d=r(p),h=n(12),b=(r(h),n(13)),y=(r(b),function(e){function t(){return o(this,t),a(this,Object.getPrototypeOf(t).call(this))}return l(t,e),i(t,[{key:"onChange",value:function(e){console.log(e)}},{key:"render",value:function(){return c["default"].createElement("div",{className:"register"},c["default"].createElement(d["default"],{title:"Users"}),c["default"].createElement("form",{className:"form no-icon mt5"},c["default"].createElement("input",{type:"text",id:"cur_pin",placeholder:"Current PIN",value:"aaa",onChange:this.onChange.bind(this),required:!0}),c["default"].createElement("input",{type:"password",id:"new_pin",placeholder:"New PIN",onChange:this.onChange.bind(this),required:!0}),c["default"].createElement("input",{type:"password",id:"new_pin",placeholder:"New PIN",onChange:this.onChange.bind(this),required:!0})))}}]),t}(u.Component));s["default"].render(c["default"].createElement(y,null),document.getElementById("react_content"))},6:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c,f,s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=n(1),d=r(p),h=n(3),b=r(h);n(7);var y=(f=c=function(e){function t(){return l(this,t),i(this,Object.getPrototypeOf(t).call(this))}return u(t,e),s(t,[{key:"handleClick",value:function(){window.history.go(-1)}},{key:"render",value:function(){var e,t,n=this.props,r=n.className,l=n.prefixCls,i=n.bcls,u=n.onAdd,c=(a(n,["className","prefixCls","bcls","onAdd"]),(0,b["default"])((e={},o(e,l,!0),o(e,r,r),e))),f=(0,b["default"])({none:i,header_goback:!0});return u&&(t=d["default"].createElement("i",{className:"add",onClick:u})),d["default"].createElement("header",{className:c},d["default"].createElement("div",{className:f,onClick:this.handleClick.bind(this)},d["default"].createElement("span",null)),d["default"].createElement("h2",null,this.props.title),t)}}]),t}(p.Component),c.defaultProps={prefixCls:"head",title:""},f);t["default"]=y,e.exports=t["default"]}});