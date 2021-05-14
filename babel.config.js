module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          components: './src/components/',
          utils: './src/utils/',
          constants: './src/constants/',
          assets: './src/assets/',
          services: './src/services/',
          configs: './src/configs',
          i18n : './src/languages/',
          '@redux': './src/redux/',
        },
      },
    ],
  ],
};
