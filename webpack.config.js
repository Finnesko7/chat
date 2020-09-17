const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (env) {
    var production = !env || env.NODE_ENV === 'production';
    return {
        mode: production ? 'production' : 'development',
        entry: './src/index.jsx',
        output: {
            path: path.join(__dirname, './dist')
        },
        resolve: {
            extensions: ['.js', '.jsx']
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    use: 'babel-loader'
                },
                {
                    test: /\.s[ac]ss$/,
                    use: ["style-loader", "css-loader", "sass-loader"]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            })
        ]
    };
};