/*
* @Author: Administrator
* @Date:   2018-11-20 09:31:57
* @Last Modified by:   Administrator
* @Last Modified time: 2018-11-23 14:25:08
*/
require('./index.css');
var _util   = require('util/util.js');
var _user   = require('service/user-service.js');
var _cart   = require('service/cart-service.js');
// 导航
var nav = {
    init : function(){
        this.bindEvent();
        this.loadUserInfo();
        // this.loadCartCount();
        return this;
    },
    bindEvent : function(){
        // 登录点击事件
        $('.js-login').click(function(){
            _util.doLogin();
        });
        // 注册点击事件
        $('.js-register').click(function(){
            window.location.href = './userregister.html';
        });
        // 退出点击事件
        $('.js-logout').click(function(){
            _user.logout(function(res){
                window.location.reload();
            }, function(errMsg){
                _util.errorTips(errMsg);
            });
        });
    },
    // 加载用户信息
    loadUserInfo : function(){
        _user.checkLogin(function(res){
            $('.user.not-login').hide().siblings('.user.login').show()
                .find('.username').text(res.username);
        }, function(errMsg){
            // do nothing
        });
    },
    // 加载购物车数量
    // loadCartCount : function(){
    //     _cart.getCartCount(function(res){
    //         $('.nav .cart-count').text(res || 0);
    //     }, function(errMsg){
    //         $('.nav .cart-count').text(0);
    //     });
    // }
};

$(function(){
    nav.init();
})