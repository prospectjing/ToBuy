/*
* @Author: Administrator
* @Date:   2018-11-20 14:34:56
* @Last Modified by:   Administrator
* @Last Modified time: 2018-11-20 17:13:41
*/
require('./nav-side.css');
var _util = require('util/util.js');
var templateIndex = require('./nav-side.string');
// 用到的逻辑就一个，就是渲染页面

var navSide = {
    option:{
       name:'',
       navList:[
          {name:'user-center',desc:'个人中心',href:'./user-center.html'},
          {name:'order-list',desc:'我的订单',href:'./order-list.html'},
          {name:'pass-update',desc:'修改密码',href:'./pass-update.html'},
          {name:'about',desc:'关于ToBuy',href:'./about.html'}
       ]
    },
    init:function(option){
        //合并选项
        $.extend(this.option,option);
        this.renderNav();
    },
    //渲染导航菜单
    renderNav:function(){
        //计算active数据
        for(var i =0 ,iLength = this.option.navList.length;i<iLength;i++){
            if(this.option.navList[i].name === this.option.name){
                this.option.navList[i].isActive = true;
            }
        };
        //渲染数据
        var navHTML = _util.renderHtml(templateIndex,{
            navList:this.option.navList
        });
        //把html放入容器
        $('.nav-side').html(navHTML);
    },
}

module.exports = navSide;