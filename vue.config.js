module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/scss/colors.scss"; @import "@/scss/variables.scss";`
      }
    }
  }
};
