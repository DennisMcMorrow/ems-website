const { defineConfig } = require('@vue/cli-service');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    transpileDependencies: true,
    configureWebpack: {
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].css',
                chunkFilename: '[id].css'
            }),
            // ... other plugins
        ],
        // ... more webpack config
    },
    // ... any other vue-cli-service related configuration
};
