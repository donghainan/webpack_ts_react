const path = require('path')
const dev = require('./webpack.dev.conf')
const prod = require('./webpack.prod.conf')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const DllReferencePlugin = require('webpack/lib/DllReferencePlugin')
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')
const tsImportPluginFactory = require('ts-import-plugin')
// 配置打包cdn
const WebpackCdnPlugin = require('webpack-cdn-plugin')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')
module.exports = (env) => {
  const isDev = env.development
  const baseConf = {
    entry: path.resolve(__dirname, '../src/main.tsx'),
    output: {
      filename: 'bundle.[hash:8].js',
      path: path.resolve(__dirname, '../dist'),
      publicPath: '/'
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.less', '.scss'],
      alias: {
        '@': path.resolve(__dirname, '../src'),
      },
    },
    externals: isDev
      ? {}
      : {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-router-dom': 'ReactRouterDOM',
          axios: 'axios',
        },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.js$/,
          enforce: 'pre',
          use: 'eslint-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.tsx?/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
                getCustomTransformers: () => ({
                  before: [
                    tsImportPluginFactory({
                      libraryName: 'antd',
                      libraryDirectory: 'lib',
                      style: true,
                    }),
                  ],
                }),
                compilerOptions: {
                  module: 'es2015',
                },
              },
            },
          ],
          exclude: /node_modules/,
        },
        {
          test: /\.(css|less)$/,
          use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
              },
            },
            'postcss-loader',
            {
              loader: 'less-loader',
              options: {
                lessOptions: {
                  modifyVars: { '@primary-color': 'red' },
                  javascriptEnabled: true,
                },
              },
            },
          ],
        },
        {
          test: /\.(jpe?g|png|gif)$/,
          use: [
            // ! 国内资源安装报错
            // {
            //   loader: 'image-webpack-loader',
            //   options: {
            //     mozjpeg: {
            //       progressive: true,
            //       quality: 65,
            //     },
            //     // optipng.enabled: false will disable optipng
            //     optipng: {
            //       enabled: false,
            //     },
            //     pngquant: {
            //       quality: [0.9, 0.95],
            //       speed: 4,
            //     },
            //     gifsicle: {
            //       interlaced: false,
            //     },
            //     // the webp option will enable WEBP
            //     webp: {
            //       quality: 75,
            //     },
            //   },
            // },
            {
              loader: 'url-loader',
              options: {
                limit: 100 * 1024,
                name: 'img/[name].ext',
              },
            },
          ],
        },
        {
          test: /\.(otf|eot|wof|svg|woff)$/,
          use: 'file-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.json$/,
          use: 'json-loader',
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../public/index.html'),
        filename: 'index.html',
        hash: true,
        minify: {
          removeAttributeQuotes: true,
          compress: true,
          inject: true,
        },
        favicon: path.resolve(__dirname, '../public/favicon.ico'),
      }),
      new CleanWebpackPlugin(),
      !isDev &&
        new MiniCssExtractPlugin({
          filename: 'css/[name].[contentHash:8].css',
        }),
      isDev &&
        new DllReferencePlugin({
          manifest: path.resolve(__dirname, '../dll/minifest.json'),
        }),
      isDev &&
        new AddAssetHtmlWebpackPlugin({
          filepath: path.resolve(__dirname, '../dll/react.dll.js'),
        }),
      !isDev &&
        new WebpackCdnPlugin({
          modules: [
            {
              name: 'axios',
              var: 'axios',
              path: 'dist/axios.min.js',
            },
            {
              name: 'react',
              var: 'React',
              path: 'umd/react.production.min.js',
            },
            {
              name: 'react-dom',
              var: 'ReactDOM',
              path: 'umd/react-dom.production.min.js',
            },
            {
              name: 'react-router-dom',
              var: 'ReactRouterDOM',
              path: 'umd/react-router-dom.min.js',
            },
          ],
          publicPath: '/node_modules',
        }),
      new AntdDayjsWebpackPlugin(),
    ].filter(Boolean),
  }
  if (isDev) {
    return merge(baseConf, dev)
  }
  return merge(baseConf, prod)
}
