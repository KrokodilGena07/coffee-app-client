import {BuildOptions} from './types';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {ProgressPlugin, Configuration} from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

export function buildPlugins({paths, mode, analyzer}: BuildOptions): Configuration['plugins'] {
    const isDev = mode === 'development';

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({
            template: paths.public.html,
            favicon: paths.public.favicon
        }),
        new ForkTsCheckerWebpackPlugin()
    ];

    if (isDev) {
        plugins.push(new ProgressPlugin());
        plugins.push(new ReactRefreshWebpackPlugin());
    } else {
        plugins.push(
            new MiniCssExtractPlugin({
                chunkFilename: 'css/[name].[contenthash:8].css',
                filename: 'css/[name].[contenthash:8].css'
            })
        );
    }

    if (analyzer) {
        plugins.push(new BundleAnalyzerPlugin());
    }

    return plugins;
}