const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'client/public'),
    compress: true,
    port: 3000,
  },
  entry: path.resolve(__dirname, 'client/src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'client/public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [{ loader: 'ts-loader' }, { loader: 'eslint-loader' }],
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/i,
        use: ['file-loader'],
        include: path.join(__dirname, 'client/src/assets/')
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
};
