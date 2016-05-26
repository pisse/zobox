import 'antd/dist/antd.less';

import $ from "../bower_components/jquery/dist/jquery"


var util = {
    getCookie: function (name) {
        var reg = new RegExp("(^| )" + name + "(?:=([^;]*))?(;|$)"),
            val = document.cookie.match(reg);
        return val ? (val[2] ? unescape(val[2]) : "") : null;
    },

    setCookie: function (name, value, expires, path, domain, secure) {
        var today = new Date();
        today.setTime(today.getTime());
        if (expires) {
            expires = expires * 1000 * 60 * 60 * 24;
        }
        var expires_date = new Date(today.getTime() + (expires));
        document.cookie = name + '=' + escape(value) +
            ( ( expires ) ? ';expires=' + expires_date.toGMTString() : '' ) + //expires.toGMTString()
            ( ( path ) ? ';path=' + path : '' ) +
            ( ( domain ) ? ';domain=' + domain : '' ) +
            ( ( secure ) ? ';secure' : '' );
    },

    deleteCookie: function (name, path, domain) {
        if (this.getCookie(name)) {
            document.cookie = name + '=' +
                ( ( path ) ? ';path=' + path : '') +
                ( ( domain ) ? ';domain=' + domain : '' ) +
                ';expires=Thu, 01-Jan-1970 00:00:01 GMT';
        }
    },

    getQuery: function (name, url) {
        var u = arguments[1] || window.location.search,
            reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
            r = u.substr(u.indexOf("\?") + 1).match(reg);
        return r != null ? r[2] : "";
    },

    jsonToTpl: function (json, tpl) {
        var ret = tpl.replace(/{#(\w+)#}/g, function (a, b) {
            if (json[b] || json[b] == 0) {
                return json[b];
            } else {
                return "";
            }
        });
        // hack 表格含日期，周末背景颜色
        var dateMatch = null;
        if (dateMatch = ret.match(/\s*<tr(.*?)>\s*<td(.*?)>\s*(\d{4})(\/|-)(\d{1,2})(\/|-)(\d{1,2})/)) {
            var date = new Date(dateMatch[3], dateMatch[5] - 1, dateMatch[7]), day = date.getDay();
            if (day == 0 || day == 6)
                ret = ret.replace(/<td/g, '<td style="background:#fff8d2;font-weight:bold" ');
        }
        return ret;
    },

    jsonToUrl: function (data) {
        var arr = [];
        for (var k in data) {
            arr.push(k + "=" + data[k]);
        }
        ;
        return arr.join("&");
    },

    getUrlParams: function (url) {
        var url = arguments[0] || window.location.search;
        var params = {};
        var reg = new RegExp("(^|&|#)(\\w+)=([^&|^#]*)", "g");
        var r = url.substr(url.indexOf("\?") + 1).match(reg);
        for (var i in r) {
            if (parseInt(i) != 0 && !parseInt(i)) {
                continue;
            }
            var temp = r[i].replace(/&|#/, '').match(/(.+)=(.+)/);
            if (temp[1]) {
                params[temp[1]] = decodeURI(decodeURI(temp[2]));
            }

        }
        return params;
    }
};

export default util;