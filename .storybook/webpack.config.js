module.exports = function({ config }) {
  config.module.rules.unshift(
    // {
    //   test: /\.mdx?$/,
    //   use: ["babel-loader", "@mdx-js/loader"]
    // },
    {
      test: /\.stories\.jsx?$/,
      loaders: [require.resolve("@storybook/source-loader")],
      enforce: "pre"
    }
  );

  return config;
};
