webpackJsonp([11],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(11),f=r(s),p=n(9),d=r(p),y=n(1),h=r(y),m=n(10),b=r(m),v=n(8),k=n(6),g=r(k),_=n(12),w=(r(_),n(13)),O=(r(w),n(3)),j=r(O),E=n(29),C=r(E),P=n(17),x=r(P),T=x["default"].service,N=function(e){function t(){i(this,t);var e=a(this,Object.getPrototypeOf(t).call(this)),n=f["default"].getUrlParams();if(e.state={btnActive:"",loading:!1,d_t:n.d_t},e.keyup=e.keyup.bind(e),"function"!=typeof e.keyup)throw new TypeError('Value of "this.keyup" violates contract, expected () => any got '+(null===e.keyup?"null":"object"===u(e.keyup)&&e.keyup.constructor?e.keyup.constructor.name||"[Unknown Object]":u(e.keyup)));if(e.handleClick=e.handleClick.bind(e),"function"!=typeof e.handleClick)throw new TypeError('Value of "this.handleClick" violates contract, expected () => any got '+(null===e.handleClick?"null":"object"===u(e.handleClick)&&e.handleClick.constructor?e.handleClick.constructor.name||"[Unknown Object]":u(e.handleClick)));return e}return l(t,e),c(t,[{key:"componentDidMount",value:function(){this.init()}},{key:"init",value:function(){var e=this,t=this.state.imei;this.showLoading(),f["default"].request({url:T.deviceinfo,type:"get",data:{imei:t,mobile:"xx",skey:"xx"},success:function(t){e.closeLoading(),C["default"].extend(e.state,t),e.forceUpdate()},error:function(e){message.error(e.err_msg)}})}},{key:"getByType",value:function(e){var t="";switch(e=parseInt(e),console.log(e),e){case 1:t="name";break;case 2:t="sim_phone";break;case 3:t="sim_imei";break;case 4:t="imei";break;case 5:t="sensitivity";break;case 6:t="pin";break;default:t=""}return t}},{key:"handleClick",value:function(){var e=this;if("active"==this.state.btnActive){this.showLoading();var t=this.state,n=t.name,r=t.sim_phone,i=t.sim_imei,a=t.imei,l=t.sensitivity,u=t.alarm,c=t.gps,s=(o(t,["name","sim_phone","sim_imei","imei","sensitivity","alarm","gps"]),{name:n,sim_phone:r,sim_imei:i,imei:a,sensitivity:l,alarm:u,gps:c}),p=this.state.d_t,d=this.getByType(p),y=this.refs.ipt.value;s[d]=y,f["default"].request({url:T.modprofile,type:"get",data:s,success:function(t){e.closeLoading()},error:function(e){}})}}},{key:"keyup",value:function(){var e=this.refs.ipt.value;""!=e?this.state.btnActive="active":this.state.btnActive="",this.forceUpdate()}},{key:"render",value:function(){var e,t=this.state,n=t.d_t,r=(t.first_name,t.last_name,t.country,t.state,t.city,t.street,t.zipcode,o(t,["d_t","first_name","last_name","country","state","city","street","zipcode"]),(0,j["default"])({primary:!0,active:this.state.btnActive})),i=this.getByType(n),a=this.state[i];return a&&(e=h["default"].createElement("input",{type:"text",ref:"ipt",id:"name",defaultValue:a,onKeyUp:this.keyup,required:!0})),h["default"].createElement("div",{className:"register"},h["default"].createElement(g["default"],{title:"Device"}),h["default"].createElement(v.Spin,{spinning:this.state.loading},h["default"].createElement("form",{className:"form no-icon mt5"},h["default"].createElement("label",null,e))),h["default"].createElement("div",{className:"sign_btn"},h["default"].createElement(v.Button,{type:r,onClick:this.handleClick},"Confirm")))}}]),t}(d["default"]);b["default"].render(h["default"].createElement(N,null),document.getElementById("react_content"))},6:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c,s,f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=n(1),d=r(p),y=n(3),h=r(y);n(7);var m=(s=c=function(e){function t(){return a(this,t),l(this,Object.getPrototypeOf(t).call(this))}return u(t,e),f(t,[{key:"handleClick",value:function(){window.history.go(-1)}},{key:"render",value:function(){var e,t,n=this.props,r=n.className,a=n.prefixCls,l=n.bcls,u=n.onAdd,c=(i(n,["className","prefixCls","bcls","onAdd"]),(0,h["default"])((e={},o(e,a,!0),o(e,r,r),e))),s=(0,h["default"])({none:l,header_goback:!0});return u&&(t=d["default"].createElement("i",{className:"add",onClick:u})),d["default"].createElement("header",{className:c},d["default"].createElement("div",{className:s,onClick:this.handleClick.bind(this)},d["default"].createElement("span",null)),d["default"].createElement("h2",null,this.props.title),t)}}]),t}(p.Component),c.defaultProps={prefixCls:"head",title:""},s);t["default"]=m,e.exports=t["default"]},9:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),c=(r(u),function(e){function t(){o(this,t);var e=i(this,Object.getPrototypeOf(t).call(this));return e.state={loading:!1},e}return a(t,e),l(t,[{key:"showLoading",value:function(){this.state.loading=!0,this.forceUpdate()}},{key:"closeLoading",value:function(){this.state.loading=!1,this.forceUpdate()}}]),t}(u.Component));t["default"]=c,e.exports=t["default"]}});