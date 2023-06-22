import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';
import { IBuildOptions } from '../types/config';

interface BuildBabelLoaderProps extends IBuildOptions {
    isTsx?: boolean;
}

export const buildBabelLoader = ({ isTsx }: BuildBabelLoaderProps) => ({
  test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
      plugins: [
        [
          '@babel/plugin-transform-typescript',
          { isTsx },
        ],
        '@babel/plugin-transform-runtime',
        isTsx && [
          babelRemovePropsPlugin,
          {
            props: ['data-testid'],
          },
        ],
      ].filter(Boolean),
    },
  },
});
