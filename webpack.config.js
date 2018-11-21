/*
* @Author: Administrator
* @Date:   2018-11-17 19:37:49
* @Last Modified by:   Administrator
* @Last Modified time: 2018-11-21 17:07:05
*/

const path                 =                 require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var HtmlWebpackPlugin      = require('html-webpack-plugin');
function getHtmlConfig(name,title){
       return {
        template : './src/view/'+ name +'.html',
        filename : 'view/'+ name +'.html',
        inject   : true,
        hash     : true,
        title    : title,
        chunks   : ['commons',name]
      }
}
var config = {
     mode : 'development',
     entry  : {
        index : './src/page/index/index.js',
        userlogin : './src/page/userlogin/userlogin.js',
        commons: './src/page/commons/commons.js', 
        result: './src/page/result/result.js', 
     },
     output : {
        path: path.resolve(__dirname, 'dist'),
        publicPath : '/dist',
        filename: 'js/[name].js'
     },
     externals:{
        'jquery':'window.jQuery'
     },
     resolve:{
        alias:{
            // node_modules:path.resolve(__dirname, 'node_modules'),
            util  : path.resolve(__dirname, 'src/util/'),
            images: path.resolve(__dirname, 'src/images/'),
            page  : path.resolve(__dirname, 'src/page/'),
            view  : path.resolve(__dirname, 'src/view/')
        }
     },
     plugins: [
      new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'css/[name].css',
      // chunkFilename: "[id].css"
       }),
      new HtmlWebpackPlugin(getHtmlConfig('index','首页')),
      new HtmlWebpackPlugin(getHtmlConfig('userlogin','用户登录页')),
      new HtmlWebpackPlugin(getHtmlConfig('result','操作结果页')),

    ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: '../'
            }
          },
            "css-loader",
        ]
      },
      {
        test: /\.(gif|png|jpg|woff|woff2|otf|svg|eot|ttf)\??.*$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              
              name: 'images/[name].[ext]',
              limit: 100,
              publicPath: '../',
            }
          }
        ]
      },
      {
        test:/\.string$/,
        use:[
        {
          loader:'html-loader',
        }
        
        ]
      },
      ]
  },
     optimization:{//通用的模块
     splitChunks: {
     cacheGroups: {
        
        commons: {
            name: "commons",
            chunks: "all",
            minChunks: 2,
            minSize: 1,
         }
       }
     }
    },
    
};

module.exports = config;