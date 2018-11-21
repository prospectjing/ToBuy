/*
* @Author: Administrator
* @Date:   2018-11-17 19:45:34
* @Last Modified by:   Administrator
* @Last Modified time: 2018-11-20 17:15:46
*/
// var $$ = require('jquery');
// $$('body').text("fdasss");




// require('./index.css');


// console.log('this is index.html');
// var _util = require('util/util.js');

// _util.request({
//     url:'http://happymmall/product/list.do?keyword=1',
//     success:function(res){
//         console.log(res);
//     },
//     error:function(errMsg){
//         console.log(errMsg);
//     }
// })
// console.log(_util.getUrlParam('test'));

// var html = '<div>{{data}}</div>';
// var data = {
//     data:1111
// }

// console.log(_util.renderHtml(html,data));


require('../commons/commons.js');
require('page/commons/nav/index.js');
require('page/commons/footer/footer.js');
require('page/commons/header/header.js')
var navSide = require('page/commons/nav-side/nav-side.js');

navSide.init({
    name:'user-center'
});