var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");

// run compileSass everytime files in that specific folder (parameter 1) changes
gulp.task('es6', function () {
  gulp.watch('./es6/*.es6', ['default']);
});

gulp.task("default", function () {
  return gulp.src("es6/*.es6")
      .pipe(sourcemaps.init())
      .pipe(babel())
      .pipe(concat("main.js"))
      .pipe(sourcemaps.write("."))
      .pipe(gulp.dest("dist"));
});