import webpack from 'webpack';

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            //...
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'], // SVG 파일은 React 컴포넌트로 변환
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'url-loader', // JPG와 PNG 파일은 URL로 처리
                options: {
                    limit: 25000,
                },
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'file-loader', // JPG와 PNG 파일은 파일로 처리
                options: {
                    name: '[path][name].[hash].[ext]',
                },
            },
        ],
    },
    //...
};
