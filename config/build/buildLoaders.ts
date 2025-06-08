import {BuildOptions} from './types';
import {ModuleOptions} from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshTypeScript from 'react-refresh-typescript';

export function buildLoaders({mode}: BuildOptions): ModuleOptions['rules'] {
    const isDev = mode === 'development';

    const svgrLoader = {
        test: /\.svg$/i,
        loader: '@svgr/webpack',
        options: {
            icon: true,
            svgoConfig: {
                plugins: [
                    {
                        name: 'convertColors',
                        params: {
                            currentColor: true,
                        }
                    }
                ]
            }
        }
    };

    const assetLoader = {
        test: /\.(png|jpg|gif|jpeg)$/i,
        type: 'asset/resource'
    };

    const cssLoaderWithModules = {
        loader: 'css-loader',
        options: {
            modules: {
                localIdentName: isDev ? '[path][name]-[local]' : '[hash:base64:6]'
            }
        }
    };

    const cssLoader = {
        test: /\.css$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            cssLoaderWithModules
        ]
    };

    const tsLoader = {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
            getCustomTransformers: () => ({
                before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
            }),
            transpileOnly: isDev,
        }
    };

    return [
        svgrLoader,
        assetLoader,
        cssLoader,
        tsLoader
    ];
}