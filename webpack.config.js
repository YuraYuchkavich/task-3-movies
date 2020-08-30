const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/application/index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module:{
        rules: [
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(gif|png|jpg|jpeg|svg)?$/,
                loader: 'file-loader',
                options: {
                  name: 'assets/img/[name].[ext]',
                },
            },
        ]
    },

}