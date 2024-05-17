import path from 'path';
import type {Configuration} from 'webpack';
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";


const config: Configuration = {
  entry:  './src/App.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
  }
}

export default function(env,argv):Configuration{

  if (argv.mode === 'development') {

    config.devtool = 'eval-source-map';
    config.watch = true;
    config.mode = 'development';

  } else {

    config.mode = 'production';
    config.plugins = [
      new BundleAnalyzerPlugin()
    ];

  }


  return config;

}