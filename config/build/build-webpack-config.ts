import { BuildOptions } from './types/config';
import { Configuration } from 'webpack';
import { buildLoaders } from './build-loaders';
import { buildResolvers } from './build-resolvers';
import { buildPlugins } from './build-plugins';
import { buildDevServer } from './build-dev-server';

export function buildWebpackConfig(options: BuildOptions): Configuration {
  return {
    mode: options.mode,
    entry: options.paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: options.paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    devtool: options.isDev ? 'inline-source-map' : undefined,
    devServer: options.isDev ? buildDevServer(options) : undefined,
  };
}
