webpackJsonp([10],{0:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n(12),c=a(s),f=n(7),d=a(f),p=n(1),h=a(p),g=n(11),m=a(g),v=n(10),y=n(6),b=a(y),_=n(5),F=a(_),w=n(15),C=a(w),x=n(135),A=a(x),$=n(26),S=a($),E=C["default"].service,O=v.Select.Option,D=function(e){function t(){i(this,t);var e=r(this,Object.getPrototypeOf(t).call(this));if(e.state={loading:!1,imeiValue:"",simimeiValue:"",pinValue:"",isIphone:"iPhone"==navigator.platform,dftCountryValue:"1",dftCountryName:"United States",btnActive:""},e.validate=e.validate.bind(e),"function"!=typeof e.validate)throw new TypeError('Value of "this.validate" violates contract, expected () => any got '+(null===e.validate?"null":"object"===u(e.validate)&&e.validate.constructor?e.validate.constructor.name||"[Unknown Object]":u(e.validate)));if(e.addDevice=e.addDevice.bind(e),"function"!=typeof e.addDevice)throw new TypeError('Value of "this.addDevice" violates contract, expected () => any got '+(null===e.addDevice?"null":"object"===u(e.addDevice)&&e.addDevice.constructor?e.addDevice.constructor.name||"[Unknown Object]":u(e.addDevice)));if(e.simimeiChange=e.simimeiChange.bind(e),"function"!=typeof e.simimeiChange)throw new TypeError('Value of "this.simimeiChange" violates contract, expected (any) => any got '+(null===e.simimeiChange?"null":"object"===u(e.simimeiChange)&&e.simimeiChange.constructor?e.simimeiChange.constructor.name||"[Unknown Object]":u(e.simimeiChange)));if(e.pinChange=e.pinChange.bind(e),"function"!=typeof e.pinChange)throw new TypeError('Value of "this.pinChange" violates contract, expected (any) => any got '+(null===e.pinChange?"null":"object"===u(e.pinChange)&&e.pinChange.constructor?e.pinChange.constructor.name||"[Unknown Object]":u(e.pinChange)));if(e.imeiChange=e.imeiChange.bind(e),"function"!=typeof e.imeiChange)throw new TypeError('Value of "this.imeiChange" violates contract, expected (any) => any got '+(null===e.imeiChange?"null":"object"===u(e.imeiChange)&&e.imeiChange.constructor?e.imeiChange.constructor.name||"[Unknown Object]":u(e.imeiChange)));if(e.onCountryChange=e.onCountryChange.bind(e),"function"!=typeof e.onCountryChange)throw new TypeError('Value of "this.onCountryChange" violates contract, expected (any) => any got '+(null===e.onCountryChange?"null":"object"===u(e.onCountryChange)&&e.onCountryChange.constructor?e.onCountryChange.constructor.name||"[Unknown Object]":u(e.onCountryChange)));return e}return o(t,e),l(t,[{key:"onCountryChange",value:function(e){this.state.country=e[0]}},{key:"onIosCountryChange",value:function(e){console.log(e)}},{key:"validate",value:function(){var e=this.state.imeiValue.replace(/-/g,""),t=this.refs.name.value,n=(this.state.pinValue,this.refs.sim_phone.value);""!=e&&""!=t&&""!=n&&S["default"].isLength(e,15)?this.state.btnActive="active":this.state.btnActive="",this.forceUpdate()}},{key:"imeiChange",value:function(e){var t=e.target.value;t=t.replace(/-/g,"").substring(0,15).replace(/(\w{5})(?=[^$])/g,"$1-"),this.setState({imeiValue:t})}},{key:"pinChange",value:function(e){var t=e.target.value;t=t.substring(0,6),this.setState({pinValue:t})}},{key:"simimeiChange",value:function(e){var t=e.target.value;t=t.replace(/-/g,"").substring(0,20).replace(/(\w{5})(?=[^$])/g,"$1-"),this.setState({simimeiValue:t})}},{key:"addDevice",value:function(){var e=this;if("active"==this.state.btnActive){var t=this.state.imeiValue.replace(/-/g,""),n=this.state.pinValue||"1234",a=this.refs.name.value,i=this.refs.sim_phone.value,r=this.state.country;this.showLoading(),c["default"].request({url:E.adddevice,type:"get",data:{name:a,imei:t,passwd:n,sim_phone:i,sim_country:r},success:function(t){e.closeLoading(),window.location.href="./main.html"},error:function(t){e.closeLoading(),v.message.error(t.err_msg)}})}}},{key:"render",value:function(){var e,t=this,n=(0,F["default"])({primary:!0,active:this.state.btnActive}),a=A["default"].map(function(e,n){return t.state.isIphone?h["default"].createElement("option",{key:n,value:e.value}," ",e.name," "):h["default"].createElement(O,{key:n}," ",e.name," ")});return e=this.state.isIphone?h["default"].createElement("select",{name:"country",defaultValue:this.state.dftCountryValue},a):h["default"].createElement(v.Select,{showSearch:!0,optionFilterProp:"children",defaultValue:this.state.dftCountryValue,onChange:this.onCountryChange},a),h["default"].createElement("div",{className:"register"},h["default"].createElement(b["default"],{title:""}),h["default"].createElement(v.Spin,{spinning:this.state.loading},h["default"].createElement("form",{className:"form no-icon mt5"},h["default"].createElement("label",null,h["default"].createElement("input",{type:"text",value:this.state.imeiValue,ref:"imei",id:"imei",placeholder:"Device IMEI",onChange:this.imeiChange,onKeyUp:this.validate,required:!0})),h["default"].createElement("label",null,h["default"].createElement("input",{type:"text",ref:"name",id:"Name",placeholder:"Device Name",onKeyUp:this.validate,required:!0})),h["default"].createElement("label",null,h["default"].createElement("input",{type:"password",value:this.state.pinValue,ref:"pwd",onChange:this.pinChange,id:"pwd",placeholder:"Device PIN (length less than 6)",onKeyUp:this.validate,required:!0})),h["default"].createElement("label",{className:"pl8 pr8"},e),h["default"].createElement("label",null,h["default"].createElement("input",{type:"text",ref:"sim_phone",id:"sim_phone",placeholder:"SIM Phone",onKeyUp:this.validate,required:!0})))),h["default"].createElement("div",{className:"sign_btn mt5"},h["default"].createElement(v.Button,{type:n,onClick:this.addDevice},"Add Device")))}}]),t}(d["default"]);m["default"].render(h["default"].createElement(D,null),document.getElementById("react_content"))},6:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s,c,f=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),d=n(1),p=a(d),h=n(5),g=a(h);n(3);var m=(c=s=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).call(this))}return l(t,e),f(t,[{key:"handleClick",value:function(){window.history.go(-1)}},{key:"render",value:function(){var e,t,n=this.props,a=n.className,o=n.prefixCls,u=n.bcls,l=n.onAdd,s=(r(n,["className","prefixCls","bcls","onAdd"]),(0,g["default"])((e={},i(e,o,!0),i(e,a,a),e))),c=(0,g["default"])({none:u,header_goback:!0});return l&&(t=p["default"].createElement("i",{className:"add",onClick:l})),p["default"].createElement("header",{className:s},p["default"].createElement("div",{className:c,onClick:this.handleClick.bind(this)},p["default"].createElement("span",null)),p["default"].createElement("h2",null,this.props.title),t)}}]),t}(d.Component),s.defaultProps={prefixCls:"head",title:""},c);t["default"]=m,e.exports=t["default"]},7:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n(1),s=(a(l),function(e){function t(){i(this,t);var e=r(this,Object.getPrototypeOf(t).call(this));return e.state={loading:!1},e}return o(t,e),u(t,[{key:"showLoading",value:function(){this.state.loading=!0,this.forceUpdate()}},{key:"closeLoading",value:function(){this.state.loading=!1,this.forceUpdate()}}]),t}(l.Component));t["default"]=s,e.exports=t["default"]},26:function(e,t,n){var a,i,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};/*!
	 * Copyright (c) 2016 Chris O'Hara <cohara87@gmail.com>
	 * 
	 * Permission is hereby granted, free of charge, to any person obtaining
	 * a copy of this software and associated documentation files (the
	 * "Software"), to deal in the Software without restriction, including
	 * without limitation the rights to use, copy, modify, merge, publish,
	 * distribute, sublicense, and/or sell copies of the Software, and to
	 * permit persons to whom the Software is furnished to do so, subject to
	 * the following conditions:
	 * 
	 * The above copyright notice and this permission notice shall be
	 * included in all copies or substantial portions of the Software.
	 * 
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
	 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
	 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
	 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	 */
!function(o,u){"object"==r(t)&&"undefined"!=typeof e?e.exports=u():(a=u,i="function"==typeof a?a.call(t,n,t,e):a,!(void 0!==i&&(e.exports=i)))}(void 0,function(){"use strict";function e(e){if("string"!=typeof e)throw new TypeError("This library (validator.js) validates strings only")}function t(t){return e(t),t=Date.parse(t),isNaN(t)?null:new Date(t)}function n(t){return e(t),parseFloat(t)}function a(t,n){return e(t),parseInt(t,n||10)}function i(t,n){return e(t),n?"1"===t||"true"===t:"0"!==t&&"false"!==t&&""!==t}function o(t,n){return e(t),t===n}function u(e){return"object"===("undefined"==typeof e?"undefined":ce["typeof"](e))&&null!==e?e="function"==typeof e.toString?e.toString():"[object Object]":(null===e||"undefined"==typeof e||isNaN(e)&&!e.length)&&(e=""),String(e)}function l(t,n){return e(t),t.indexOf(u(n))>=0}function s(t,n,a){return e(t),"[object RegExp]"!==Object.prototype.toString.call(n)&&(n=new RegExp(n,a)),n.test(t)}function c(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=arguments[1];for(var n in t)"undefined"==typeof e[n]&&(e[n]=t[n]);return e}function f(t,n){e(t);var a=void 0,i=void 0;"object"===("undefined"==typeof n?"undefined":ce["typeof"](n))?(a=n.min||0,i=n.max):(a=arguments[1],i=arguments[2]);var r=encodeURI(t).split(/%..|./).length-1;return r>=a&&("undefined"==typeof i||i>=r)}function d(t,n){e(t),n=c(n,de),n.allow_trailing_dot&&"."===t[t.length-1]&&(t=t.substring(0,t.length-1));var a=t.split(".");if(n.require_tld){var i=a.pop();if(!a.length||!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(i))return!1}for(var r,o=0;o<a.length;o++){if(r=a[o],n.allow_underscores&&(r=r.replace(/_/g,"")),!/^[a-z\u00a1-\uffff0-9-]+$/i.test(r))return!1;if(/[\uff01-\uff5e]/.test(r))return!1;if("-"===r[0]||"-"===r[r.length-1])return!1}return!0}function p(t,n){if(e(t),n=c(n,pe),n.allow_display_name){var a=t.match(he);a&&(t=a[1])}var i=t.split("@"),r=i.pop(),o=i.join("@"),u=r.toLowerCase();if("gmail.com"!==u&&"googlemail.com"!==u||(o=o.replace(/\./g,"").toLowerCase()),!f(o,{max:64})||!f(r,{max:256}))return!1;if(!d(r,{require_tld:n.require_tld}))return!1;if('"'===o[0])return o=o.slice(1,o.length-1),n.allow_utf8_local_part?ye.test(o):me.test(o);for(var l=n.allow_utf8_local_part?ve:ge,s=o.split("."),p=0;p<s.length;p++)if(!l.test(s[p]))return!1;return!0}function h(t){var n=arguments.length<=1||void 0===arguments[1]?"":arguments[1];if(e(t),n=String(n),!n)return h(t,4)||h(t,6);if("4"===n){if(!be.test(t))return!1;var a=t.split(".").sort(function(e,t){return e-t});return a[3]<=255}if("6"===n){var i=t.split(":"),r=!1,o=h(i[i.length-1],4),u=o?7:8;if(i.length>u)return!1;if("::"===t)return!0;"::"===t.substr(0,2)?(i.shift(),i.shift(),r=!0):"::"===t.substr(t.length-2)&&(i.pop(),i.pop(),r=!0);for(var l=0;l<i.length;++l)if(""===i[l]&&l>0&&l<i.length-1){if(r)return!1;r=!0}else if(o&&l===i.length-1);else if(!_e.test(i[l]))return!1;return r?i.length>=1:i.length===u}return!1}function g(t,n){if(e(t),!t||t.length>=2083||/\s/.test(t))return!1;if(0===t.indexOf("mailto:"))return!1;n=c(n,Fe);var a=void 0,i=void 0,r=void 0,o=void 0,u=void 0,l=void 0,s=void 0;if(s=t.split("#"),t=s.shift(),s=t.split("?"),t=s.shift(),s=t.split("://"),s.length>1){if(a=s.shift(),n.require_valid_protocol&&-1===n.protocols.indexOf(a))return!1}else{if(n.require_protocol)return!1;n.allow_protocol_relative_urls&&"//"===t.substr(0,2)&&(s[0]=t.substr(2))}return t=s.join("://"),s=t.split("/"),t=s.shift(),s=t.split("@"),s.length>1&&(i=s.shift(),i.indexOf(":")>=0&&i.split(":").length>2)?!1:(o=s.join("@"),s=o.split(":"),r=s.shift(),s.length&&(l=s.join(":"),u=parseInt(l,10),!/^[0-9]+$/.test(l)||0>=u||u>65535)?!1:h(r)||d(r,n)||"localhost"===r?n.host_whitelist&&-1===n.host_whitelist.indexOf(r)?!1:!n.host_blacklist||-1===n.host_blacklist.indexOf(r):!1)}function m(t){return e(t),we.test(t)}function v(t){return e(t),["true","false","1","0"].indexOf(t)>=0}function y(t){var n=arguments.length<=1||void 0===arguments[1]?"en-US":arguments[1];if(e(t),n in Ce)return Ce[n].test(t);throw new Error("Invalid locale '"+n+"'")}function b(t){var n=arguments.length<=1||void 0===arguments[1]?"en-US":arguments[1];if(e(t),n in xe)return xe[n].test(t);throw new Error("Invalid locale '"+n+"'")}function _(t){return e(t),De.test(t)}function F(t){return e(t),t===t.toLowerCase()}function w(t){return e(t),t===t.toUpperCase()}function C(t){return e(t),Ie.test(t)}function x(t){return e(t),je.test(t)}function A(t){return e(t),Ne.test(t)}function $(t){return e(t),je.test(t)&&Ne.test(t)}function S(t){return e(t),Pe.test(t)}function E(t){return e(t),ke.test(t)}function O(t,n){e(t),n=n||{};var a=n.hasOwnProperty("allow_leading_zeroes")&&n.allow_leading_zeroes?Me:Ue,i=!n.hasOwnProperty("min")||t>=n.min,r=!n.hasOwnProperty("max")||t<=n.max;return a.test(t)&&i&&r}function D(t,n){return e(t),n=n||{},""===t||"."===t?!1:Be.test(t)&&(!n.hasOwnProperty("min")||t>=n.min)&&(!n.hasOwnProperty("max")||t<=n.max)}function I(t){return e(t),""!==t&&Te.test(t)}function j(t){return e(t),Ze.test(t)}function N(t,a){return e(t),n(t)%parseInt(a,10)===0}function P(t){return e(t),Le.test(t)}function k(t){e(t);try{var n=JSON.parse(t);return!!n&&"object"===("undefined"==typeof n?"undefined":ce["typeof"](n))}catch(a){}return!1}function U(t){return e(t),0===t.length}function M(t,n){e(t);var a=void 0,i=void 0;"object"===("undefined"==typeof n?"undefined":ce["typeof"](n))?(a=n.min||0,i=n.max):(a=arguments[1],i=arguments[2]);var r=t.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g)||[],o=t.length-r.length;return o>=a&&("undefined"==typeof i||i>=o)}function B(t){var n=arguments.length<=1||void 0===arguments[1]?"all":arguments[1];e(t);var a=Re[n];return a&&a.test(t)}function T(t){return e(t),j(t)&&24===t.length}function Z(t){return e(t),ze.test(t)}function L(e){var t=e.match(ze),n=void 0,a=void 0,i=void 0,r=void 0;if(t){if(n=t[21],!n)return t[12]?null:0;if("z"===n||"Z"===n)return 0;a=t[22],-1!==n.indexOf(":")?(i=parseInt(t[23],10),r=parseInt(t[24],10)):(i=0,r=parseInt(t[23],10))}else{if(e=e.toLowerCase(),n=e.match(/(?:\s|gmt\s*)(-|\+)(\d{1,4})(\s|$)/),!n)return-1!==e.indexOf("gmt")?0:null;a=n[1];var o=n[2];3===o.length&&(o="0"+o),o.length<=2?(i=0,r=parseInt(o,10)):(i=parseInt(o.slice(0,2),10),r=parseInt(o.slice(2,4),10))}return(60*i+r)*("-"===a?1:-1)}function R(t){e(t);var n=new Date(Date.parse(t));if(isNaN(n))return!1;var a=L(t);if(null!==a){var i=n.getTimezoneOffset()-a;n=new Date(n.getTime()+6e4*i)}var r=String(n.getDate()),o=void 0,u=void 0,l=void 0;return(u=t.match(/(^|[^:\d])[23]\d([^:\d]|$)/g))?(o=u.map(function(e){return e.match(/\d+/g)[0]}).join("/"),l=String(n.getFullYear()).slice(-2),o===r||o===l?!0:o===""+r/l||o===""+l/r):!0}function z(n){var a=arguments.length<=1||void 0===arguments[1]?String(new Date):arguments[1];e(n);var i=t(a),r=t(n);return!!(r&&i&&r>i)}function V(n){var a=arguments.length<=1||void 0===arguments[1]?String(new Date):arguments[1];e(n);var i=t(a),r=t(n);return!!(r&&i&&i>r)}function q(t,n){e(t);var a=void 0;if("[object Array]"===Object.prototype.toString.call(n)){var i=[];for(a in n)({}).hasOwnProperty.call(n,a)&&(i[a]=u(n[a]));return i.indexOf(t)>=0}return"object"===("undefined"==typeof n?"undefined":ce["typeof"](n))?n.hasOwnProperty(t):n&&"function"==typeof n.indexOf?n.indexOf(t)>=0:!1}function G(t){e(t);var n=t.replace(/[^0-9]+/g,"");if(!Ve.test(n))return!1;for(var a=0,i=void 0,r=void 0,o=void 0,u=n.length-1;u>=0;u--)i=n.substring(u,u+1),r=parseInt(i,10),o?(r*=2,a+=r>=10?r%10+1:r):a+=r,o=!o;return!!(a%10===0?n:!1)}function K(t){if(e(t),!qe.test(t))return!1;for(var n=t.replace(/[A-Z]/g,function(e){return parseInt(e,36)}),a=0,i=void 0,r=void 0,o=!0,u=n.length-2;u>=0;u--)i=n.substring(u,u+1),r=parseInt(i,10),o?(r*=2,a+=r>=10?r+1:r):a+=r,o=!o;return parseInt(t.substr(t.length-1),10)===(1e4-a)%10}function H(t){var n=arguments.length<=1||void 0===arguments[1]?"":arguments[1];if(e(t),n=String(n),!n)return H(t,10)||H(t,13);var a=t.replace(/[\s-]+/g,""),i=0,r=void 0;if("10"===n){if(!Ge.test(a))return!1;for(r=0;9>r;r++)i+=(r+1)*a.charAt(r);if(i+="X"===a.charAt(9)?100:10*a.charAt(9),i%11===0)return!!a}else if("13"===n){if(!Ke.test(a))return!1;for(r=0;12>r;r++)i+=He[r%2]*a.charAt(r);if(a.charAt(12)-(10-i%10)%10===0)return!!a}return!1}function J(t,n){return e(t),n in Je?Je[n].test(t):!1}function W(e){var t="(\\"+e.symbol.replace(/\./g,"\\.")+")"+(e.require_symbol?"":"?"),n="-?",a="[1-9]\\d*",i="[1-9]\\d{0,2}(\\"+e.thousands_separator+"\\d{3})*",r=["0",a,i],o="("+r.join("|")+")?",u="(\\"+e.decimal_separator+"\\d{2})?",l=o+u;return e.allow_negatives&&!e.parens_for_negatives&&(e.negative_sign_after_digits?l+=n:e.negative_sign_before_digits&&(l=n+l)),e.allow_negative_sign_placeholder?l="( (?!\\-))?"+l:e.allow_space_after_symbol?l=" ?"+l:e.allow_space_after_digits&&(l+="( (?!$))?"),e.symbol_after_digits?l+=t:l=t+l,e.allow_negatives&&(e.parens_for_negatives?l="(\\("+l+"\\)|"+l+")":e.negative_sign_before_digits||e.negative_sign_after_digits||(l=n+l)),new RegExp("^(?!-? )(?=.*\\d)"+l+"$")}function Y(t,n){return e(t),n=c(n,We),W(n).test(t)}function Q(t){e(t);var n=t.length;if(!n||n%4!==0||Ye.test(t))return!1;var a=t.indexOf("=");return-1===a||a===n-1||a===n-2&&"="===t[n-1]}function X(t){return e(t),Qe.test(t)}function ee(t,n){e(t);var a=n?new RegExp("^["+n+"]+","g"):/^\s+/g;return t.replace(a,"")}function te(t,n){e(t);var a=n?new RegExp("["+n+"]+$","g"):/\s+$/g;return t.replace(a,"")}function ne(t,n){e(t);var a=n?new RegExp("^["+n+"]+|["+n+"]+$","g"):/^\s+|\s+$/g;return t.replace(a,"")}function ae(t){return e(t),t.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\//g,"&#x2F;").replace(/\`/g,"&#96;")}function ie(t){return e(t),t.replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#x27;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&#x2F;/g,"/").replace(/&#96;/g,"`")}function re(t,n){return e(t),t.replace(new RegExp("["+n+"]+","g"),"")}function oe(t,n){e(t);var a=n?"\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F":"\\x00-\\x1F\\x7F";return re(t,a)}function ue(t,n){return e(t),t.replace(new RegExp("[^"+n+"]+","g"),"")}function le(t,n){e(t);for(var a=t.length-1;a>=0;a--)if(-1===n.indexOf(t[a]))return!1;return!0}function se(e,t){if(t=c(t,Xe),!p(e))return!1;var n=e.split("@",2);if(n[1]=n[1].toLowerCase(),"gmail.com"===n[1]||"googlemail.com"===n[1]){if(t.remove_extension&&(n[0]=n[0].split("+")[0]),t.remove_dots&&(n[0]=n[0].replace(/\./g,"")),!n[0].length)return!1;n[0]=n[0].toLowerCase(),n[1]="gmail.com"}else t.lowercase&&(n[0]=n[0].toLowerCase());return n.join("@")}var ce={};ce["typeof"]="function"==typeof Symbol&&"symbol"==r(Symbol.iterator)?function(e){return"undefined"==typeof e?"undefined":r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":"undefined"==typeof e?"undefined":r(e)};for(var fe,de={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1},pe={allow_display_name:!1,allow_utf8_local_part:!0,require_tld:!0},he=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i,ge=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,me=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,ve=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,ye=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i,be=/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/,_e=/^[0-9A-F]{1,4}$/i,Fe={protocols:["http","https","ftp"],require_tld:!0,require_protocol:!1,require_valid_protocol:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_protocol_relative_urls:!1},we=/^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/,Ce={"en-US":/^[A-Z]+$/i,"cs-CZ":/^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,"de-DE":/^[A-ZÄÖÜß]+$/i,"es-ES":/^[A-ZÁÉÍÑÓÚÜ]+$/i,"fr-FR":/^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,"nl-NL":/^[A-ZÉËÏÓÖÜ]+$/i,"hu-HU":/^[A-ZÁÉÓÖŐÚÜŰ]+$/i,"pl-PL":/^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,"pt-PT":/^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,"ru-RU":/^[А-ЯЁа-яё]+$/i,"tr-TR":/^[A-ZÇĞİıÖŞÜ]+$/i,ar:/^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/},xe={"en-US":/^[0-9A-Z]+$/i,"cs-CZ":/^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,"de-DE":/^[0-9A-ZÄÖÜß]+$/i,"es-ES":/^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,"fr-FR":/^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,"hu-HU":/^[0-9A-ZÁÉÓÖŐÚÜŰ]+$/i,"nl-NL":/^[0-9A-ZÉËÏÓÖÜ]+$/i,"pl-PL":/^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,"pt-PT":/^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,"ru-RU":/^[0-9А-ЯЁа-яё]+$/i,"tr-TR":/^[0-9A-ZÇĞİıÖŞÜ]+$/i,ar:/^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/},Ae=["AU","GB","HK","IN","NZ","ZA","ZM"],$e=0;$e<Ae.length;$e++)fe="en-"+Ae[$e],Ce[fe]=Ce["en-US"],xe[fe]=xe["en-US"];for(var Se,Ee=["AE","BH","DZ","EG","IQ","JO","KW","LB","LY","MA","QM","QA","SA","SD","SY","TN","YE"],Oe=0;Oe<Ee.length;Oe++)Se="ar-"+Ee[Oe],Ce[Se]=Ce.ar,xe[Se]=xe.ar;var De=/^[-+]?[0-9]+$/,Ie=/^[\x00-\x7F]+$/,je=/[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/,Ne=/[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/,Pe=/[^\x00-\x7F]/,ke=/[\uD800-\uDBFF][\uDC00-\uDFFF]/,Ue=/^(?:[-+]?(?:0|[1-9][0-9]*))$/,Me=/^[-+]?[0-9]+$/,Be=/^(?:[-+]?(?:[0-9]+))?(?:\.[0-9]*)?(?:[eE][\+\-]?(?:[0-9]+))?$/,Te=/^[-+]?([0-9]+|\.[0-9]+|[0-9]+\.[0-9]+)$/,Ze=/^[0-9A-F]+$/i,Le=/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i,Re={3:/^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,4:/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,5:/^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,all:/^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i},ze=/^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/,Ve=/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})|62[0-9]{14}$/,qe=/^[A-Z]{2}[0-9A-Z]{9}[0-9]$/,Ge=/^(?:[0-9]{9}X|[0-9]{10})$/,Ke=/^(?:[0-9]{13})$/,He=[1,3],Je={"ar-SY":/^(!?(\+?963)|0)?9\d{8}$/,"en-US":/^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/,"cs-CZ":/^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,"de-DE":/^(\+?49[ \.\-])?([\(]{1}[0-9]{1,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,"da-DK":/^(\+?45)?(\d{8})$/,"el-GR":/^(\+?30)?(69\d{8})$/,"en-AU":/^(\+?61|0)4\d{8}$/,"en-GB":/^(\+?44|0)7\d{9}$/,"en-HK":/^(\+?852\-?)?[569]\d{3}\-?\d{4}$/,"en-IN":/^(\+?91|0)?[789]\d{9}$/,"en-NZ":/^(\+?64|0)2\d{7,9}$/,"en-ZA":/^(\+?27|0)\d{9}$/,"en-ZM":/^(\+?26)?09[567]\d{7}$/,"es-ES":/^(\+?34)?(6\d{1}|7[1234])\d{7}$/,"fi-FI":/^(\+?358|0)\s?(4(0|1|2|4|5)?|50)\s?(\d\s?){4,8}\d$/,"fr-FR":/^(\+?33|0)[67]\d{8}$/,"hu-HU":/^(\+?36)(20|30|70)\d{7}$/,"ms-MY":/^(\+?6?01){1}(([145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/,"nb-NO":/^(\+?47)?[49]\d{7}$/,"nn-NO":/^(\+?47)?[49]\d{7}$/,"pt-BR":/^(\+?55|0)\-?[1-9]{2}\-?[2-9]{1}\d{3,4}\-?\d{4}$/,"pt-PT":/^(\+?351)?9[1236]\d{7}$/,"ru-RU":/^(\+?7|8)?9\d{9}$/,"tr-TR":/^(\+?90|0)?5\d{9}$/,"vi-VN":/^(\+?84|0)?((1(2([0-9])|6([2-9])|88|99))|(9((?!5)[0-9])))([0-9]{7})$/,"zh-CN":/^(\+?0?86\-?)?1[345789]\d{9}$/,"zh-TW":/^(\+?886\-?|0)?9\d{8}$/};Je["en-CA"]=Je["en-US"];var We={symbol:"$",require_symbol:!1,allow_space_after_symbol:!1,symbol_after_digits:!1,allow_negatives:!0,parens_for_negatives:!1,negative_sign_before_digits:!1,negative_sign_after_digits:!1,allow_negative_sign_placeholder:!1,thousands_separator:",",decimal_separator:".",allow_space_after_digits:!1},Ye=/[^A-Z0-9+\/=]/i,Qe=/^\s*data:([a-z]+\/[a-z0-9\-\+]+(;[a-z\-]+\=[a-z0-9\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i,Xe={lowercase:!0,remove_dots:!0,remove_extension:!0},et="5.4.0",tt={version:et,toDate:t,toFloat:n,toInt:a,toBoolean:i,equals:o,contains:l,matches:s,isEmail:p,isURL:g,isMACAddress:m,isIP:h,isFQDN:d,isBoolean:v,isAlpha:y,isAlphanumeric:b,isNumeric:_,isLowercase:F,isUppercase:w,isAscii:C,isFullWidth:x,isHalfWidth:A,isVariableWidth:$,isMultibyte:S,isSurrogatePair:E,isInt:O,isFloat:D,isDecimal:I,isHexadecimal:j,isDivisibleBy:N,isHexColor:P,isJSON:k,isNull:U,isLength:M,isByteLength:f,isUUID:B,isMongoId:T,isDate:R,isAfter:z,isBefore:V,isIn:q,isCreditCard:G,isISIN:K,isISBN:H,isMobilePhone:J,isCurrency:Y,isISO8601:Z,isBase64:Q,isDataURI:X,ltrim:ee,rtrim:te,trim:ne,escape:ae,unescape:ie,stripLow:oe,whitelist:ue,blacklist:re,isWhitelisted:le,normalizeEmail:se,toString:u};return tt})},135:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={values:["86","91","1","62","55","92","880","234","7","81","52","63","84","251","49","20","90","98","243","66","33","44","39","95","27","82","57","34","380","255","54","254","48","249","213","1","256","212","51","964","93","977","60","998","58","966","233","967","850","886","963","258","40","61","94","261","225","237","56","31","226","227","265","7","593","855","223","502","260","244","221","263","53","250","30","351","216","235","420","32","224","252","36","591","257","1-809, 1-829, 1-849","375","509","46","229","994","211","43","504","41","992","972","381","359","852","228","218","962","595","856","675","503","505","291","996","45","421","232","358","47","971","993","236","65","995","353","387","506","385","373","64","961","1-787, 1-939","970","231","598","507","222","976","242","355","374","968","370","1-876","965","371","264","389","267","386","266","383","220","245","241","268","230","372","1-868","670","357","240","679","974","262","269","592","253","973","975","382","677","238","352","597","853","356","960","673","501","354","1-242","1-246","212","689","678","687","685","239","1-758","1-671","262","599","599","676","1-340","1-473","691","1-784","686","44-1534","248","1-268","376","44-1624","1-767","297","692","1-441","44-1481","1-684","299","1-670","1-869","298","1-345","1-721","590","423","377","378","350","1-284","682","1-649","680","681","1-264","688","674","1-664","590","290","508","246","500","47","683","61","690","379","61","64","672"],names:["China","India","United States","Indonesia","Brazil","Pakistan","Bangladesh","Nigeria","Russia","Japan","Mexico","Philippines","Vietnam","Ethiopia","Germany","Egypt","Turkey","Iran","Democratic Republic of the Congo","Thailand","France","United Kingdom","Italy","Myanmar","South Africa","South Korea","Colombia","Spain","Ukraine","Tanzania","Argentina","Kenya","Poland","Sudan","Algeria","Canada","Uganda","Morocco","Peru","Iraq","Afghanistan","Nepal","Malaysia","Uzbekistan","Venezuela","Saudi Arabia","Ghana","Yemen","North Korea","Taiwan","Syria","Mozambique","Romania","Australia","Sri Lanka","Madagascar","Ivory Coast","Cameroon","Chile","Netherlands","Burkina Faso","Niger","Malawi","Kazakhstan","Ecuador","Cambodia","Mali","Guatemala","Zambia","Angola","Senegal","Zimbabwe","Cuba","Rwanda","Greece","Portugal","Tunisia","Chad","Czech Republic","Belgium","Guinea","Somalia","Hungary","Bolivia","Burundi","Dominican Republic","Belarus","Haiti","Sweden","Benin","Azerbaijan","South Sudan","Austria","Honduras","Switzerland","Tajikistan","Israel","Serbia","Bulgaria","Hong Kong","Togo","Libya","Jordan","Paraguay","Laos","Papua New Guinea","El Salvador","Nicaragua","Eritrea","Kyrgyzstan","Denmark","Slovakia","Sierra Leone","Finland","Norway","United Arab Emirates","Turkmenistan","Central African Republic","Singapore","Georgia","Ireland","Bosnia and Herzegovina","Costa Rica","Croatia","Moldova","New Zealand","Lebanon","Puerto Rico","Palestine","Liberia","Uruguay","Panama","Mauritania","Mongolia","Republic of the Congo","Albania","Armenia","Oman","Lithuania","Jamaica","Kuwait","Latvia","Namibia","Macedonia","Botswana","Slovenia","Lesotho","Kosovo","Gambia","Guinea-Bissau","Gabon","Swaziland","Mauritius","Estonia","Trinidad and Tobago","East Timor","Cyprus","Equatorial Guinea","Fiji","Qatar","Reunion","Comoros","Guyana","Djibouti","Bahrain","Bhutan","Montenegro","Solomon Islands","Cape Verde","Luxembourg","Suriname","Macau","Malta","Maldives","Brunei","Belize","Iceland","Bahamas","Barbados","Western Sahara","French Polynesia","Vanuatu","New Caledonia","Samoa","Sao Tome and Principe","Saint Lucia","Guam","Mayotte","Curacao","Netherlands Antilles","Tonga","U.S. Virgin Islands","Grenada","Micronesia","Saint Vincent and the Grenadines","Kiribati","Jersey","Seychelles","Antigua and Barbuda","Andorra","Isle of Man","Dominica","Aruba","Marshall Islands","Bermuda","Guernsey","American Samoa","Greenland","Northern Mariana Islands","Saint Kitts and Nevis","Faroe Islands","Cayman Islands","Sint Maarten","Saint Martin","Liechtenstein","Monaco","San Marino","Gibraltar","British Virgin Islands","Cook Islands","Turks and Caicos Islands","Palau","Wallis and Futuna","Anguilla","Tuvalu","Nauru","Montserrat","Saint Barthelemy","Saint Helena","Saint Pierre and Miquelon","British Indian Ocean Territory","Falkland Islands","Svalbard and Jan Mayen","Niue","Christmas Island","Tokelau","Vatican","Cocos Islands","Pitcairn","Antarctica"]},a=n.names.map(function(e,t){return{name:e,value:n.values[t]}});a.sort(function(e,t){return e.name[0].toUpperCase()>t.name[0].toUpperCase()?"1":"-1"}),t["default"]=a,e.exports=t["default"]}});