/*
* @Author: Administrator
* @Date:   2018-11-18 15:27:55
* @Last Modified by:   Administrator
* @Last Modified time: 2018-11-23 17:27:01
*/
var conf = {
  serverHost:''
};
var Hogan = require('hogan');
//基础工具类
var _util = {
    //网络数据请求功能，主要是封装了jquery中的ajax方法和里面的一些参数
    //为啥要封装ajax，封装了多个参数，传参的时候，少传一个也没有问题
    //好处2:对于success，和error的处理更加多样化，可以添加自己想要的功能
    //请求的成功与否，请求成功，不一定数据获取成功
   request : function(param){
    var _this = this;
       $.ajax({
        url     : param.url        ||'',
        type    : param.method     ||'get',
        dataType: param.type       ||'json',
        data    : param.data       ||'',
        success : function(res){
           //根据res.status的参数值来判断采取什么操作
           //请求成功
           if(0 === res.status){
            typeof param.success === 'function' && param.success(res.data,res.msg)
                  
           }
           //没有登录状态，强制登录
           else if(10 === res.status){
             //执行登录操作
             _this.doLogin();
           }
           //请求数据错误
           else if(1 === res.status){
              typeof param.error === 'function' && param.error(res.msg)
           }
        },
        error   : function(err){
             typeof param.error === 'function' && param.error(err.statusText)
        }

            
       });
   },    
   doLogin : function(){
      //执行登录操作,window.location.href返回当前页面的url
      //
      window.location.href = './userlogin.html?redirect' + encodeURIComponent(window.location.href);
   },
   goHome:function(){
      window.location.href = './index.html';
   },
   //获取服务器地址
   getServerUrl:function(path){
        return conf.serverHost + path;
   },
   //获取url参数
   getUrlParam:function(name){
       var reg    = new RegExp('(^|&)'+ name + '=([^&]*)(&|$)');
       var result = window.location.search.substr(1).match(reg);
       return result ?decodeURIComponent(result[2]):null;
   },
   //渲染html模板,使用的是hogan组件
   renderHtml:function(htmlTemplate,data){
            var template = Hogan.compile(htmlTemplate);
            var  result = template.render(data);
              return result;
   },
   successTips:function(msg){
        alert(msg||'success，好开心噶！！！');
   },
   errorTips:function(msg){
       alert(msg||"error 哪里出错了吧！！！");
   },
   validate:function(value,type){
      var value = $.trim(value);
      if("require"=== type){
          return !!value;
      }//验证手机
      if("phone" === type){
          return /^1\d{10}$/.test(value);
      }//验证邮箱
      if("email"===type){
      return  /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(value);
      }
   }


};
module.exports = _util;