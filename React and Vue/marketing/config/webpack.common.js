module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/, //WhenEver We Import A File either ends with js or mjs we want to proccess by babel
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
};
