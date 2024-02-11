module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          alias: {
            "@styles": "./src/application/styles",
            "@components": "./src/application/components",
            "@screens": "./src/application/screens",
          },
        },
      ],
    ],
  };
};
