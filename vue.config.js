// 设置项目目录别名
module.exports = {
    configureWebpack:{
        resolve:{
            alias:{
                // @表示src
                'assets':'@/assets',
                'components':'@/components',
                'router':'@/router',
                'views':'@/views',
                'common':'@/common',
            }
        }
    }
}
