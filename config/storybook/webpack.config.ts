import { type Configuration, type RuleSetRule } from 'webpack';
import path from 'path';
import { buildCssLoader, buildSvgLoader } from '../build/build-loaders';

export default ({ config }: { config: Configuration; }): Configuration => {
  const srcPath = path.resolve(__dirname, '..', '..', 'src');
  config?.resolve?.modules?.push(srcPath);
  config?.resolve?.extensions?.push('ts', 'tsx');

  config?.module?.rules?.forEach((rule: RuleSetRule) => {
    const regExp = rule?.test as RegExp;
    if (regExp?.test('.svg')) {
      rule.exclude = /\.svg$/i;
    }
  });

  config?.module?.rules?.push(buildSvgLoader());
  config?.module?.rules?.push(buildCssLoader(true));
  return config;
};
