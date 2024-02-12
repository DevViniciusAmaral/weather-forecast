module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          envName: "ENVFILE",
          moduleName: "@env",
          path: ".env",
        },
      ],
      [
        "module-resolver",
        {
          root: ["."],
          alias: {
            "@styles": "./src/application/styles",
            "@components": "./src/application/components",
            "@screens": "./src/application/screens",
            "@infrastructure": "./src/infrastructure",
            "@stores": "./src/application/stores",
          },
        },
      ],
    ],
  };
};
