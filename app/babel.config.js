module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            api: './src/api',
            apollo: './src/apollo',
            assets: './src/assets',
            components: './src/components',
            context: './src/context',
            helpers: './src/helpers',
            navigators: './src/navigators',
            screens: './src/screens',
          },
        },
      ],
    ],
  };
};
