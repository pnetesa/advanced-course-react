import { BuildOptions } from './types/config';
import { Configuration } from 'webpack';
import { buildLoaders } from './build-loaders';
import { buildResolvers } from './build-resolvers';
import { buildPlugins } from './build-plugins';

export function buildWebpackConfig(options: BuildOptions): Configuration {
  return {
    mode: options.mode,
    entry: options.paths.entry,
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    output: {
      filename: '[name].[contenthash].js',
      path: options.paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
  };
}
