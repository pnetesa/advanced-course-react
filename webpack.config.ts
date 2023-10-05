import path from 'path';
import { Configuration } from 'webpack';
import { buildWebpackConfig } from './config/build/build-webpack-config';

// const mode = 'production';
const mode = 'development';

const config: Configuration = buildWebpackConfig({
  mode,
  paths: {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  },
  isDev: mode === 'development',
});

export default config;
