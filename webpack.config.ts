import path from 'path';
import { type Configuration } from 'webpack';
import { buildWebpackConfig } from './config/build/build-webpack-config';
import { type BuildEnv } from './config/build/types/config';

export default (env: BuildEnv): Configuration => {
  const mode = env.mode || 'development';
  const isDev = mode === 'development';
  const PORT = env.port || 3000;

  const config: Configuration = buildWebpackConfig({
    mode,
    isDev,
    port: PORT,
    paths: {
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      build: path.resolve(__dirname, 'build'),
      html: path.resolve(__dirname, 'public', 'index.html'),
      src: path.resolve(__dirname, 'src'),
    },
  });

  return config;
};
