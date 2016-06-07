/**
 * Created by Administrator on 2016/5/26.
 */


var _fs = require('fs');
var _path = require('path');

var getEntry = function(){
    var entry_idr = _path.resolve(__dirname, "../entry/");
    _fs.readdirSync(entry_idr).forEach(function(item,i){
        console.log(_path.basename(item, '.jsx'));
    });
}

getEntry();