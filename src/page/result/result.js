/*
* @Author: Administrator
* @Date:   2018-11-20 17:19:14
* @Last Modified by:   Administrator
* @Last Modified time: 2018-11-20 21:33:58
*/
require('./result.css');
require('../commons/commons.js');
require('page/commons/nav/index.js');
require('page/commons/footer/footer.js');
require('page/commons/header/header.js')

var _util = require('util/util.js');

//页面的逻辑是，判断页面的url中的type查询字符串，根据不同的结果匹配不同的页面结构
$(function(){
    var type = _util.getUrlParam('type')||'default';
    $element  = $('.'+type+'-success').show();
    
})