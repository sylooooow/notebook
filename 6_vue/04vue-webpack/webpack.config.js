const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //入口配置
    entry:__dirname + '/src/main.js',

    //出口配置
    output:{
        path:__dirname + '/dist',
        filename:'bundle-[hash].js'   //加了个-[hash]表示每次生成的文件名随机,清除缓存
    },

    //当src里文件有修改的时候自动打包成bundle.js
    devServer:{
        contentBase:'./dist',  //服务器需要加载页面的目录
        historyApiFallback:true,  //实时刷新
    },

    //加载器(对单个文件生效)
    module:{
        rules:[
            {
                //匹配css文件
                test:/\.css$/,
                use:[
                    {
                        loader:"style-loader"
                    },
                    {
                        loader:"css-loader"
                    }
                ]
            },
            {
                //匹配less文件
                test:/\.less$/,
                use:[
                    {
                        loader:"style-loader"
                    },
                    {
                        loader:"css-loader"
                    },
                    {
                        loader:"less-loader"
                    }
                ]
            }
        ]
    },

    //插件(对整个项目生效)
    plugins:[
        //注释加工
        new webpack.BannerPlugin('版权所有，翻版必究'),

        new HtmlWebpackPlugin({
            template:__dirname + '/src/index.tmp.html'
        })
    ]
};