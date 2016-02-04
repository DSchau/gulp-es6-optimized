module.exports = function(gulp, config) {
  return {
    src() {
      return gulp.src('src/**/*.js')
        .pipe(gulp.dest(config.outputDir));
    }
  };
};
