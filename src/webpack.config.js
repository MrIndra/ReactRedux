const MiniCssExtractPlugin = require("mini-css-extract-plugin");

export default [
    {
      plugins: [
        [new MiniCssExtractPlugin()]
      ],
      module: {
        rules: [
            {
            test: /\.s[ac]ss$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
          },
        ]
      }
    }
  ];