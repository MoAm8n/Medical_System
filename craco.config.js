    // craco.config.js
    module.exports = {
    style: {
        postcss: {
        plugins: [
            require('tailwindcss'),
            require('autoprefixer'),
            // أضف هذا إذا كنت تستخدم postcss-import
            require('postcss-import')({
            path: ['src'],
            }),
        ],
        },
    },
    webpack: {
        configure: (webpackConfig) => {
        // حل مشكلة تحميل ملفات CSS من node_modules
        webpackConfig.module.rules.push({
            test: /\.css$/i,
            use: [
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                importLoaders: 1,
                modules: {
                    auto: true,
                },
                },
            },
            'postcss-loader',
            ],
            include: /node_modules/,
        });

        return webpackConfig;
        },
    },
    };