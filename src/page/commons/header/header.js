/*
* @Author: Administrator
* @Date:   2018-11-20 10:21:53
* @Last Modified by:   Administrator
* @Last Modified time: 2018-11-20 14:30:05
*/
require('./header.css');

var _util = require('util/util.js');
//通用页面头部
//搜索的逻辑有两个，一个是输入商品名称表单回填，二是点击搜索按钮跳转。
var header = {
     init:function(){
        this.bindEvent();
     },
     onLoad:function(){
        //表单的回填
        var keyword =   _util.getUrlParam('keyword');
        if(keyword){
            $('#search-input').val(keyword);
        }
     },
     bindEvent:function(){
       //表单的提交
       var _this = this;
       $('#search-btn').click(function(){
            _this.searchSubmit();
       });
       $('#search-input').keyup(function(e){
           if(e.keyCode === 13){
            _this.searchSubmit();
           }
           
       });
     },
     searchSubmit:function(){
        var keyword = $.trim($('#search-input').val());
        //如果提交的表单的时候有keyword,正常转到list页。
        if(keyword){
            window.location.href = './list.html?keyword='+keyword;
        }
     },
};

header.init();