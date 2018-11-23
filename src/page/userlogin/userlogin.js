/*
* @Author: Administrator
* @Date:   2018-11-17 20:23:16
* @Last Modified by:   Administrator
* @Last Modified time: 2018-11-22 10:59:10
*/


require('./userlogin.css');
var _user = require('service/user-service.js');
var _util = require('util/util.js');
var formError = {
    show:function(errMsg){
        $('.error-item').show().find('.err-msg').text(errMsg);
    },
    hide:function(){
        $('.error-item').hide().find('.err-msg').text('');
    }
}
var page = {
    init:function(){
       this.bindEvent();
    },
    bindEvent:function(){
        var _this = this;
        //点击登录按钮
         $('#submit').click(function(){
             _this.submit();
         });
         //按下回车键提交表单
         $('.user-input').keyup(function(e){
            if(e.keyCode === 13){
                _this.submit();
            }
            
         });
    },
    //提交伪表单
    submit:function(){
        var formData = {
            username:$.trim($('#username').val()),
            password:$.trim($('#userpassword').val())
        },
        validateResult = this.formValidate(formData);
        //表单验证结果
        if(validateResult.status){
            //success
            _user.login(formData,function(res){
                window.location.href = _util.getUrlParam('redirect')||'./index.html';
            },function(errMsg){
                formError.show(errMsg);
            });
        }else{
            //error
            formError.show(validateResult.msg);
        }
    },
    //表单字段的验证
    formValidate:function(formData){
            var result = {
                status:false,
                msg:''
            };
            if(!_util.validate(formData.username,'require')){
                result.msg = '用户名不能为空！';
                return result;
            }
            if(!_util.validate(formData.password,'require')){
                result.msg = '密码不能为空！';
                return result;
            }

            result.status = true;
            result.msg = '验证通过';
            return result;
    },
};
$(function(){
    page.init();
});