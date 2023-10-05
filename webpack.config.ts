import path from 'path';
import { Configuration } from 'webpack';
import { buildWebpackConfig } from './config/build/build-webpack-config';
import { BuildEnv } from './config/build/types/config';

export default (env: BuildEnv) => {
  const mode = env.mode || 'development';
  const isDev = mode === 'development';
  const PORT = env.port || 3000;

  const config: Configuration = buildWebpackConfig({
    mode,
    isDev,
    port: PORT,
    paths: {
      entry: path.resolve(__dirname, 'src', 'index.ts'),
      build: path.resolve(__dirname, 'build'),
      html: path.resolve(__dirname, 'public', 'index.html'),
    },
  });

  return config;
};
