import path from 'path';
import webpack, { DefinePlugin, RuleSetRule } from 'webpack';

import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';
import { IBuildPaths } from '../build/types/config';

export default ({ config }: {config: webpack.Configuration}) => {
  const paths: IBuildPaths = {
    src: path.resolve(__dirname, '..', '..', 'src'),
    build: '',
    html: '',
    entry: '',
    locales: '',
    buildLocales: '',
  };
  config.resolve!.modules!.push(paths.src);
  config.resolve!.extensions!.push('.ts', '.tsx');
  config.resolve!.alias = {
    ...config.resolve!.alias,
    '@': paths.src,
  };

  // Для замены стандартного svg лоадера storybook
  // eslint-disable-next-line no-param-reassign
  const configRules = config.module!.rules as RuleSetRule[];
  config.module!.rules = configRules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });

  config.module!.rules.push(buildCssLoader(true));
  config.module!.rules.push(buildSvgLoader());
  config.plugins!.push(new DefinePlugin({
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify(''),
    __PROJECT__: JSON.stringify('storybook'),
  }));

  return config;
};
