module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  "plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    // [
    //   require.resolve('babel-plugin-module-resolver'),
    //   {
    //     alias: {
    //       // '@components': './src/components',
    //     },
    //     // root: ['./src'],
    //   },
    // ],
  ]
};
