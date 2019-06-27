const path = require('path');
const SassifyWebpackPlugin = require('sassify-webpack-plugin');

module.exports = {
    plugins: [
        new SassifyWebpackPlugin({
            files: [
                {
                    source: path.resolve(__dirname, 'assets', 'sass'),
                    dest: path.resolve(__dirname, 'assets', 'css'),

                }
            ]
        })
    ],

    devtool: 'source-map',
    resolve: {
        extensions: ['.css', '.scss', '*'],
    }
};
