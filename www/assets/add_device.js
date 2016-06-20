webpackJsonp([9],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(12),f=r(s),c=n(10),d=r(c),p=n(1),v=r(p),h=n(11),g=r(h),m=n(9),y=n(7),_=r(y),b=n(13),F=(r(b),n(14)),x=(r(F),n(4)),w=r(x),$=n(18),A=r($),E=n(31),O=r(E),D=A["default"].service,S=function(e){function t(){i(this,t);var e=o(this,Object.getPrototypeOf(t).call(this));if(e.state={loading:!1,btnActive:""},e.validate=e.validate.bind(e),"function"!=typeof e.validate)throw new TypeError('Value of "this.validate" violates contract, expected () => any got '+(null===e.validate?"null":"object"===l(e.validate)&&e.validate.constructor?e.validate.constructor.name||"[Unknown Object]":l(e.validate)));if(e.addDevice=e.addDevice.bind(e),"function"!=typeof e.addDevice)throw new TypeError('Value of "this.addDevice" violates contract, expected () => any got '+(null===e.addDevice?"null":"object"===l(e.addDevice)&&e.addDevice.constructor?e.addDevice.constructor.name||"[Unknown Object]":l(e.addDevice)));return e}return a(t,e),u(t,[{key:"validate",value:function(){var e=this.refs.imei.value,t=this.refs.name.value,n=this.refs.sim_imei.value,r=this.refs.sim_phone.value;""!=e&&""!=t&&""!=n&&""!=r&&O["default"].isLength(e,15)&&O["default"].isLength(n,15)?this.state.btnActive="active":this.state.btnActive="",this.forceUpdate()}},{key:"addDevice",value:function(){var e=this;if("active"==this.state.btnActive){var t=this.refs.imei.value,n=this.refs.pwd.value||"1234",r=this.refs.name.value,i=this.refs.sim_imei.value,o=this.refs.sim_phone.value;this.showLoading(),f["default"].request({url:D.adddevice,type:"get",data:{name:r,imei:t,passwd:n,sim_imei:i,sim_phone:o},success:function(t){e.closeLoading(),window.location.href="./main.html"},error:function(t){e.closeLoading(),message.error(t.err_msg)}})}}},{key:"render",value:function(){var e=(0,w["default"])({primary:!0,active:this.state.btnActive});return v["default"].createElement("div",{className:"register"},v["default"].createElement(_["default"],{title:"Add Device"}),v["default"].createElement(m.Spin,{spinning:this.state.loading},v["default"].createElement("form",{className:"form no-icon mt5"},v["default"].createElement("label",null,v["default"].createElement("input",{type:"text",ref:"imei",id:"imei",placeholder:"IMEI",onKeyUp:this.validate,required:!0})),v["default"].createElement("label",null,v["default"].createElement("input",{type:"text",ref:"name",id:"name",placeholder:"Name",required:!0})),v["default"].createElement("label",null,v["default"].createElement("input",{type:"password",ref:"pwd",id:"pwd",placeholder:"Password",required:!0})),v["default"].createElement("label",null,v["default"].createElement("input",{type:"text",ref:"sim_imei",id:"sim_imei",placeholder:"SIM_IMEI",onKeyUp:this.validate,required:!0})),v["default"].createElement("label",null,v["default"].createElement("input",{type:"text",ref:"sim_phone",id:"sim_phone",placeholder:"SIM_PHONE",onKeyUp:this.validate,required:!0})))),v["default"].createElement("div",{className:"sign_btn"},v["default"].createElement(m.Button,{type:e,onClick:this.addDevice},"Confirm")))}}]),t}(d["default"]);g["default"].render(v["default"].createElement(S,null),document.getElementById("react_content"))},7:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s,f,c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=n(1),p=r(d),v=n(4),h=r(v);n(8);var g=(f=s=function(e){function t(){return a(this,t),l(this,Object.getPrototypeOf(t).call(this))}return u(t,e),c(t,[{key:"handleClick",value:function(){window.history.go(-1)}},{key:"render",value:function(){var e,t,n=this.props,r=n.className,a=n.prefixCls,l=n.bcls,u=n.onAdd,s=(o(n,["className","prefixCls","bcls","onAdd"]),(0,h["default"])((e={},i(e,a,!0),i(e,r,r),e))),f=(0,h["default"])({none:l,header_goback:!0});return u&&(t=p["default"].createElement("i",{className:"add",onClick:u})),p["default"].createElement("header",{className:s},p["default"].createElement("div",{className:f,onClick:this.handleClick.bind(this)},p["default"].createElement("span",null)),p["default"].createElement("h2",null,this.props.title),t)}}]),t}(d.Component),s.defaultProps={prefixCls:"head",title:""},f);t["default"]=g,e.exports=t["default"]},10:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),s=(r(u),function(e){function t(){i(this,t);var e=o(this,Object.getPrototypeOf(t).call(this));return e.state={loading:!1},e}return a(t,e),l(t,[{key:"showLoading",value:function(){this.state.loading=!0,this.forceUpdate()}},{key:"closeLoading",value:function(){this.state.loading=!1,this.forceUpdate()}}]),t}(u.Component));t["default"]=s,e.exports=t["default"]},31:function(e,t,n){var r,i,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};/*!
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
!function(a,l){"object"==o(t)&&"undefined"!=typeof e?e.exports=l():(r=l,i="function"==typeof r?r.call(t,n,t,e):r,!(void 0!==i&&(e.exports=i)))}(void 0,function(){"use strict";function e(e){if("string"!=typeof e)throw new TypeError("This library (validator.js) validates strings only")}function t(t){return e(t),t=Date.parse(t),isNaN(t)?null:new Date(t)}function n(t){return e(t),parseFloat(t)}function r(t,n){return e(t),parseInt(t,n||10)}function i(t,n){return e(t),n?"1"===t||"true"===t:"0"!==t&&"false"!==t&&""!==t}function a(t,n){return e(t),t===n}function l(e){return"object"===("undefined"==typeof e?"undefined":fe["typeof"](e))&&null!==e?e="function"==typeof e.toString?e.toString():"[object Object]":(null===e||"undefined"==typeof e||isNaN(e)&&!e.length)&&(e=""),String(e)}function u(t,n){return e(t),t.indexOf(l(n))>=0}function s(t,n,r){return e(t),"[object RegExp]"!==Object.prototype.toString.call(n)&&(n=new RegExp(n,r)),n.test(t)}function f(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=arguments[1];for(var n in t)"undefined"==typeof e[n]&&(e[n]=t[n]);return e}function c(t,n){e(t);var r=void 0,i=void 0;"object"===("undefined"==typeof n?"undefined":fe["typeof"](n))?(r=n.min||0,i=n.max):(r=arguments[1],i=arguments[2]);var o=encodeURI(t).split(/%..|./).length-1;return o>=r&&("undefined"==typeof i||i>=o)}function d(t,n){e(t),n=f(n,de),n.allow_trailing_dot&&"."===t[t.length-1]&&(t=t.substring(0,t.length-1));var r=t.split(".");if(n.require_tld){var i=r.pop();if(!r.length||!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(i))return!1}for(var o,a=0;a<r.length;a++){if(o=r[a],n.allow_underscores&&(o=o.replace(/_/g,"")),!/^[a-z\u00a1-\uffff0-9-]+$/i.test(o))return!1;if(/[\uff01-\uff5e]/.test(o))return!1;if("-"===o[0]||"-"===o[o.length-1])return!1}return!0}function p(t,n){if(e(t),n=f(n,pe),n.allow_display_name){var r=t.match(ve);r&&(t=r[1])}var i=t.split("@"),o=i.pop(),a=i.join("@"),l=o.toLowerCase();if("gmail.com"!==l&&"googlemail.com"!==l||(a=a.replace(/\./g,"").toLowerCase()),!c(a,{max:64})||!c(o,{max:256}))return!1;if(!d(o,{require_tld:n.require_tld}))return!1;if('"'===a[0])return a=a.slice(1,a.length-1),n.allow_utf8_local_part?ye.test(a):ge.test(a);for(var u=n.allow_utf8_local_part?me:he,s=a.split("."),p=0;p<s.length;p++)if(!u.test(s[p]))return!1;return!0}function v(t){var n=arguments.length<=1||void 0===arguments[1]?"":arguments[1];if(e(t),n=String(n),!n)return v(t,4)||v(t,6);if("4"===n){if(!_e.test(t))return!1;var r=t.split(".").sort(function(e,t){return e-t});return r[3]<=255}if("6"===n){var i=t.split(":"),o=!1,a=v(i[i.length-1],4),l=a?7:8;if(i.length>l)return!1;if("::"===t)return!0;"::"===t.substr(0,2)?(i.shift(),i.shift(),o=!0):"::"===t.substr(t.length-2)&&(i.pop(),i.pop(),o=!0);for(var u=0;u<i.length;++u)if(""===i[u]&&u>0&&u<i.length-1){if(o)return!1;o=!0}else if(a&&u===i.length-1);else if(!be.test(i[u]))return!1;return o?i.length>=1:i.length===l}return!1}function h(t,n){if(e(t),!t||t.length>=2083||/\s/.test(t))return!1;if(0===t.indexOf("mailto:"))return!1;n=f(n,Fe);var r=void 0,i=void 0,o=void 0,a=void 0,l=void 0,u=void 0,s=void 0;if(s=t.split("#"),t=s.shift(),s=t.split("?"),t=s.shift(),s=t.split("://"),s.length>1){if(r=s.shift(),n.require_valid_protocol&&-1===n.protocols.indexOf(r))return!1}else{if(n.require_protocol)return!1;n.allow_protocol_relative_urls&&"//"===t.substr(0,2)&&(s[0]=t.substr(2))}return t=s.join("://"),s=t.split("/"),t=s.shift(),s=t.split("@"),s.length>1&&(i=s.shift(),i.indexOf(":")>=0&&i.split(":").length>2)?!1:(a=s.join("@"),s=a.split(":"),o=s.shift(),s.length&&(u=s.join(":"),l=parseInt(u,10),!/^[0-9]+$/.test(u)||0>=l||l>65535)?!1:v(o)||d(o,n)||"localhost"===o?n.host_whitelist&&-1===n.host_whitelist.indexOf(o)?!1:!n.host_blacklist||-1===n.host_blacklist.indexOf(o):!1)}function g(t){return e(t),xe.test(t)}function m(t){return e(t),["true","false","1","0"].indexOf(t)>=0}function y(t){var n=arguments.length<=1||void 0===arguments[1]?"en-US":arguments[1];if(e(t),n in we)return we[n].test(t);throw new Error("Invalid locale '"+n+"'")}function _(t){var n=arguments.length<=1||void 0===arguments[1]?"en-US":arguments[1];if(e(t),n in $e)return $e[n].test(t);throw new Error("Invalid locale '"+n+"'")}function b(t){return e(t),je.test(t)}function F(t){return e(t),t===t.toLowerCase()}function x(t){return e(t),t===t.toUpperCase()}function w(t){return e(t),Ce.test(t)}function $(t){return e(t),Ie.test(t)}function A(t){return e(t),Ze.test(t)}function E(t){return e(t),Ie.test(t)&&Ze.test(t)}function O(t){return e(t),Ne.test(t)}function D(t){return e(t),Pe.test(t)}function S(t,n){e(t),n=n||{};var r=n.hasOwnProperty("allow_leading_zeroes")&&n.allow_leading_zeroes?Le:Ue,i=!n.hasOwnProperty("min")||t>=n.min,o=!n.hasOwnProperty("max")||t<=n.max;return r.test(t)&&i&&o}function j(t,n){return e(t),n=n||{},""===t||"."===t?!1:Re.test(t)&&(!n.hasOwnProperty("min")||t>=n.min)&&(!n.hasOwnProperty("max")||t<=n.max)}function C(t){return e(t),""!==t&&ke.test(t)}function I(t){return e(t),ze.test(t)}function Z(t,r){return e(t),n(t)%parseInt(r,10)===0}function N(t){return e(t),qe.test(t)}function P(t){e(t);try{var n=JSON.parse(t);return!!n&&"object"===("undefined"==typeof n?"undefined":fe["typeof"](n))}catch(r){}return!1}function U(t){return e(t),0===t.length}function L(t,n){e(t);var r=void 0,i=void 0;"object"===("undefined"==typeof n?"undefined":fe["typeof"](n))?(r=n.min||0,i=n.max):(r=arguments[1],i=arguments[2]);var o=t.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g)||[],a=t.length-o.length;return a>=r&&("undefined"==typeof i||i>=a)}function R(t){var n=arguments.length<=1||void 0===arguments[1]?"all":arguments[1];e(t);var r=Te[n];return r&&r.test(t)}function k(t){return e(t),I(t)&&24===t.length}function z(t){return e(t),Be.test(t)}function q(e){var t=e.match(Be),n=void 0,r=void 0,i=void 0,o=void 0;if(t){if(n=t[21],!n)return t[12]?null:0;if("z"===n||"Z"===n)return 0;r=t[22],-1!==n.indexOf(":")?(i=parseInt(t[23],10),o=parseInt(t[24],10)):(i=0,o=parseInt(t[23],10))}else{if(e=e.toLowerCase(),n=e.match(/(?:\s|gmt\s*)(-|\+)(\d{1,4})(\s|$)/),!n)return-1!==e.indexOf("gmt")?0:null;r=n[1];var a=n[2];3===a.length&&(a="0"+a),a.length<=2?(i=0,o=parseInt(a,10)):(i=parseInt(a.slice(0,2),10),o=parseInt(a.slice(2,4),10))}return(60*i+o)*("-"===r?1:-1)}function T(t){e(t);var n=new Date(Date.parse(t));if(isNaN(n))return!1;var r=q(t);if(null!==r){var i=n.getTimezoneOffset()-r;n=new Date(n.getTime()+6e4*i)}var o=String(n.getDate()),a=void 0,l=void 0,u=void 0;return(l=t.match(/(^|[^:\d])[23]\d([^:\d]|$)/g))?(a=l.map(function(e){return e.match(/\d+/g)[0]}).join("/"),u=String(n.getFullYear()).slice(-2),a===o||a===u?!0:a===""+o/u||a===""+u/o):!0}function B(n){var r=arguments.length<=1||void 0===arguments[1]?String(new Date):arguments[1];e(n);var i=t(r),o=t(n);return!!(o&&i&&o>i)}function M(n){var r=arguments.length<=1||void 0===arguments[1]?String(new Date):arguments[1];e(n);var i=t(r),o=t(n);return!!(o&&i&&i>o)}function H(t,n){e(t);var r=void 0;if("[object Array]"===Object.prototype.toString.call(n)){var i=[];for(r in n)({}).hasOwnProperty.call(n,r)&&(i[r]=l(n[r]));return i.indexOf(t)>=0}return"object"===("undefined"==typeof n?"undefined":fe["typeof"](n))?n.hasOwnProperty(t):n&&"function"==typeof n.indexOf?n.indexOf(t)>=0:!1}function K(t){e(t);var n=t.replace(/[^0-9]+/g,"");if(!Me.test(n))return!1;for(var r=0,i=void 0,o=void 0,a=void 0,l=n.length-1;l>=0;l--)i=n.substring(l,l+1),o=parseInt(i,10),a?(o*=2,r+=o>=10?o%10+1:o):r+=o,a=!a;return!!(r%10===0?n:!1)}function W(t){if(e(t),!He.test(t))return!1;for(var n=t.replace(/[A-Z]/g,function(e){return parseInt(e,36)}),r=0,i=void 0,o=void 0,a=!0,l=n.length-2;l>=0;l--)i=n.substring(l,l+1),o=parseInt(i,10),a?(o*=2,r+=o>=10?o+1:o):r+=o,a=!a;return parseInt(t.substr(t.length-1),10)===(1e4-r)%10}function Y(t){var n=arguments.length<=1||void 0===arguments[1]?"":arguments[1];if(e(t),n=String(n),!n)return Y(t,10)||Y(t,13);var r=t.replace(/[\s-]+/g,""),i=0,o=void 0;if("10"===n){if(!Ke.test(r))return!1;for(o=0;9>o;o++)i+=(o+1)*r.charAt(o);if(i+="X"===r.charAt(9)?100:10*r.charAt(9),i%11===0)return!!r}else if("13"===n){if(!We.test(r))return!1;for(o=0;12>o;o++)i+=Ye[o%2]*r.charAt(o);if(r.charAt(12)-(10-i%10)%10===0)return!!r}return!1}function G(t,n){return e(t),n in Ge?Ge[n].test(t):!1}function J(e){var t="(\\"+e.symbol.replace(/\./g,"\\.")+")"+(e.require_symbol?"":"?"),n="-?",r="[1-9]\\d*",i="[1-9]\\d{0,2}(\\"+e.thousands_separator+"\\d{3})*",o=["0",r,i],a="("+o.join("|")+")?",l="(\\"+e.decimal_separator+"\\d{2})?",u=a+l;return e.allow_negatives&&!e.parens_for_negatives&&(e.negative_sign_after_digits?u+=n:e.negative_sign_before_digits&&(u=n+u)),e.allow_negative_sign_placeholder?u="( (?!\\-))?"+u:e.allow_space_after_symbol?u=" ?"+u:e.allow_space_after_digits&&(u+="( (?!$))?"),e.symbol_after_digits?u+=t:u=t+u,e.allow_negatives&&(e.parens_for_negatives?u="(\\("+u+"\\)|"+u+")":e.negative_sign_before_digits||e.negative_sign_after_digits||(u=n+u)),new RegExp("^(?!-? )(?=.*\\d)"+u+"$")}function Q(t,n){return e(t),n=f(n,Je),J(n).test(t)}function V(t){e(t);var n=t.length;if(!n||n%4!==0||Qe.test(t))return!1;var r=t.indexOf("=");return-1===r||r===n-1||r===n-2&&"="===t[n-1]}function X(t){return e(t),Ve.test(t)}function ee(t,n){e(t);var r=n?new RegExp("^["+n+"]+","g"):/^\s+/g;return t.replace(r,"")}function te(t,n){e(t);var r=n?new RegExp("["+n+"]+$","g"):/\s+$/g;return t.replace(r,"")}function ne(t,n){e(t);var r=n?new RegExp("^["+n+"]+|["+n+"]+$","g"):/^\s+|\s+$/g;return t.replace(r,"")}function re(t){return e(t),t.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\//g,"&#x2F;").replace(/\`/g,"&#96;")}function ie(t){return e(t),t.replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#x27;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&#x2F;/g,"/").replace(/&#96;/g,"`")}function oe(t,n){return e(t),t.replace(new RegExp("["+n+"]+","g"),"")}function ae(t,n){e(t);var r=n?"\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F":"\\x00-\\x1F\\x7F";return oe(t,r)}function le(t,n){return e(t),t.replace(new RegExp("[^"+n+"]+","g"),"")}function ue(t,n){e(t);for(var r=t.length-1;r>=0;r--)if(-1===n.indexOf(t[r]))return!1;return!0}function se(e,t){if(t=f(t,Xe),!p(e))return!1;var n=e.split("@",2);if(n[1]=n[1].toLowerCase(),"gmail.com"===n[1]||"googlemail.com"===n[1]){if(t.remove_extension&&(n[0]=n[0].split("+")[0]),t.remove_dots&&(n[0]=n[0].replace(/\./g,"")),!n[0].length)return!1;n[0]=n[0].toLowerCase(),n[1]="gmail.com"}else t.lowercase&&(n[0]=n[0].toLowerCase());return n.join("@")}var fe={};fe["typeof"]="function"==typeof Symbol&&"symbol"==o(Symbol.iterator)?function(e){return"undefined"==typeof e?"undefined":o(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":"undefined"==typeof e?"undefined":o(e)};for(var ce,de={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1},pe={allow_display_name:!1,allow_utf8_local_part:!0,require_tld:!0},ve=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i,he=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,ge=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,me=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,ye=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i,_e=/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/,be=/^[0-9A-F]{1,4}$/i,Fe={protocols:["http","https","ftp"],require_tld:!0,require_protocol:!1,require_valid_protocol:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_protocol_relative_urls:!1},xe=/^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/,we={"en-US":/^[A-Z]+$/i,"cs-CZ":/^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,"de-DE":/^[A-ZÄÖÜß]+$/i,"es-ES":/^[A-ZÁÉÍÑÓÚÜ]+$/i,"fr-FR":/^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,"nl-NL":/^[A-ZÉËÏÓÖÜ]+$/i,"hu-HU":/^[A-ZÁÉÓÖŐÚÜŰ]+$/i,"pl-PL":/^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,"pt-PT":/^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,"ru-RU":/^[А-ЯЁа-яё]+$/i,"tr-TR":/^[A-ZÇĞİıÖŞÜ]+$/i,ar:/^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/},$e={"en-US":/^[0-9A-Z]+$/i,"cs-CZ":/^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,"de-DE":/^[0-9A-ZÄÖÜß]+$/i,"es-ES":/^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,"fr-FR":/^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,"hu-HU":/^[0-9A-ZÁÉÓÖŐÚÜŰ]+$/i,"nl-NL":/^[0-9A-ZÉËÏÓÖÜ]+$/i,"pl-PL":/^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,"pt-PT":/^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,"ru-RU":/^[0-9А-ЯЁа-яё]+$/i,"tr-TR":/^[0-9A-ZÇĞİıÖŞÜ]+$/i,ar:/^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/},Ae=["AU","GB","HK","IN","NZ","ZA","ZM"],Ee=0;Ee<Ae.length;Ee++)ce="en-"+Ae[Ee],we[ce]=we["en-US"],$e[ce]=$e["en-US"];for(var Oe,De=["AE","BH","DZ","EG","IQ","JO","KW","LB","LY","MA","QM","QA","SA","SD","SY","TN","YE"],Se=0;Se<De.length;Se++)Oe="ar-"+De[Se],we[Oe]=we.ar,$e[Oe]=$e.ar;var je=/^[-+]?[0-9]+$/,Ce=/^[\x00-\x7F]+$/,Ie=/[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/,Ze=/[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/,Ne=/[^\x00-\x7F]/,Pe=/[\uD800-\uDBFF][\uDC00-\uDFFF]/,Ue=/^(?:[-+]?(?:0|[1-9][0-9]*))$/,Le=/^[-+]?[0-9]+$/,Re=/^(?:[-+]?(?:[0-9]+))?(?:\.[0-9]*)?(?:[eE][\+\-]?(?:[0-9]+))?$/,ke=/^[-+]?([0-9]+|\.[0-9]+|[0-9]+\.[0-9]+)$/,ze=/^[0-9A-F]+$/i,qe=/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i,Te={3:/^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,4:/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,5:/^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,all:/^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i},Be=/^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/,Me=/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})|62[0-9]{14}$/,He=/^[A-Z]{2}[0-9A-Z]{9}[0-9]$/,Ke=/^(?:[0-9]{9}X|[0-9]{10})$/,We=/^(?:[0-9]{13})$/,Ye=[1,3],Ge={"ar-SY":/^(!?(\+?963)|0)?9\d{8}$/,"en-US":/^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/,"cs-CZ":/^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,"de-DE":/^(\+?49[ \.\-])?([\(]{1}[0-9]{1,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,"da-DK":/^(\+?45)?(\d{8})$/,"el-GR":/^(\+?30)?(69\d{8})$/,"en-AU":/^(\+?61|0)4\d{8}$/,"en-GB":/^(\+?44|0)7\d{9}$/,"en-HK":/^(\+?852\-?)?[569]\d{3}\-?\d{4}$/,"en-IN":/^(\+?91|0)?[789]\d{9}$/,"en-NZ":/^(\+?64|0)2\d{7,9}$/,"en-ZA":/^(\+?27|0)\d{9}$/,"en-ZM":/^(\+?26)?09[567]\d{7}$/,"es-ES":/^(\+?34)?(6\d{1}|7[1234])\d{7}$/,"fi-FI":/^(\+?358|0)\s?(4(0|1|2|4|5)?|50)\s?(\d\s?){4,8}\d$/,"fr-FR":/^(\+?33|0)[67]\d{8}$/,"hu-HU":/^(\+?36)(20|30|70)\d{7}$/,"ms-MY":/^(\+?6?01){1}(([145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/,"nb-NO":/^(\+?47)?[49]\d{7}$/,"nn-NO":/^(\+?47)?[49]\d{7}$/,"pt-BR":/^(\+?55|0)\-?[1-9]{2}\-?[2-9]{1}\d{3,4}\-?\d{4}$/,"pt-PT":/^(\+?351)?9[1236]\d{7}$/,"ru-RU":/^(\+?7|8)?9\d{9}$/,"tr-TR":/^(\+?90|0)?5\d{9}$/,"vi-VN":/^(\+?84|0)?((1(2([0-9])|6([2-9])|88|99))|(9((?!5)[0-9])))([0-9]{7})$/,"zh-CN":/^(\+?0?86\-?)?1[345789]\d{9}$/,"zh-TW":/^(\+?886\-?|0)?9\d{8}$/};Ge["en-CA"]=Ge["en-US"];var Je={symbol:"$",require_symbol:!1,allow_space_after_symbol:!1,symbol_after_digits:!1,allow_negatives:!0,parens_for_negatives:!1,negative_sign_before_digits:!1,negative_sign_after_digits:!1,allow_negative_sign_placeholder:!1,thousands_separator:",",decimal_separator:".",allow_space_after_digits:!1},Qe=/[^A-Z0-9+\/=]/i,Ve=/^\s*data:([a-z]+\/[a-z0-9\-\+]+(;[a-z\-]+\=[a-z0-9\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i,Xe={lowercase:!0,remove_dots:!0,remove_extension:!0},et="5.4.0",tt={version:et,toDate:t,toFloat:n,toInt:r,toBoolean:i,equals:a,contains:u,matches:s,isEmail:p,isURL:h,isMACAddress:g,isIP:v,isFQDN:d,isBoolean:m,isAlpha:y,isAlphanumeric:_,isNumeric:b,isLowercase:F,isUppercase:x,isAscii:w,isFullWidth:$,isHalfWidth:A,isVariableWidth:E,isMultibyte:O,isSurrogatePair:D,isInt:S,isFloat:j,isDecimal:C,isHexadecimal:I,isDivisibleBy:Z,isHexColor:N,isJSON:P,isNull:U,isLength:L,isByteLength:c,isUUID:R,isMongoId:k,isDate:T,isAfter:B,isBefore:M,isIn:H,isCreditCard:K,isISIN:W,isISBN:Y,isMobilePhone:G,isCurrency:Q,isISO8601:z,isBase64:V,isDataURI:X,ltrim:ee,rtrim:te,trim:ne,escape:re,unescape:ie,stripLow:ae,whitelist:le,blacklist:oe,isWhitelisted:ue,normalizeEmail:se,toString:l};return tt})}});