import { WebpackPluginInstance, ProgressPlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BuildOptions } from './types/config';

export function buildPlugins(options: BuildOptions): WebpackPluginInstance[] {
  return [
    new ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: options.paths.html,
    }),
  ];
}
