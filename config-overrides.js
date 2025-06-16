const { override, addWebpackModuleRule } = require('customize-cra');

module.exports = override(
  addWebpackModuleRule({
    test: /\.webp$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: 'static/media/[name].[hash].[ext]',
        },
      },
    ],
  })
); 