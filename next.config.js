const path = require("path");
const withSass = require("@zeit/next-sass");
module.exports = withSass({
  cssModules: true,
});
module.exports = {
  reactStrictMode: true,
  /* Aquí va la carpeta de los estilos */
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
