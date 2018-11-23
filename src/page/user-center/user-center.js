/*
* @Author: Administrator
* @Date:   2018-11-23 16:08:51
* @Last Modified by:   Administrator
* @Last Modified time: 2018-11-23 17:25:55
*/
require('./user-center.css');

require('page/commons/nav/index.js');
require('page/commons/header/header.js');
var navSide         = require('page/commons/nav-side/nav-side.js');
var _util           = require('util/util.js');
var _user           = require('service/user-service.js');
var templateIndex   = require('./index.string');

// page 逻辑部分
var page = {
    init: function(){
        this.onLoad();
    },
    onLoad : function(){
        // 初始化左侧菜单
        navSide.init({
            name: 'user-center'
        });
        // 加载用户信息
        this.loadUserInfo();
    },
    // 加载用户信息
    loadUserInfo : function(){
        var userHtml = '';
        _user.getUserInfo(function(res){
            userHtml = _util.renderHtml(templateIndex, res);
            $('.panel-body').html(userHtml);
        }, function(errMsg){
            _util.errorTips(errMsg);
        });
    }
};
$(function(){
    page.init();
});