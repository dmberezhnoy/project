import webpack from 'webpack';

import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { IBuildOptions } from './types/config';

export function buildLoaders(buildOptions: IBuildOptions): webpack.RuleSetRule[] {
  const svgLoader = buildSvgLoader();
  const codeBabelLoader = buildBabelLoader({ ...buildOptions, isTsx: false });
  const tsxCodeBabelLoader = buildBabelLoader({ ...buildOptions, isTsx: true });

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const cssLoader = buildCssLoader(buildOptions.isDev);

  return [
    fileLoader,
    svgLoader,
    codeBabelLoader,
    tsxCodeBabelLoader,
    cssLoader,
  ];
}
