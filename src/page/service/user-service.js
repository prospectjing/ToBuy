/*
* @Author: Administrator
* @Date:   2018-11-22 09:23:20
* @Last Modified by:   Administrator
* @Last Modified time: 2018-11-23 17:26:22
*/
var _util = require('util/util.js');
var _user = {
    login:function(userInfo,resolve,reject){
        _util.request({
            url:_util.getServerUrl('/user/login.do'),
            data:userInfo,
            method:'POST',
            success:resolve,
            error:reject
        });

    },
    // 检查登录状态
    checkLogin : function(resolve, reject){
        _util.request({
            url     : _util.getServerUrl('/user/get_user_info.do'),
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    // 检查用户名
    checkUsername : function(username, resolve, reject){
        _util.request({
            url     : _util.getServerUrl('/user/check_valid.do'),
            data    : {
                type    : 'username',
                str     : username
            },
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    // 用户注册
    register : function(userInfo, resolve, reject){
        _util.request({
            url     : _util.getServerUrl('/user/register.do'),
            data    : userInfo,
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    // 获取用户信息
    getUserInfo : function(resolve, reject){
        _util.request({
            url     : _util.getServerUrl('/user/get_information.do'),
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },

    
}

module.exports = _user;